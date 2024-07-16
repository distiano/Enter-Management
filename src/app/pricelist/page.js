'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inria_Serif, Inria_Sans } from 'next/font/google';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const pricelist = [{ jenispaket: 'silver' }, { jenispaket: 'diamond' }, { jenispaket: 'luxury' }, { jenispaket: 'platinum' }];

const Services = () => {
  const [jenispaket, setJenisPaket] = useState('silver');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('jenispaket');
    if (serviceParam) {
      setJenisPaket(serviceParam);
    }
  }, []);

  let teks = '';
  let images = [];

  switch (jenispaket) {
    case 'silver':
      teks = 'Paket Silver';
      images = ['/images/entersilver1.png', '/images/entersilver2.png'];
      break;
    case 'diamond':
      teks = 'Paket Diamond';
      images = ['/images/enterdiamond1.png', '/images/enterdiamond2.png'];
      break;
    case 'luxury':
      teks = 'Paket Luxury';
      images = ['/images/enterluxury1.png', '/images/enterluxury2.png', '/images/enterluxury3.png'];
      break;
    case 'platinum':
      teks = 'Paket Platinum';
      images = ['/images/enterplatinum1.png', '/images/enterplatinum2.png', '/images/enterplatinum3.png'];
      break;
    default:
      teks = 'Layanan Tidak Diketahui'; // teks default jika tidak ada yang cocok
  }

  return (
    <>
      <Navbar />
      <section className="">
        <div className="" style={{ backgroundImage: "url('/images/Rectangle 89.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="min-h-[50vh] flex flex-col justify-center items-center pt-14 text-center ">
            <h1 className={`${inriaserif.className} text-4xl lg:text-6xl font-bold text-white`}>PAKET & PRICE LIST</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 rounded-3xl lg:rounded-full mt-6 bg-[#303030] p-4 lg:p-2 w-[350px] lg:w-[700px]">
              <button
                onClick={() => setJenisPaket('silver')}
                className={`${inriasans.className} text-white text-sm font-bold rounded-full bg-[#404040] px-8 py-2 ${jenispaket === 'silver' ? 'bg-[#6c6c6c]' : ''} transition ease-in hover:bg-[#6c6c6c]`}
              >
                Silver
              </button>
              <button
                onClick={() => setJenisPaket('diamond')}
                className={`${inriasans.className} text-white text-sm font-bold rounded-full bg-[#404040] px-8 py-2 ${jenispaket === 'diamond' ? 'bg-[#6c6c6c]' : ''} transition ease-in hover:bg-[#6c6c6c]`}
              >
                Diamond
              </button>
              <button
                onClick={() => setJenisPaket('luxury')}
                className={`${inriasans.className} text-white text-sm font-bold rounded-full bg-[#404040] px-8 py-2 ${jenispaket === 'luxury' ? 'bg-[#6c6c6c]' : ''} transition ease-in hover:bg-[#6c6c6c]`}
              >
                Luxury
              </button>
              <button
                onClick={() => setJenisPaket('platinum')}
                className={`${inriasans.className} text-white text-sm font-bold rounded-full bg-[#404040] px-8 py-2 ${jenispaket === 'platinum' ? 'bg-[#6c6c6c]' : ''} transition ease-in hover:bg-[#6c6c6c]`}
              >
                Platinum
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: "url('/images/Frame 43.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className=""
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10 py-10">
          <h2 className={`${inriaserif.className} relative inline-block text-4xl font-bold text-gray-900`}>
            {teks}
            <span className="absolute left-1/2 transform -translate-x-1/2 block mt-1 h-1 bg-blue-500 underline-mobile underline-desktop"></span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {images.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={src} alt={`paket ${jenispaket}`} className="rounded-lg" style={{ width: '85%' }} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/order" className={`${inriasans.className} bg-black text-white px-10 py-3 rounded-2xl  font-semibold leading-6 text-center hover:bg-[#B79C55] transition duration-300 ease-in-out`}>
            Order Now{' '}
          </Link>
        </div>

        <div className="mt-20 px-6 lg:px-20 pb-24 p-4">
          <h2 className={`${inriasans.className} font-bold text-4xl`}>Syarat & Ketentuan</h2>
          <ul className={`${inriasans.className} font-medium text-lg mt-3 mb-3 list-disc ps-4`}>
            <li>DP Awal Minimal 30% dari Grand Total Paket yang diambil.</li>
            <li>Setelah melakukan DP, pergantian paket tidak dapat dilakukan, kecuali sifatnya upgrade paket.</li>
            <li>Pelunasan dilakukan maksimal H-3 sebelum acara.</li>
            <li>Jika terjadi pembatalan/pergantian tanggal acara, maka DP masuk dianggap hangus.</li>
            <li>Jika pembatalan dilakukan setelah first meeting, client akan dikenakan cancelation fees sebesar 30% dari Grand Total Paket.</li>
            <li>Semua paket yang diambil belum termasuk transport untuk acara di luar kota wilayah Kudus dengan biaya tambahan sesuai kesepakatan.</li>
            <li>Jika jam acara over time, maka akan dikenakan biaya tambahan sesuai kesepakatan.</li>
            <li>Pembayaran bisa melalui Transfer Rekening:</li>
          </ul>
          <div className="ms-4">
            <p className={`${inriasans.className} font-medium text-lg`}>- BCA 0312460384 An ARIF NOOR ASRO</p>
            <p className={`${inriasans.className} font-medium text-lg`}>- BRI 592801028590535 An ARIF NOOR ASRO</p>
            <p className={`${inriasans.className} font-medium text-lg`}>- Mandiri 1840001625134 An ARIF NOOR ASRO</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
