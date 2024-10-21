import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Index from "./pages"
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route 
          path="/index"
          element={<Index />}
        />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
