import Link from 'next/link';
import Image from 'next/image';
import { FaVk, FaOdnoklassniki, FaFacebook, FaYoutube } from 'react-icons/fa';
import logotype from '@/public/logotype.png';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-between gap-12 bg-zinc-900 mt-24 p-12 lg:flex-row lg:p-24'>
      <div className='flex flex-col gap-6 items-center lg:items-start'>
        <Image src={logotype} alt='logotype' />
        <p className='max-w-sm text-zinc-400 text-center lg:text-left'>
          Первая специализированная мастерская по ремонту выхлопных систем в г.
          Гродно.
        </p>
      </div>
      <div className='flex flex-col gap-8'>
        <ul className='flex flex-wrap flex-row gap-8 justify-center'>
          <li className='text-zinc-400 hover:text-yellow-400'>
            <Link href='/'>Главная</Link>
          </li>
          <li className='text-zinc-400 hover:text-yellow-400'>
            <Link href='/'>О нас</Link>
          </li>
          <li className='text-zinc-400 hover:text-yellow-400'>
            <Link href='/'>Наши преимущества</Link>
          </li>
          <li className='text-zinc-400 hover:text-yellow-400'>
            <Link href='/'>Наши услуги</Link>
          </li>
          <li className='text-zinc-400 hover:text-yellow-400'>
            <Link href='/'>Блог</Link>
          </li>
        </ul>
        <ul className='flex flex-wrap flex-row gap-8 justify-center lg:justify-end'>
          <li className='text-zinc-400 text-2xl hover:text-yellow-400'>
            <Link href='/'>
              <FaVk />
            </Link>
          </li>
          <li className='text-zinc-400 text-2xl hover:text-yellow-400'>
            <Link href='/'>
              <FaOdnoklassniki />
            </Link>
          </li>
          <li className='text-zinc-400 text-2xl hover:text-yellow-400'>
            <Link href='/'>
              <FaFacebook />
            </Link>
          </li>
          <li className='text-zinc-400 text-2xl hover:text-yellow-400'>
            <Link href='/'>
              <FaYoutube />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
