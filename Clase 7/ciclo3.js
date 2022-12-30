function noParesDeContarImparesHasta(numero) {
    let conteoImpar = 0;
       for (let i = 0; i <= numero; i++ ){ 
           if (i%2==1){conteoImpar = conteoImpar + 1;
    
       }
    }
    return conteoImpar} 
    console.log(noParesDeContarImparesHasta(15))