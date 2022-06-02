import "./App.css";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import HeaderBar from "./components/headerBar/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./containers/login";
import Signup from "./containers/signup";
import Error from "./containers/error";
import Home from "./containers/home";
import { ProtectedRoute } from "./containers/protectecRoutes";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderBar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={
              <ProtectedRoute>
              <Home />
            </ProtectedRoute>
            }/>
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Error />} />
          </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}


export default App;
