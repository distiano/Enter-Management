import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Inria_Serif, Inria_Sans } from 'next/font/google';
import { usePathname } from 'next/navigation';

const inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About Us', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Price List', href: '/pricelist' },

  // { name: 'Portofolio', href: '/portofolio' },
];

export default function Example() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-opacity-100' : 'bg-opacity-30'}`} style={{ transition: 'background-color 0.3s ease', background: 'linear-gradient(90deg, #B4903A, #FFFEA6 50%, #B4903A)' }}>
      <nav className="flex items-center justify-between p-4 lg:p-2 lg:px-8 shadow-lg" aria-label="Global">
        <div className="flex items-center lg:flex-1 lg:justify-start">
          <div className=" lg:static lg:transform-none">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Your Company</span>
              <img src="/images/EnterManagementKudus-logo.png" className="h-12 w-auto" alt="Enter Management Kudus Logo" />
              <div className="ml-4 font-bold  lg:text-2xl text-black">
                <span className={inriaserif.className}>ENTER MANAGEMENT KUDUS</span>
              </div>
            </Link>
          </div>
          <button type="button" className="-m-2.5 absolute right-3 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className={`h-6 w-6 ${isScrolled ? 'text-black' : 'text-gray-700'}`} aria-hidden="true" />
          </button>
        </div>
        <div className={`hidden lg:flex gap-6 ${inriasans.className}`}>
          <div className="hidden lg:flex lg:gap-x-4 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-black rounded-md px-3 py-2  text-sm font-bold transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#574315ce] after:transition-all after:duration-300 hover:after:w-full hover:font-bold ${
                  pathname === item.href ? 'text-[#574315] font-bold after:w-full' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <Link href="/order" className="bg-black px-4 py-2 rounded-lg text-sm font-semibold leading-6 text-white text-center hover:bg-gray-800 transition duration-300 ease-in-out">
              Order Now
            </Link>
          </div>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/images/EnterManagementKudus-logo.png" alt="" />
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 hover:font-bold" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className={`-mx-3 block rounded-lg px-3 py-2 text-sm font-normal leading-7  hover:font-bold transition duration-300 ease-in-out`}>
                    {item.name}
                  </Link>
                ))}
                <div className="lg:flex lg:flex-1 lg:justify-end pt-4">
                  <Link href="/order" className="bg-black px-8 py-3 rounded-lg text-sm font-semibold leading-6 text-white text-center hover:bg-gray-800 transition duration-300 ease-in-out">
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
