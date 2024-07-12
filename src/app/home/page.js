'use client';

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Inria_Serif, Inria_Sans } from 'next/font/google';
import Link from 'next/link';

const inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export default function Home() {
  return (
    <>
      <Navbar />{' '}
      <section style={{ backgroundImage: "url('/images/display.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className="h-screen flex items-end pb-24 justify-center bg-gradient-to-b from-[#FF000300] to-[#5A0001]  animate__animated animate__fadeIn">
          <div className="text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold animate__animated animate__zoomIn">
              <span className={inriaserif.className}>Sedia Menjaga Momen Penting Anda</span>
            </h1>
            <h1 className="text-sm lg:text-base mt-6  animate__animated animate__fadeInUp">
              <span className="">Percayakan kelancaran momen penting Anda bersama kru andalan dari Enter Management</span>
            </h1>
            <div className="lg:flex lg:flex-1 lg:justify-center mt-6">
              <Link href="#" className={`${inriasans.className}  bg-[#C00002] px-5 py-3 rounded-lg text-base font-bold leading-6 text-white text-center hover:bg-red-800 transition duration-300 ease-in-out`}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:px-24">
        <div className="text-center p-16 rounded-4xl bg-gradient-radial from-[#FED8D8] to-transparent via-[#FED8D8]/10">
          <h1 className={`${inriaserif.className} text-4xl font-bold`}>Tentang Kami</h1>
          <h3 className="mt-10 text-lg lg:text-2xl ">
            Lorem ipsum dolor sit amet consectetur. Mi augue amet sed aliquam quam scelerisque volutpat. Tristique velit tristique elit parturient non felis. Accumsan diam sit at sed in. Ac et mi diam maecenas praesent facilisi nibh lacus
            vel.
          </h3>
        </div>
      </section>
      <section className="py-16 px-6 lg:px-16">
        <div className="text-center rounded-4xl">
          <h1 className={`${inriaserif.className} text-4xl font-bold`}>Produk Layanan Kami</h1>
          <h3 className="mt-6 text-base ">Enter Management selalu memberikan pelayanan maksimal untuk hasil yang berkualitas</h3>
        </div>
        <div className="grid mt-10 lg:grid-cols-4 gap-8">
          <div style={{ backgroundImage: "url('/images/Rectangle 8.png')", backgroundSize: 'cover' }}>
            <Link href="" className={`${inriasans.className} flex justify-center text-white text-center text-3xl font-bold  items-end p-3 lg:p-5 h-[440px]  transition-all duration-300 ease-in-out `}>
              Wedding Organizer
            </Link>
          </div>
          <div style={{ backgroundImage: "url('/images/Rectangle 9.png')", backgroundSize: 'cover' }}>
            <Link href="" className={`${inriasans.className} flex justify-center text-white text-center text-3xl font-bold  items-end p-3 lg:p-5 h-[440px]  transition-all duration-300 ease-in-out `}>
              Wedding Organizer
            </Link>
          </div>
          <div style={{ backgroundImage: "url('/images/Rectangle 10.png')", backgroundSize: 'cover' }}>
            <Link href="" className={`${inriasans.className} flex justify-center text-white text-center text-3xl font-bold  items-end p-3 lg:p-5 h-[440px]  transition-all duration-300 ease-in-out `}>
              Wedding Organizer
            </Link>
          </div>
          <div style={{ backgroundImage: "url('/images/Rectangle 11.png')", backgroundSize: 'cover' }}>
            <Link href="" className={`${inriasans.className} flex justify-center text-white text-center text-3xl font-bold  items-end p-3 lg:p-5 h-[440px]  transition-all duration-300 ease-in-out `}>
              Wedding Organizer
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="text-center rounded-4xl">
          <h1 className={`${inriaserif.className} text-4xl font-bold`}>Pengalaman Kami</h1>
          <h3 className="mt-6 text-base ">Enter Management senantiasa belajar dan meningkatkan kualitas pelayanan dari setiap pengalaman berharga yang dijalani</h3>
        </div>
        <div>
          <img src="/images/Portofolio.png" />
        </div>
      </section>
      <section className="py-16 px-6 lg:px-16">
        <div className="text-center rounded-4xl">
          <h1 className={`${inriaserif.className} text-4xl font-bold`}>Anda Bertanya Kami Menjawab</h1>
          <h3 className="mt-6 text-base ">Enter Management selalu menjawab pertanyaan klien dengan jelas dan tetap mengutamakan keramahan dan kesopanan</h3>
        </div>
        <FAQ />
      </section>
      <section className="py-16 lg:px-24">
        <div className="relative py-20 rounded-xl" style={{ backgroundImage: "url('/images/bg-footer-barra3.png')", backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh' }}>
          <div className="absolute rounded-xl inset-0 bg-gradient-to-r from-transparent via-[#FED8D8] to-[#FED8D8]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-right flex items-center justify-end h-full">
            <div className="max-w-xl">
              <h2 className={`${inriaserif.className} text-3xl font-bold text-[#F15254] mb-4`}>Mari Diskusikan Acara Impian Anda Bersama Kami</h2>
              <Link href="#contact" className={`${inriasans.className} inline-block bg-[#F15254] text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300`}>
                Contact Us
              </Link>
            </div>
          </div>{' '}
        </div>
      </section>
      <Footer />
    </>
  );
}
