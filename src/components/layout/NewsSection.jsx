import React from 'react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Du lịch Tam Đảo: Hành trình khám phá và Cách di chuyển',
      image: '/news-1.jpeg',
      date: '27 Th4',
      excerpt: 'Tam Đảo là 1 trong những địa điểm du lịch có nhiều tín đồ du...',
      link: '/tin-moi/du-lich-tam-dao.html'
    },
    {
      id: 2,
      title: 'Xe ghép Hà Nội Phúc Yên Vĩnh Phúc: Giá siêu rẻ, tiện lợi.',
      image: '/news-2.jpeg',
      date: '15 Th4',
      excerpt: 'Bạn đang có nhu cầu di chuyển từ Hà Nội đến Phúc Yên Vĩnh Phúc...',
      link: '/tin-moi/xe-ghep-ha-noi-phuc-yen-vinh-phuc.html'
    },
    {
      id: 3,
      title: 'Taxi Tiện Chuyến Vĩnh Phúc Hà Nội Giá Rẻ - Chỉ Từ 200K',
      image: '/news-3.svg',
      date: '07 Th3',
      excerpt: 'Xe taxi tiện chuyến Vĩnh Phúc → Hà Nội đã trở thành một dịch vụ...',
      link: '/tin-moi/taxi-tien-chuyen-vinh-phuc-ha-noi-gia-re.html'
    },
    {
      id: 4,
      title: 'Xe Ghép Hà Nội Tam Dương Vĩnh Phúc Giá Rẻ - Phục Vụ 24/7',
      image: '/news-4.svg',
      date: '28 Th2',
      excerpt: 'Trong thế giới bận rộn ngày nay, thời gian và tiền bạc là rất quan...',
      link: '/tin-moi/xe-ghep-ha-noi-tam-duong-vinh-phuc.html'
    }
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-text-dark">Tin Mới Nhất</h2>
          <a
            href="/tin-moi"
            className="text-primary hover:underline font-medium flex items-center"
          >
            Xem Thêm
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <a href={item.link} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white text-sm font-medium py-1 px-2 rounded">
                    {item.date}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-text-dark mb-2 line-clamp-2 hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-text-light text-sm line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
