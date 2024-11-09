import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from "./packages/lite-router";
import {useNavigate} from "./packages/lite-router/hooks";

/**
 * 특정 라우트에 컴포넌트를 어떻게 적용할 수 있을까?
 * @constructor
 */
function App() {


const navigate = useNavigate()

  return (
      <div className="App">
        <button onClick={() => navigate("/foo") }>
            Foo
        </button>

      </div>
  );
}

export default App;
