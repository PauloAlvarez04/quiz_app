import { useEffect, useState } from "react";
import React from "react";
import preguntas from "./preguntas/preguntas";
import { get } from "./preguntas/fetch";
import "./jogo.css";
import { hover } from "@testing-library/user-event/dist/hover";
import { isElement } from "react-dom/test-utils";

function Jogo() {
  const [jogo1, setJogo1] = useState([]);
  const [jogo2, setJogo2] = useState([]);
  const [jogo3, setJogo3] = useState([]);
  const [jogo4, setJogo4] = useState([]);
  const [jogo5, setJogo5] = useState([]);
  const [jogo6, setJogo6] = useState([]);
  const [jogo7, setJogo7] = useState([]);
  const [jogo8, setJogo8] = useState([]);
  const [jogo9, setJogo9] = useState([]);
  const [jogo10, setJogo10] = useState([]);
  const [dica, setDica] = useState(false);
  const [fim, setFim] = useState(false);
  const [falhou, setFalhou] = useState(false);
  const [jogoAtivo, setJogoAtivo] = useState([]);
  const [respostaSelecionada, setRespostaSelecionada] = useState([]);
  // const [puntuacao, setPuntuacao] = useState(0);
  const validacoes = (elemento) => {
    
    let proximoJogo;

    switch (jogoAtivo.nivel) {
      case 1:
        proximoJogo = jogo2;

        break;
      case 2:
        proximoJogo = jogo3;

        break;
      case 3:
        proximoJogo = jogo4;

        break;
      case 4:
        proximoJogo = jogo5;

        break;
      case 5:
        proximoJogo = jogo6;

        break;
      case 6:
        proximoJogo = jogo7;

        break;
      case 7:
        proximoJogo = jogo8;
         break;
         case 8:
        proximoJogo = jogo9;
         break;
      
         case 9:
        proximoJogo = jogo10;
         break;
      
      
    }
    if(jogoAtivo.nivel == 10){
      // debugger
      if(elemento == jogoAtivo.respostaCorreta){
        setFim(true)
      }else{
        setFalhou(true)
      }
    }

    if (elemento == jogoAtivo.respostaCorreta) {
      console.log("acertou");
      setJogoAtivo(proximoJogo);
      setFalhou(false);
    } else {
      setFalhou(true);
    }
  };

  useEffect(() => {
    get("/preguntas").then((response) => {
      let pergResp1 = response.data.filter((x) => x.nivel == 1);
      let pergResp2 = response.data.filter((x) => x.nivel == 2);
      let pergResp3 = response.data.filter((x) => x.nivel == 3);
      let pergResp4 = response.data.filter((x) => x.nivel == 4);
      let pergResp5 = response.data.filter((x) => x.nivel == 5);
      let pergResp6 = response.data.filter((x) => x.nivel == 6);
      let pergResp7 = response.data.filter((x) => x.nivel == 7);
      let pergResp8 = response.data.filter((x) => x.nivel == 8);
      let pergResp9 = response.data.filter((x) => x.nivel == 9);
      let pergResp10 = response.data.filter((x) => x.nivel == 10);
      // let fim = response.data.filter((x) => x.nome == 'fim');

      setJogoAtivo(pergResp1[Math.floor(Math.random() * pergResp1.length)]);
      setJogo1(pergResp1[Math.floor(Math.random() * pergResp1.length)]);
      setJogo2(pergResp2[Math.floor(Math.random() * pergResp2.length)]);
      setJogo3(pergResp3[Math.floor(Math.random() * pergResp3.length)]);
      setJogo4(pergResp4[Math.floor(Math.random() * pergResp4.length)]);
      setJogo5(pergResp5[Math.floor(Math.random() * pergResp5.length)]);
      setJogo6(pergResp6[Math.floor(Math.random() * pergResp6.length)]);
      setJogo7(pergResp7[Math.floor(Math.random() * pergResp7.length)]);
      setJogo8(pergResp8[Math.floor(Math.random() * pergResp8.length)]);
      setJogo9(pergResp9[Math.floor(Math.random() * pergResp9.length)]);
      setJogo10(pergResp10[Math.floor(Math.random() * pergResp10.length)]);

      console.log(
        "joguinho",
        pergResp1[Math.floor(Math.random() * pergResp1.length)]
      );
      // debugger
    });
  }, []);

  //   const checkresp= (respostas)=>{
  //     var
  //     if(){

  //     }

  //   }
  if (fim == true) {
    return (
      <div className="fimcont">
        <div className="fimbox">
          <h1>Parabens por completar o meu quiz 🎉</h1>
          <h1>Pontuação: 100</h1>
          <img src="https://i.pinimg.com/474x/e2/5f/f2/e25ff237663f4c0e1a03faa1e7bfc2c2--silly-faces-happy-faces.jpg"></img>
          <button
            style={{
              marginTop: "20px",
              height: "40px",
              width: "40%",
              fontSize: "30px",
              borderRadius: "20px",
            }}
            onClick={() => window.location.reload()}
          >
            Começar outra vez
          </button>
          <h2>Pagina Feita por Paulo Alvarez :)</h2>
        </div>
      </div>
    );
  }
  if (falhou == true) {
    return (
      <div className="falhoucont">
        <div className="falhoubox">
          <h1>Errou😔, vai jogar um bocadinho na consola e depois volta</h1>
          <h1>Pontuação: {jogoAtivo.puntuacao}</h1>
          <img src="https://thumbs.gfycat.com/ImperfectNegativeIbis-max-1mb.gif"></img>
          <button
            style={{
              marginTop: "20px",
              height: "40px",
              width: "40%",
              fontSize: "30px",
              borderRadius: "20px",
            }}
            onClick={() => window.location.reload()}
          >
            Começar outra vez
          </button>
          <h2>Pagina Feita por Paulo Alvarez :)</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="tabelajogo">
        <div className="boxpreg">
          {jogoAtivo && (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <h1>
                  Nivel {jogoAtivo.nivel}: {jogoAtivo.nome}
                </h1>
                <h1>Pontuação: {jogoAtivo.puntuacao } </h1>
              </div>

              <h1 style={{ color: "white" }}>{jogoAtivo.pergunta}</h1>

              <div className="respostasbox">
                {jogoAtivo?.respostas?.map((elemento) => {
                  return (
                    <button
                      style={{
                        marginBottom: "10px",
                        height: "35px",
                        fontSize: "20px",
                        borderRadius: "15px",
                        backgroundColor:
                          elemento == respostaSelecionada ? "grey" : "",
                      }}
                      onClick={() => {
                        setTimeout(() => {
                          validacoes(elemento);
                        }, "500");
                        setRespostaSelecionada(elemento);
                      }}
                    >
                      {elemento}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Jogo;
