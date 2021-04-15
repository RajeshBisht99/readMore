
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './app';
import {createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./Reducer";
import Content from './readMore';


  // jsx expression in react
//ctrl +d, shift+alt+mouse
const state = createStore(Reducer);
                  

ReactDOM.render(  
<>
  {/* <Provider store={state} >
   <App/>
  </Provider> */}
  <Content></Content>
</>,
  
  document.getElementById('root'));
  // jsX javascript extension