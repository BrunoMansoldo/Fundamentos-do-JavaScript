// 1 - antes

function apresentar(nome) {
    return `Meu nome é ${nome}`
}

// 2 - Arrow function (agora) 
const apresentarArrwow = nome => `Meu nome é ${nome}`
              //2 ou mais paremetro uso parentese 
const soma = (num1 , num2) => num1 +num2;


// 3 - Arrow functio com mais de uma linha de instrução 

const somaNumerospequenos = (num1 , num2) => {
    if (num1 || num2 > 10) {
        return "somente número de 1 a 9"
    } else {
        return num1 + num2;
    }
}

//operador maior ou igual que ---- nao confundir com arrow function
//          >=                                  =>


// Hoisting: arrow function se comporta como expressão
