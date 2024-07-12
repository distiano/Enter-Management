'use client';

import Navbar from '@/components/Navbar';
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
        <div className="" style={{ backgroundImage: "url('/images/Rectangle 49.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="min-h-[80vh] flex flex-col justify-center items-center pt-14 text-center ">
            <h1 className={`${inriaserif.className} text-4xl font-bold text-white`}>Produk Layanan Enter Management</h1>
            <div className="grid grid-cols-4 gap-3 rounded-full mt-6 bg-white p-2 w-[700px]">
              <div className={`${inriasans.className} text-sm font-bold rounded-full bg-[#FED8D8] px-8 py-2 hover:border border-[#C00002]`}>Wedding Organizer</div>
              <div className={`${inriasans.className} text-sm font-bold rounded-full bg-[#FED8D8] px-8 py-2`}>Wedding Organizer</div>
              <div className={`${inriasans.className} text-sm font-bold rounded-full bg-[#FED8D8] px-8 py-2`}>Wedding Organizer</div>
              <div className={`${inriasans.className} text-sm font-bold rounded-full bg-[#FED8D8] px-8 py-2`}>Wedding Organizer</div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Services;
