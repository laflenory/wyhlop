import Link from 'next/link';
import Image from 'next/image';
import lada from '@/public/lada.png';
import geely from '@/public/geely.png';

const Partners = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-8 items-center lg:flex-row'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <header>
            <h2 className='text-3xl text-zinc-900 font-bold'>Наши партнёры</h2>
            <p className='text-lg text-zinc-500 mt-4'>
              Если вы являетесь членом данных автоклубов, мы рады сообщить вам о
              специальном предложении! Вас ожидает эксклюзивная 10% скидка на
              все наши услуги.
            </p>
          </header>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <ul className='flex flex-row items-center gap-16 justify-center'>
            <li>
              <Link href='https://lada-club.by/'>
                <Image
                  className='max-w-[200px] max-h-[200px]'
                  src={lada}
                  alt='lada'
                />
              </Link>
            </li>
            <li>
              <Link href='https://geely-club.by/'>
                <Image
                  className='max-w-[200px] max-h-[200px]'
                  src={geely}
                  alt='geely'
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <p className='inline text-center text-sm px-4 py-2 text-zinc-500 bg-zinc-100 border border-zinc-200 rounded-lg'>
          Готовы к сотрудничеству? Чтобы узнать больше и обсудить возможности
          партнерства,{' '}
          <Link href='/' className='text-yellow-400 font-semibold'>
            нажмите здесь
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Partners;
