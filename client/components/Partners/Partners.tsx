import Link from 'next/link';
import Image from 'next/image';
import lada from '@/public/lada.png';
import geely from '@/public/geely.png';

const Partners = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col items-center gap-8 lg:flex-row'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <header>
            <h2 className='text-3xl font-bold text-zinc-900'>Наши партнёры</h2>
            <p className='mt-4 text-lg text-zinc-500'>
              Если вы являетесь членом данных автоклубов, мы рады сообщить вам о
              специальном предложении! Вас ожидает эксклюзивная 10% скидка на
              все наши услуги.
            </p>
          </header>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <ul className='flex flex-row items-center justify-center gap-16'>
            <li>
              <Link href='https://lada-club.by/'>
                <Image
                  className='max-h-[200px] max-w-[200px]'
                  src={lada}
                  alt='lada'
                />
              </Link>
            </li>
            <li>
              <Link href='https://geely-club.by/'>
                <Image
                  className='max-h-[200px] max-w-[200px]'
                  src={geely}
                  alt='geely'
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <p className='inline rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-2 text-center text-sm text-zinc-500'>
          Готовы к сотрудничеству? Чтобы узнать больше и обсудить возможности
          партнерства,{' '}
          <Link href='/' className='font-semibold text-yellow-400'>
            нажмите здесь
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Partners;
