import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Thảo Vy",
      location: "Lập Thạch",
      avatar: "1.jpg",
      rating: 5,
      title: "Tiện Lợi & Đúng Giờ",
      comment:
        "Mình biết đến Alo Xe Ghép qua người quen giới thiệu. Xe đến đúng giờ, không phải chờ đợi lâu, rất tiện khi cần di chuyển gấp. Sẽ tiếp tục sử dụng trong những chuyến sau.",
    },
    {
      id: 2,
      name: "Phạm Duy Khánh",
      location: "Vĩnh Tường",
      avatar: "/avatar-2.jpeg",
      rating: 5,
      title: "Dịch Vụ Chuyên Nghiệp",
      comment:
        "Mình đánh giá cao sự chuyên nghiệp từ cách đặt xe cho đến khi kết thúc chuyến đi. Lái xe lịch sự, không nói chuyện ồn ào và lái rất an toàn. Rất đáng tin cậy.",
    },
    {
      id: 3,
      name: "Lê Hoàng Ngọc",
      location: "Bình Xuyên",
      avatar: "/avatar-3.jpeg",
      rating: 5,
      title: "Xe Sạch Sẽ & Rộng Rãi",
      comment:
        "Chuyến đi của mình rất thoải mái vì xe rộng, ghế ngồi êm và sạch sẽ. Lái xe vui vẻ, nhiệt tình hỗ trợ hành khách. Mình không hề bị say xe như trước đây.",
    },
    {
      id: 4,
      name: "Vũ Minh Trang",
      location: "Sông Lô",
      avatar: "/avatar-4.jpeg",
      rating: 5,
      title: "Đáng Tin Cậy & An Toàn",
      comment:
        "Tôi thường xuyên đi công tác và luôn chọn Alo Xe Ghép. Chưa lần nào bị trễ giờ hay phát sinh chi phí. Cảm giác rất an tâm mỗi khi sử dụng dịch vụ.",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Khách Hàng Đánh Giá
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-text-dark">
                    {testimonial.title}
                  </h3>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-text-light mb-4">{testimonial.comment}</p>

              <div className="flex justify-between items-center">
                <div className="font-medium text-text-dark">
                  {testimonial.name}
                </div>
                <div className="text-sm text-text-light">
                  / {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
