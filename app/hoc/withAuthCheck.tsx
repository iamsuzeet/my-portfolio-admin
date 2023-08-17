'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { GetServerSideProps } from 'next';

export type RouteType = 'public' | 'protected';

const withAuthCheck = <T extends {}>(
  WrappedComponent: React.ComponentType<T>,
  pathRouteType?: RouteType
) => {
  const routeType = pathRouteType || 'protected';

  const ComponentWithAuth = (props: T) => {
    const router = useRouter();
    const { isAuthenticated, isAuthenticating, setIsAuthenticating } =
      useAuth();

    useEffect(() => {
      if (!isAuthenticating) {
        if (!isAuthenticated && routeType === 'protected') {
          router.replace('/login');
        } else if (isAuthenticated && routeType === 'public') {
          router.replace('/dashboard');
        }
      }
    }, [isAuthenticated, router, isAuthenticating]);

    return isAuthenticating ? (
      'loading...'
    ) : (
      <WrappedComponent {...(props as T)} />
    );
  };

  return ComponentWithAuth;
};

export default withAuthCheck;
