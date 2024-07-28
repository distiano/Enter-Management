'use client';

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Inria_Serif, Inria_Sans } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const images = ['/images/display.png', '/images/gallery/foto1.jpg', '/images/gallery/foto4.jpg'];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />{' '}
      <section className="relative h-screen background-container">
        {images.map((image, index) => (
          <div key={index} className={`background ${index === currentImageIndex ? 'visible' : ''}`} style={{ backgroundImage: `url(${image})` }}></div>
        ))}{' '}
        <div className="h-screen flex items-end pb-24 justify-center bg-gradient-to-b from-[#FF000300] to-[#f1d77b32]  animate__animated animate__fadeIn content">
          <div className="text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold animate__animated animate__zoomIn">
              <span className={inriaserif.className}>Sedia Menjaga Momen Penting Anda</span>
            </h1>
            <h1 className="text-sm lg:text-base mt-6  animate__animated animate__fadeInUp">
              <span className="">Percayakan kelancaran momen penting Anda bersama kru andalan dari Enter Management</span>
            </h1>
            <div className="lg:flex lg:flex-1 lg:justify-center mt-6">
              <Link href="https://wa.me/6285641064464" className={`${inriasans.className}  bg-[#AD4740] px-5 py-3 rounded-lg text-base font-bold leading-6 text-white text-center hover:bg-red-800 transition duration-300 ease-in-out`}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: "url('/images/background_about.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="flex items-center justify-center  bg-gray-100 relative"
      >
        <div className=" mx-auto grid md:grid-cols-2 pt-4 items-center px-4 lg:px-20">
          <div className="md:order-2 bg-[#EEEEEEB2] p-4 lg:p-10 rounded-xl" data-aos="fade-down" data-aos-duration="2000">
            <h2 className={`${inriaserif.className} text-4xl font-extrabold mb-8 text-center`}>ENTER MANAGEMENT</h2>
            <p className={`${inriasans.className} xl:text-xl leading-relaxed text-justify`}>
              Lorem ipsum dolor sit amet consectetur. Non sed nunc est phasellus. Condimentum ultricies feugiat duis arcu at. Habitant pharetra commodo consectetur donec. Libero tellus viverra ac ac quis fringilla et. Parturient quam quis
              justo tortor dictumst turpis elit tellus. Praesent enim ultricies tempus nunc. Ut amet morbi condimentum ut sagittis dignissim fermentum at ultricies. Nullam turpis nibh turpis ultricies. Accumsan viverra nibh imperdiet quam
              commodo nibh quam.
            </p>
          </div>

          <div className="md:order-1 lg:ms-10" data-aos="fade-up" data-aos-duration="2000">
            <Image src="/images/arif_enter.png" alt="Arif Enter" width={450} height={500} />
          </div>
        </div>
      </section>
      <div style={{ background: 'linear-gradient(135deg, #B79C55, #ffffff)' }}>
        <section className="py-10 text-center">
          <div className="goldenText px-7 py-2 lg:py-5 text-xl lg:text-3xl mb-5" data-aos="fade-down" data-aos-duration="2000">
            <span className={inriaserif.className}>PAKET LAYANAN KAMI</span>
          </div>
          <p className=" lg:text-lg px-4 mb-10 font-medium text-white" data-aos="fade-down" data-aos-duration="2000">
            <span className={inriaserif.className}>Enter Management selalu memberikan pelayanan maksimal untuk hasil yang berkualitas</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-4 lg:px-32">
            <div className="relative" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
              <Image src="/images/Layanan 1.png" alt="Wedding Party" width={500} height={250} className="rounded-xl shadow-xl  border-4 border-yellow-600" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-xl"></div>
              <div className={`${inriaserif.className} absolute inset-0 flex items-end bottom-3 justify-center text-white text-2xl font-bold`}>Wedding Party</div>{' '}
            </div>

            <div className="relative" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
              <Image src="/images/Layanan 2.png" alt="Wedding Party" width={500} height={250} className="rounded-xl shadow-xl  border-4 border-yellow-600" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-xl"></div>
              <div className={`${inriaserif.className} absolute inset-0 flex items-end bottom-3 justify-center text-white text-2xl font-bold`}>Birthday Party</div>
            </div>
            <div className="relative" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
              <Image src="/images/Layanan 3.png" alt="Wedding Party" width={500} height={250} className="rounded-xl shadow-xl  border-4 border-yellow-600" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-xl"></div>
              <div className={`${inriaserif.className} absolute inset-0 flex items-end bottom-3 justify-center text-white text-2xl font-bold`}>Event Gathering</div>
            </div>
            <div className="relative" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <Image src="/images/Layanan 4.png" alt="Wedding Party" width={500} height={250} className="rounded-xl shadow-xl  border-4 border-yellow-600" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-xl"></div>
              <div className={`${inriaserif.className} absolute inset-0 flex items-end bottom-3 justify-center text-white text-2xl font-bold`}>All Event / Pesta</div>
            </div>
            <div className="relative" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
              <Image src="/images/Layanan 5.png" alt="Wedding Party" width={500} height={250} className="rounded-xl shadow-xl  border-4 border-yellow-600" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-xl"></div>
              <div className={`${inriaserif.className} absolute inset-0 flex items-end bottom-3 justify-center text-white text-2xl font-bold`}>Hiburan Artis Ibukota</div>
            </div>
            <div className="relative" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
              <Image src="/images/Layanan 6.png" alt="Wedding Party" width={500} height={250} className="rounded-xl shadow-xl  border-4 border-yellow-600" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-xl"></div>
              <div className={`${inriaserif.className} absolute inset-0 flex items-end bottom-3 justify-center text-white text-2xl font-bold`}>Jasa Wedding Party</div>
            </div>
          </div>
        </section>
        <section className="py-10 text-white text-center ">
          <div className="px-4">
            <div className="goldenText px-7 py-2 lg:py-5 text-xl lg:text-3xl mb-5" data-aos="fade-down" data-aos-duration="2000">
              <span className={inriaserif.className}>ALL CONCEPT & COSTUME</span>
            </div>
          </div>

          <div className="px-2 lg:px-20" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
            <img src="/images/KostumDanKonsep.png" alt="Wedding Party" className="rounded-lg w-full" />
          </div>
          <div className="px-4">
            <div className="goldenText px-3 lg:px-7 py-2 lg:py-5 text-xl lg:text-3xl mt-20 mb-5" data-aos="fade-down" data-aos-duration="2000">
              <span className={inriaserif.className}>PROFESIONAL ARTIST MANAGEMENT</span>
            </div>
          </div>

          <p className="lg:text-lg px-4 font-medium text-black mb-10" data-aos="fade-down" data-aos-duration="2000">
            <span className={inriaserif.className}>Kami sudah berpengalaman mendatangkan artis lokal hingga nasional untuk mewujudkan acara impianmu</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:px-32">
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Charlie Van Houten (ST 12)</span>
              </button>
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Pasha Ungu</span>
              </button>
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Tasya Rosmala</span>
              </button>
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Elly Sugigi</span>
              </button>
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Difarina Indra</span>
              </button>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Mandala Abadi Shoji</span>
              </button>
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Niken Salindri</span>
              </button>
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Juwita Bahar</span>
              </button>
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Yeni Inka</span>
              </button>
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Nassar Sungkar</span>
              </button>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Zaskia Gotik, Dll.</span>
              </button>
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Wali Band</span>
              </button>
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Jihan Audy</span>
              </button>
              <button className="bg-gradient-to-r from-[#B64C45] to-[#561a0b] text-white font-semibold px-4 py-2 rounded-3xl mb-2 w-full">
                <span className={inriaserif.className}>Trisuaka</span>
              </button>
            </div>
          </div>
        </section>
      </div>
      <section className="text-center" data-aos="zoom-in" data-aos-duration="2000">
        <img src="/images/ENTER MANAGEMENT_ARTIS.png" alt="Wedding Party" className="rounded-lg w-full" />
      </section>
      <section
        style={{
          backgroundImage: "url('/images/contactsection_enter.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="w-[400px] md:w-1/2 p-4 " data-aos="fade-up" data-aos-duration="2000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.664287000795!2d110.82624857401579!3d-6.810626966611726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70c5f6f4c5ac7f%3A0x61b5fe6a88c52a33!2sEnter%20Management%20Kudus%20WO%2FEO!5e0!3m2!1sen!2sid!4v1721152177273!5m2!1sen!2sid"
              width="100%"
              height="350"
              style={{
                borderRadius: '15px',
                border: '0',
              }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="md:w-1/2 p-4" data-aos="fade-up" data-aos-duration="2000">
            <h2 className={`${inriaserif.className} text-4xl font-bold mb-4 text-[#6F541E]`}>Hubungi Kami</h2>
            <div className={`${inriasans.className}`}>
              <p className="text-lg font-semibold text-[#6F541E] mb-2">Alamat</p>
              <p className="text-[#D1A240] mb-4">Purwosari, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59316 (Enter Management Kudus)</p>
              <p className="text-lg font-semibold text-[#6F541E] mb-2">Pemesanan</p>
              <p className="text-[#D1A240] mb-4">0856 4106 4464 (Owner)</p>
              <p className="text-[#D1A240]">0852 9094 3434 (Admin)</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
