
import { Box } from '@mui/material';
import './App.css';
import Home from './components/home/Home';
import Header from './components/home/Header';
import Hero from './components/categories/hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Body from './components/categories/category/Body';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop: '65px'}}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/body' element={<Body/>} />
        
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
