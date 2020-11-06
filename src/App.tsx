import React from 'react';
import {Basket} from '../src/components/Basket'; 
import { Provider } from "react-redux";
import { store } from "./store";
import './App.css';
import { Product } from './components/Product';

function App() {
  return (
   <Provider store={store}> 
    
     <Basket/> 
     <Product/>     
     
   </Provider> 
  );
}

export default App;
