let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero) // dentro = 2 fora = 1

// The let keyword has a block scope, so the variable declared with let inside the block is only visible inside the block.