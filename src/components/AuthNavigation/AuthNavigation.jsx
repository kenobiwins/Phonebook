import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => {
  return (
    <>
      <NavLink to={'/register'}>Register</NavLink>
      <NavLink to={'/login'}>Log in</NavLink>
    </>
  );
};
