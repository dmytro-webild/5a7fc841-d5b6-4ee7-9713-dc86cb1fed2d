"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

export default function CustomBuildsPage() {
  const navItems = [
    { name: "Wheelsets", id: "wheelsets" },
    { name: "Custom Builds", id: "custom-builds" },
    { name: "Craftsmanship", id: "craftsmanship" },
    { name: "About", id: "about" },
  ];

  const footerColumns = [
    {
      title: "Products",
      items: [
        { label: "Wheelsets", href: "/wheelsets" },
        { label: "Custom Builds", href: "/custom-builds" },
        { label: "Pricing", href: "/wheelsets" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/craftsmanship" },
        { label: "Our Expertise", href: "/craftsmanship" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Support",
      items: [
        { label: "Contact", href: "/inquiry" },
        { label: "FAQ", href: "#faq" },
        { label: "Warranty", href: "#" },
      ],
    },
    {
      title: "Connect",
      items: [
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Twitter", href: "#" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="mediumLarge"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={navItems}
          brandName="Velocity Wheels"
          button={{
            text: "Request Quote",
            href: "/inquiry",
          }}
        />
      </div>

      <div id="hero-custom-builds" data-section="hero-custom-builds">
        <HeroBillboardCarousel
          title="Custom Wheel Building"
          description="Discover our meticulous hand-building process that transforms your vision into reality."
          background={{ variant: "plain" }}
          buttons={[
            {
              text: "Request Custom Build",
              href: "/inquiry",
            },
          ]}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/female-carpenter-studio-with-headphones_23-2148813327.jpg",
              imageAlt: "Expert wheelbuilder at work",
            },
          ]}
          containerClassName="py-12 md:py-20"
        />
      </div>

      <div id="process-custom-builds" data-section="process-custom-builds">
        <FeatureCardNine
          title="Our Building Process"
          description="From consultation to final delivery, we ensure every step meets our uncompromising standards."
          features={[
            {
              id: 1,
              title: "Consultation & Design",
              description: "We discuss your riding discipline, performance goals, budget, and preferences. Our experts recommend optimal rim depth, hub selection, and spoke configuration for your specific needs.",
              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/mechanic-examining-bicycle-wheel_1170-2575.jpg",
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/back-view-people-talking-about-car_23-2150171274.jpg",
              },
            },
            {
              id: 2,
              title: "Component Selection",
              description: "Premium carbon rims, hub choice, premium spokes (CX-Ray, Champion, etc.), and accessories arrive at our workshop. Each component inspected for quality before assembly begins.",
              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/female-carpenter-studio-with-headphones_23-2148813327.jpg",
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-fixing-chain-bicycle_23-2147874054.jpg",
              },
            },
            {
              id: 3,
              title: "Hand-Built Assembly",
              description: "Our experienced wheelbuilders carefully assemble each wheel with precision. Spokes are laced with expert technique, and the rim is trued for absolute accuracy.",
              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/back-view-people-talking-about-car_23-2150171274.jpg",
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/female-carpenter-studio-with-headphones_23-2148813327.jpg",
              },
            },
            {
              id: 4,
              title: "Tension & Quality Control",
              description: "Each spoke is tension-measured to ±0.5g variance. Wheels undergo rigorous testing: lateral true, radial runout, bearing inspection, and a complete test ride before delivery.",
              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-vector/performance-meter-cog_78370-8338.jpg",
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/crop-man-riding-bicycle_23-2147764124.jpg",
              },
            },
          ]}
          showStepNumbers={true}
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          containerClassName="py-16 md:py-24"
        />
      </div>

      <div id="footer-custom-builds" data-section="footer-custom-builds">
        <FooterBaseCard
          logoText="Velocity Wheels"
          columns={footerColumns}
          copyrightText="© 2025 Velocity Wheels. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}