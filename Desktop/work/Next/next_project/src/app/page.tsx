import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"
import { clients } from "@/constants/client";
import FeatureCard from "@/components/FeatureCard";
import FeatureBlock from "@/components/FeatureBlock";
import { features, featuresBlock } from "@/constants/features";
import PricingSection from "@/components/PricingSection";
import { testimonials } from "@/constants/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
   <main className="overflow-x-hidden pt-24 lg:pt-28 px-4 md:px-6 lg:px-8 xl:px-12 anl antialiased">
  <div className="relative"></div>
          {/* Home section */}
        <section id="home" className="relative">
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44  -right-20 md:right-20" />
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all">
                new payment gateway is now available.
                <ArrowRightCircle className="inline ml-1 w-4 h-4" />
              </p>
              <Heading title="Complete e-commerce platform for online retailers" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Transform your online business with Ocean E-commerce platform
                that streamlines inventory management, order processing,
                and customer engagement for maximum sales growth.
              </p>
              <div className="flex items-center gap-4">
                <Button>
                  start selling
                  <MoveRight className="w-4 h-4" />
                </Button>
                <Link href="#pricing">
                  <Button variant="outline">view pricing</Button>
                </Link>
              </div>
            </div>
            <Image
              src="/Hero-image.svg"
              width={670}
              height={370}
              alt="e-commerce dashboard banner"
              className="mx-auto shadow-xl"
            />
          </div>
        </section>
        {/* Home section */}
 {/* Clients section */}
        <section
          id="clients"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.imageUrl}
              width={120}
              height={80}
              alt={client.alt}
              className="w-40 md:w-full mx-auto"
            />
          ))}
        </section>
        {/* Clients section */}
        
        {/* Features section */}
        <section
          id="features"
          className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28"
        >
          {/* Part 1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <Image
              src="/bg2.png"
              width={1920}
              height={1080}
              alt="e-commerce features background"
              className="absolute -z-50 w-[1400px] h-[670px] top-0 left-0 opacity-5"
            />
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Powerful features to help you manage your entire online store." />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
                Advanced inventory tracking, automated order fulfillment, integrated payment processing, 
                and comprehensive analytics to boost your e-commerce success and customer satisfaction.
              </p>
              <Button>start selling</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
          {/* Part 1 */}

          {/* Part 2 */}
          {featuresBlock.map((item, index) => (
            <FeatureBlock key={index} {...item} />
          ))}
          {/* Part 2 */}
        </section>
        {/* Features section */}

        {/* Pricing section */}
        <PricingSection />
        {/* Pricing section */}

        {/* Testimonials section */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="Meet our Successful Retailers" isCentered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>
        {/* Testimonials section */}

        {/* Contact section */}
        <section id="contact">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <Heading title="Ready to launch your online store?" />
              <p className="max-w-[35rem] leading-normal text-lg">
                Experience the power of Ocean E-commerce platform for online retailers. 
                Increase sales, manage inventory effortlessly, and delight customers. 
                Start your free trial today!
              </p>
            </div>
            <Button>
              start selling
              <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
        {/* Contact section */}
        {/* product section */}
        <section id="products" className="relative">

        <ProductsSection />
            </section>
        {/* product section */}

   </main>
  );
}