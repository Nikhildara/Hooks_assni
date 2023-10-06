import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import searchContext from './Context/searchContext'
import './App.css';
import FirstPage from './components/FirstPage'
import { useState } from 'react';


const App=()=> {
  const [searchInput,setInput]=useState('')
  
  const searchFun=(searchInput)=>{
    setInput(searchInput)
  }
  
   
  return (
    <BrowserRouter>
      <div className="App-container">
        <searchContext.Provider value={{searchData:searchInput,searchFun:searchFun}}>
          <Header />
            <Routes>
              <Route exact path='/' element={<FirstPage/>}/>
              <Route exact path='/:id' element={<Body />}/>
            </Routes>
          <Footer/>
        </searchContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
