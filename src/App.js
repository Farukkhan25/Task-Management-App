// import logo from './logo.svg';
import './App.css';
import { RouterProvider } from "react-router-dom";
import { routes } from './Routes/Routes/Routes';
import { useContext } from 'react';
import { themeContext } from './contexts/Context';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className=" max-w-[1440px] mx-auto"
      style={{
        background: darkMode ? "#000000" : "",
        color: darkMode ? "#ffffff" : "",
      }}
    >
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
