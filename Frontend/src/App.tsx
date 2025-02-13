import { BrowserRouter, Routes,Route } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blog } from "./pages/Blog"
import "./App.css"
function App() {
  
  return (
    <div>
      <BrowserRouter> 
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
