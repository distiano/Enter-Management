'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Inria_Serif, Inria_Sans } from 'next/font/google';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

const inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const weddingCarousel = [{ image: '/images/Rectangle 31.png' }, { image: '/images/Rectangle 36.png' }, { image: '/images/Rectangle 37.png' }, { image: '/images/Rectangle 38.png' }];

const eventCarousel = [{ image: '/images/Rectangle 35.png' }, { image: '/images/Rectangle 34.png' }, { image: '/images/Rectangle 33.png' }, { image: '/images/Rectangle 32.png' }];

export default function About() {
  const weddingScrollRef = useRef(null);
  const eventScrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = weddingScrollRef.current;
    const scrollStep = 1;
    const scrollInterval = 20;

    const autoScroll = setInterval(() => {
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        scrollContainer.scrollLeft += scrollStep;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, scrollInterval);

    return () => clearInterval(autoScroll);
  }, []);

  useEffect(() => {
    const scrollContainer = eventScrollRef.current;
    const scrollStep = 1;
    const scrollInterval = 20;

    const autoScroll = setInterval(() => {
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        scrollContainer.scrollLeft -= scrollStep;
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
        }
      }
    }, scrollInterval);

    return () => clearInterval(autoScroll);
  }, []);

  const duplicatedWeddingCarousel = [...weddingCarousel, ...weddingCarousel];
  const duplicatedEventCarousel = [...eventCarousel, ...eventCarousel];

  return (
    <>
      <Navbar />
      <h1 className={`${inriaserif.className} text-4xl text-center pt-28`}>Tentang Enter Management</h1>
      <section className="py-10">
        <div className="flex space-x-4 overflow-hidden px-2" ref={weddingScrollRef}>
          {duplicatedWeddingCarousel.map((item, idx) => (
            <div key={idx} className=" flex-shrink-0 py-2 w-[75vw] lg:w-[30vw]">
              <img src={item.image} className="text-center text-[#433a33] w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="flex space-x-4 overflow-hidden px-2" ref={eventScrollRef}>
          {duplicatedEventCarousel.map((item, idx) => (
            <div key={idx} className=" flex-shrink-0 py-2 w-[75vw] lg:w-[30vw]">
              <img src={item.image} className="text-center text-[#433a33] w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 lg:px-28 py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24">
          <div className="text-center">
            <h2 className={`${inriaserif.className} text-[#F15254] text-3xl font-bold`}>Mengapa Enter Management Diciptakan?</h2>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur. Nunc eget lacus sagittis eget varius elementum scelerisque neque. Nam sem erat ullamcorper sit egestas cursus. Vitae adipiscing proin rutrum sit vivamus augue fames vulputate massa.
              Purus luctus eros turpis eleifend vitae ultricies. Arcu erat duis blandit sed velit enim nec elementum aenean. Adipiscing nulla eu neque nisl faucibus faucibus. Pretium magna condimentum facilisis posuere natoque ultricies
              gravida feugiat nunc. Tincidunt et enim ut lectus non at. Tristique mi quisque ac praesent augue rhoncus donec.
            </p>
          </div>
          <div className="text-center">
            <h2 className={`${inriaserif.className} text-[#F15254] text-3xl font-bold`}>Apa Saja Layanan Dari Enter Management?</h2>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur. Nunc eget lacus sagittis eget varius elementum scelerisque neque. Nam sem erat ullamcorper sit egestas cursus. Vitae adipiscing proin rutrum sit vivamus augue fames vulputate massa.
              Purus luctus eros turpis eleifend vitae ultricies. Arcu erat duis blandit sed velit enim nec elementum aenean. Adipiscing nulla eu neque nisl faucibus faucibus. Pretium magna condimentum facilisis posuere natoque ultricies
              gravida feugiat nunc. Tincidunt et enim ut lectus non at. Tristique mi quisque ac praesent augue rhoncus donec.
            </p>
          </div>
        </div>
        <div>
          <div className="text-center mt-16">
            <h2 className={`${inriaserif.className}  text-3xl font-bold`}>
              Mengapa Enter Management Menjadi <span className="text-[#F15254]">Pilihan Terbaik</span> Anda?
            </h2>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur. Odio ultrices sem integer duis sollicitudin amet sit. Nisl massa gravida elit sit tempor. Duis sed eu nunc vulputate. Malesuada leo aenean ornare consequat venenatis ut aliquet faucibus
              sit. Orci eget viverra dui tellus nullam feugiat habitasse. Velit vitae molestie orci proin et in. Morbi non aenean ornare viverra. Erat vitae aenean dictumst nibh tellus etiam id consequat turpis. Sed ut varius vel dui felis
              iaculis consequat id. Nec dui amet eget sit neque mi ac. Mattis quis ultrices orci elementum amet et. In montes donec ligula mauris. Hendrerit neque nunc egestas dui magna lectus nunc. Urna urna phasellus lacus adipiscing
              arcu. Vulputate tortor et neque blandit sapien id velit. Laoreet quis praesent ut eget venenatis nibh suspendisse commodo lectus. Vitae a lacus vestibulum enim. Velit pellentesque tincidunt amet amet tincidunt gravida
              ultricies lobortis. Quam id cras ultrices ut pellentesque vel odio. Ipsum gravida tincidunt vestibulum sed eleifend nibh tortor leo. Scelerisque tincidunt amet malesuada viverra volutpat urna at egestas eros. Diam praesent id
              nunc donec. Nisi nulla feugiat cursus tortor tellus non. Nec vitae amet molestie lacus rhoncus purus. Diam ullamcorper neque at commodo malesuada et sagittis. Ut accumsan odio porttitor dapibus. Neque at ac ut egestas purus.
              Malesuada integer vitae tempus habitant. Eu faucibus felis elit fringilla ultrices elementum non. Magna montes pretium eu leo eleifend aliquam. Viverra pellentesque sem dolor eu nec maecenas urna libero amet. Viverra vel in
              volutpat duis est integer diam consequat felis. At vel sit cursus quis ultrices. Arcu ultrices tempor sodales sollicitudin felis aliquam volutpat. Et integer donec elementum volutpat at. Imperdiet enim aliquam quis maecenas
              nulla tincidunt. Non.{' '}
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 lg:px-16 bg-gradient-to-b from-[#FFD6D6] to-white">
        <h2 className={`${inriaserif.className}  text-3xl font-bold text-center`}>Tim Enter Management</h2>
        <div className="grid  lg:grid-cols-4 gap-8 mt-16">
          <div className="block">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="h-64 w-full object-cover sm:h-80 lg:h-80"
            />
            <div className="text-center">
              <h3 className="mt-2 text-lg font-bold text-gray-900 sm:text-xl">Nama</h3>

              <p className="mt-1 max-w-sm text-gray-700">Jabatan</p>
            </div>
          </div>
          <div className="block">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="h-64 w-full object-cover sm:h-80 lg:h-80"
            />
            <div className="text-center">
              <h3 className="mt-2 text-lg font-bold text-gray-900 sm:text-xl">Nama</h3>

              <p className="mt-1 max-w-sm text-gray-700">Jabatan</p>
            </div>
          </div>
          <div className="block">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="h-64 w-full object-cover sm:h-80 lg:h-80"
            />
            <div className="text-center">
              <h3 className="mt-2 text-lg font-bold text-gray-900 sm:text-xl">Nama</h3>

              <p className="mt-1 max-w-sm text-gray-700">Jabatan</p>
            </div>
          </div>
          <div className="block">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="h-64 w-full object-cover sm:h-80 lg:h-80"
            />
            <div className="text-center">
              <h3 className="mt-2 text-lg font-bold text-gray-900 sm:text-xl">Nama</h3>

              <p className="mt-1 max-w-sm text-gray-700">Jabatan</p>
            </div>
          </div>
        </div>
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
