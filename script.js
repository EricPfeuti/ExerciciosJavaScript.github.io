function verificarPrimo(){
    let numero=parseInt(document.getElementById("inteiro").value);
    let divisores=0;
    for(let i=1; i<=numero; i++){
        if(numero%i==0){
            divisores++;
        }
    }
    if(divisores==2){
        document.getElementById("resposta").innerHTML=
        `O número ${numero} é primo!!`
    }else{
        document.getElementById("resposta").innerHTML=
        `O número ${numero} não é primo!!`
    }
    
}

function verificarPerfeito(){
    let n=parseInt(document.getElementById("numero").value);
    let soma=0;
    let metade=n/2;
    let i=1;
        while(i<=metade){
            if(n%i == 0){
                soma=soma+i
            }
            i++;
        }
        if(soma==n){
            document.getElementById("resposta2").innerHTML=
            `O número ${n} é perfeito!!`
        } else{
            document.getElementById("resposta2").innerHTML=
            `O número ${n} não é perfeito!!`
        }

}

function verificarFatorPrimo(){
    let n1=parseInt(document.getElementById("primo").value);
    const fatores = [];
    let i=2;

    while (i<=n1) {
        if (n1%i === 0){
            fatores.push(i);
            n1 = n1/i;
            document.getElementById("resposta3").innerHTML =
            `Seu número contém como fatores primos: ${fatores}.`
        } else{
            i++;
        }
    }
    
}





    