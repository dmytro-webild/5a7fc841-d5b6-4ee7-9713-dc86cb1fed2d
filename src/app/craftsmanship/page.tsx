"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import { Sparkles, Award, Zap, Shield } from "lucide-react";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import TeamCardEleven from "@/components/sections/team/TeamCardEleven";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

export default function CraftsmanshipPage() {
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

      <div id="hero-craftsmanship" data-section="hero-craftsmanship">
        <HeroBillboardCarousel
          title="Our Expertise & Craftsmanship"
          description="Built by experienced wheelbuilders with a passion for precision and performance."
          background={{ variant: "plain" }}
          buttons={[
            {
              text: "Learn More",
              href: "#expertise",
            },
          ]}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/female-carpenter-studio-with-headphones_23-2148813327.jpg?_wi=6",
              imageAlt: "Expert wheelbuilder at work",
            },
          ]}
          containerClassName="py-12 md:py-20"
        />
      </div>

      <div id="team-craftsmanship" data-section="team-craftsmanship">
        <TeamCardEleven
          title="Meet Our Team"
          description="Experienced wheelbuilders dedicated to precision and performance."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="opacity"
          groups={[
            {
              id: "builders",
              groupTitle: "Master Wheelbuilders",
              members: [
                {
                  id: "1",
                  title: "James Mitchell",
                  subtitle: "Head Wheelbuilder",
                  detail: "15+ years building track wheels. Former professional track cyclist. Specializes in sprint and pursuit wheelsets.",
                  imageSrc: "http://img.b2bpic.net/free-photo/female-carpenter-studio-with-headphones_23-2148813327.jpg?_wi=7",
                },
                {
                  id: "2",
                  title: "Sofia Rossi",
                  subtitle: "Senior Wheelbuilder",
                  detail: "12 years of precision building experience. Expert in aerodynamic wheel design and custom configurations.",
                  imageSrc: "http://img.b2bpic.net/free-photo/back-view-people-talking-about-car_23-2150171274.jpg?_wi=7",
                },
                {
                  id: "3",
                  title: "Kaito Tanaka",
                  subtitle: "Master Technician",
                  detail: "Specializes in high-tension builds and carbon rim expertise. Obsessive about quality control and spoke tensioning.",
                  imageSrc: "http://img.b2bpic.net/free-photo/mechanic-examining-bicycle-wheel_1170-2575.jpg?_wi=3",
                },
              ],
            },
          ]}
          containerClassName="py-16 md:py-24"
          textBoxTitleClassName="text-3xl md:text-4xl font-bold mb-4"
          textBoxDescriptionClassName="text-foreground/70 text-lg mb-12"
        />
      </div>

      <div id="expertise-craftsmanship" data-section="expertise-craftsmanship">
        <FeatureCardNine
          title="Built by Experts"
          description="Our commitment to excellence is evident in every wheel we build."
          features={[
            {
              id: 1,
              title: "Track Racing Specialization",
              description: "Deep understanding of track cycling disciplines: sprint, pursuit, keirin, team sprint, omnium. Every wheelset engineered for specific race demands.",
              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-fixing-chain-bicycle_23-2147874054.jpg?_wi=8",
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/crop-man-riding-bicycle_23-2147764124.jpg?_wi=7",
              },
            },
            {
              id: 2,
              title: "Materials That Matter",
              description: "Premium carbon rims from leading manufacturers. High-quality hubs, premium spokes (Sapim CX-Ray, Champion, DT Competition), and aero-optimized lacing patterns.",
              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/female-carpenter-studio-with-headphones_23-2148813327.jpg?_wi=8",
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/back-view-people-talking-about-car_23-2150171274.jpg?_wi=8",
              },
            },
            {
              id: 3,
              title: "Precision in Every Build",
              description: "Hand-built construction ensures individual attention. Spoke tension balanced to ±0.5g. Every wheel tested and documented. Meticulous quality control from build to delivery.",
              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-vector/performance-meter-cog_78370-8338.jpg?_wi=7",
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/bike-creation-workshop_23-2148866630.jpg?_wi=5",
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

      <div id="testimonials-craftsmanship" data-section="testimonials-craftsmanship">
        <TestimonialCardSix
          title="What Riders Say"
          description="Professional and amateur racers trust us with their most critical equipment."
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              handle: "@sarahchen_velodrome",
              testimonial: "These wheels gave me the confidence to push harder in sprints. The precision in tension is absolutely noticeable. World-class craftsmanship.",
              imageSrc: "http://img.b2bpic.net/free-photo/man-cycling-outdoors-with-his-bike_23-2149748602.jpg?_wi=3",
              icon: Sparkles,
            },
            {
              id: "2",
              name: "Marcus Thompson",
              handle: "@marcus_track_coach",
              testimonial: "After 5 years coaching elite track cyclists, I recommend Velocity to every serious rider. No compromise on quality.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-fixing-chain-bicycle_23-2147874054.jpg?_wi=9",
              icon: Award,
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              handle: "@elena_pursuit_specialist",
              testimonial: "The 88mm deep set is my go-to for pursuit events. Incredible aero efficiency without losing responsiveness. Highly recommend.",
              imageSrc: "http://img.b2bpic.net/free-photo/crop-man-riding-bicycle_23-2147764124.jpg?_wi=8",
              icon: Zap,
            },
            {
              id: "4",
              name: "James Wickham",
              handle: "@wickham_cycling",
              testimonial: "Every weekend at the velodrome with these wheels. Been through hundreds of kilometers and they still roll perfectly. Best investment.",
              imageSrc: "http://img.b2bpic.net/free-vector/performance-meter-cog_78370-8338.jpg?_wi=8",
              icon: Shield,
            },
          ]}
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={50}
          containerClassName="py-16 md:py-24"
          textBoxTitleClassName="text-3xl md:text-4xl font-bold mb-4"
        />
      </div>

      <div id="footer-craftsmanship" data-section="footer-craftsmanship">
        <FooterBaseCard
          logoText="Velocity Wheels"
          columns={footerColumns}
          copyrightText="© 2025 Velocity Wheels. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}