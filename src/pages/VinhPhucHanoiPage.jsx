import React from "react";
import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";

const PHONE_NUMBER = "0989.523.768";

const VinhPhucHaNoiPage = () => {
  return (
    <div className="max-w-screen-2xl w-full pt-16 md:pt-20 px-4 mx-auto">
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
          <div className="container mx-auto">
            <div className="max-w-2xl">
              {/* Introduction header */}
              <div className="mb-6">
                <h6 className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-4">
                  DỊCH VỤ
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
                  Cần di chuyển từ <strong>Vĩnh Phúc</strong> đến{" "}
                  <strong>Hà Nội</strong>? Alo Xe Ghép cung cấp dịch vụ xe ghép
                  giá rẻ chỉ từ <strong> 150k/2 người</strong>, bao xe từ{" "}
                  <strong>350-450k</strong> tùy điểm, và ship hàng hỏa tốc từ{" "}
                  <strong>100k</strong>.
                </p>
              </div>

              <a
                href={`tel:${PHONE_NUMBER.replace(/\./g, "")}`}
                className="inline-flex items-center uppercase text-green-500 border border-green-500 py-3 px-10 rounded-md font-medium transition-colors duration-300 hover:text-white shadow-[6px_6px_0_0_#ffde00]"
              >
                <span className="inline-flex items-center">
                  <span>{PHONE_NUMBER}</span>
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

      {/* Content */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Table of Contents */}
          <div className="max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg mb-10">
            <h3 className="text-xl font-bold text-text-dark mb-4">Mục lục</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <a
                  href="#gioi-thieu"
                  className="text-[#54b435] hover:underline"
                >
                  Giới Thiệu Về Alo Xe Ghép
                </a>
              </li>
              <li>
                <a href="#dich-vu" className="text-[#54b435] hover:underline">
                  Dịch Vụ Xe Ghép Giá Rẻ
                </a>
                <ol className="list-decimal pl-5 mt-2">
                  <li>
                    <a
                      href="#uu-diem"
                      className="text-[#54b435] hover:underline"
                    >
                      Ưu Điểm Của Dịch Vụ
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#gia-ve" className="text-[#54b435] hover:underline">
                  Giá Vé Xe Ghép
                </a>
                <ol className="list-decimal pl-5 mt-2">
                  <li>
                    <a
                      href="#bang-gia"
                      className="text-[#54b435] hover:underline"
                    >
                      Bảng Giá Xe Ghép
                    </a>
                  </li>
                  <li>
                    <a
                      href="#bao-xe"
                      className="text-[#54b435] hover:underline"
                    >
                      Bao Xe Vĩnh Phúc ↔ Hà Nội
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ship-hang"
                      className="text-[#54b435] hover:underline"
                    >
                      Ship Hàng Hỏa Tốc
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#dat-xe" className="text-[#54b435] hover:underline">
                  Cách Đặt Xe
                </a>
              </li>
              <li>
                <a href="#ket-luan" className="text-[#54b435] hover:underline">
                  Kết Luận
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#54b435] hover:underline">
                  Câu Hỏi Thường Gặp
                </a>
              </li>
            </ol>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto prose lg:prose-lg">
            <blockquote className="bg-blue-50 border-l-4 border-[#54b435] p-4 mb-8 italic">
              <p>
                Cần di chuyển từ <strong>Vĩnh Phúc</strong> đến{" "}
                <strong>Hà Nội</strong>?<strong>Alo Xe Ghép</strong> cung cấp
                dịch vụ xe ghép giá rẻ chỉ từ
                <strong>150k/2 người</strong>, bao xe từ{" "}
                <strong>350-450k</strong>, và ship hàng hỏa tốc từ{" "}
                <strong>100k</strong>. Đặt xe ngay để trải nghiệm dịch vụ tiện
                lợi, an toàn!
              </p>
            </blockquote>

            <div className="flex justify-center mb-8">
              <img
                src="https://res.cloudinary.com/dnle0cwhv/image/upload/v1753578368/aloxeghep-1_apu0h9.png"
                alt="Alo Xe Ghép Vĩnh Phúc Hà Nội"
                className="rounded-lg shadow-md w-full max-w-2xl"
                onError={(e) => {
                  e.target.src =
                    "https://res.cloudinary.com/dnle0cwhv/image/upload/v1753578368/aloxeghep-1_apu0h9.png";
                }}
              />
            </div>

            <h2 id="gioi-thieu" className="text-2xl font-bold mb-4">
              Giới Thiệu Về Alo Xe Ghép
            </h2>
            <p>
              <strong className="text-[#54b435]">Alo Xe Ghép</strong> là dịch vụ
              xe ghép giá rẻ, tiện lợi từ
              <strong>Vĩnh Phúc</strong> đến <strong>Hà Nội</strong> và ngược
              lại. Với đội ngũ tài xế chuyên nghiệp, xe đời mới, chúng tôi cam
              kết mang đến trải nghiệm di chuyển an toàn, thoải mái với giá chỉ
              từ <strong>150k/2 người</strong>.
            </p>
            <p>
              Ngoài xe ghép, chúng tôi cung cấp dịch vụ <strong>bao xe</strong>{" "}
              từ <strong>350-450k</strong>
              tùy điểm và <strong>ship hàng hỏa tốc</strong> từ{" "}
              <strong>100k</strong>. Dịch vụ hoạt động 24/7, đón trả tận nơi,
              phù hợp cho công tác, du lịch, hoặc vận chuyển hàng hóa.
            </p>
            <h2 id="dich-vu" className="text-2xl font-bold mb-4">
              Dịch Vụ Xe Ghép Giá Rẻ
            </h2>
            <p>
              <strong className="text-[#54b435]">Alo Xe Ghép</strong> cung cấp
              dịch vụ xe ghép
              <strong>Vĩnh Phúc ↔ Hà Nội</strong> với giá chỉ{" "}
              <strong>150k/2 người</strong>. Dịch vụ bao xe từ{" "}
              <strong>350-450k</strong> tùy điểm và ship hàng hỏa tốc từ
              <strong>100k</strong> đảm bảo nhanh chóng, an toàn.
            </p>
            <p>
              Với xe 4-7 chỗ đời mới, tài xế giàu kinh nghiệm, chúng tôi phục vụ
              24/7, đón trả tận nơi, mang đến sự tiện lợi tối đa cho hành khách.
            </p>

            <div className="flex justify-center my-8">
              <img
                src="https://res.cloudinary.com/dnle0cwhv/image/upload/v1753578367/aloxeghep-2_v9hrl9.png"
                alt="Xe Ghép Vĩnh Phúc Hà Nội"
                className="rounded-lg shadow-md w-full max-w-2xl"
                onError={(e) => {
                  e.target.src =
                    "https://res.cloudinary.com/dnle0cwhv/image/upload/v1753578367/aloxeghep-2_v9hrl9.png";
                }}
              />
            </div>

            <h3 id="uu-diem" className="text-xl font-bold mb-4">
              Ưu Điểm Của Dịch Vụ
            </h3>
            <p>
              Dịch vụ xe ghép Vĩnh Phúc ↔ Hà Nội của{" "}
              <strong>Alo Xe Ghép</strong> mang đến nhiều lợi ích:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Giá Cực Rẻ:</strong> Chỉ 150k/2 người, bao xe từ
                350-450k tùy điểm.
              </li>
              <li>
                <strong>Ship Hàng Hỏa Tốc:</strong> Vận chuyển hàng hóa nhanh từ
                100k.
              </li>
              <li>
                <strong>An Toàn:</strong> Xe đời mới, tài xế chuyên nghiệp, bảo
                dưỡng định kỳ.
              </li>
              <li>
                <strong>Đón Trả Tận Nơi:</strong> Linh hoạt tại Vĩnh Phúc và Hà
                Nội.
              </li>
              <li>
                <strong>Hoạt Động 24/7:</strong> Đặt xe bất kỳ lúc nào, kể cả
                lễ, Tết.
              </li>
              <li>
                <strong>Tiện Ích:</strong> Miễn phí wifi, nước uống, khăn lạnh.
              </li>
              <li>
                <strong>Đặt Xe Dễ Dàng:</strong> Qua hotline, Zalo, hoặc
                website.
              </li>
            </ul>

            <div className="flex justify-center my-8">
              <img
                src="https://res.cloudinary.com/dnle0cwhv/image/upload/v1753578369/aloxeghep-3_tlzahk.png"
                alt="Xe Ghép Alo"
                className="rounded-lg shadow-md w-full max-w-2xl"
                onError={(e) => {
                  e.target.src =
                    "https://res.cloudinary.com/dnle0cwhv/image/upload/v1753578369/aloxeghep-3_tlzahk.png";
                }}
              />
            </div>

            <h2 id="gia-ve" className="text-2xl font-bold mb-4 mt-10">
              Giá Vé Xe Ghép
            </h2>
            <p>Giá vé xe ghép Vĩnh Phúc ↔ Hà Nội siêu tiết kiệm:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Vĩnh Phúc ↔ Hà Nội:</strong> 150k/2 người
              </li>
              <li>
                <strong>Bao xe:</strong> 350-450k tùy điểm
              </li>
              <li>
                <strong>Ship hàng hỏa tốc:</strong> Từ 100k
              </li>
            </ul>

            <h3 id="bang-gia" className="text-xl font-bold mb-4 mt-8">
              Bảng Giá Xe Ghép
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                <thead>
                  <tr className="bg-[#54b435] text-white">
                    <th className="py-3 px-4 border-b text-left">Dịch vụ</th>
                    <th className="py-3 px-4 border-b text-center">Giá</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">
                      Xe ghép Vĩnh Phúc ↔ Hà Nội
                    </td>
                    <td className="py-3 px-4 border-b text-center">
                      150k/2 người
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-100">
                    <td className="py-3 px-4 border-b font-medium">
                      Bao xe Vĩnh Phúc ↔ Hà Nội
                    </td>
                    <td className="py-3 px-4 border-b text-center">350-450k</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">
                      Ship hàng hỏa tốc
                    </td>
                    <td className="py-3 px-4 border-b text-center">Từ 100k</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 id="bao-xe" className="text-xl font-bold mb-4 mt-8">
              Bao Xe Vĩnh Phúc ↔ Hà Nội
            </h3>
            <p>
              Dịch vụ <strong>bao xe</strong> từ <strong>350-450k</strong> tùy
              điểm, phù hợp cho gia đình, nhóm bạn, hoặc khách cần không gian
              riêng tư. Liên hệ{" "}
              <a
                href={`tel:${PHONE_NUMBER.replace(/\./g, "")}`}
                className="text-[#54b435] font-medium"
              >
                {PHONE_NUMBER}
              </a>
              để được báo giá chi tiết.
            </p>

            <h3 id="ship-hang" className="text-xl font-bold mb-4 mt-8">
              Ship Hàng Hỏa Tốc
            </h3>
            <p>
              <strong>Alo Xe Ghép</strong> nhận{" "}
              <strong>ship hàng hỏa tốc</strong> từ Vĩnh Phúc đến Hà Nội và
              ngược lại, giá chỉ từ <strong>100k</strong>. Dịch vụ nhanh, an
              toàn, giao hàng đúng hẹn. Gọi ngay
              <a
                href={`tel:${PHONE_NUMBER.replace(/\./g, "")}`}
                className="text-[#54b435] font-medium"
              >
                {PHONE_NUMBER}
              </a>
              .
            </p>

            <h2 id="dat-xe" className="text-2xl font-bold mb-4 mt-10">
              Cách Đặt Xe
            </h2>
            <p>
              Đặt xe với <strong>Alo Xe Ghép</strong> cực kỳ dễ dàng:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                Tổng đài (24/7):{" "}
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\./g, "")}`}
                  className="text-[#54b435] font-medium"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                Chat Zalo:{" "}
                <a
                  href="https://zalo.me/0989523768"
                  className="text-[#54b435] font-medium"
                >
                  Zalo
                </a>
              </li>
              <li>
                Văn phòng:{" "}
                <strong>Thôn Đình, Yên Bình, Vĩnh Tường, Vĩnh Phúc</strong>
              </li>
              <li>Website: Form đặt xe</li>
            </ul>
            <p className="text-sm text-gray-600 italic mb-8">
              <strong>Lưu ý:</strong> Đặt xe trước 2-3 tiếng để đảm bảo chỗ
              ngồi.
            </p>

            <h2 id="ket-luan" className="text-2xl font-bold mb-4 mt-10">
              Kết Luận
            </h2>
            <p>
              <strong>Alo Xe Ghép</strong> là lựa chọn lý tưởng cho di chuyển
              <strong>Vĩnh Phúc ↔ Hà Nội</strong> với giá chỉ{" "}
              <strong>150k/2 người</strong>, bao xe từ <strong>350-450k</strong>
              , và ship hàng hỏa tốc từ <strong>100k</strong>. Liên hệ ngay để
              trải nghiệm dịch vụ an toàn, tiết kiệm!
            </p>

            <h2 id="faq" className="text-2xl font-bold mb-4 mt-10">
              Câu Hỏi Thường Gặp
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Xe ghép Vĩnh Phúc là gì?
                </h3>
                <p>
                  Dịch vụ xe ghép từ Vĩnh Phúc đến Hà Nội, giá rẻ từ 150k/2
                  người, bao xe từ 350-450k, và ship hàng hỏa tốc từ 100k.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Ưu điểm của Alo Xe Ghép?
                </h3>
                <p>
                  Giá rẻ, an toàn, đón trả tận nơi, hoạt động 24/7, ship hàng
                  nhanh.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Giá vé xe ghép?</h3>
                <p>
                  Vĩnh Phúc ↔ Hà Nội: 150k/2 người. Bao xe: 350-450k. Ship
                  hàng: Từ 100k.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Có cần đặt vé trước?</h3>
                <p>Đặt trước 2-3 tiếng để đảm bảo có chỗ.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Liên hệ Alo Xe Ghép?</h3>
                <p>
                  Gọi:{" "}
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\./g, "")}`}
                    className="text-[#54b435] font-medium"
                  >
                    {PHONE_NUMBER}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 bg-[#54b435] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Đặt Xe Nhanh - Giá Cạnh Tranh
          </h2>
          <p className="text-lg mb-8">
            Chỉ từ <strong>150k/2 người</strong>, bao xe{" "}
            <strong>350-450k</strong>, và ship hàng hỏa tốc từ{" "}
            <strong>100k</strong>! Gọi ngay để đặt xe 24/7!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\./g, "")}`}
              className="bg-white text-[#54b435] hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors duration-300 inline-flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
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
              Gọi Ngay: {PHONE_NUMBER}
            </a>
            <Link
              to="/lien-he"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#54b435] py-3 px-8 rounded-md font-medium transition-colors duration-300"
            >
              Liên Hệ Chúng Tôi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VinhPhucHaNoiPage;
