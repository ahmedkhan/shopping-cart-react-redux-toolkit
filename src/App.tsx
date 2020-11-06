import React from 'react';
import {Basket} from '../src/components/Basket'; 
import { Provider } from "react-redux";
import { store } from "./store";
import { Container, Box } from "@material-ui/core";
import { Product } from './components/Product';

function App() {
  return (
   <Provider store={store}>
    <Container maxWidth="md">     
      <Box mt={5} mb={5}>
        <Product />
      </Box>
      <Box mt={5} mb={5}>
        <Basket />
      </Box>
    </Container>
   </Provider>  
  );
}

export default App;
