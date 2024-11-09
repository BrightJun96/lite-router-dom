import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from "./packages/lite-router";

/**
 * 특정 라우트에 컴포넌트를 어떻게 적용할 수 있을까?
 * @constructor
 */
function App() {




  return (
      <div className="App">
        <button onClick={() => window.history.pushState({page: 2}, "", "bab")}>
          Go to Page 2
        </button>
        <button onClick={() => window.history.pushState({page: 3}, "", "hab")}>
          Go to Page 3
        </button>
      </div>
  );
}

export default App;
