import React from 'react'
import { useRoutes } from 'react-router-dom'

import { MainLayout } from '../layouts';
import IndexPosts from '../views/Posts'

// import RequireAuth from './RequireAuth'

function Router() {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <IndexPosts /> },
      ]
    }
  ];
  let element = useRoutes(routes);

  return element;
}

export default Router