import Link from 'next/link';
import Image from 'next/image';
import { Wrapper } from '@/components';
import logotype from '@/public/logotype.png';
import { FiArrowRight } from 'react-icons/fi';

const Development = () => {
  return (
    <main className='h-[100vh]'>
      <section className='h-full'>
        <Wrapper>
          <div className='flex h-full items-center'>
            <div className='flex flex-col'>
              <Image src={logotype} alt='wyhlop' />
              <div className='mt-12 flex flex-col gap-4'>
                <h1 className='max-w-xl text-3xl font-bold text-zinc-900'>
                  Данная страница находится в разработке
                </h1>
                <p className='max-w-xl text-lg text-zinc-500'>
                  Наша команда активно работает над её разработкой. В ближайшее
                  время она станет доступной.
                </p>
                <Link
                  href='/'
                  className='flex flex-row items-center gap-2 font-semibold text-zinc-900 hover:text-yellow-400'
                >
                  На главную
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
};

export default Development;
