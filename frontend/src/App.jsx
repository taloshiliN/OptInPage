import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import './App.css'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
      {/* Protected Routes - Landing Page */}
        <Route 
        path="/landingpage"
        element={
          <LandingPage />
        }
        />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
