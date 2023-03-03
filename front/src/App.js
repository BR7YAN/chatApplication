import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashboardPage from "./Pages/DashboardPage";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>       
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
