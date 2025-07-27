import React from "react";

const Footer = () => {
  return (
    <footer className="bg-text-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Logo and About */}
          <div>
            <h4 className="text-lg font-bold mb-4">Alo Xe Ghép</h4>
            <p className="mb-4 text-gray-300 text-sm">
              <strong>Alo Xe Ghép</strong> là đơn vị chuyên cung cấp dịch vụ xe
              taxi ghép tiện chuyến Vĩnh Phúc đi Hà Nội và ngược lại có nhiều
              hành khách yêu thích và tin tưởng lựa chọn nhờ chất lượng dịch vụ
              cao, mức giá phải chăng, tiết kiệm chi phí, thoải mái và tiện lợi.
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://www.facebook.com/61577139680233"
                className="text-white hover:text-primary"
                title="Theo dõi trên Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a
                href="tel:0989523768"
                className="text-white hover:text-primary"
                title="Gọi cho chúng tôi"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Từ Khóa */}
          <div>
            <h4 className="text-lg font-bold mb-4">Từ Khóa</h4>
            <div className="grid grid-cols-1 gap-1">
              <a
                href="/dich-vu"
                className="text-gray-300 hover:text-primary text-sm"
              >
                Alo Xe Ghép Hà Nội
              </a>
              <a
                href="/dich-vu"
                className="text-gray-300 hover:text-primary text-sm"
              >
                Xe Ghép Vĩnh Phúc - Hà Nội
              </a>
            </div>
          </div>

          {/* Column 3 - Thông Tin Liên Hệ */}
          <div>
            <h4 className="text-lg font-bold mb-4">Thông Tin Liên Hệ</h4>
            <ul className="space-y-2">
              <li className="flex items-start text-sm">
                <span className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span className="text-gray-300">
                  <strong>Văn Phòng:</strong> Định Trung, Vĩnh Yên, Vĩnh Phúc
                </span>
              </li>
              <li className="flex items-center text-sm">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <span className="text-gray-300">
                  <strong>Hotline:</strong>{" "}
                  <a href="tel:0989523768" className="hover:text-primary">
                    0989523768
                  </a>
                </span>
              </li>
              <li className="flex items-center text-sm">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span className="text-gray-300">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://aloxegheplientinh.com"
                    className="hover:text-primary"
                  >
                    https://aloxegheplientinh.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">Copyright 2025 Alo Xe Ghép</p>
            <div className="flex space-x-4 mt-4 md:mt-0"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
