import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

import { useState } from 'react';

import Bulb from './components/Bulb';
import Counter from './components/Counter';

import Register from './components/Register';

import HookExam from './components/HookExam';


// App Component
function App() {

  const buttonProps = {
    text: "메일2",
    color: "blue",
    a: 1,
    b: 2,
  }
  
  return (
    <>
    <div>
      <Button text={ "메일" } color={ "red" } a={ 1 } b={ 2 } />
      <Button {...buttonProps} />
      <Button text={ "카페" } color={ "green" } />
      <Button text={ "블로그" } />
      <Button text={ "뉴스" }>
        <Header />
      </Button>
    </div>

    <Counter />
    <Bulb />

    <h2>회원가입 폼</h2>
    <Register />

    <h2>HOOK</h2>
    <HookExam />
    
    </>
  );
}

export default App;
