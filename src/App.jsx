import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Notes from './pages/Notes'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import AcademicRes from './pages/AcademicRes'
import Placement from './pages/Placement'

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
                    <Route path="stats" element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
