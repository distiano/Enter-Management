'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Inria_Sans, Inria_Serif } from 'next/font/google';

const inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const Order = () => {
  const [form, setForm] = useState({
    nama: '',
    tanggal: '',
    alamat: '',
    email: '',
    layanan: '',
    pesan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { nama, tanggal, alamat, email, layanan, pesan } = form;
    const formattedDate = new Date(tanggal).toLocaleDateString('id-ID');
    const message = `FORM ORDER ENTER MANAGEMENT\n\nNama: ${nama}\nTanggal: ${formattedDate}\nAlamat: ${alamat}\nEmail: ${email}\nLayanan: ${layanan}\nPesan: ${pesan}`;
    const whatsappUrl = `https://wa.me/6285641064464?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };


  return (
    <>
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
            <p className={`${inriasans.className} mt-6`}>
              Silakan isi Formulir Pemesanan di bawah ini. Kami akan segera memproses pesanan Anda. Harap isi dengan jelas agar kami dapat memproses pesanan Anda dengan lebih mudah.
            </p>
          </div>
        </section>
        <section className="px-4 lg:px-16 py-20">
          <div className={`${inriasans.className} rounded-md p-6 grid md:grid-cols-2 gap-6 bg-white bg-opacity-50`}>
            <div>
              <div>
                <label htmlFor="nama" className="block font-medium text-gray-700">
                  Nama
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  placeholder="Nama"
                  className="mt-1 p-3 w-full rounded-lg border-gray-200 shadow-sm sm:text-sm"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="tanggal" className="block font-medium text-gray-700">
                  Tanggal
                </label>
                <input
                  type="date"
                  id="tanggal"
                  name="tanggal"
                  value={form.tanggal}
                  onChange={handleChange}
                  placeholder="Pilih Tanggal"
                  className="mt-1 p-3 w-full rounded-lg border-gray-200 shadow-sm sm:text-sm"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="alamat" className="block font-medium text-gray-700">
                  Alamat
                </label>
                <input
                  type="text"
                  id="alamat"
                  name="alamat"
                  value={form.alamat}
                  onChange={handleChange}
                  placeholder="Alamat"
                  className="mt-1 p-3 w-full rounded-lg border-gray-200 shadow-sm sm:text-sm"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="email" className="block font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@rhcp.com"
                  className="mt-1 p-3 w-full rounded-lg border-gray-200 shadow-sm sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="layanan" className="block font-medium text-gray-900">
                  Jenis Layanan
                </label>
                <select
                  name="layanan"
                  id="layanan"
                  value={form.layanan}
                  onChange={handleChange}
                  className="mt-1.5 p-3 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                >
                  <option value="">Pilih Paket</option>
                  <option value="Paket Silver 1">Paket Silver 1</option>
                  <option value="Paket Silver 2">Paket Silver 2</option>
                  <option value="Paket Diamond 1">Paket Diamond 1</option>
                  <option value="Paket Diamond 2">Paket Diamond 2</option>
                  <option value="Paket Luxury 1">Paket Luxury 1</option>
                  <option value="Paket Luxury 2">Paket Luxury 2</option>
                  <option value="Paket Luxury 3">Paket Luxury 3</option>
                  <option value="Paket Platinum 1">Paket Platinum 1</option>
                  <option value="Paket Platinum 2">Paket Platinum 2</option>
                  <option value="Paket Platinum 3">Paket Platinum 3</option>
                </select>
              </div>
              <div className="mt-3">
                <label htmlFor="pesan" className="block font-medium text-gray-700">
                  Pesan (Opsional)
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                  rows="4"
                  placeholder="Enter any additional order notes..."
                ></textarea>
              </div>
              <p className="text-xs mt-2">
                *Jika ada yang perlu ditambahkan lagi tentang order anda, silahkan hubungi kami via WhatsApp ke 0856-4106-4464.
              </p>
              <div className="flex mt-6">
                <button
                  onClick={handleSubmit}
                  className="bg-black text-[#B79C55] px-8 py-2 rounded-lg leading-6 text-center hover:bg-[#B79C55] hover:text-white transition duration-300 ease-in-out"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Order;
