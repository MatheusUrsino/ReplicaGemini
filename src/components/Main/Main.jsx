import React, { useContext } from "react";
import "./css/Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ?
          <>
            <div className="greet">
              <p>
                <span>Olá, Dev.</span>
              </p>
              <p>Como posso te ajudar hoje?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Sugestão incrivel de lugares para ter uma viagem na estrada
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Explorar conceitos de urbanização</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Praticar e ver exemplos de chuva de ideias</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Veja a instabilidade do código a seguir</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
         :<div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
              ?<div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
              :  <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
            </div>
          </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Insira seu texto aqui"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini pode trazer informações incorretas, verifique antes de
            utiliza-la
          </p>
          .
        </div>
      </div>
    </div>
  );
};

export default Main;
