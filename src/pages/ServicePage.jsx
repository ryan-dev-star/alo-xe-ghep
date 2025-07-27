import React, { useState } from "react";

const ContactPage = ({ openModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    // Show success message
    alert("Tin nhắn của bạn đã được gửi thành công!");
  };

  return (
    <div className="">
      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Background with green leaf pattern overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <defs>
                  <pattern id="leaves" patternUnits="userSpaceOnUse" width="20" height="20">
                    <rect width="20" height="20" fill="#f0f8f0"/>
                    <path d="M10 5 Q15 10 10 15 Q5 10 10 5" fill="#c8e6c9" opacity="0.6"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#leaves)"/>
              </svg>
            `)}')`,
          }}
        >
          {/* Large text overlay */}
          <div className="absolute inset-0 flex items-center justify-end pr-8">
            <div className="text-white text-opacity-30 font-bold">
              <div className="text-8xl md:text-9xl leading-none">GHÉP</div>
              <div className="text-8xl md:text-9xl leading-none">XANH</div>
            </div>
          </div>
        </div>

        {/* Content container */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="container mx-auto ">
            <div className="max-w-2xl">
              {/* Introduction header */}
              <div className="mb-6">
                <h6 className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-4">
                  GIỚI THIỆU
                </h6>
                <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
                  Alo Xe Ghép
                </h1>

                {/* Green divider line */}
                <div className="w-16 h-1 bg-green-500 mb-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-6 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mọi thông tin phản hồi về dịch vụ của Alo Xe Ghép quý khách{" "}
                  <br />
                  hàng vui lòng liên hệ với chúng tôi theo thông tin bên dưới
                </p>

                {/* Star rating */}
              </div>

              <a
                href="tel:0989523768"
                className="btn-custome inline-flex items-center uppercase text-green-500 border border-green-500 py-3 px-10 rounded-md font-medium transition-colors duration-300 hover:text-white shadow-[6px_6px_0_0_#ffde00]"
              >
                <span className="inline-flex items-center">
                  <span>0989523768</span>
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 mr-2 ml-3"
                    viewBox="0 0 192 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="white"
                      d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full">
                  <h2 className="text-2xl font-bold text-text-dark mb-6">
                    Thông Tin Liên Hệ
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary rounded-full p-2 text-white mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-dark mb-1">
                          Số Điện Thoại
                        </h3>
                        <a
                          href="tel:0989523768"
                          className="text-primary hover:underline"
                        >
                          0989523768
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary rounded-full p-2 text-white mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-dark mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:contact@xeghepgiare.vn"
                          className="text-primary hover:underline"
                        >
                          contact@xeghepgiare.vn
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary rounded-full p-2 text-white mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-dark mb-1">
                          Địa Chỉ
                        </h3>
                        <p className="text-text-light">Phúc Yên, Vĩnh Phúc</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary rounded-full p-2 text-white mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-dark mb-1">
                          Giờ Làm Việc
                        </h3>
                        <p className="text-text-light">
                          24/7 - Phục vụ mọi lúc
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-text-dark mb-6">
                    Gửi Tin Nhắn Cho Chúng Tôi
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-text-dark font-medium mb-2"
                        >
                          Tên Của Bạn (bắt buộc)
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-text-dark font-medium mb-2"
                        >
                          Địa Chỉ Email (bắt buộc)
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-text-dark font-medium mb-2"
                      >
                        Số Điện Thoại (bắt buộc)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="subject"
                        className="block text-text-dark font-medium mb-2"
                      >
                        Tiêu đề:
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-text-dark font-medium mb-2"
                      >
                        Nội Dung:
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      ></textarea>
                    </div>

                    <div className="text-right">
                      <button
                        type="submit"
                        className="bg-primary text-white py-3 px-8 rounded-md font-medium transition-colors duration-300 hover:bg-green-700"
                      >
                        Gửi
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-8 text-center">
              Các Câu Hỏi Thường Gặp
            </h2>

            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-bold text-lg text-text-dark cursor-pointer">
                  Alo Xe Ghép Tiết Kiệm Tới 50%
                </summary>
                <div className="mt-4 text-text-light">
                  <p>
                    Tiết kiệm được từ 30% đến 50% chi phí khi quý khách hàng đặt
                    xe đi chuyến từ Vĩnh Phúc đi Hà Nội và ngược lại.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-bold text-lg text-text-dark cursor-pointer">
                  Alo Xe Ghép Hà Nội Trọn Gói
                </summary>
                <div className="mt-4 text-text-light">
                  <p>
                    Dịch vụ xe ghép trọn gói từ Vĩnh Phúc đi Hà Nội, đón tận nhà
                    và trả tận nơi theo yêu cầu của quý khách, không phát sinh
                    thêm chi phí.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-bold text-lg text-text-dark cursor-pointer">
                  Cam Kết Dịch Vụ Tại Alo Xe Ghép
                </summary>
                <div className="mt-4 text-text-light">
                  <p>
                    Chúng tôi cam kết đón đúng giờ, giá cả minh bạch, lái xe an
                    toàn và thân thiện, không phát sinh chi phí, và xe đời mới
                    sạch sẽ.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-bold text-lg text-text-dark cursor-pointer">
                  Các Dịch Vụ Tại Alo Xe Ghép
                </summary>
                <div className="mt-4 text-text-light">
                  <p>
                    Ngoài dịch vụ xe ghép, chúng tôi còn cung cấp dịch vụ đưa
                    đón sân bay, xe taxi đi tỉnh, xe hợp đồng du lịch, và dịch
                    vụ chuyển phát nhanh.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-bold text-lg text-text-dark cursor-pointer">
                  Tuyến Alo Xe Ghép Hà Nội
                </summary>
                <div className="mt-4 text-text-light">
                  <p>
                    Chúng tôi phục vụ các tuyến xe ghép từ Vĩnh Phúc đi Hà Nội
                    và ngược lại, bao gồm các điểm đón trả tại tất cả các quận,
                    huyện của hai tỉnh thành.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-bold text-lg text-text-dark cursor-pointer">
                  Các Hình Thức Thanh Toán
                </summary>
                <div className="mt-4 text-text-light">
                  <p>
                    Quý khách có thể thanh toán bằng tiền mặt trực tiếp, chuyển
                    khoản ngân hàng, hoặc thanh toán qua các ví điện tử như
                    Momo, ZaloPay.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
              Vị Trí Của Chúng Tôi
            </h2>
            <p className="text-text-light max-w-3xl mx-auto">
              Đội xe của chúng tôi hoạt động tại Vĩnh Phúc và Hà Nội, sẵn sàng
              phục vụ quý khách mọi lúc mọi nơi
            </p>
          </div>

          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with your actual map component or iframe */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118994.32091467427!2d105.4131078886249!3d21.248793201280005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134f3e0bbf58003%3A0xb3db3222e47244e9!2zVsSpbmggVMaw4budbmcsIFbEqW5oIFBow7pjLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1747969224748!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
