const parse = x=>x

const findvar = /(.*?(.?))\$(\d+)|.+/gm

const getParams = pool => varNumber => (varNumber -1 >= 0 || varNumber -1< pool.length)
  ? pool[varNumber -1]
  : ''

const appendVars = (text, getParams) => {
  findvar.lastIndex = 0
  const result = []
  let param, match
  while (match = findvar.exec(text)) {
    const [after, before, backslash, varNumber] = match
    result.push(
      before
        ? before +(backslash !== '\\' && (param = getParams(varNumber))
          ? param
          : '$' +varNumber)
        : after
    )
  }
  return result.join('')
}

export const evaluete = (...args) => {
  const [ base, ...params] = args
  return parse(
    params.length
      ? appendVars(
        base,
        getParams(params))
      : base)
}
