import { useState } from 'react';
import type { ChangeEvent } from 'react';
import logo from './logo.svg'; 
import './App.css';

export default function App() {
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <div className="menu-container">
        <div className="menu-title">
          <a href="#Home">Search Code!</a>
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <a href="#C">C</a>
          </div>
          <div className="menu-item">
            <a href="#cpp">c++</a>
          </div>
          <div className="menu-item">
            <a href="#Java">Java</a>
          </div>
          <div className="menu-item">
            <a href="#Python">Python</a>
          </div>
          <div className="menu-item">
            <a href="#CS">C#</a>
          </div>
          <div className="menu-item">
            <a href="#Js">Javascript</a>
          </div>
          <div className="menu-item">
            <a href="#Dart">Dart</a>
          </div>
        </div>
      </div>
      <header className="App-header">
        {/*
          "App-logo" 클래스를 CSS에 정의하여
          SVG 파일에 애니메이션을 적용합니다.
        */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>Search Code!</p>
        <input
          type="search"
          placeholder="검색어를 입력하세요!"
          value={value}
          onChange={onChange}
        />
      </header>
    </div>
  );
}
