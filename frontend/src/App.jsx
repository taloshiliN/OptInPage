import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Index from "./pages/Index"
import { Provider } from "react-redux"
import {store} from "../store"
function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/index"
          element={<Index />}
        />
      </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
