import React from "react";

const NotificationBar = ({ onBooking, openModal }) => {
  return (
    <div className="sticky top-0 left-0 right-0 z-100 bg-green-2 text-white shadow-sm   notification-bar">
      <div className="w-full px-4 py-4  ">
        <div className="flex items-center justify-center gap-4  flex-col md:flex-row ">
          {/* Message - centered like in the image */}
          {/* <div className="text-center">
            <span className="text-sm font-normal">
              Alo Xe Ghép chỉ ghép tối đa 4 khách 1 chuyến/ Không tăng giá các
              dịp lễ, tết!
            </span>
          </div> */}

          {/* Button - exactly like in image */}
          <a
            className="bg-white text-green-600 pointer px-6 py-3 rounded font-bold text-sm hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
            href="tel:0989523768"
          >
            ĐẶT XE NGAY
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
