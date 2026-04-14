import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './pages/Root.jsx'
import Home from './pages/Home.jsx'
import Timeline from './pages/Timeline.jsx'
import Stats from './pages/Stats.jsx'
import FriendDetails from './components/FriendDetails.jsx'
import NotFound from './pages/NotFound.jsx'
import AppProvider from './context/AppProvider.jsx'
import { ToastContainer } from 'react-toastify'

export const friendsLoader = async () => {
  const res = await fetch("/friends.json");
  return res.json();
};

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        index: true,
        loader: friendsLoader,
        element: <Home></Home>
      },
      {
        path: "friend/:id",
        element: <FriendDetails></FriendDetails>
      },
      {
        path: "timeline",
        element: <Timeline></Timeline>
      },
      {
        path: "stats",
        element: <Stats></Stats>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AppProvider>
  </StrictMode>,
)
