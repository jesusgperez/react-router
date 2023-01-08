import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { ProfilePage } from './components/ProfilePage';
import { LoginPage } from './components/LoginPage';
import { LogoutPage } from './components/LogoutPage';
import { BlogPost } from './components/BlogPost';
import { AuthProvider, AuthRoute } from './components/auth';
import { Menu } from './components/Menu';

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/blog' element={<BlogPage/>}>
              <Route path=':slug' element={<BlogPost/>}/>
            </Route>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/logout' element={
              <AuthRoute>
                <LogoutPage/>
              </AuthRoute>
            }/>
            <Route path='/profile' element={
              <AuthRoute>
                <ProfilePage/>
              </AuthRoute>
            }/>
            <Route path='*' element={<h1>Not Found</h1>}/>
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
