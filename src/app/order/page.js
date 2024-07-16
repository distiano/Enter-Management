'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Inria_Sans, Inria_Serif } from 'next/font/google';
import Link from 'next/link';

const inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const Order = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/Frame 43.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className="bg-[#dededeb2]"
    >
      <Navbar />
      <section className="h-[35vh] lg:h-[40vh] flex items-end justify-center">
        <div className="text-center lg:w-[600px]">
          <h1 className={`${inriaserif.className} text-4xl font-bold`}>Order Enter Management</h1>
          <p className={`${inriasans.className} mt-6`}>Silakan isi Formulir Pemesanan di bawah ini. Kami akan segera memproses pesanan Anda. Harap isi dengan jelas agar kami dapat memproses pesanan Anda dengan lebih mudah.</p>
        </div>
      </section>
      <section className="px-4 lg:px-16 py-20">
        <div className={`${inriasans.className} rounded-md p-6 grid md:grid-cols-2 gap-6 bg-white bg-opacity-50`}>
          <div>
            <div>
              <label htmlFor="UserNama" className="block  font-medium text-gray-700">
                Nama
              </label>

              <input type="text" id="UserEmail" placeholder="Nama" className="mt-1 p-3 w-full rounded-lg border-gray-200 shadow-sm sm:text-sm" />
            </div>
            <div className="mt-3">
              <label htmlFor="UserEmail" className="block  font-medium text-gray-700">
                Tanggal
              </label>

              <input type="date" id="UserEmail" placeholder="Pilih Tanggal" className="mt-1 p-3 w-full rounded-lg border-gray-200 shadow-sm sm:text-sm" />
            </div>
            <div className="mt-3">
              <label htmlFor="UserEmail" className="block  font-medium text-gray-700">
                Alamat
              </label>

              <input type="text" id="UserEmail" placeholder="Alamat" className="mt-1 p-3 w-full rounded-lg border-gray-200 shadow-sm sm:text-sm" />
            </div>
            <div className="mt-3">
              <label htmlFor="UserEmail" className="block  font-medium text-gray-700">
                Email
              </label>

              <input type="email" id="UserEmail" placeholder="john@rhcp.com" className="mt-1 p-3 w-full rounded-lg border-gray-200 shadow-sm sm:text-sm" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="HeadlineAct" className="block font-medium text-gray-900">
                Jenis Layanan
              </label>

              <select name="HeadlineAct" id="HeadlineAct" className="mt-1.5 p-3 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm">
                <option value="">Pilih Paket</option>
                <option value="JM">Paket Silver 1</option>
                <option value="SRV">Paket Silver 2</option>
                <option value="JH">Paket Diamond 1</option>
                <option value="BBK">Paket Diamond 2</option>
                <option value="AK">Paket Luxury 1</option>
                <option value="BG">Paket Luxury 2</option>
                <option value="EC">Paket Luxury 3</option>
                <option value="AK">Paket Platinum 1</option>
                <option value="BG">Paket Platinum 2</option>
                <option value="EC">Paket Platinum 3</option>
              </select>
            </div>

            <div className="mt-3">
              <label htmlFor="OrderNotes" className="block font-medium text-gray-700">
                Pesan (Opsional)
              </label>

              <textarea id="OrderNotes" className="mt-2 p-3 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm" rows="4" placeholder="Enter any additional order notes..."></textarea>
            </div>
            <p className="text-xs mt-2">*Jika ada yang perlu ditambahkan lagi tentang order anda, silahkan hubungi kami via WhatsApp ke 08555555555.</p>
            <div className="flex mt-6">
              <Link href="/order" className="bg-black text-[#d8ab39] px-8 py-2 rounded-lg   leading-6 text-center hover:bg-red-800 transition duration-300 ease-in-out">
                Kirim
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Order;
