import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashboardPage from "./Pages/DashboardPage";
import ProfilePage from "./Pages/ProfilePage";

export const userContext = React.createContext(); 

function App() {

  const [contextData, setContextData] = React.useState({name: null, avatar: null})

    React.useEffect(() => {
      const dataStored = JSON.parse(localStorage.getItem('data'));
      if (dataStored) {
        setContextData(dataStored);
      }
    }, []);

  return (
    <div>
        <BrowserRouter>
        <userContext.Provider value={contextData}>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </userContext.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;