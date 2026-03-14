"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

export default function WheelsetsPage() {
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

      <div id="hero-wheelsets" data-section="hero-wheelsets">
        <HeroBillboardCarousel
          title="Premium Carbon Wheelsets"
          description="Explore our collection of custom and pre-built wheelsets designed for track and road racing. Each wheelset engineered for performance."
          background={{
            variant: "plain",
          }}
          buttons={[
            {
              text: "Request Custom Build",
              href: "/inquiry",
            },
          ]}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-fixing-chain-bicycle_23-2147874054.jpg",
              imageAlt: "Track Pro disc wheel",
            },
          ]}
          containerClassName="py-12 md:py-20"
          titleClassName="text-4xl md:text-6xl font-bold tracking-tight"
          descriptionClassName="text-base md:text-lg text-foreground/80 max-w-2xl"
        />
      </div>

      <div id="products-wheelsets" data-section="products-wheelsets">
        <ProductCardThree
          title="All Wheelsets"
          description="Browse our complete lineup of track and road wheelsets. Customize any build to your specifications."
          products={[
            {
              id: "track-pro-disc",
              name: "Track Pro Carbon Disc / 5-Spoke Combo",
              price: "$1,950",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-fixing-chain-bicycle_23-2147874054.jpg",
              imageAlt: "Track Pro disc wheel with 5-spoke front",
            },
            {
              id: "track-aero-deep",
              name: "Track Aero Deep Set",
              price: "$1,200",
              imageSrc: "http://img.b2bpic.net/free-photo/crop-man-riding-bicycle_23-2147764124.jpg",
              imageAlt: "88mm deep carbon wheelset",
            },
            {
              id: "track-training",
              name: "Track Training Wheelset",
              price: "$680",
              imageSrc: "http://img.b2bpic.net/free-vector/performance-meter-cog_78370-8338.jpg",
              imageAlt: "Durable training wheelset",
            },
            {
              id: "road-aero",
              name: "Road Aero Carbon",
              price: "$1,100",
              imageSrc: "http://img.b2bpic.net/free-photo/bike-creation-workshop_23-2148866630.jpg",
              imageAlt: "60mm carbon aero road wheel",
            },
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          containerClassName="py-16 md:py-24"
          textBoxTitleClassName="text-3xl md:text-4xl font-bold mb-4"
          textBoxDescriptionClassName="text-foreground/70 text-lg mb-12"
        />
      </div>

      <div id="customization-wheelsets" data-section="customization-wheelsets">
        <FeatureCardNine
          title="Customization Options"
          description="Tailor your wheelset to your exact specifications and riding discipline."
          features={[
            {
              id: 1,
              title: "Rim Depth Selection",
              description: "Choose from 40mm, 50mm, 60mm, 70mm, or 88mm+ options for optimal aero performance and handling characteristics.",
              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/crop-man-riding-bicycle_23-2147764124.jpg",
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-vector/performance-meter-cog_78370-8338.jpg",
              },
            },
            {
              id: 2,
              title: "Hub & Component Choice",
              description: "Select from premium hub manufacturers, spoke types (CX-Ray, Champion, DT Competition), and spoke counts tailored to your needs.",
              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/female-carpenter-studio-with-headphones_23-2148813327.jpg",
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/back-view-people-talking-about-car_23-2150171274.jpg",
              },
            },
            {
              id: 3,
              title: "Finish & Aesthetics",
              description: "Matte carbon finish, gloss polish, or custom graphics. Every wheelset can be personalized to match your team or aesthetic.",
              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-fixing-chain-bicycle_23-2147874054.jpg",
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/bike-creation-workshop_23-2148866630.jpg",
              },
            },
          ]}
          showStepNumbers={true}
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          containerClassName="py-16 md:py-24"
          textBoxTitleClassName="text-3xl md:text-4xl font-bold mb-6"
        />
      </div>

      <div id="cta-wheelsets" data-section="cta-wheelsets">
        <ContactSplit
          tag="Ready to Order?"
          title="Start Your Custom Build Today"
          description="Our wheelbuilding team will work with you to create the perfect wheelset for your discipline and goals."
          background={{
            variant: "plain",
          }}
          useInvertedBackground={false}
          mediaAnimation="opacity"
          mediaPosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/mechanic-examining-bicycle-wheel_1170-2575.jpg"
          imageAlt="Professional wheelbuilding workshop"
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          termsText="By contacting us, you agree to our privacy policy and terms of service."
          containerClassName="py-16 md:py-24"
          titleClassName="text-3xl md:text-4xl font-bold mb-4"
          descriptionClassName="text-foreground/70 text-lg mb-8"
        />
      </div>

      <div id="footer-wheelsets" data-section="footer-wheelsets">
        <FooterBaseCard
          logoText="Velocity Wheels"
          columns={footerColumns}
          copyrightText="© 2025 Velocity Wheels. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}