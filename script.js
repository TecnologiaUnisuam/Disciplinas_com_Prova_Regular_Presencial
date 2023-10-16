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
    
    var linhaParImpar = document.querySelectorAll("table tr:not(.displayNone)");
    for (var i = 1; i < linhaParImpar.length; i++) {
        if (i % 2 === 0) {
            linhaParImpar[i].classList.add("par");
        } else {
            linhaParImpar[i].classList.add("impar");
        }
    }
}

function voltar(){
    document.location.reload(true);

    var linhaParImpar = document.querySelectorAll("table tr:not(.displayNone)");
    for (var i = 1; i < linhaParImpar.length; i++) {
        if (i % 2 === 0) {
            linhaParImpar[i].classList.add("par");
        } else {
            linhaParImpar[i].classList.add("impar");
        }
    }

}

var linhaParImpar = document.querySelectorAll("table tr:not(.displayNone)");
for (var i = 1; i < linhaParImpar.length; i++) {
    if (i % 2 === 0) {
        linhaParImpar[i].classList.add("par");
    } else {
        linhaParImpar[i].classList.add("impar");
    }
}





  // Adicione um evento de escuta para o campo de pesquisa "procurar1"
  const inputProcurar1 = document.getElementById('procurar1');
  inputProcurar1.addEventListener('input', function() {
    const valorProcurado = inputProcurar1.value.toUpperCase();
    const tabela = document.querySelector('table');
    const linhas = tabela.getElementsByTagName('tr');

    for (let i = 2; i < linhas.length; i++) { // Comece em 1 para pular a primeira linha de cabeçalho
      const celulas = linhas[i].getElementsByTagName('td');
      const celulaCodigo = celulas[0]; // Coluna

      if (celulaCodigo) {
        const texto = celulaCodigo.textContent || celulaCodigo.innerText;
        if (texto.toUpperCase().includes(valorProcurado)) {
          linhas[i].classList.remove("displayNone");
        } else {
          linhas[i].classList.add("displayNone");
        }
      }
    }

    // Defina o estilo de fundo para linhas pares como preto
    var linhaParImpar = document.querySelectorAll("table tr:not(.displayNone)");
    for (var i = 1; i < linhaParImpar.length; i++) {
        if (i % 2 === 0) {
            linhaParImpar[i].classList.add("par");
            linhaParImpar[i].classList.remove("impar");
        } else {
            linhaParImpar[i].classList.add("impar");
            linhaParImpar[i].classList.remove("par");
        }
    }
  });

  const inputProcurar2 = document.getElementById('procurar2');
  inputProcurar2.addEventListener('input', function() {
    const valorProcurado = inputProcurar2.value.toUpperCase();
    const tabela = document.querySelector('table');
    const linhas = tabela.getElementsByTagName('tr');

    for (let i = 2; i < linhas.length; i++) { // Comece em 1 para pular a primeira linha de cabeçalho
      const celulas = linhas[i].getElementsByTagName('td');
      const celulaCodigo = celulas[1]; // Coluna

      if (celulaCodigo) {
        const texto = celulaCodigo.textContent || celulaCodigo.innerText;
        if (texto.toUpperCase().includes(valorProcurado)) {
          linhas[i].classList.remove("displayNone");
        } else {
          linhas[i].classList.add("displayNone");
        }
      }
    }

    // Defina o estilo de fundo para linhas pares como preto
    var linhaParImpar = document.querySelectorAll("table tr:not(.displayNone)");
    for (var i = 1; i < linhaParImpar.length; i++) {
        if (i % 2 === 0) {
            linhaParImpar[i].classList.add("par");
            linhaParImpar[i].classList.remove("impar");
        } else {
            linhaParImpar[i].classList.add("impar");
            linhaParImpar[i].classList.remove("par");
        }
    }
  });

  const inputProcurar3 = document.getElementById('procurar3');
  inputProcurar3.addEventListener('input', function() {
    const valorProcurado = inputProcurar3.value.toUpperCase();
    const tabela = document.querySelector('table');
    const linhas = tabela.getElementsByTagName('tr');

    for (let i = 2; i < linhas.length; i++) { // Comece em 1 para pular a primeira linha de cabeçalho
      const celulas = linhas[i].getElementsByTagName('td');
      const celulaCodigo = celulas[2]; // Coluna

      if (celulaCodigo) {
        const texto = celulaCodigo.textContent || celulaCodigo.innerText;
        if (texto.toUpperCase().includes(valorProcurado)) {
          linhas[i].classList.remove("displayNone");
        } else {
          linhas[i].classList.add("displayNone");
        }
      }
    }

    // Defina o estilo de fundo para linhas pares como preto
    var linhaParImpar = document.querySelectorAll("table tr:not(.displayNone)");
    for (var i = 1; i < linhaParImpar.length; i++) {
        if (i % 2 === 0) {
            linhaParImpar[i].classList.add("par");
            linhaParImpar[i].classList.remove("impar");
        } else {
            linhaParImpar[i].classList.add("impar");
            linhaParImpar[i].classList.remove("par");
        }
    }
  });

  const inputProcurar4 = document.getElementById('procurar4');
  inputProcurar4.addEventListener('input', function() {
    const valorProcurado = inputProcurar4.value.toUpperCase();
    const tabela = document.querySelector('table');
    const linhas = tabela.getElementsByTagName('tr');

    for (let i = 2; i < linhas.length; i++) { // Comece em 1 para pular a primeira linha de cabeçalho
      const celulas = linhas[i].getElementsByTagName('td');
      const celulaCodigo = celulas[3]; // Coluna

      if (celulaCodigo) {
        const texto = celulaCodigo.textContent || celulaCodigo.innerText;
        if (texto.toUpperCase().includes(valorProcurado)) {
          linhas[i].classList.remove("displayNone");
        } else {
          linhas[i].classList.add("displayNone");
        }
      }
    }

    // Defina o estilo de fundo para linhas pares como preto
    var linhaParImpar = document.querySelectorAll("table tr:not(.displayNone)");
    for (var i = 1; i < linhaParImpar.length; i++) {
        if (i % 2 === 0) {
            linhaParImpar[i].classList.add("par");
            linhaParImpar[i].classList.remove("impar");
        } else {
            linhaParImpar[i].classList.add("impar");
            linhaParImpar[i].classList.remove("par");
        }
    }
  });


  