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
          className='flex cursor-pointer flex-col gap-2 py-4'
          key={index}
          onClick={() => handleClick(index)}
        >
          <div className='flex flex-row items-center justify-between gap-8'>
            <h3 className={'max-w-lg font-semibold text-zinc-900'}>
              {heading}
            </h3>
            <div className='text-xl'>
              {active === index ? <FiMinus /> : <FiPlus />}
            </div>
          </div>
          {active === index && (
            <p className='max-w-[95%] text-zinc-500'>{content}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
