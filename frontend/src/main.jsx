import React from 'react'
import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/Github/Github.jsx'
import Login from  './components/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       },
//       {
//         path: "user",
//         element: <User/>
//       }
//       ,{
//         path: "github",
//         element: <GitHub/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
             <Route path='/' element={<App />}>  
              <Route path='' element={<Home/>}/> 
              <Route path='about' element={<About/>} />
              <Route path='contact' element={<Contact/>} />
              <Route path='user/:userId' element={<User/>} />
              <Route path='github' element={<GitHub/>} />
              <Route path='login' element={<Login/>} />
              <Route path='signup' element={<SignUp/>} />
    </Route>
  )
)


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>,
// )

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);
