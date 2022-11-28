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
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="notes" element={<Notes />} />
                    <Route path="syllabus" element={<Blank />} />
                    <Route path="academicResoucre" element={<AcademicRes />} />
                    <Route path="placement" element={<Placement/>} />
                    <Route path="youtuberes" element={<YouTubeRes/>} />
                    <Route path="dsares" element={<DsaCodingQ/>} />
                    <Route path="roadmap" element={<RoadMap/>} />
<Route path="notifications" element={<Notifications/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
