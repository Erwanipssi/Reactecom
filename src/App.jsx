import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Counter from './counter'
import Layout from './layout'
import Home from './home'
import NoPage from './NoPage'
import Value from './input'





function App() {

  return (
    <>
      <div className="app" >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={< Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="input" element={<Value />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

      </div>
    </>
  )
}

export default App
