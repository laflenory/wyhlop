import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaVk, FaOdnoklassniki, FaFacebook, FaYoutube } from 'react-icons/fa';
import logotype from '@/public/logotype.png';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-between gap-8 mt-8 bg-zinc-900 p-12 lg:flex-row lg:p-16'>
      <div className='flex flex-col gap-6 items-center lg:items-start'>
        <Image src={logotype} alt='logotype' />
        <p className='max-w-sm text-zinc-400 text-center lg:text-left'>
          Первая специализированная мастерская по ремонту выхлопных систем в г.
          Гродно
        </p>
      </div>
      <div className='w-full flex flex-col gap-8 sm:w-fit'>
        <ul className='flex flex-wrap flex-col gap-8 justify-center sm:flex-row'>
          <li className='text-zinc-400 hover:text-yellow-400'>
            <Link href='/' className='flex flex-row justify-between'>
              Главная
              <div className='block text-2xl sm:hidden'>
                <FiArrowUpRight />
              </div>
            </Link>
          </li>
          <li className='text-zinc-400 hover:text-yellow-400'>
            <Link href='/' className='flex flex-row justify-between'>
              О нас
              <div className='block text-2xl sm:hidden'>
                <FiArrowUpRight />
              </div>
            </Link>
          </li>
          <li className='text-zinc-400 hover:text-yellow-400'>
            <Link href='/' className='flex flex-row justify-between'>
              Наши преимущества
              <div className='block text-2xl sm:hidden'>
                <FiArrowUpRight />
              </div>
            </Link>
          </li>
          <li className='text-zinc-400 hover:text-yellow-400'>
            <Link href='/' className='flex flex-row justify-between'>
              Наши услуги
              <div className='block text-2xl sm:hidden'>
                <FiArrowUpRight />
              </div>
            </Link>
          </li>
          <li className='text-zinc-400 hover:text-yellow-400'>
            <Link href='/' className='flex flex-row justify-between'>
              Блог
              <div className='block text-2xl sm:hidden'>
                <FiArrowUpRight />
              </div>
            </Link>
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
