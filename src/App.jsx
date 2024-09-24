import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import SingleGenreHomePage from './components/SingleGenreHomePage';
import ContentDetail from './components/ContentDetail';
import ProfileInfo from './components/ProfileInfo';
import MovieCollections from './components/MovieCollections';
import ShowCollections from './components/ShowCollections';
import SearchFeed from './components/SearchFeed';
import Watchlist from './components/Watchlist';
import UserInfoContextProvider from './components/context/UserInfoContextProvider';
import './App.css'


function App() {
  return (
    <UserInfoContextProvider>
      <BrowserRouter>
        <div className='h-auto '>         
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/search/:searchText' element={<SearchFeed />} />
            <Route path='/home/:genreId' element={<SingleGenreHomePage />} />
            <Route path='/:contentType/:contentId' element={<ContentDetail />} />
            <Route path='/movies' element={<MovieCollections />} />
            <Route path='/shows' element={<ShowCollections />} />
            <Route path='/watchlist' element={<Watchlist />} />
            <Route path='/profile' element={<ProfileInfo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserInfoContextProvider>
  );
}



export default App;
