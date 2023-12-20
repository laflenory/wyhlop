import Image from 'next/image';
import Link from 'next/link';
import { Wrapper } from '@/components';
import logotype from '@/public/logotype.png';

const Desktop = () => {
  return (
    <header className='fixed z-[9999] h-[80px] w-full border-b border-zinc-300 bg-white'>
      <Wrapper>
        <div className='my-auto flex h-full items-center justify-between lg:p-8'>
          <Image src={logotype} width={60} height={60} alt='logotype' />
          <nav>
            <ul className='text-md flex flex-row gap-8 text-zinc-900'>
              <li className='hover:text-yellow-400'>
                <Link href='/'>Главная</Link>
              </li>
              <li className='hover:text-yellow-400'>
                <Link href='/'>О нас</Link>
              </li>
              <li className='hover:text-yellow-400'>
                <Link href='/'>Услуги</Link>
              </li>
              <li className='hover:text-yellow-400'>
                <Link href='/'>Контакты</Link>
              </li>
              <li className='hover:text-yellow-400'>
                <Link href='/'>Блог</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};

const Mobile = () => {};

const Header = () => {
  return <Desktop />;
};

export default Header;
