import React from "react";

const PriceSection = () => {
  const routes = [
    {
      route: "Xe Taxi Ghép Vĩnh Phúc < = > Hà Nội",
      price: "150k / Ghế",
    },
    {
      route: "Xe Taxi Ghép Vĩnh Phúc < = > Hải Phòng",
      price: "600k / Ghế",
    },
    {
      route: "Xe Taxi Ghép Vĩnh Phúc < = > Thanh Hóa",
      price: "550k / Ghế",
    },
    {
      route: "Xe Taxi Ghép Vĩnh Phúc < = > Hưng Yên",
      price: "350k / Ghế",
    },
    {
      route: "Xe Taxi Ghép Vĩnh Phúc < = > Bác Ninh",
      price: "300k / Ghế",
    },
  ];
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Bảng Giá Alo Xe Ghép
          </h2>
          <p className="text-text-light max-w-3xl mx-auto text-justify ">
            Giá vé Alo Xe Ghép Hà Nội phụ thuộc vào nhiều yếu tố như tuyến đường
            di chuyển, thời điểm khởi hành, loại xe và số lượng người đi. Tuy
            nhiên, giá vé xe taxi ghép tiện chuyến Vĩnh Phúc Hà Nội thường ở mức
            khá rẻ, chỉ từ{" "}
            <strong className="text-primary">150,000 đồng</strong> cho một
            chuyến đi.
          </p>
        </div>

        {/* Route Pricing Table */}
        <div className="overflow-x-auto mb-10">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-green-2 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Tuyến Đường</th>
                <th className="py-3 px-4 text-center">Giá Chỉ Từ</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="py-3 px-4 border-t font-medium">
                    {route.route}
                  </td>
                  <td className="py-3 px-4 border-t text-center">
                    {route.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-text-light text-center mb-10">
          Giá trên bao gồm: Xăng xe, lái xe, phí cầu đường, nước uống trên xe.
        </p>

        {/* Services Pricing Table */}
        <p className="text-text-dark mb-6 leading-relaxed text-justify">
          Không chỉ cung cấp dịch vụ đưa đón hành khách bằng xe ghép giữa{" "}
          <strong>Vĩnh Phúc</strong> -{" "}
          <strong>Hà Nội, Hải Phòng, Thanh Hóa, Hưng Yên, Bắc Ninh</strong>,{" "}
          <strong className="text-primary">Alo Xe Ghép</strong> còn mang đến
          nhiều lựa chọn linh hoạt khác như:{" "}
          <strong>
            xe đưa đón sân bay, xe taxi đi tỉnh, xe hợp đồng du lịch, dịch vụ
            ship hàng hóa tốc,
          </strong>{" "}
          với mức giá cạnh tranh nhất thị trường.
        </p>
      </div>
    </div>
  );
};

export default PriceSection;
