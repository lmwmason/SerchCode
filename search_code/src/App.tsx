import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import logo from './logo.svg'; 
import './App.css';

export default function App() {
  const [value, setValue] = useState<string>('');
  const [hash, setHash] = useState<string>(window.location.hash);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    const handleHashChange = () => {
      console.log(window.location.hash);
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="App">
      <div className="menu-container">
        <div className="menu-title">
          <a href="">I GOT YOUR CODE!</a>
        </div>
        <div className="menu-list">
        {[
          { label: "C", hash: "#C" },
          { label: "c++", hash: "#cpp" },
          { label: "Java", hash: "#Java" },
          { label: "Python", hash: "#Python" },
          { label: "C#", hash: "#CS" },
          { label: "Javascript", hash: "#Js" },
          { label: "Dart", hash: "#Dart" },
        ].map((item) => (
          <div
            key={item.hash}
            className={`menu-item ${hash === item.hash ? "active" : ""}`}
          >
            <a href={item.hash}>{item.label}</a>
          </div>
        ))}
      </div>

      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Search Algorithm You Want!</p>
        <input
          type="search"
          placeholder="Put name! ex)bubble sort"
          value={value}
          onChange={onChange}
        />
        {hash === '' && <div>Choose a language!</div>}
        {hash === '#C' && <div>{value} for C</div>}
        {hash === '#cpp' && <div>{value} for c++</div>}
        {hash === '#Java' && <div>{value} for java</div>}
        {hash === '#Python' && <div>{value} for python</div>}
        {hash === '#CS' && <div>{value} for c#</div>}
        {hash === '#Js' && <div>{value} for Javascript</div>}
        {hash === '#Dart' && <div>{value} for dart</div>}
      </header>
    </div>
  );
}
