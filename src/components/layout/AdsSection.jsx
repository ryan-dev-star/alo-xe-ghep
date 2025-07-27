import React from "react";

const AdsSection = () => {
  const features = [
    {
      img: "https://res.cloudinary.com/dnle0cwhv/image/upload/v1753578368/aloxeghep-1_apu0h9.png",
    },
    {
      img: "https://res.cloudinary.com/dnle0cwhv/image/upload/v1753578367/aloxeghep-2_v9hrl9.png",
    },
    {
      img: "https://res.cloudinary.com/dnle0cwhv/image/upload/v1753578369/aloxeghep-3_tlzahk.png",
    },
  ];

  return (
    <div className="bg-white pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-center mb-8">
              <img
                src={feature.img}
                alt="Alo Xe Ghép"
                className="rounded-lg shadow-md w-full max-w-2xl"
                onError={(e) => {
                  e.target.src =
                    "hhttps://res.cloudinary.com/dnle0cwhv/image/upload/v1753610874/aloxeghep-logo_crjoq7.png";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdsSection;
