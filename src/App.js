import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from './context/contextApi';
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import Feed from "./components/Feed"
import SeachResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";


const App = () => {
  return (

    <AppContext>
        <BrowserRouter>
            <div className='flex flex-col h-full'>
                <Header/>
                <Routes>
                    <Route path = "/" element = {<Feed />}/>
                    <Route path = "/searchResult/:searchQuery" element = {<SeachResult />}/>
                    <Route path = "/video/:id" element = {<VideoDetails />}/>
                </Routes>
            </div>
        </BrowserRouter>
        
    </AppContext>
  )
}

export default App;