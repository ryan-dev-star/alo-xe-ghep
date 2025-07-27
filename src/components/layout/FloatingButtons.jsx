import React from "react";

const FloatingButtons = () => {
  return (
    <div
      id="button-contact-vr"
      className="fixed right-4 bottom-4 z-50"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 9999,
      }}
    >
      <div id="gom-all-in-one" className="flex flex-col space-y-3">
        {/* Messenger Button */}
        <div id="facebook-vr" className="button-contact">
          <div className="phone-vr relative">
            <div
              className="phone-vr-circle-fill absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                width: "60px",
                height: "60px",
                animation: "pulseRing 1.5s ease-out infinite",
              }}
            ></div>
            <div
              className="phone-vr-img-circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #1877f2 0%, #166fe5 100%)",
                width: "45px",
                height: "45px",
              }}
            >
              <a
                target="_blank"
                href="https://m.me/61577139680233"
                className="flex items-center justify-center w-full h-full rounded-full"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Zalo Button */}
        <div id="zalo-vr" className="button-contact">
          <div className="phone-vr relative">
            <div
              className="phone-vr-circle-fill absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, #b3e5fc 0%, #81d4fa 100%)",
                width: "60px",
                height: "60px",
                animation: "pulseRing 1.5s ease-out infinite",
                animationDelay: "0.5s",
              }}
            ></div>
            <div
              className="phone-vr-img-circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
                width: "45px",
                height: "45px",
              }}
            >
              <a
                target="_blank"
                href="https://zalo.me/0989523768"
                className="flex items-center justify-center w-full h-full rounded-full"
                rel="noopener noreferrer"
              >
                <div
                  className="rounded-md flex items-center justify-center"
                  style={{
                    background: "white",
                    width: "20px",
                    height: "16px",
                  }}
                >
                  <span
                    className="font-bold"
                    style={{
                      color: "#0ea5e9",
                      fontSize: "10px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Zalo
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Phone Button */}
        <div id="phone-vr" className="button-contact">
          <div className="phone-vr relative">
            <div
              className="phone-vr-circle-fill absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, #bbf7d0 0%, #86efac 100%)",
                width: "60px",
                height: "60px",
                animation: "pulseRing 1.5s ease-out infinite",
                animationDelay: "1s",
              }}
            ></div>
            <div
              className="phone-vr-img-circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                width: "45px",
                height: "45px",
              }}
            >
              <a
                href="tel:0989523768"
                className="flex items-center justify-center w-full h-full rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          40% {
            transform: scale(1.15);
            opacity: 0.4;
          }
          70% {
            transform: scale(1.25);
            opacity: 0.1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        @keyframes wobble {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          10% {
            transform: translate(-50%, -50%) rotate(-15deg);
          }
          20% {
            transform: translate(-50%, -50%) rotate(12deg);
          }
          30% {
            transform: translate(-50%, -50%) rotate(-10deg);
          }
          40% {
            transform: translate(-50%, -50%) rotate(8deg);
          }
          50% {
            transform: translate(-50%, -50%) rotate(-6deg);
          }
          60% {
            transform: translate(-50%, -50%) rotate(4deg);
          }
          70% {
            transform: translate(-50%, -50%) rotate(-2deg);
          }
          80% {
            transform: translate(-50%, -50%) rotate(1deg);
          }
          90% {
            transform: translate(-50%, -50%) rotate(-0.5deg);
          }
        }

        .button-contact {
          position: relative;
          width: 60px;
          height: 60px;
        }

        .phone-vr {
          width: 60px;
          height: 60px;
        }

        .phone-vr-img-circle {
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }

        .phone-vr-img-circle:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
          transform: translate(-50%, -50%) scale(1.1) !important;
        }

        /* Messenger - Wobble animation */
        .button-contact:nth-child(1) .phone-vr-circle-fill {
          animation-delay: 0s;
        }

        .button-contact:nth-child(1) .phone-vr-img-circle {
          animation: wobble 1.2s ease-in-out infinite;
          animation-delay: 0s;
        }

        /* Zalo - Wobble animation */
        .button-contact:nth-child(2) .phone-vr-circle-fill {
          animation-delay: 0.5s;
        }

        .button-contact:nth-child(2) .phone-vr-img-circle {
          animation: wobble 1.2s ease-in-out infinite;
          animation-delay: 0.4s;
        }

        /* Phone - Wobble animation */
        .button-contact:nth-child(3) .phone-vr-circle-fill {
          animation-delay: 1s;
        }

        .button-contact:nth-child(3) .phone-vr-img-circle {
          animation: wobble 1.2s ease-in-out infinite;
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
};

export default FloatingButtons;
