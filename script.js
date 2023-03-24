function buscar() {
    var matricula = document.getElementById('matricula').value;
    var validacoes = document.getElementById('validacoes');
    var disciplinas = document.getElementById('disciplinas');

    
    if(matricula =="") {
        window.alert("MATRICULA NÃO ENCONTRADA! \n\nVerifique se a matrícula inserida está correta.");
    }
    else{    
        var i;
        var matriculaAtiva = document.getElementById('AL'+ matricula).className.replace('AL','').replace(' displayNone','');
        var curso = document.getElementById('CU'+ matricula).className.replace('descricaoCodigo ','');
        
        if( matricula == matriculaAtiva ){
            validacoes.classList.add('displayNone');
            disciplinas.classList.remove('displayNone');

                for (i=0; i< document.getElementsByClassName('AL'+ matricula).length; i++)
            document.getElementsByClassName('AL'+ matricula)[i].classList.remove('displayNone');
                for (i=0; i< document.getElementsByClassName(curso).length; i++)
            document.getElementsByClassName(curso)[i].classList.remove('displayNone');
        }
    }


    window.scrollTo(0, 9999);
}

