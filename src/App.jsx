import { Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Activity from "./Pages/Activity";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import Notification from "./Pages/Notification";
import Profile from "./Pages/Profile";
import Fitur1 from "./Pages/Fitur/Fitur1";

function App() {
  const location = useLocation();
  const hideNavbarOnPaths = ["/Fitur/1", "/Fitur/2"];

  const shouldHideNavbar = hideNavbarOnPaths.includes(location.pathname);

  return (
    <>
      {shouldHideNavbar ? null : (
        <div className="fixed bottom-0 w-screen shadow-2xl">
          <Navbar />
        </div>
      )}

      <div className="container">
        <div className="flex items-center">
          <div className="w-full h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/Fitur/1" element={<Fitur1 />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
