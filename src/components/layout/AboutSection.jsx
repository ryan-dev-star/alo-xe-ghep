import React from "react";

const AboutSection = ({ openModal }) => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-start mb-10">
          <h2 className="text-3xl font-bold text-green mb-4">
            Alo Xe Ghép là ai?
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <p className="text-text-dark mb-6 leading-relaxed">
              Chúng tôi là tập các tài xế nhiều năm kinh nghiệm sử dụng
              <b> xe điện Vinfast</b> làm dịch vụ vận chuyển hành khách trên địa
              bàn <strong>Vĩnh Phúc</strong> và các tỉnh lân cận.
            </p>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>

        <div class="max-w-4xl mx-auto"></div>

        {/* Features Grid Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-c">
            {/* Row 1 */}
            <div className="text-left">
              <div className="mb-4">
                <svg
                  className="w-14c h-14c icon-green"
                  viewBox="0 0 384 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"
                  />
                </svg>
              </div>
              <h4 className="box-title text-green mb-3">Không Gian Sạch Sẽ</h4>
              <p className="text-gray-600 leading-relaxed">
                Đội ngũ vệ sinh theo chu kì nên không gian luôn sạch sẽ và thơm
                tho.
              </p>
            </div>

            <div className="text-left">
              <div className="mb-4">
                <svg
                  className="w-14c h-14c icon-green"
                  viewBox="0 0 640 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"
                  />
                </svg>
              </div>
              <h4 className="box-title text-green mb-3">An toàn trên đường</h4>
              <p className="text-gray-600 leading-relaxed">
                Xe điện Vinfast sở hữu khung gầm và thân vỏ đã được khẳng định
                qua các vụ va chạm thực tế.
              </p>
            </div>

            <div className="text-left">
              <div className="mb-4">
                <svg
                  className="w-14c h-14c icon-green"
                  viewBox="0 0 640 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M433.46 165.94l101.2-111.87C554.61 34.12 540.48 0 512.26 0H31.74C3.52 0-10.61 34.12 9.34 54.07L192 256v155.92c0 12.59 5.93 24.44 16 32l79.99 60c20.86 15.64 48.47 6.97 59.22-13.57C310.8 455.38 288 406.35 288 352c0-89.79 62.05-165.17 145.46-186.06zM480 192c-88.37 0-160 71.63-160 160s71.63 160 160 160 160-71.63 160-160-71.63-160-160-160zm16 239.88V448c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V256c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.04 44.44-42.67 45.07z"
                  />
                </svg>
              </div>
              <h4 className="box-title text-green mb-3">Giá cả cạnh tranh</h4>
              <p className="text-gray-600 leading-relaxed">
                Với chi phí vận hành rẻ hơn xe xăng vì vậy mức giá của chúng tôi
                cũng rẻ hơn xe xăng.
              </p>
            </div>

            {/* Row 2 */}
            <div className="text-left">
              <div className="mb-4">
                <svg
                  className="w-14c h-14c icon-green"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                  />
                </svg>
              </div>
              <h4 className="box-title text-green mb-3">
                Dịch vụ chuyên nghiệp
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Các lái xe của chúng tôi được đào tạo và tập huấn trước khi bàn
                giao xe.
              </p>
            </div>

            <div className="text-left">
              <div className="mb-4">
                <svg
                  className="w-14c h-14c icon-green"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"
                  />
                </svg>
              </div>
              <h4 className="box-title text-green mb-3">
                Lái xe giàu kinh nghiệm
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Các tài xế của Alo Xe Ghép đã có kinh nghiệm lái xe trên
                10.000km.
              </p>
            </div>

            <div className="text-left">
              <div className="mb-4">
                <svg
                  className="w-14c h-14c icon-green"
                  viewBox="0 0 640 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"
                  />
                </svg>
              </div>
              <h4 className="box-title text-green mb-3">Xe nhỏ gọn cơ động</h4>
              <p className="text-gray-600 leading-relaxed">
                Xe điện đa dạng mẫu mã Xe điện VF là dòng xe SUV và nhiều loại
                xe khác với kích thước phù hợp, giúp chuyến đi của bạn thêm phần
                thoải mái và tiết kiệm nhiên liệu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
