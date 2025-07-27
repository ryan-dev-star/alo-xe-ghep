import React from "react";

// Import components
import HeroSection from "../components/layout/HeroSection";
import FeaturesSection from "../components/layout/FeaturesSection";
import RoutesSection from "../components/layout/RoutesSection";
import AboutSection from "../components/layout/AboutSection";
import PriceSection from "../components/layout/PriceSection";
import ServicesSection from "../components/layout/ServicesSection";
import WhyChooseUsSection from "../components/layout/WhyChooseUsSection";
import TestimonialsSection from "../components/layout/TestimonialsSection";
import BookingForm from "../components/layout/BookingForm";
import NewsSection from "../components/layout/NewsSection";
import CallToAction from "../components/layout/CallToAction";
import NotificationBar from "../components/layout/NotificationBar";
import AdsSection from "../components/layout/AdsSection";

const HomePage = ({ openModal }) => {
  return (
    <main>
      <HeroSection />
      <AdsSection />
      {/* <FeaturesSection /> */}
      {/* <RoutesSection /> */}
      <AboutSection openModal={openModal} />
      {/* <PriceSection /> */}
      {/* <ServicesSection openModal={openModal} /> */}
      {/* <WhyChooseUsSection /> */}
      <BookingForm />
      <TestimonialsSection />
      {/* <NewsSection /> */}
      <CallToAction openModal={openModal} />
    </main>
  );
};

export default HomePage;
