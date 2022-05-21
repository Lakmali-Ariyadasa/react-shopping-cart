import React from'react';
import './App.css';
import NameList from './components/NameList/NameList';
import HeaderBar from './components/HeaderBar/HeaderBar';



function App() {
  return (
    
      <div className="container-fluid">
      
        <HeaderBar />
        <NameList />
        
      </div>
   
  );
}

export default App;
