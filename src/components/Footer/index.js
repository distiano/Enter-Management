import { Inria_Sans } from 'next/font/google';

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const Footer = () => {
  return (
    <footer className="bg-white px-6 lg:px-16 border-t-4">
      <div className={`${inriasans.className} mx-auto max-w-screen-xl space-y-8 px-4 py-10 sm:px-6 lg:space-y-16 lg:px-8`}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
          <div>
            <div className="text-teal-600">
              <img src="/images/Logo.png" className="h-12 w-auto" alt="" />
            </div>

            <p className={` text-black mt-4`}>Purwosari, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59316 (Enter Management Kudus)</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-2">
            <div>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Payment Method{' '}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Partner{' '}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    FAQ{' '}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Contact{' '}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Home{' '}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Services{' '}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Portofolio{' '}
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    About Us{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end items-end gap-4 border-b-4 border-black w-full pb-5">
            <img src="/images/Instagram.png" className=" w-auto" alt="" />
            <img src="/images/Whatsapp.png" className=" w-auto" alt="" />
          </div>
        </div>
        <p className="text-xs text-gray-500">&copy; 2022. Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
