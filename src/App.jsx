import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Activity from "./Pages/Activity";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import Notification from "./Pages/Notification";
import Profile from "./Pages/Profile";
import Fitur1 from "./Pages/Fitur/Fitur1";
import Login from "./Pages/Login";

function App() {
  const location = useLocation();
  const hideNavbarOnPaths = ["/login", "/Fitur/1", "/Fitur/2"];

  const shouldHideNavbar = hideNavbarOnPaths.includes(location.pathname);

  return (
    <>
      {shouldHideNavbar ? null : (
        <div className="fixed bottom-0 w-screen shadow-2xl">
          <Navbar />
        </div>
      )}

      <div className="container h-screen">
        <div className="w-full h-full bg-neutral-50 justify-center items-center">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Fitur/1" element={<Fitur1 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
