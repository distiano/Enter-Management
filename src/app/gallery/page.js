'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { Inria_Sans, Inria_Serif } from 'next/font/google';
import Footer from '@/components/Footer';

const inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const images = [{ image: '/images/Layanan 1.png' }, { image: '/images/Layanan 2.png' }, { image: '/images/Layanan 3.png' }, { image: '/images/Layanan 4.png' }];

const Gallery = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <div className=" bg-[#A68541] lg:bg-gradient-to-r from-[#A68541] to-[#F1D87B00]" style={{ backgroundImage: "')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="min-h-[60vh] flex flex-col justify-center lg:w-[500px] pt-14 px-6 lg:px-0 lg:ps-16">
            <h1 className={`${inriaserif.className} text-4xl lg:text-6xl font-bold text-white`}>Gallery</h1>
            <h2 className={`${inriasans.className} italic text-white mt-2`}>Lorem ipsum dolor sit amet consectetur. Dictumst et scelerisque lacus nulla ullamcorper quis risus. Sit vehicula dolor nunc ultrices massa eleifend euismod eu.</h2>
          </div>
        </div>
      </section>{' '}
      <div className="gallery  py-20 px-2 lg:px-6">
        <div className="grid grid-cols-3 gap-2 lg:gap-4">
          {/* 1-2 */}
          <div className="col-span-2">
            <iframe src="https://drive.google.com/file/d/1kGcz-LJAXf6V2ojLiyPgly2DkOebC0wN/preview" className="size-full object-cover" allowfullscreen></iframe>
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div>
              <img src="/images/gallery/foto1.JPG" className="size-full object-cover" />
            </div>
            <div className="">
              <img src="/images/gallery/foto2.JPG" className="size-full object-cover" />
            </div>
          </div>
          {/*  */}
          {/* 3 */}
          <div className="">
            <img src="/images/gallery/foto3.jpg" className="size-full object-cover" />
          </div>
          <div>
            <img src="/images/gallery/foto4.JPG" className="size-full object-cover" />
          </div>
          <div className="">
            <img src="/images/gallery/foto5.jpg" className="size-full object-cover" />
          </div>
          {/*  */}
          {/* 2-1 */}
          <div className="grid grid-rows-2 gap-2">
            <div>
              <img src="/images/gallery/foto6.jpg" className="size-full object-cover" />
            </div>
            <div className="">
              <img src="/images/gallery/foto7.jpg" className="size-full object-cover" />
            </div>
          </div>
          <div className="col-span-2">
            <iframe src="https://drive.google.com/file/d/187fMONjBYGSPnIZosBEGEnBXv0M4iPaH/preview" className="size-full object-cover" allowfullscreen></iframe>
          </div>
          {/*  */}
          {/* 3 */}
          <div className="">
            <img src="/images/gallery/foto8.jpg" className="size-full object-cover" />
          </div>
          <div>
            <img src="/images/gallery/foto9.JPG" className="size-full object-cover" />
          </div>
          <div className="">
            <img src="/images/gallery/foto10.JPG" className="size-full object-cover" />
          </div>
          {/*  */}
          {/* 1-2 */}
          <div className="col-span-2">
            <iframe src="https://drive.google.com/file/d/1m7aDs8s7luy8PCziCOKZeVYrQ7mMBptp/preview" className="size-full object-cover" allowfullscreen></iframe>
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div>
              <img src="/images/gallery/foto11.JPG" className="size-full object-cover" />
            </div>
            <div className="">
              <img src="/images/gallery/foto12.JPG" className="size-full object-cover" />
            </div>
          </div>
          {/*  */}
          {/* 3 */}
          <div className="">
            <img src="/images/gallery/foto13.JPG" className="size-full object-cover" />
          </div>
          <div>
            <img src="/images/gallery/foto14.JPG" className="size-full object-cover" />
          </div>
          <div className="">
            <img src="/images/gallery/foto15.JPG" className="size-full object-cover" />
          </div>
          {/*  */}
          {/* 2-1 */}
          <div className="grid grid-rows-2 gap-2">
            <div>
              <img src="/images/gallery/foto16.JPG" className="size-full object-cover" />
            </div>
            <div className="">
              <img src="/images/gallery/foto17.JPG" className="size-full object-cover" />
            </div>
          </div>
          <div className="col-span-2">
            <iframe src="https://drive.google.com/file/d/1b8z0pAvlxfv5YCXE4swEcQZxXvwiFO1m/preview" className="size-full object-cover" allowfullscreen></iframe>
          </div>
          {/*  */}
          {/* 3 */}
          <div className="">
            <img src="/images/gallery/foto18.JPG" className="size-full object-cover" />
          </div>
          <div>
            <img src="/images/gallery/foto19.JPG" className="size-full object-cover" />
          </div>
          <div className="">
            <img src="/images/gallery/foto20.JPG" className="size-full object-cover" />
          </div>
          {/*  */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
