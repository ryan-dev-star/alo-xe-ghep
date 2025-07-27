import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";

// Import components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingButtons from "./components/layout/FloatingButtons";
import BookingModal from "./components/layout/BookingModal"; // Import BookingModal

// Import pages
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import About from "./pages/About";
import VinhPhucHaNoiPage from "./pages/VinhPhucHanoiPage";
import NotificationBar from "./components/layout/NotificationBar";
// Scroll to Top component
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes but no hash
    if (!hash) {
      window.scrollTo(0, 0);
    }
    // Handle hash (anchor) links
    else {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  // Quản lý trạng thái modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hàm mở và đóng modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="App">
        <NotificationBar openModal={openModal} />
        <Header openModal={openModal} /> {/* Truyền openModal cho Header */}
        <BookingModal isOpen={isModalOpen} closeModal={closeModal} />{" "}
        {/* Thêm BookingModal */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage openModal={openModal} />} />
          <Route path="/dich-vu" element={<VinhPhucHaNoiPage />} />
          {/* <Route
            path="/gioi-thieu"
            element={<About openModal={openModal} />}
          />{" "} */}
          {/* Placeholder */}
          {/* <Route
            path="/lien-he"
            element={<ServicePage openModal={openModal} />}
          />{" "} */}
          {/* Placeholder */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
