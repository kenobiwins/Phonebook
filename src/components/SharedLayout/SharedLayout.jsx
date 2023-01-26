import { useAuth } from 'hooks/useAuth';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
