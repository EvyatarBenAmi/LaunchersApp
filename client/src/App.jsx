import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";
import AddLauncherPage from "./pages/AddLauncherPage";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="launcherDetails" element={< LauncherDetailsPage />} />
          <Route path="addLauncher" element={< AddLauncherPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
