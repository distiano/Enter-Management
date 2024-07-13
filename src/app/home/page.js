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
        <div className="h-screen flex items-end pb-24 justify-center bg-gradient-to-b from-[#FF000300] to-[#f1d77b72]  animate__animated animate__fadeIn">
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

      <section
        style={{
          backgroundImage: "url('/images/background_about.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '90vh'
        }}
        className="flex items-center justify-center py-20 bg-gray-100 relative"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-8 px-4">
          <div className="md:w-2/3">
            <h2 className="text-5xl font-extrabold mb-4">Tentang Kami</h2>
            <p className="text-gray-700 font-semibold leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur. Non sed nunc est
              phasellus. Condimentum ultricies feugiat duis arcu at. Habitant
              pharetra commodo consectetur donec. Libero tellus viverra ac ac
              quis fringilla et. Parturient quam quis justo tortor dictumst
              turpis elit tellus. Praesent enim ultricies tempus nunc. Ut amet
              morbi condimentum ut sagittis dignissim fermentum at ultricies.
              Nullam turpis nibh turpis ultricies. Accumsan viverra nibh
              imperdiet quam commodo nibh quam.
            </p>
          </div>

          <div className="absolute bottom-0 left-36">
            <Image
              src="/images/arif_enter.png"
              alt="Arif Enter"
              width={350}
              height={450}
            />
          </div>
        </div>
      </section>

      <section className="py-16 text-white text-center" style={{ background: 'linear-gradient(to bottom, #9E7B1C, #ffffff)' }}>
        <h2 className="text-4xl font-bold mb-4">Paket Layanan Kami</h2>
        <p className="text-lg mb-10">Enter Management selalu memberikan pelayanan maksimal untuk hasil yang berkualitas</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-32">
          <div className="relative">
            <Image src="/images/Layanan 1.png" alt="Wedding Party" width={500} height={250} className="rounded-lg" />
            <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">Wedding Party</div>
          </div>
          <div className="relative">
            <Image src="/images/Layanan 2.png" alt="Birthday Party" width={500} height={250} className="rounded-lg" />
            <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">Birthday Party</div>
          </div>
          <div className="relative">
            <Image src="/images/Layanan 3.png" alt="Event Gathering" width={500} height={250} className="rounded-lg" />
            <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">Event Gathering</div>
          </div>
          <div className="relative">
            <Image src="/images/Layanan 4.png" alt="All Event/Pesta" width={500} height={250} className="rounded-lg" />
            <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">All Event/Pesta</div>
          </div>
          <div className="relative">
            <Image src="/images/Layanan 5.png" alt="Hiburan Artis Ibukota" width={500} height={250} className="rounded-lg" />
            <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">Hiburan Artis Ibukota</div>
          </div>
          <div className="relative">
            <Image src="/images/Layanan 6.png" alt="Jasa Wedding Party" width={500} height={250} className="rounded-lg" />
            <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">Jasa Wedding Party</div>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-4 mt-20">Kostum & Konsep</h2>
        <div className="px-20">
        <img src="/images/KostumDanKonsep.png" alt="Wedding Party" className="rounded-lg w-full" />
        </div>
      </section>

      <section className="pt-16 text-center">
        <h2 className="text-4xl font-bold mb-4">PROFESIONAL ARTIST MANAGEMENT</h2>
        <p className="text-lg mb-10">Kami sudah berpengalaman mendatangkan artis lokal hingga nasional untuk mewujudkan acara impianmu</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:px-32">
          <div>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Charlie Van Houten (ST 12)</button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Pasha Ungu</button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Tasya Rosmala</button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Elly Sugigi</button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Difarina Indra</button>
          </div>
          <div>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Mandala Abadi Shoji</button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Niken Salindri</button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Juwita Bahar</button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Yeni Inka</button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Nassar Sungkar</button>
          </div>
          <div>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Zaskia Gotik, Dll.</button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Wali Band</button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Jihan Audy</button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg mb-2 w-full">Trisuaka</button>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-4 mt-20">Kostum & Konsep</h2>
        <div className="">
        <img src="/images/ENTER MANAGEMENT_ARTIS.png" alt="Wedding Party" className="rounded-lg w-full" />
        </div>
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
        <div className="md:w-1/2 p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.349308011796!2d110.83306415123352!3d-6.804566995006327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70c4ef8f9e183f%3A0x2e0e8b7c5a5c9f!2sENY%20Kaca%20Film!5e0!3m2!1sen!2sid!4v1626798427747!5m2!1sen!2sid"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-lg font-semibold text-gray-800 mb-2">Alamat</p>
          <p className="text-gray-700 mb-4">
            Purwosari, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59316 (Enter Management Kudus)
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-2">Jam Operasional</p>
          <p className="text-gray-700 mb-4">09.00 - 18.00 WIB</p>
          <p className="text-lg font-semibold text-gray-800 mb-2">Pemesan</p>
          <p className="text-gray-700 mb-4">0856 4106 4464 (Owner)</p>
          <p className="text-gray-700">0852 9094 3434 (Admin)</p>
        </div>
      </div>
    </section>



      <Footer />
    </>
  );
}
