import React, { useState } from "react";
import { User, CreditCard, CheckCircle, Shield } from "lucide-react";

const BookingForm = () => {
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

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        padding: "80px 0",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%23333"/><g fill="%23666"><circle cx="200" cy="200" r="80"/><circle cx="400" cy="300" r="60"/><circle cx="800" cy="150" r="70"/><circle cx="1000" cy="400" r="90"/><circle cx="600" cy="500" r="50"/><path d="M100 600 Q300 550 500 600 T900 600 L900 800 L100 800 Z"/></g></svg>')`,
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side - Why Choose Us */}
          <div className="flex-1 text-white">
            {/* Divider */}
            <div className="w-16 h-1 bg-green-500 mb-6"></div>

            {/* Title */}
            <h2 className="text-3xl font-bold mb-6">Tại sao chọn chúng tôi?</h2>

            {/* Description */}
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Alo Xe Ghép có số lượng xe hùng hậu đủ để đáp ứng mọi nhu cầu của
              quý khách khi có nhu cầu đặt xe ghép, xe chuyến tất cả các ngày
              trong tuần.
            </p>

            {/* Features Grid - 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-2 rounded-full flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h6 className="text-lg font-semibold mb-2">
                    Lái xe thân thiện
                  </h6>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Đội ngũ lái xe được tuyển trọn và đào tạo nghiêm ngặt trước
                    khi làm việc.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-2 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h6 className="text-lg font-semibold mb-2">
                    Dịch vụ chuyên nghiệp
                  </h6>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Trên mỗi chuyến đi Alo Xe Ghép luôn có sẵn nước uống và khăn
                    lạnh phục vụ quý khách.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-2 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h6 className="text-lg font-semibold mb-2">Xe luôn sạch</h6>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Alo Xe Ghép có lịch vệ sinh và khử trùng xe định kỳ hàng
                    tuần. Đảm bảo xe không có bụi bẩn và mùi hôi.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-2 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h6 className="text-lg font-semibold mb-2">
                    An toàn trên mỗi chuyến đi
                  </h6>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Toàn bộ xe của chúng tôi sử dụng xe điện Vinfast có khung
                    gầm và thân vỏ đã được khẳng định là an toàn cho người trong
                    xe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-2xl p-6">
              {/* <h4 className="text-xl font-bold text-green mb-6 text-center">
                ĐẶT XE QUA FORM
              </h4> */}

              <div className="space-y-4">
                {/* Name Field */}
                {/* <div>
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
                </div> */}

                {/* Phone Field */}
                {/* <div>
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
                </div> */}

                {/* Pickup Location Field */}
                {/* <div>
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
                </div> */}

                {/* Time Slider */}
                {/* <div>
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
                    <span className="font-bold text-green">
                      {formData.time}
                    </span>
                  </div>
                </div> */}

                {/* Submit Button */}
                <div className="pt-4">
                  <a
                    href="tel:0989523768"
                    className="w-full justify-center bg-green-2 flex hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    ĐẶT XE NGAY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-webkit-slider-track {
          height: 8px;
          background: #e5e7eb;
          border-radius: 5px;
        }

        .slider::-moz-range-track {
          height: 8px;
          background: #e5e7eb;
          border-radius: 5px;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default BookingForm;
