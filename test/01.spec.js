// import { file, merge } from '../dist/modules'
import { parse, SyntaxError } from '../dist/json-emitter-parser'

// console.log(file, merge)
const str = `{"a":[1,2,3], "b": (file, "xablau") }`
const json = parse(str)
console.log(str, '=>', json)

// evaluete use:
// printf('main text $1', xabla);
