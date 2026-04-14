import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './pages/Root.jsx'
import Home from './pages/Home.jsx'
import Timeline from './pages/Timeline.jsx'
import Stats from './pages/Stats.jsx'

export const friendsLoader = async () => {
  const res = await fetch("/friends.json");
  return res.json();
};

const router =createBrowserRouter([
  {
    path:"",
    element:<Root/>,
    children:[
      {
        index:true,
        loader:friendsLoader,
        element:<Home></Home>
      },
      {
        path:"timeline",
        element:<Timeline></Timeline>
      },
      {
        path:"stats",
        element:<Stats></Stats>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
