// Parâmetros de função



                 //2       //2
function soma (numero1, numero2) {
    return numero1 + numero2;
}

console.log (soma(2,2));

console.log (soma(245,20));
console.log (soma(-500,60));
console.log (soma(52,200));

// parâmetro  X argumento 

// ordem dos parâmetro
function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

console.log (nomeIdade("Bruno", 40))   //---> sempre passar na ordem certa

function multiplica (numero1 = 1, numero2 = 1) {
    return numero1 * numero2
}
                            //9      X    //3   = 54 resultado que se espera
console.log(multiplica(soma(4, 5), soma(3, 3)));

console.log(multiplica(soma(4, 5)));