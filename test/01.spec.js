import { parse, SyntaxError } from '../dist/json-emitter-parser'

const str = `{"a":[1,2,3], "b": (file, "xablau"), "c": (merge, 123, 456, 79) }`
console.log('json:', str)
const json = parse(str)
console.log('=>', json)

// evaluete use: printf('main text $1', xabla);
