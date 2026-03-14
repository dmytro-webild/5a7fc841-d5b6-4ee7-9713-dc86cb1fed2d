"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

export default function InquiryPage() {
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

      <div id="hero-inquiry" data-section="hero-inquiry">
        <HeroBillboardCarousel
          title="Request Your Custom Build"
          description="Let's create the perfect wheelset for your racing discipline and goals."
          background={{ variant: "plain" }}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/mechanic-examining-bicycle-wheel_1170-2575.jpg",
              imageAlt: "Professional wheelbuilding workshop",
            },
          ]}
          containerClassName="py-12 md:py-20"
        />
      </div>

      <div id="contact-inquiry" data-section="contact-inquiry">
        <ContactSplit
          tag="Get in Touch"
          title="Send Your Build Inquiry"
          description="We'll review your request and discuss the best wheelset options for your needs. Expect a response within 24 hours."
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          mediaAnimation="opacity"
          mediaPosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/female-carpenter-studio-with-headphones_23-2148813327.jpg"
          imageAlt="Wheelbuilding workshop"
          inputPlaceholder="Enter your email"
          buttonText="Send Build Inquiry"
          termsText="By submitting this form, you agree to our privacy policy and terms of service."
          containerClassName="py-16 md:py-24"
          titleClassName="text-3xl md:text-4xl font-bold mb-4"
          descriptionClassName="text-foreground/70 text-lg mb-8"
        />
      </div>

      <div id="faq-inquiry" data-section="faq-inquiry">
        <FaqBase
          title="Frequently Asked Questions"
          description="Got questions about custom builds? We've got answers."
          faqs={[
            {
              id: "1",
              title: "What information do you need for a custom build inquiry?",
              content: "We'll ask about your riding discipline (track sprint, pursuit, keirin, road, etc.), desired rim depth, hub preferences, spoke type, custom features, and budget. This helps our team recommend the perfect configuration for your needs.",
            },
            {
              id: "2",
              title: "How quickly can you respond to inquiries?",
              content: "We respond to all build inquiries within 24 hours (usually within 4-6 hours during business days). Our team will provide detailed recommendations and a customized quote.",
            },
            {
              id: "3",
              title: "Do you offer payment plans?",
              content: "Yes, we offer flexible payment options for custom builds over $1,200. Contact us with your build details to discuss payment arrangements that work for you.",
            },
            {
              id: "4",
              title: "What's the typical timeline from inquiry to delivery?",
              content: "Standard builds take 2-3 weeks from inquiry to delivery. We can accommodate rush orders (1-2 weeks) for an additional fee, subject to component availability.",
            },
            {
              id: "5",
              title: "Can I see photos of completed builds?",
              content: "Absolutely! During your consultation, we can show you previous builds and provide references from other cyclists. We pride ourselves on transparency throughout the process.",
            },
            {
              id: "6",
              title: "What if I need support after my purchase?",
              content: "All our wheelsets come with 2-year manufacturing warranty and comprehensive support. We're here to help with maintenance advice, spoke adjustments, and long-term wheel care.",
            },
          ]}
          faqsAnimation="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          containerClassName="py-16 md:py-24"
          textBoxTitleClassName="text-3xl md:text-4xl font-bold mb-4"
        />
      </div>

      <div id="footer-inquiry" data-section="footer-inquiry">
        <FooterBaseCard
          logoText="Velocity Wheels"
          columns={footerColumns}
          copyrightText="© 2025 Velocity Wheels. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}