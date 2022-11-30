import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'
import Main from './pages/main';
import { Nav } from './components/nav';
import { Footer } from './components/footer';
import { useRef } from 'react';
import { NavContext } from './context/navContext'


const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}
function App() {

  const whoIam = useRef(null)
  const career = useRef(null)
  const project = useRef(null)

  return (
    <div className="App">
      <NavContext.Provider value={{ whoIam, career, project }}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </NavContext.Provider>
    </div>
  );
}

export default App;
