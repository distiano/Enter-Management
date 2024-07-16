import { Inria_Sans } from 'next/font/google';

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const Footer = () => {
  return (
    <footer className="  border-t-4 lg:bg-right " style={{ backgroundImage: "url('/images/bgfooter.png')", backgroundRepeat: 'no-repeat' }}>
      <div className={`${inriasans.className} bg-gradient-to-l from-[#FDFDFD00] to-[#FDFDFD] backdrop-brightness-150  mx-auto max-w-screen-xl space-y-8 px-4  sm:px-6 lg:space-y-16 lg:px-8 pb-5`}>
        <div className=" grid grid-cols-1 gap-8  px-6 lg:px-12  border-b-4 border-[#D1D1D1] w-full py-5">
          <div>
            <div className="text-teal-600">
              <img src="/images/Logo.png" className="h-16 w-auto" alt="" />
            </div>

            {/* <p className={` text-black mt-4 w-[400px]`}>Purwosari, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59316 (Enter Management Kudus)</p> */}
          </div>

          <div className="flex gap-16 ">
            <div>
              <ul className=" space-y-4 text-sm">
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Services
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Portofolio
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className=" space-y-4 text-sm">
                <a href="#" className=" transition hover:opacity-75">
                  Payment Method
                </a>

                <div className="flex flex-wrap w-3/4 gap-4 ">
                  <img src="/images/bri.png" className=" transition hover:opacity-75"></img>

                  <img src="/images/bca.png" className=" transition hover:opacity-75"></img>

                  <img src="/images/mandiri.png" className=" transition hover:opacity-75"></img>
                </div>
              </ul>
            </div>
          </div>
          <div className="flex justify-end items-end gap-4">
            <p className="text-xs lg:text-sm text-white">&copy; 2022. Company Name. All rights reserved.</p>

            <img src="/images/Instagram-white.png" className=" w-8" alt="" />
            <img src="/images/Whatsapp-white.png" className=" w-8" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
