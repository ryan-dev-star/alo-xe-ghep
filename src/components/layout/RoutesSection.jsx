import React from 'react';

const RoutesSection = () => {
  const routes = [
    { name: 'Tam Đảo → Hà Nội', link: '/xe-ghep-ha-noi-tam-dao' },
    { name: 'Tam Dương → Hà Nội', link: '/xe-ghep-tam-duong-ha-noi' },
    { name: 'Lập Thạch → Hà Nội', link: '/xe-ghep-lap-thach-ha-noi' },
    { name: 'Sông Lô → Hà Nội', link: '/xe-ghep-song-lo-ha-noi' },
    { name: 'Vĩnh Tường → Hà Nội', link: '/xe-ghep-vinh-tuong-ha-noi' },
    { name: 'Vĩnh Phuc → Hà Nội', link: '/xe-ghep-vinh-phuc-ha-noi' },
    { name: 'Yên Lạc → Hà Nội', link: '/xe-ghep-yen-lac-ha-noi' },
    { name: 'Vĩnh Yên → Hà Nội', link: '/xe-ghep-vinh-yen-ha-noi' },
    { name: 'Phúc Yên → Hà Nội', link: '/xe-ghep-phuc-yen-ha-noi' },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Tuyến Cố Định Vĩnh Phúc Hà Nội</h2>
          <div className="flex items-center justify-center mb-4">
            <span className="h-1 w-24 bg-green-600 rounded-full"></span>
          </div>
          <p className="text-gray-600 text-lg">
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Xe Chạy Linh Hoạt, 30 Phút 1 Chuyến
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <a
              key={index}
              href={route.link}
              className="group relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute w-1 h-full bg-green-600 left-0 top-0"></div>
              <div className="flex items-center p-4 pl-5">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {route.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-700">Đặt xe ngay</p>
                </div>
                <div className="flex-shrink-0 ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoutesSection;