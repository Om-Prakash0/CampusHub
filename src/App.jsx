import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import EventPage from "./pages/EventPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import MyRegistrationPage from "./pages/MyRegistrationPage";
import HelpPage from "./pages/HelpPage";
import Footer from "./components/Footer";
import FindFriendPage from "./pages/FindFriendPage";
import ProfilePage from "./pages/ProfilePage";

import { motion, AnimatePresence } from "framer-motion";

// Animation Wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

// ✅ Move routing logic inside this component
function AppContent({ user, setUser, registeredEvents, setRegisteredEvents }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-all duration-500">

      {user && <Navbar user={user} setUser={setUser} />}

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            <Route
              path="/login"
              element={
                !user ? (
                  <PageWrapper><LoginPage setUser={setUser} /></PageWrapper>
                ) : <Navigate to="/" />
              }
            />

            <Route path="/help" element={<PageWrapper><HelpPage /></PageWrapper>} />
            <Route path="/find-friend" element={<PageWrapper><FindFriendPage /></PageWrapper>} />
            <Route
              path="/profile"
              element={
                user ? <ProfilePage user={user} setUser={setUser} /> : <Navigate to="/login" />
              }
            />

            <Route
              path="/"
              element={
                user ? (
                  <PageWrapper><EventPage /></PageWrapper>
                ) : <Navigate to="/login" />
              }
            />

            <Route
              path="/events/:id"
              element={
                user ? (
                  <PageWrapper>
                    <EventDetailsPage
                      registeredEvents={registeredEvents}
                      setRegisteredEvents={setRegisteredEvents}
                    />
                  </PageWrapper>
                ) : <Navigate to="/login" />
              }
            />

            <Route
              path="/my-registrations"
              element={
                user ? (
                  <PageWrapper>
                    <MyRegistrationPage
                      user={user}
                      registeredEvents={registeredEvents}
                      setRegisteredEvents={setRegisteredEvents}
                    />
                  </PageWrapper>
                ) : <Navigate to="/login" />
              }
            />

            <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  return (
    <BrowserRouter>
      <Toaster position="top-center" />

      {/* ✅ Use AppContent here */}
      <AppContent
        user={user}
        setUser={setUser}
        registeredEvents={registeredEvents}
        setRegisteredEvents={setRegisteredEvents}
      />
    </BrowserRouter>
  );
}