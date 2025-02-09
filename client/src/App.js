import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Work from "./pages/Work";
import { useSelector } from "react-redux";
import Spinner from './compenents/Spinner'
import ProtectedRoute from "./compenents/ProtectedRoute";
import PublicRoute from "./compenents/PublicRoute";
import Contact from "./pages/Contact";
import DiseasePrediction from "./pages/DiseasePrediction.jsx";
import DietPrediction from "./pages/DietPrediction.jsx";

function App() {
  const { loading } = useSelector(state => state.alerts);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col ">
      <BrowserRouter>
        {loading ? <Spinner /> : (
          <Routes>
            <Route path="/" element={
              <PublicRoute>
                <Landing />
              </PublicRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />


            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path="/register" element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } />

            {/* <Route path="/disease-prediction"
              element={
                <PublicRoute>
                  <DiseasePrediction />
                </PublicRoute>
              } />

            <Route path="/diet-prediction"
              element={
                <PublicRoute>
                  <DietPrediction />
                </PublicRoute>
              } /> */}

            <Route path="/dietprediction" element={<DietPrediction/>}/>
            <Route path="/diseaseprediction" element={<DiseasePrediction/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;