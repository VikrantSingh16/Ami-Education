import React from 'react'
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Notes from './pages/Notes'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import AcademicRes from './pages/AcademicRes'
import Placement from './pages/Placement'
import YouTubeRes from './pages/YouTubeRes'
import { DsaCodingQ } from './pages/DsaCodingQ'
import { RoadMap } from './pages/RoadMap'
import {Notifications} from './pages/Notifications'
import Syllabus from './pages/Syllabus'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from "./pages/Register";
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth'
function App() {

    const [user, setUser] = React.useState(null);
    const [authState, setAuthState] = React.useState(null)
  
    React.useEffect(() => {
      const unSubscribeAuth = onAuthStateChanged(auth,
        async authenticatedUser => {
          if(authenticatedUser) {
            setUser(authenticatedUser.email)
            setAuthState('home');
          } else {
            setUser(null);
            setAuthState('login')
          }
        })
  
        return unSubscribeAuth;
    }, [user])

    if(authState === null) return <div className='font-bold text-center text-5xl'>loading...</div>
    if(authState === 'login') return <Login setAuthState={setAuthState} setUser={setUser}/>
    if(authState === 'register') return <Register setAuthState={setAuthState} setUser={setUser}/> 
    if(user) 
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="notes" element={<Notes />} />
                    <Route path="syllabus" element={<Syllabus />} />
                    <Route path="academicResoucre" element={<AcademicRes />} />
                    <Route path="placement" element={<Placement/>} />
                    <Route path="youtuberes" element={<YouTubeRes/>} />
                    <Route path="dsares" element={<DsaCodingQ/>} />
                    <Route path="roadmap" element={<Login/>} />
<Route path="notifications" element={<Notifications/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
