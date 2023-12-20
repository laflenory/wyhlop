import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaVk, FaOdnoklassniki, FaFacebook, FaYoutube } from 'react-icons/fa';
import logotype from '@/public/logotype.png';

const Footer = () => {
  return (
    <footer className='mt-8 flex flex-col items-center justify-between gap-8 bg-zinc-900 p-12 lg:flex-row lg:p-16'>
      <div className='flex flex-col items-center gap-6 lg:items-start'>
        <Image src={logotype} alt='logotype' />
        <p className='max-w-sm text-center text-zinc-400 lg:text-left'>
          Первая специализированная мастерская по ремонту выхлопных систем в г.
          Гродно
        </p>
      </div>
      <div className='flex w-full flex-col gap-8 sm:w-fit'>
        <ul className='flex flex-col flex-wrap justify-center gap-8 sm:flex-row'>
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
              Услуги
              <div className='block text-2xl sm:hidden'>
                <FiArrowUpRight />
              </div>
            </Link>
          </li>
          <li className='text-zinc-400 hover:text-yellow-400'>
            <Link href='/' className='flex flex-row justify-between'>
              Контакты
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
        <ul className='flex flex-row flex-wrap justify-center gap-8 lg:justify-end'>
          <li className='text-2xl text-zinc-400 hover:text-yellow-400'>
            <Link href='/'>
              <FaVk />
            </Link>
          </li>
          <li className='text-2xl text-zinc-400 hover:text-yellow-400'>
            <Link href='/'>
              <FaOdnoklassniki />
            </Link>
          </li>
          <li className='text-2xl text-zinc-400 hover:text-yellow-400'>
            <Link href='/'>
              <FaFacebook />
            </Link>
          </li>
          <li className='text-2xl text-zinc-400 hover:text-yellow-400'>
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
