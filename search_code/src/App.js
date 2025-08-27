import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


export default function App() {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <div className="App">
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Search Code!
        </p>
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