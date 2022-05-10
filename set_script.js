const meuArray = [13, 34, 76, 31, 95, 54];

function valoresUnicos(arr){
    const mySet = new Set (arr);

    return [...mySet];

}

console.log(valoresUnicos(meuArray));

