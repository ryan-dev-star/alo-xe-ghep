// Các hằng số sử dụng trong ứng dụng

export const PHONE_NUMBER = "0989523768";
export const EMAIL = "contact@xeghepgiare.vn";
export const ADDRESS = "Định Trung, Vĩnh Yên, Vĩnh Phúc";
export const WEBSITE_URL = "https://aloxegheplientinh.com";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/61577139680233",
  twitter: "https://www.twitter.com/xeghepgiare",
  youtube: "https://www.youtube.com/channel/UC7VoTI_NmJLDOLuNNe36QAg",
  zalo: "https://zalo.me/0989523768",
  messenger: "https://m.me/xeghepgiare.vn",
};

export const ROUTES = [
  { name: "Trang chủ", path: "/" },
  { name: "Giới Thiệu", path: "/gioi-thieu" },
  {
    name: "Dịch Vụ Xe Ghép",
    path: "/dich-vu",
    subRoutes: [
      { name: "Alo Xe Ghép Hà Nội", path: "/xe-ghep-vinh-phuc-ha-noi" },
      { name: "Xe Ghép Vĩnh Yên Hà Nội", path: "/xe-ghep-vinh-yen-ha-noi" },
      { name: "Xe Ghép Hà Nội Tam Đảo", path: "/xe-ghep-ha-noi-tam-dao" },
      { name: "Xe ghép Tam Dương Hà Nội", path: "/xe-ghep-tam-duong-ha-noi" },
      { name: "Xe ghép Lập Thạch Hà Nội", path: "/xe-ghep-lap-thach-ha-noi" },
      { name: "Xe ghép Sông Lô Hà Nội", path: "/xe-ghep-song-lo-ha-noi" },
      { name: "Xe ghép Hà Nội Vĩnh Tường", path: "/xe-ghep-ha-noi-vinh-tuong" },
      { name: "Xe ghép Yên Lạc Hà Nội", path: "/xe-ghep-yen-lac-ha-noi" },
      { name: "Xe ghép Bình Xuyên Hà Nội", path: "/xe-ghep-binh-xuyen-ha-noi" },
      { name: "Xe Ghép Phúc Yên Hà Nội", path: "/xe-ghep-phuc-yen-ha-noi" },
    ],
  },
  { name: "Đặt Xe", path: "/#dat-xe" },
  { name: "Liên Hệ", path: "/lien-he" },
];

export const PRICE_TABLE = {
  routes: [
    {
      route: "Xe Taxi Ghép Vĩnh Yên → Hà Nội",
      price4: "200,000",
      price7: "200,000",
      price16: "200,000",
    },
    {
      route: "Xe Taxi Ghép Tam Đảo → Hà Nội",
      price4: "250,000",
      price7: "250,000",
      price16: "250,000",
    },
    {
      route: "Xe Taxi Ghép Tam Dương → Hà Nội",
      price4: "200,000",
      price7: "200,000",
      price16: "200,000",
    },
    {
      route: "Xe Taxi Ghép Lập Thạch → Hà Nội",
      price4: "250,000",
      price7: "250,000",
      price16: "250,000",
    },
    {
      route: "Xe Taxi Ghép Sông Lô → Hà Nội",
      price4: "300,000",
      price7: "300,000",
      price16: "300,000",
    },
    {
      route: "Xe Taxi Ghép Vĩnh Tường → Hà Nội",
      price4: "200,000",
      price7: "200,000",
      price16: "200,000",
    },
    {
      route: "Xe Taxi Ghép Yên Lạc → Hà Nội",
      price4: "200,000",
      price7: "200,000",
      price16: "200,000",
    },
    {
      route: "Xe Taxi Ghép Bình Xuyên → Hà Nội",
      price4: "200,000",
      price7: "200,000",
      price16: "200,000",
    },
    {
      route: "Xe Taxi Ghép Phúc Yên → Hà Nội",
      price4: "200,000",
      price7: "200,000",
      price16: "200,000",
    },
  ],
  services: [
    {
      service: "Taxi Đi Tỉnh",
      price4: "Chỉ Từ 10,000/KM",
      price7: "Chỉ Từ 10,000/KM",
      price16: "Chỉ Từ 10,000/KM",
    },
    {
      service: "Đưa Đón Sân Bay",
      price4: "Chỉ Từ 300K Tùy Điểm",
      price7: "Chỉ Từ 400K Tùy Điểm",
      price16: "Chỉ Từ 500K Tùy Điểm",
    },
    {
      service: "Hợp Đồng Du Lịch",
      price4: "Liên Hệ Để Báo Giá",
      price7: "Liên Hệ Để Báo Giá",
      price16: "Liên Hệ Để Báo Giá",
    },
    {
      service: "Giá Bao Xe Taxi Ghép",
      price4: "Chỉ Từ 400K Tùy Điểm",
      price7: "Chỉ Từ 500K Tùy Điểm",
      price16: "Chỉ Từ 1500K Tùy Điểm",
    },
    {
      service: "Ship Hàng Hóa Tốc",
      price4: "Chỉ Từ 100K/Đơn",
      price7: "Chỉ Từ 100K/Đơn",
      price16: "Chỉ Từ 100K/Đơn",
    },
  ],
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Diệu Linh",
    location: "Tam Đảo",
    avatar:
      "https://res.cloudinary.com/dnle0cwhv/image/upload/v1748710699/minhlien_q34fsy.jpg",
    rating: 5,
    title: "Dịch Vụ Tốt & Tiện Lợi",
    comment:
      "Mình biết đến dịch vụ Alo Xe Ghép tiện chuyến Vĩnh Phúc Hà Nội từ facebook thấy thực sự tiện lợi. Thời gian chờ đúng, tiết kiệm chi phí, không phải chen lấn, xô đẩy.",
  },
  {
    id: 2,
    name: "Trần Bình An",
    location: "Yên Lạc",
    avatar: "/avatar-2.jpeg",
    rating: 5,
    title: "Phục Vụ Tận Tình & Đúng Giá",
    comment:
      "Rất ấn tượng bởi sự phục vụ tận tình và phong cách làm việc từ các bạn lái xe bên mình. Lịch trình trong suốt thời gian tôi di chuyển luôn được đảm bảo thời gian, không phát sinh chi phí. Rất ủng hộ bên mình.",
  },
  {
    id: 3,
    name: "Bé Kim Ngân",
    location: "Vĩnh Yên",
    avatar: "/avatar-3.jpeg",
    rating: 5,
    title: "Lái Xe Thân Thiện",
    comment:
      "Tôi có các con đặt xe trong một lần ra sân bay. Trong quá trình di chuyển tôi thấy dịch vụ tốt, lái xe vui tính hướng dẫn tôi rất nhiều. Xe sạch sẽ, rộng rãi khiến tôi không còn bị tình trạng say xe.",
  },
  {
    id: 4,
    name: "Chị Hạnh",
    location: "Tam Dương",
    avatar: "/avatar-4.jpeg",
    rating: 5,
    title: "Giá Tốt & Dịch Vụ Tốt",
    comment:
      "Xe chạy đúng giờ, đúng tuyến, giá cả phải chăng. Thái độ tài xế nhiệt tình thân thiện, mình rất hài lòng, giá vé quá là ok giá xe đón tận nhà, đỡ vất vả hơn nhiều. Sẽ giới thiệu để nhiều người biết đến.",
  },
];

export const NEWS = [
  {
    id: 1,
    title: "Du lịch Tam Đảo: Hành trình khám phá và Cách di chuyển",
    image: "/news-1.jpeg",
    date: "27 Th4",
    excerpt: "Tam Đảo là 1 trong những địa điểm du lịch có nhiều tín đồ du...",
    link: "/tin-moi/du-lich-tam-dao.html",
  },
  {
    id: 2,
    title: "Xe ghép Hà Nội Phúc Yên Vĩnh Phúc: Giá siêu rẻ, tiện lợi.",
    image: "/news-2.jpeg",
    date: "15 Th4",
    excerpt:
      "Bạn đang có nhu cầu di chuyển từ Hà Nội đến Phúc Yên Vĩnh Phúc...",
    link: "/tin-moi/xe-ghep-ha-noi-phuc-yen-vinh-phuc.html",
  },
  {
    id: 3,
    title: "Taxi Tiện Chuyến Vĩnh Phúc Hà Nội Giá Rẻ - Chỉ Từ 200K",
    image: "/news-3.svg",
    date: "07 Th3",
    excerpt:
      "Xe taxi tiện chuyến Vĩnh Phúc → Hà Nội đã trở thành một dịch vụ...",
    link: "/tin-moi/taxi-tien-chuyen-vinh-phuc-ha-noi-gia-re.html",
  },
  {
    id: 4,
    title: "Xe Ghép Hà Nội Tam Dương Vĩnh Phúc Giá Rẻ - Phục Vụ 24/7",
    image: "/news-4.svg",
    date: "28 Th2",
    excerpt:
      "Trong thế giới bận rộn ngày nay, thời gian và tiền bạc là rất quan...",
    link: "/tin-moi/xe-ghep-ha-noi-tam-duong-vinh-phuc.html",
  },
];
