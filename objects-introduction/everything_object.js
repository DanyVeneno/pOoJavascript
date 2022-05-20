// almost everything in Javascript is an object

console.log( typeof "hello world" )
console.log( typeof 100 )
console.log( typeof false )

console.log( typeof { } )
console.log( typeof [ ] )

console.log( typeof new Date() )
console.log( typeof new RegExp() )

// even primitive types has object wrappers
console.log( new Number(100) )
console.log( new String("hello world") )
console.log( new Boolean(true) )

