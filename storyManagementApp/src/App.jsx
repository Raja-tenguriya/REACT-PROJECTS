import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Paste from './components/Paste'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ViewPaste from './components/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="text-2xl flex flex-col gap-4">
        <Navbar />
        <Home />
      </div>
    },

    {
      path:"/pastes",
      element:
      <div className="text-2xl flex h-[full] flex-col gap-4">
        <Navbar />
        <Paste />
      </div>
    },
    
    {
      path:"/pastes/:id",
      element:
      <div className="text-2xl flex flex-col h-screen gap-4">
        <Navbar />
        <ViewPaste />
      </div>
    }, 
  ]
);

function App() {

  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App