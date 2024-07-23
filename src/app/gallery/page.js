'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { Inria_Sans, Inria_Serif } from 'next/font/google';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <section className="">
        <div className=" bg-[#A68541] lg:bg-gradient-to-r from-[#A68541] to-[#F1D87B00]" style={{ backgroundImage: "')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="min-h-[60vh] flex flex-col justify-center lg:w-[500px] pt-14 px-6 lg:px-0 lg:ps-16" data-aos="fade-right" data-aos-duration="2000">
            <h1 className={`${inriaserif.className} text-4xl lg:text-6xl font-bold text-white`}>Gallery</h1>
            <h2 className={`${inriasans.className} italic text-white mt-2`}>Lorem ipsum dolor sit amet consectetur. Dictumst et scelerisque lacus nulla ullamcorper quis risus. Sit vehicula dolor nunc ultrices massa eleifend euismod eu.</h2>
          </div>
        </div>
      </section>{' '}
      <div className="gallery  py-20 px-2 lg:px-6">
        <div className="grid grid-cols-3 gap-2 lg:gap-4">
          {/* 1-2 */}
          <div className="col-span-2" data-aos="fade-up" data-aos-duration="2000">
            <iframe src="https://drive.google.com/file/d/1kGcz-LJAXf6V2ojLiyPgly2DkOebC0wN/preview" className="size-full object-cover" allowFullScreen></iframe>
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
              <img src="/images/gallery-compressed/foto1.jpg" className="size-full object-cover" />
            </div>
            <div className="" data-aos="fade-up" data-aos-duration="2000">
              <img src="/images/gallery-compressed/foto2.jpg" className="size-full object-cover" />
            </div>
          </div>
          {/*  */}
          {/* 3 */}
          <div className="" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
            <img src="/images/gallery-compressed/foto3.jpg" className="size-full object-cover" />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <img src="/images/gallery-compressed/foto4.jpg" className="size-full object-cover" />
          </div>
          <div className="" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
            <img src="/images/gallery-compressed/foto5.jpg" className="size-full object-cover" />
          </div>
          {/*  */}
          {/* 2-1 */}
          <div className="grid grid-rows-2 gap-2">
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
              <img src="/images/gallery-compressed/foto6.jpg" className="size-full object-cover" />
            </div>
            <div className="" data-aos="fade-up" data-aos-duration="2000">
              <img src="/images/gallery-compressed/foto7.jpg" className="size-full object-cover" />
            </div>
          </div>
          <div className="col-span-2" data-aos="fade-up" data-aos-duration="2000">
            <iframe src="https://drive.google.com/file/d/187fMONjBYGSPnIZosBEGEnBXv0M4iPaH/preview" className="size-full object-cover" allowFullScreen></iframe>
          </div>
          {/*  */}
          {/* 3 */}
          <div className="" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
            <img src="/images/gallery-compressed/foto8.jpg" className="size-full object-cover" />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <img src="/images/gallery-compressed/foto9.jpg" className="size-full object-cover" />
          </div>
          <div className="" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
            <img src="/images/gallery-compressed/foto10.jpg" className="size-full object-cover" />
          </div>
          {/*  */}
          {/* 1-2 */}
          <div className="col-span-2" data-aos="fade-up" data-aos-duration="2000">
            <iframe src="https://drive.google.com/file/d/1m7aDs8s7luy8PCziCOKZeVYrQ7mMBptp/preview" className="size-full object-cover" allowFullScreen></iframe>
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
              <img src="/images/gallery-compressed/foto11.jpg" className="size-full object-cover" />
            </div>
            <div className="" data-aos="fade-up" data-aos-duration="2000">
              <img src="/images/gallery-compressed/foto12.jpg" className="size-full object-cover" />
            </div>
          </div>
          {/*  */}
          {/* 3 */}
          <div className="" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
            <img src="/images/gallery-compressed/foto13.jpg" className="size-full object-cover" />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <img src="/images/gallery-compressed/foto14.jpg" className="size-full object-cover" />
          </div>
          <div className="" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
            <img src="/images/gallery-compressed/foto15.jpg" className="size-full object-cover" />
          </div>
          {/*  */}
          {/* 2-1 */}
          <div className="grid grid-rows-2 gap-2">
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
              <img src="/images/gallery-compressed/foto16.jpg" className="size-full object-cover" />
            </div>
            <div className="" data-aos="fade-up" data-aos-duration="2000">
              <img src="/images/gallery-compressed/foto17.jpg" className="size-full object-cover" />
            </div>
          </div>
          <div className="col-span-2" data-aos="fade-up" data-aos-duration="2000">
            <iframe src="https://drive.google.com/file/d/1b8z0pAvlxfv5YCXE4swEcQZxXvwiFO1m/preview" className="size-full object-cover" allowFullScreen></iframe>
          </div>
          {/*  */}
          {/* 3 */}
          <div className="" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
            <img src="/images/gallery-compressed/foto18.jpg" className="size-full object-cover" />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <img src="/images/gallery-compressed/foto19.jpg" className="size-full object-cover" />
          </div>
          <div className="" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
            <img src="/images/gallery-compressed/foto20.jpg" className="size-full object-cover" />
          </div>
          {/*  */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
