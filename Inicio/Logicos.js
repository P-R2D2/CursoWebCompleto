function compras(trabalho1, tarbalho2){
    const comprarSorvete = trabalho1 || tarbalho2
    const comprarTv50 = trabalho1 && tarbalho2
    const comprarTv32 = trabalho1 != tarbalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50,comprarTv32,manterSaudavel }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))