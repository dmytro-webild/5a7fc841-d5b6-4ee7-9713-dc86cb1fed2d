"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import Link from "next/link";
import { Award, Sparkles, Zap, Shield } from "lucide-react";

export default function HomePage() {
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

      <div id="hero-home" data-section="hero-home">
        <HeroBillboardCarousel
          title="Custom Carbon Wheelsets Built for Speed"
          description="Precision-built track wheelsets and performance road wheels crafted by experienced wheelbuilders. Every rim tensioned to perfection."
          background={{
            variant: "plain",
          }}
          buttons={[
            {
              text: "View Wheelsets",
              href: "/wheelsets",
            },
            {
              text: "Request a Build",
              href: "/inquiry",
            },
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwuRYrHUeRO0zxmqQtchlcmAOo/uploaded-1773518889849-2s30380l.jpg",
              imageAlt: "Premium carbon track wheels on velodrome",
            },
          ]}
          containerClassName="py-20 md:py-32"
          titleClassName="text-5xl md:text-7xl font-bold tracking-tight"
          descriptionClassName="text-lg md:text-xl text-foreground/80 max-w-2xl"
          buttonContainerClassName="flex gap-4 flex-wrap"
          buttonClassName="px-6 py-3 rounded-lg font-semibold"
          mediaWrapperClassName="w-full h-96 md:h-full"
        />
      </div>

      <div id="about-home" data-section="about-home">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",
              content: "Precision Engineering Meets Artisan Craftsmanship",
            },
          ]}
          useInvertedBackground={false}
          buttons={[
            {
              text: "Learn Our Process",
              href: "/craftsmanship",
            },
          ]}
          containerClassName="py-16 md:py-24"
          headingClassName="text-4xl md:text-5xl font-bold mb-8"
          imageWrapperClassName="rounded-2xl overflow-hidden"
          imageClassName="w-full h-96 object-cover"
        />
      </div>

      <div id="specialization-home" data-section="specialization-home">
        <FeatureCardNine
          title="Track Cycling Specialists"
          description="With decades of combined experience in velodrome racing, we understand the unique demands of track cycling. Our wheelsets are engineered for sprint power, pursuit endurance, and keirin dominance."
          features={[
            {
              id: 1,
              title: "Sprint Power",
              description: "Stiff, responsive wheels designed for explosive acceleration and maximum power transfer.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwuRYrHUeRO0zxmqQtchlcmAOo/uploaded-1773518889849-xcy1fvyu.jpg",
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwuRYrHUeRO0zxmqQtchlcmAOo/uploaded-1773521884082-jeagjs15.jpg",
              },
            },
            {
              id: 2,
              title: "Aerodynamic Excellence",
              description: "Deep-section rims and optimized spoke patterns minimize drag without sacrificing stability.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwuRYrHUeRO0zxmqQtchlcmAOo/uploaded-1773518889849-50yn3nzk.jpg",
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwuRYrHUeRO0zxmqQtchlcmAOo/uploaded-1773518889848-t57wuezx.jpg",
              },
            },
            {
              id: 3,
              title: "Reliability",
              description: "Hand-built to exacting standards with meticulous quality control. Built to last through intense training and competition.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwuRYrHUeRO0zxmqQtchlcmAOo/uploaded-1773521882605-2qirqjfb.webp",
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwuRYrHUeRO0zxmqQtchlcmAOo/uploaded-1773518889849-dfaphvgx.jpg",
              },
            },
          ]}
          showStepNumbers={true}
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          containerClassName="py-16 md:py-24"
          textBoxTitleClassName="text-3xl md:text-4xl font-bold mb-6"
          textBoxDescriptionClassName="text-foreground/70 text-lg mb-12"
        />
      </div>

      <div id="featured-products" data-section="featured-products">
        <ProductCardThree
          title="Featured Wheelsets"
          description="Handpicked selections from our premium collection. Each wheelset represents the pinnacle of carbon wheel engineering."
          products={[
            {
              id: "track-pro-disc",
              name: "Track Pro Carbon Disc / 5-Spoke Combo",
              price: "$1,950",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwuRYrHUeRO0zxmqQtchlcmAOo/uploaded-1773521782424-m6d2dthw.webp",
              imageAlt: "Track Pro disc wheel with 5-spoke front",
            },
            {
              id: "track-aero-deep",
              name: "Track Aero Deep Set",
              price: "$1,200",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwuRYrHUeRO0zxmqQtchlcmAOo/uploaded-1773521782423-hsq0gw2b.webp",
              imageAlt: "88mm deep carbon wheelset",
            },
            {
              id: "track-training",
              name: "Track Training Wheelset",
              price: "$680",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwuRYrHUeRO0zxmqQtchlcmAOo/uploaded-1773521782424-m6d2dthw.webp",
              imageAlt: "Durable training wheelset",
            },
            {
              id: "road-aero",
              name: "Road Aero Carbon",
              price: "$1,100",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwuRYrHUeRO0zxmqQtchlcmAOo/uploaded-1773521782424-82v5xau8.jpg",
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
          cardNameClassName="text-xl font-semibold mt-4"
          imageClassName="w-full h-80 object-cover rounded-lg"
        />
      </div>

      <div id="metrics-home" data-section="metrics-home">
        <MetricCardSeven
          title="By The Numbers"
          description="Our commitment to excellence, measured in precision and performance."
          metrics={[
            {
              id: "1",
              value: "2000+",
              title: "Wheelsets Built",
              items: [
                "Custom and pre-built configurations",
                "Track and road specialization",
                "Global customer base",
              ],
            },
            {
              id: "2",
              value: "±0.5g",
              title: "Spoke Tension Variance",
              items: [
                "Precision tensioning standards",
                "Uniform stiffness distribution",
                "Long-term spoke durability",
              ],
            },
            {
              id: "3",
              value: "15+ Years",
              title: "Combined Experience",
              items: [
                "Master wheelbuilders on staff",
                "Track racing background",
                "Continuous innovation",
              ],
            },
            {
              id: "4",
              value: "100%",
              title: "Hand-Built",
              items: [
                "No mass production shortcuts",
                "Individual inspection & testing",
                "Premium material selection",
              ],
            },
          ]}
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          containerClassName="py-16 md:py-24"
          textBoxTitleClassName="text-3xl md:text-4xl font-bold mb-4"
          textBoxDescriptionClassName="text-foreground/70 text-lg mb-12"
          valueClassName="text-5xl md:text-6xl font-bold text-accent mb-2"
          metricTitleClassName="text-xl font-semibold mb-4"
          featureItemClassName="text-foreground/70 text-sm"
        />
      </div>

      <div id="testimonials-home" data-section="testimonials-home">
        <TestimonialCardSix
          title="Trusted by Elite Riders"
          description="Hear from professional racers and passionate cyclists who depend on our wheelsets."
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              handle: "@sarahchen_velodrome",
              testimonial: "These wheels gave me the confidence to push harder in sprints. The precision in tension is absolutely noticeable. World-class craftsmanship.",
              imageSrc: "http://img.b2bpic.net/free-photo/man-cycling-outdoors-with-his-bike_23-2149748602.jpg?_wi=2",
              icon: Sparkles,
            },
            {
              id: "2",
              name: "Marcus Thompson",
              handle: "@marcus_track_coach",
              testimonial: "After 5 years coaching elite track cyclists, I recommend Velocity to every serious rider. No compromise on quality.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-fixing-chain-bicycle_23-2147874054.jpg?_wi=3",
              icon: Award,
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              handle: "@elena_pursuit_specialist",
              testimonial: "The 88mm deep set is my go-to for pursuit events. Incredible aero efficiency without losing responsiveness. Highly recommend.",
              imageSrc: "http://img.b2bpic.net/free-photo/crop-man-riding-bicycle_23-2147764124.jpg?_wi=3",
              icon: Zap,
            },
            {
              id: "4",
              name: "James Wickham",
              handle: "@wickham_cycling",
              testimonial: "Every weekend at the velodrome with these wheels. Been through hundreds of kilometers and they still roll perfectly. Best investment.",
              imageSrc: "http://img.b2bpic.net/free-vector/performance-meter-cog_78370-8338.jpg?_wi=3",
              icon: Shield,
            },
            {
              id: "5",
              name: "Priya Patel",
              handle: "@priya_road_racer",
              testimonial: "Switched to Velocity for my road racing. The attention to detail and customer service is exceptional. These wheels changed my times.",
              imageSrc: "http://img.b2bpic.net/free-photo/bike-creation-workshop_23-2148866630.jpg?_wi=2",
              icon: Award,
            },
            {
              id: "6",
              name: "Viktor Sokolov",
              handle: "@viktor_sprinter",
              testimonial: "Professional-grade quality at an honest price. The custom build process was seamless. Highly recommended for serious competitors.",
              imageSrc: "http://img.b2bpic.net/free-photo/back-view-people-talking-about-car_23-2150171274.jpg?_wi=3",
              icon: Sparkles,
            },
          ]}
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={50}
          containerClassName="py-16 md:py-24"
          textBoxTitleClassName="text-3xl md:text-4xl font-bold mb-4"
          textBoxDescriptionClassName="text-foreground/70 text-lg mb-12"
          nameClassName="font-semibold text-foreground"
          handleClassName="text-foreground/60 text-sm"
          testimonialClassName="text-foreground/80"
        />
      </div>

      <div id="faq-home" data-section="faq-home">
        <FaqBase
          title="Common Questions"
          description="Everything you need to know about our wheelsets and custom builds."
          faqs={[
            {
              id: "1",
              title: "What makes your track wheelsets different?",
              content: "Our wheelsets combine aerodynamic design with precision engineering. Each wheel is hand-built with meticulous spoke tensioning (±0.5g variance), ensuring uniform stiffness and power transfer. We specialize in track cycling demands: explosive sprints, sustained pursuits, and reliable keirin performance.",
            },
            {
              id: "2",
              title: "How long does a custom build take?",
              content: "Standard custom builds typically take 2-3 weeks from consultation to delivery. Rush orders (1-2 weeks) are available with a small upcharge. We'll provide a timeline during your initial consultation based on component availability and customization complexity.",
            },
            {
              id: "3",
              title: "Do you offer warranties?",
              content: "All our wheelsets come with a 2-year warranty covering manufacturing defects and spoke breakage under normal use. Our warranty covers rim issues, hub problems, and spoke failures. Warranty doesn't cover impact damage or extreme abuse.",
            },
            {
              id: "4",
              title: "Can I customize components?",
              content: "Absolutely. We offer extensive customization: rim depth (40-88mm+), hub selection, spoke type (CX-Ray, Champion, etc.), spoke count (16, 18, 20, 24), and finish options (matte, gloss, polished). Our consultation process helps you select the ideal configuration for your discipline.",
            },
            {
              id: "5",
              title: "What's your process for wheel quality control?",
              content: "Every wheelset undergoes rigorous inspection: spoke tension measurement, lateral and radial true checks, hub bearing inspection, and a 30-minute test ride. We document each wheel's specifications so you have complete transparency on your build.",
            },
            {
              id: "6",
              title: "Do you ship internationally?",
              content: "Yes, we ship worldwide via tracked courier. International orders include customs documentation and insurance. Contact us for specific shipping costs to your location.",
            },
          ]}
          faqsAnimation="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          containerClassName="py-16 md:py-24"
          textBoxTitleClassName="text-3xl md:text-4xl font-bold mb-4"
          textBoxDescriptionClassName="text-foreground/70 text-lg mb-12"
          accordionTitleClassName="font-semibold text-lg"
          accordionContentClassName="text-foreground/70 text-base"
        />
      </div>

      <div id="footer-home" data-section="footer-home">
        <FooterBaseCard
          logoText="Velocity Wheels"
          columns={footerColumns}
          copyrightText="© 2025 Velocity Wheels. All rights reserved."
          containerClassName="py-12 md:py-16"
          columnTitleClassName="font-semibold text-lg mb-4"
          columnItemClassName="text-foreground/70 hover:text-foreground transition-colors"
        />
      </div>
    </ThemeProvider>
  );
}