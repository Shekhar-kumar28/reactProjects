import React, { useState } from 'react';
import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImageLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';

function App() {
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming ?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use an API ?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum ab nam autem voluptatum reiciendis?
              Amet explicabo nulla quis facilis asperiores cumque iusto delectus libero ducimus, facere veniam tempore totam?
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImageLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum ab nam autem voluptatum reiciendis?
              Amet explicabo nulla quis facilis asperiores cumque iusto delectus libero ducimus, facere veniam tempore totam?
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <form onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Send a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="send">
                <img src={sendBtn} alt="send" />
              </button>
            </form>
          </div>
          <p>ChatGPT may produce inappropriate</p>
        </div>
      </div>
    </div>
  );
}

export default App;
