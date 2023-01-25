import { useAuth } from 'hooks/useAuth';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// const NavItems = [
//   {
//     name: 'Home',
//     path: '/',
//   },
//   { name: 'Contacts', path: '/contacts' },
//   { name: 'Register', path: '/register' },
//   { name: 'Login', path: '/login' },
// ];

export const SharedLayout = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/contacts'}>Contacts</NavLink>

          <NavLink to={'/register'}>Register</NavLink>
          <NavLink to={'/login'}>Log in</NavLink>
        </nav>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
