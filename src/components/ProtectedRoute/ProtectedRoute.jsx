// import { Route } from 'react-router';
import { Link, Route } from 'react-router-dom';
import { useAuthCtx } from './../../store/AuthContext';

function ProtectedRoute(props) {
  const { isUserLoggedIn } = useAuthCtx();
  const { children, ...rest } = props;

  return (
    <div className='container text-center'>
      <Route {...rest}>
        {isUserLoggedIn ? (
          children
        ) : (
          <>
            <h2>Please login</h2>
            <Link to={'/login'}>Login here 🌏</Link>
          </>
        )}
      </Route>
    </div>
  );
}

export default ProtectedRoute;
