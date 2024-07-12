import { useState, useRef, useEffect } from 'react';
import { Inria_Sans } from 'next/font/google';

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const FAQItem = ({ question, answer, index, isOpen, toggleOpen }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    if (isOpen) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setContentHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="group">
      <div className="flex cursor-pointer items-center justify-between gap-1.5 rounded-md p-4 border-4 border-[#FFEDED]" onClick={() => toggleOpen(index)}>
        <h2 className="font-medium">{question}</h2>
        <svg className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          height: contentHeight,
        }}
      >
        <p className="mt-4 px-4 leading-relaxed text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleOpen = (index) => {
    setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  const faqItems = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!',
    },
  ];

  return (
    <div className={`space-y-4 mt-10 lg:px-32 ${inriasans.className}`}>
      {faqItems.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} index={index} isOpen={openIndexes.includes(index)} toggleOpen={toggleOpen} />
      ))}
    </div>
  );
}
