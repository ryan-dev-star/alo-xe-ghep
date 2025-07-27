import React, { useState } from "react";

const ServicesSection = ({ openModal }) => {
  const [activeTab, setActiveTab] = useState("xe-4-cho");

  const services = [
    {
      id: "xe-4-cho",
      title: "Xe 4 Chỗ",
      image: "/xe-4-cho.jpeg",
      description:
        "Dịch Vụ Alo Xe Ghép Hà Nội Giá Rẻ là một trong những tuyến xe taxi ghép tiện chuyến trên tuyến đường Hà Nội → Vĩnh Phúc & Vĩnh Phúc → Hà Nội được nhiều khách hàng yêu thích và lựa chọn nhất nhờ chất lượng dịch vụ cao và mức giá phải chăng. Chúng tôi cung cấp đủ xe ở tất cả các phân khúc: Từ xe 4 chỗ, 7 chỗ đến 16 chỗ và 29 chỗ. Xe 4 chỗ của chúng tôi đều là xe mới, an toàn, hiện đại và nhiều option phục vụ khách hàng. Xe 4 chỗ: Cerato, Hyundai Elantra, Accent, Vios,",
    },
    {
      id: "xe-7-cho",
      title: "Xe 7 Chỗ",
      image: "/xe-7-cho.jpeg",
      description:
        "Dịch Vụ Xe Ghép Hà Nội Vĩnh Phúc Giá Rẻ là một trong những tuyến xe taxi ghép tiện chuyến trên tuyến đường Hà Nội → Vĩnh Phúc & Vĩnh Phúc → Hà Nội được nhiều khách hàng yêu thích và lựa chọn nhất nhờ chất lượng dịch vụ cao và tiết kiệm đáng kể chi phí đi lại mà vẫn đảm bảo sự thoải mái và tiện lợi. Chúng tôi cung cấp đủ xe ở tất cả các phân khúc: Từ xe 4 chỗ, 7 chỗ đến 16 chỗ và 29 chỗ. Xe 7 chỗ của chúng tôi đều là xe mới, an toàn, hiện đại và nhiều option phục vụ khách hàng. Xe 7 chỗ: Toyota Veloz, Toyota Fortuner, Mitsubishi Xpander,",
    },
    {
      id: "ship-hang-hoa-toc",
      title: "Ship Hàng Hóa Tốc",
      image: "/ship-hang-hoa-toc.jpeg",
      description:
        "Dịch vụ chuyển phát hỏa tốc Vĩnh Phúc → Hà Nội được khách hàng tin dùng như: tài liệu, hồ sơ, bưu phẩm, giấy tờ, hợp đồng, thực phẩm, thiết bị y tế, linh kiện điện tử, đồ gia dụng, may tính, laptop, mỹ phẩm, quần áo, giày dép, túi xách, Alo Xe Ghép cam kết: Giao nhận hàng từ 2-3 tiếng. Giao nhận 24/7, hỗ trợ cả ngày nghỉ. Vận chuyển an toàn, giao hàng tận tay.",
    },
  ];

  const activeService = services.find((service) => service.id === activeTab);

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Dịch Vụ Alo Xe Ghép
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b">
          {services.map((service) => (
            <button
              key={service.id}
              className={`px-6 py-3 font-medium transition-colors duration-300 ${
                activeTab === service.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-dark hover:text-primary"
              }`}
              onClick={() => setActiveTab(service.id)}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeService && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-text-dark mb-4">
                {activeService.title}
              </h3>
              <p className="text-text-dark leading-relaxed">
                {activeService.description}
              </p>
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            onClick={() => {
              openModal();
            }}
            className="bg-primary hover:bg-green-600 text-white py-3 px-8 rounded-md font-medium transition-colors duration-300"
          >
            Đặt Xe Ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
