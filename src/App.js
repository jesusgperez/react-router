import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { ProfilePage } from './components/ProfilePage';
import { Menu } from './components/Menu';

function App() {
  return (
    <>
      <HashRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
