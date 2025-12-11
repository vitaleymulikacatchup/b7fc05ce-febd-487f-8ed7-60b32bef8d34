"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import BannerGridAbout from '@/components/sections/about/BannerGridAbout';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { CheckCircle, Heart, MapPin, Phone, Mail, Sparkles, Star, Zap, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSizeMediumTitles"
      background="noise"
      cardStyle="neon-glow"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Very Big Belly"
          navItems={[
            { name: "Menu", id: "features" },
            { name: "About", id: "about" },
            { name: "Reservations", id: "contact" },
            { name: "Contact", id: "footer" }
          ]}
          button={{
            text: "Book a Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="VERY BIG BELLY"
          description="Experience culinary excellence in a warm, inviting atmosphere. From our kitchen to your table, every dish tells a story."
          buttons={[
            { text: "Reserve Now", href: "contact" },
            { text: "Explore Menu", href: "features" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460604111-svritom2.jpg",
              imageAlt: "Restaurant dining ambiance"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460605535-ad363qua.jpg",
              imageAlt: "Gourmet plated dish"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460606636-6l6mfj30.jpg",
              imageAlt: "Chef preparing cuisine"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <BannerGridAbout
          bannerMedia={{
            title: "Crafted with Passion, Served with Pride",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460611837-i7ksv04l.jpg"
          }}
          cards={[
            {
              title: "Our Story",
              description: "Very Big Belly was born from a passion for authentic cuisine and genuine hospitality. Since opening our doors, we've been dedicated to creating memorable dining experiences through exceptional food and warm service."
            },
            {
              title: "Quality Ingredients",
              description: "We source the finest local and international ingredients, working closely with trusted suppliers to ensure every dish meets our exacting standards of excellence."
            },
            {
              title: "Culinary Excellence",
              description: "Our talented team of chefs brings years of expertise and creativity to every plate. We blend tradition with innovation to create dishes that delight and inspire."
            }
          ]}
          bottomMedia={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460607631-uskpzfyr.jpg"
          }}
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTen
          title="Our Menu Highlights"
          description="Discover the carefully curated selection of dishes that make Very Big Belly a culinary destination. Each course is designed to take you on a gastronomic journey."
          features={[
            {
              id: "1",
              title: "Signature Appetizers",
              description: "Start your meal with our most popular starters. These carefully crafted appetizers set the tone for an unforgettable dining experience.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460608662-20f31w5k.jpg"
              },
              items: [
                { icon: Sparkles, text: "House-made preparations" },
                { icon: Star, text: "Award-winning recipes" }
              ],
              reverse: false
            },
            {
              id: "2",
              title: "Premium Main Courses",
              description: "The heart of our menu features expertly prepared entrees showcasing the finest meats, fresh seafood, and seasonal vegetables.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460609571-q2w3aful.jpg"
              },
              items: [
                { icon: CheckCircle, text: "Perfect execution" },
                { icon: Zap, text: "Bold flavors" }
              ],
              reverse: true
            },
            {
              id: "3",
              title: "Artisanal Desserts",
              description: "End your meal on a sweet note with our desserts, crafted by our pastry chef using the finest ingredients and creative techniques.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460610512-tu5uesoq.jpg"
              },
              items: [
                { icon: Heart, text: "Made with love" },
                { icon: Shield, text: "Premium quality" }
              ],
              reverse: false
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="What Our Guests Say"
          description="Discover why guests from around the world choose Very Big Belly for their special occasions and everyday celebrations."
          testimonials={[
            {
              id: "1",
              title: "An Unforgettable Anniversary Dinner",
              quote: "We celebrated our 25th anniversary at Very Big Belly and it was absolutely magical. The food was exceptional, the service impeccable, and the ambiance perfect. We'll definitely be back!",
              name: "Margaret S.",
              role: "Anniversary Guest",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460613253-tukufytt.jpg"
            },
            {
              id: "2",
              title: "Best Restaurant in the City",
              quote: "Very Big Belly has become our go-to restaurant for important business dinners. The quality of the food, attention to detail, and professional service never disappoint.",
              name: "James M.",
              role: "Regular Guest",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460614118-yc5716vd.jpg"
            },
            {
              id: "3",
              title: "Worth Every Penny",
              quote: "From the moment we arrived, we felt welcomed and valued. Every course was a masterpiece, and the wine pairings were expertly chosen. Absolutely worth the investment!",
              name: "Elena R.",
              role: "First-Time Visitor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460614970-0dxv05rq.jpg"
            },
            {
              id: "4",
              title: "A Culinary Experience",
              quote: "Very Big Belly isn't just a restaurant, it's a culinary experience. The chef clearly has passion for their craft, and it shows in every plate.",
              name: "David T.",
              role: "Food Enthusiast",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460616055-c7ahne70.jpg"
            },
            {
              id: "5",
              title: "Perfect for Special Occasions",
              quote: "We hosted our daughter's engagement dinner here and everything was perfect. The private room, the menu customization, and the heartfelt service made it truly special.",
              name: "Patricia L.",
              role: "Event Host",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460616974-js9jwoiu.jpg"
            },
            {
              id: "6",
              title: "Outstanding Service and Food",
              quote: "The combination of outstanding food and impeccable service is rare to find. Very Big Belly delivers on all fronts. Highly recommended!",
              name: "Robert K.",
              role: "Regular Guest",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765460617770-w4wyqufg.jpg"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservations"
          tagIcon={Phone}
          title="Reserve Your Table Today"
          description="Experience the warmth and excellence that awaits you at Very Big Belly. Whether it's an intimate dinner for two or a celebration with friends, we look forward to serving you."
          useInvertedBackground="noInvert"
          inputPlaceholder="Enter your email"
          buttonText="Request Reservation"
          termsText="We'll contact you shortly to confirm your reservation. Your privacy is important to us."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="Very Big Belly"
          title="Crafting memories, one meal at a time"
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Appetizers", href: "#features" },
                { label: "Main Courses", href: "#features" },
                { label: "Desserts", href: "#features" }
              ]
            },
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Reservations", href: "#contact" },
                { label: "Private Dining", href: "#contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "Follow Us", href: "#" },
                { label: "Gift Cards", href: "#" }
              ]
            }
          ]}
          contactItems={[
            { icon: MapPin, text: "123 Culinary Lane, Restaurant District, City 12345" },
            { icon: Phone, text: "(555) 123-4567" },
            { icon: Mail, text: "reservations@veryBigBelly.com" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}