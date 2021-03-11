import React from 'react';
import Header from './Layout/Header'
import Body from './Layout/Body';
import IdProvider from './Context';




export default function App() {
  
  return (
    <IdProvider>
      <div>
        <Header />
        <Body />
      </div>
    </IdProvider>
  );
}
