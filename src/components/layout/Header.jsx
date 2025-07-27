import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCarSide, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    window.location.href = "tel:0585121121";
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center flex-1">
            <a href="/" className="flex items-center">
              <img
                src="https://res.cloudinary.com/dnle0cwhv/image/upload/v1753611107/aloxeghep-logo_eoe5yv.png"
                alt="Xe Ghép Xanh Logo"
                className="h100"
              />
            </a>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8 flex-grow justify-center text-sm">
            <a
              href="/"
              className="hover:text-primary flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faHome} color="green" />
              <span>Trang chủ</span>
            </a>
            {/* <a
              href="/gioi-thieu"
              className="hover:text-primary flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faUser} color="green" />
              <span>Giới thiệu</span>
            </a> */}
            <a
              href="/dich-vu"
              className="hover:text-primary flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faBars} color="green" />
              <span>Dịch vụ</span>
            </a>
            {/* Link Đặt Xe - Desktop */}
            <button
              onClick={() => handleLinkClick()}
              className="hover:text-primary whitespace-nowrap flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faCarSide} color="green" />
              <span>Đặt xe</span>
            </button>
            {/* <a
              href="/lien-he"
              className="hover:text-primary whitespace-nowrap flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faPhoneAlt} color="green" />
              <span>Liên Hệ</span>
            </a> */}
          </nav>

          {/* Hotline */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <a
              href="tel:0585121121"
              className="text-primary btn-secondary font-medium"
            >
              Hotline: 0585.121.121
            </a>
          </div>

          {/* Nút Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-text-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <input
            type="text"
            placeholder="Tìm Kiếm"
            className="border rounded px-3 py-1 text-sm w-full mr-2"
          />
          <button className="text-white bg-primary p-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="ml-4 text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col px-4 py-6 space-y-4">
          <a
            href="/"
            className="flex items-center space-x-2 text-gray-800 hover:text-primary"
            onClick={handleLinkClick}
          >
            <span>🏠</span> <span>Trang chủ</span>
          </a>
          {/* <a
            href="/gioi-thieu"
            className="flex items-center space-x-2 text-gray-800 hover:text-primary"
            onClick={handleLinkClick}
          >
            <span>📄</span> <span>Giới Thiệu</span>
          </a> */}
          <a
            href="/dich-vu"
            className="hover:text-primary flex items-center space-x-2"
          >
            <span>📋</span>
            <span>Dịch vụ</span>
          </a>
          {/* Link Đặt Xe - Mobile */}
          <button
            onClick={() => {
              handleLinkClick();
            }}
            className="flex items-center space-x-2 text-gray-800 hover:text-primary"
          >
            <span>🚗</span> <span>Đặt Xe</span>
          </button>
          {/* <a
            href="/lien-he"
            className="flex items-center space-x-2 text-gray-800 hover:text-primary"
            onClick={handleLinkClick}
          >
            <span>✉️</span> <span>Liên Hệ</span>
          </a> */}

          {/* Social Icons */}
          <div className="flex items-center space-x-4 pt-4 border-t mt-4">
            <a href="#">
              <i className="fab fa-facebook-f text-lg text-gray-600" />
            </a>
            <a href="#">
              <i className="fab fa-phone text-lg text-gray-600" />
            </a>
            <a href="#">
              <i className="fab fa-youtube text-lg text-gray-600" />
            </a>
          </div>

          {/* Hotline */}
          <a
            href="tel:0585121121"
            className="mt-6 inline-block text-center text-green-700 font-semibold border border-green-600 px-4 py-2 rounded-full"
            onClick={handleLinkClick}
          >
            HOTLINE: 0585.121.121
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
