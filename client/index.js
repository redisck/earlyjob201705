/**
 * 上下文是父组件向它的后代组件传值的一种方式
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import GrandFather from "./components/GrandFather";


ReactDOM.render(
  <GrandFather>

  </GrandFather>,document.querySelector('#root')
);
