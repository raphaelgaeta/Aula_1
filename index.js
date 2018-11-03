test = {
    nome:"Raphael Gaeta",
    curso: "Engenharia",
    idade: 22

}
console.log(aluno.nome)

function PrintName(object){ 
    if(object.nome){
        console.log(object.nome);
    }else{
        console.log("esse objeto não tem nome");
    }

}
PrintName(aluno);