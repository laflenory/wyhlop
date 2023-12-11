'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const Item = ({ title, value }: { title: string; value: number }) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, Math.round);

  useEffect(() => {
    const animation = animate(motionValue, value, { duration: 5 });
    return animation.stop;
  }, []);

  return (
    <li className='flex flex-col gap-2'>
      <p>{title}</p>
      <motion.h3 className='text-3xl font-bold'>{rounded}</motion.h3>
    </li>
  );
};

const Stats = () => {
  const stats = [
    { title: 'Основаны', value: 2002 },
    { title: 'Довольных клиентов', value: 100 },
    { title: 'Профессионалов', value: 5 },
  ];

  return (
    <ul className='flex flex-row flex-wrap gap-8 pt-4 text-zinc-900'>
      {stats.map(({ title, value }) => (
        <Item title={title} value={value} />
      ))}
    </ul>
  );
};

export default Stats;
