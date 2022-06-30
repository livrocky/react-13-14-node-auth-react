import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import PostsPage from './pages/PostsPage';
import RegisterPage from './pages/RegisterPage';
import { useAuthCtx } from './store/AuthContext';

function App() {
  // const { isUserLoggedIn } = useAuthCtx();
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <ProtectedRoute path={'/posts'}>
          <PostsPage />
        </ProtectedRoute>
        <Route path={'/'}>
          <HomePage />
        </Route>
        <Route path={'*'}>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
