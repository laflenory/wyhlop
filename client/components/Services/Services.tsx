'use client';

import { useState } from 'react';

const Services = () => {
  const [active, setActive] = useState(0);

  const handleClick = (index: number) => {
    setActive(index);
  };

  const services = [
    { heading: 'Консультация' },
    { heading: 'Диагностика' },
    { heading: 'Выхлопная система' },
    { heading: 'Выпускной коллектор' },
    { heading: 'Катализатор' },
    { heading: 'Сажевый фильтр' },
    { heading: 'Резонатор' },
    { heading: 'Глушитель' },
  ];

  return (
    <div className='my-4 flex flex-col'>
      <header>
        <ul className='flex flex-row flex-wrap gap-4'>
          {services.map(({ heading }, index) => (
            <li
              className={`cursor-pointer rounded-lg border-2 border-zinc-300 px-3 py-2 text-zinc-900 ${
                active === index ? 'border-yellow-300 bg-yellow-300' : null
              } hover:border-yellow-200 hover:bg-yellow-200`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {heading}
            </li>
          ))}
        </ul>
      </header>
      <div></div>
    </div>
  );
};

export default Services;
