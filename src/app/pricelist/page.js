'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inria_Serif, Inria_Sans } from 'next/font/google';

const inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="" style={{ backgroundImage: "url('/images/Rectangle 89.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="min-h-[50vh] flex flex-col justify-center items-center pt-14 text-center ">
            <h1 className={`${inriaserif.className} text-7xl font-extrabold text-white`}>PAKET & PRICE LIST</h1>
            <div className="grid grid-cols-4 gap-3 rounded-full mt-6 bg-[#303030] p-2 w-[700px]">
              <div className={`${inriasans.className} text-white text-sm font-bold rounded-full bg-[#6c6c6c] px-8 py-2 hover:border border-[#C00002]`}>Silver</div>
              <div className={`${inriasans.className} text-white text-sm font-bold rounded-full bg-[#404040] px-8 py-2`}>Diamond</div>
              <div className={`${inriasans.className} text-white text-sm font-bold rounded-full bg-[#404040] px-8 py-2`}>Luxury</div>
              <div className={`${inriasans.className} text-white text-sm font-bold rounded-full bg-[#404040] px-8 py-2`}>Platinum</div>
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

        className='p-10'
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/images/entersilver1.png" alt="paket silver" className="rounded-lg" style={{ width: '85%' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/images/entersilver2.png" alt="paket silver" className="rounded-lg" style={{ width: '85%' }} />
          </div>
        </div>


        <div className='mt-20 ml-20 p-4 bg-[#ffffffac]'>
          <h2 className={`${inriasans.className} font-bold text-4xl`}>
            Syarat & Ketentuan
          </h2>
          <ol style={{ paddingLeft: '20px' }} className={`${inriasans.className} font-medium text-lg mt-3 mb-3`}>
            <li>DP Awal Minimal 30% dari Grand Total Paket yang diambil.</li>
            <li>Setelah melakukan DP, pergantian paket tidak dapat dilakukan, kecuali sifatnya upgrade paket.</li>
            <li>Pelunasan dilakukan maksimal H-3 sebelum acara.</li>
            <li>Jika terjadi pembatalan/pergantian tanggal acara, maka DP masuk dianggap hangus.</li>
            <li>Jika pembatalan dilakukan setelah first meeting, client akan dikenakan cancelation fees sebesar 30% dari Grand Total Paket.</li>
            <li>Semua paket yang diambil belum termasuk transport untuk acara di luar kota wilayah Kudus dengan biaya tambahan sesuai kesepakatan.</li>
            <li>Jika jam acara over time, maka akan dikenakan biaya tambahan sesuai kesepakatan.</li>
            <li>Pembayaran bisa melalui Transfer Rekening.</li>
          </ol>

          <p className={`${inriasans.className} font-medium text-lg`}>
            - BCA 0312460384 An ARIF NOOR ASRO
          </p>
          <p className={`${inriasans.className} font-medium text-lg`}>
            - BRI 592801028590535 An ARIF NOOR ASRO
          </p>
          <p className={`${inriasans.className} font-medium text-lg`}>
            - Mandiri 1840001625134 An ARIF NOOR ASRO
          </p>
        </div>

      </section>



      <Footer />
    </>
  );
};

export default Services;
