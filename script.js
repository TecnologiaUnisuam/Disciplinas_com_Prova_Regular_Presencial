function buscar() {
    var matricula = document.getElementById('matricula').value;
    var matriculas = document.getElementsByClassName('AL'+ matricula + ' displayNone');

    
    if(matricula == "") {
        window.alert("O Campo de matrícula está vazio! \n\nFavor inserir sua matrícula para consultar.");
    }
    else if( matricula.length != 8){
        window.alert("Verifique a matricula! \n\nA quantidade de caracteres para matrícula está incorreto.\n Exemplo:\n  \t12345678");
    }
    else if( matriculas.length < 1 ){
        window.alert("A matrícula inserida não foi encontrada! \n\nFavor pesquisar novamente mais tarde e caso queira entre em contato com o setor de atendimento ao aluno no e-mail:\nsuporteonline@unisuam.edu.br");
    }
    
    var validacoes = document.getElementById('validacoes');
    var disciplinas = document.getElementById('disciplinas');
    var tabelaAL = document.getElementById('tabelaAL');
    var semProva = document.getElementById('CU'+ matricula).innerHTML;
    var informacaoAlunoSemProva = document.getElementById('informacaoAlunoSemProva');
    var divVoltar = document.getElementById('divVoltar');
    var curso = document.getElementById('CU'+ matricula).className.replace('descricaoCodigo ','');
    var i;

    if( matriculas.length >= 1 && semProva == ""){

        validacoes.classList.add('displayNone');
        disciplinas.classList.remove('displayNone');
        informacaoAlunoSemProva.classList.remove('displayNone');
        divVoltar.classList.remove('displayNone');

        for (i=0; i< document.getElementsByClassName('AL'+ matricula).length; i++)
        document.getElementsByClassName('AL'+ matricula)[i].classList.remove('displayNone');

        for (i=0; i< document.getElementsByClassName(curso).length; i++)
        document.getElementsByClassName(curso)[i].classList.remove('displayNone');        
    }
    else if( matriculas.length >= 1 ){

        validacoes.classList.add('displayNone');
        disciplinas.classList.remove('displayNone');
        tabelaAL.classList.remove('displayNone');
        divVoltar.classList.remove('displayNone');

        for (i=0; i< document.getElementsByClassName('AL'+ matricula).length; i++)
        document.getElementsByClassName('AL'+ matricula)[i].classList.remove('displayNone');

        for (i=0; i< document.getElementsByClassName(curso).length; i++)
        document.getElementsByClassName(curso)[i].classList.remove('displayNone');
    }


    window.scrollTo(0, 9999);
}

function voltar(){
    document.location.reload(true);
}

