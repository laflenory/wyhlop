'use client';

import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import type { AccordionProps } from './Accordion.types';

const Accordion = ({ items }: AccordionProps) => {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (index === active) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <ul className='flex flex-col gap-2 divide-y'>
      {items.map(({ heading, content }, index) => (
        <li
          className='flex flex-col gap-2 py-4 cursor-pointer'
          key={index}
          onClick={() => handleClick(index)}
        >
          <div className='flex flex-row justify-between items-center gap-8'>
            <h3 className={'max-w-lg text-lg text-zinc-900 font-semibold'}>
              {heading}
            </h3>
            <div className='text-xl'>
              {active === index ? <FiMinus /> : <FiPlus />}
            </div>
          </div>
          {active === index && (
            <p className='max-w-[95%] text-lg text-zinc-500'>{content}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
