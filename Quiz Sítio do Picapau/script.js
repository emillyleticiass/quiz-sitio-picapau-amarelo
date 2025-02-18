const perguntas = [
    {
      pergunta: "Quem é a boneca que mora no Sítio do Picapau Amarelo?",
      respostas: [
        "Emília",
        "Narizinho",
        "Pedrinho",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do menino que vive aventuras no Sítio?",
      respostas: [
        "Tio Barnabé",
        "Visconde de Sabugosa",
        "Pedrinho",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o porco falante que mora no Sítio?",
      respostas: [
        "Visconde de Sabugosa",
        "Rabicó",
        "Tia Anastácia",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome da avó de Narizinho?",
      respostas: [
        "Dona Benta",
        "Tia Anastácia",
        "Cuca",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o boneco de milho que vive no Sítio?",
      respostas: [
        "Tio Barnabé",
        "Tia Anastácia",
        "Visconde de Sabugosa",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o amigo travesso que tem uma perna só?",
      respostas: [
        "Narizinho",
        "Saci",
        "Emília",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é a bruxa que adora fazer poções mágicas?",
      respostas: [
        "Cuca",
        "Dona Benta",
        "Rabicó",
      ],
      correta: 0
    },

  ];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('#quiz-template');
let perguntaAtual = 0;
const botaoProximaPergunta = document.getElementById('proxima-pergunta');

function mostrarPergunta(perguntaIndex) {
    const perguntasAnteriores = document.querySelectorAll('.pergunta');
    perguntasAnteriores.forEach(item=>item.remove());

    const item = perguntas[perguntaIndex];
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    const dl = quizItem.querySelector('dl');

    for (let i=0; i < item.respostas.length; i++) {
        const dt = document.createElement('dt');
        const input = document.createElement('input');
        const label = document.createElement('label');

        input.type = 'radio';
        input.name = 'resposta';
        input.value = i;
        input.id = `resposta-${i}`;

        label.htmlFor = `resposta-${i}`;
        label.textContent = item.respostas[i];

        dt.appendChild(input);
        dt.appendChild(label);

        dl.appendChild(dt);
        
    }

    quiz.appendChild(quizItem);

    const inputs = dl.querySelectorAll('input[name="resposta"]');
    inputs.forEach(input => {
        input.addEventListener('click', verificarResposta);
    });
}
    /*if (perguntaIndex === perguntas.length - 1) {
      botaoProximaPergunta.style.display = 'none';
  } else {
      botaoProximaPergunta.style.display = 'none';
  }
}*/


function avancarParaProximaPergunta() {
    ocultarComemoracao();
    /*botaoProximaPergunta.style.display = 'none';*/
    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta(perguntaAtual);
        const botaoVerificarResposta = document.getElementById('verificar-resposta');
        botaoVerificarResposta.style.display = 'block'; // Mostra o botão de verificar resposta
    }
}

// Mostrar a primeira pergunta inicialmente
mostrarPergunta(perguntaAtual);

/*Botão verificar resposta*/
document.getElementById('verificar-resposta').addEventListener('click', verificarResposta);
/*Botão próxima pergunta*/
/*document.getElementById('proxima-pergunta').addEventListener('click', () => {
  perguntaAtual++;
  if(perguntaAtual < perguntas.length){
    mostrarPergunta(perguntaAtual);
  }else{
    mostrarFim();
  }
});*/


function mostrarComemoracao() {
    const mensagemComemoracao = document.getElementById('mensagem-comemoracao');
    mensagemComemoracao.style.display = 'block';

    setTimeout(() => {
      avancarParaProximaPergunta(); // Avança para a próxima pergunta após um certo tempo
      ocultarBotaoProximaPergunta();
      if(perguntaAtual === perguntas.length - 1){
        mostrarFim();
      }
  }, 2000); // Tempo em milissegundos (2000 ms = 2 segundos)

    /*const botaoVerificarResposta = document.getElementById('verificar-resposta');
    botaoVerificarResposta.style.display = 'none'; // Oculta o botão de verificar resposta

    botaoProximaPergunta.style.display = 'block';

    if (perguntaAtual === perguntas.length - 1) {
      setTimeout(mostrarFim, 2000); // Mostra a mensagem de fim após 2 segundos (2000 milissegundos)
    }*/
}

function ocultarBotaoProximaPergunta(){
  botaoProximaPergunta.style.display = 'none';
}

function verificarResposta() {
  console.log('Verificando resposta...');
    const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
    if (respostaSelecionada) {
        const perguntaAtualLocal = perguntas[perguntaAtual];
        console.log('perguntaAtualLocal:', perguntaAtualLocal);
        const respostaCorreta = perguntaAtualLocal.correta;
        console.log('respostaCorreta:', respostaCorreta);
        if (parseInt(respostaSelecionada.value) === respostaCorreta) {
        mostrarComemoracao();
        /*if(perguntaAtual === perguntas.length - 1){
          return;
        }
        botaoProximaPergunta.style.display = 'block';*/
      }
    }
  }

function mostrarFim(){
  ocultarElementosDoQuiz();
  const mensagemFim = document.getElementById('mensagem-fim');
  mensagemFim.style.display = 'block';
  exibirConfetes();
}

function ocultarComemoracao() {
    const mensagemComemoracao = document.getElementById('mensagem-comemoracao');
    mensagemComemoracao.style.display = 'none';    

}

function ocultarElementosDoQuiz() {
  const tituloQuiz = document.querySelector('h1'); // Seleciona o título do quiz
  tituloQuiz.style.display = 'none'; // Oculta o título

  /*const botaoVerificarResposta = document.getElementById('verificar-resposta'); // Seleciona o botão de verificar resposta
  botaoVerificarResposta.style.display = 'none';*/ // Oculta o botão de verificar resposta

  const mensagemComemoracao = document.getElementById('mensagem-comemoracao'); // Seleciona a mensagem de comemoração
  mensagemComemoracao.style.display = 'none'; // Oculta a mensagem de comemoração

  quiz.style.display = 'none'; // Oculta o elemento principal do quiz
  /*botaoProximaPergunta.style.display = 'none';*/ // Oculta o botão de próxima pergunta
  const perguntasAnteriores = document.querySelectorAll('.pergunta');
  perguntasAnteriores.forEach(item => item.remove()); // Remove todas as perguntas anteriores

}

function playAudio(){
  let x = document.getElementById("audio_abertura");
  x.play();

  // Adiciona um evento 'ended' para repetir o áudio
  x.addEventListener('ended', function() {
    x.currentTime = 0; // Reinicia o áudio para o início
    x.play(); // Toca o áudio novamente
  });
}

function pauseAudio(){
  let x = document.getElementById("audio_abertura");
  x.pause();
}



