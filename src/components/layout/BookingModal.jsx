import React, { useState, useEffect } from "react";

const BookingModal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    time: 5,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSliderChange = (e) => {
    setFormData({
      ...formData,
      time: parseInt(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(
      "Cảm ơn bạn đã đặt xe! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất."
    );
  };
  // Đóng modal bằng phím Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      onClick={closeModal} // Đóng modal khi bấm ngoài
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Ngăn đóng khi bấm bên trong
      >
        {/* Header với gradient background */}
        <div className="bg-[#379237]  p-4 text-center relative">
          <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            ĐẶT XE GIÁ RẺ
          </h2>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-200"
            aria-label="Đóng modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mô tả */}
        <div className="p-6 text-center text-gray-600">
          <p>
            Vui lòng điền thông tin form bên dưới để chúng tôi liên hệ giữ chỗ
            và báo giá ưu đãi cho quý khách!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6">
          {/* Loại dịch vụ */}
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Họ và Tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Nhập họ và tên của bạn"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Nhập số điện thoại của bạn"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            {/* Pickup Location Field */}
            <div>
              <label
                htmlFor="pickup"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Địa điểm đón <span className="text-red-500">*</span>
              </label>
              <textarea
                id="pickup"
                name="pickup"
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm"
                placeholder="Số nhà, đường, phường, quận, thành phố"
                required
                value={formData.pickup}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Time Slider */}
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Chọn giờ đón
              </label>
              <div className="relative">
                <input
                  type="range"
                  id="time"
                  name="time"
                  min="5"
                  max="22"
                  step="1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  value={formData.time}
                  onChange={handleSliderChange}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5h</span>
                  <span>22h</span>
                </div>
              </div>
              <div className="text-center mt-2 text-gray-600 text-sm">
                Giá trị đã chọn:{" "}
                <span className="font-bold text-green">{formData.time}</span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="w-full bg-green-2 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                ĐẶT XE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
