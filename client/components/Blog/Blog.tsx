import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { LuClock } from 'react-icons/lu';
import background from '@/public/article.jpg';
import avatar from '@/public/avatar.png';

const Blog = () => {
  return (
    <div className='flex flex-col items-center gap-8 divide-y lg:flex-row lg:gap-14 lg:divide-y-0'>
      <div className='w-full lg:w-1/2'>
        <article className='flex flex-col'>
          <div className='h-[360px] bg-zinc-100'>
            <Image
              src={background}
              className='relative h-full w-full rounded-lg object-cover'
              alt='article'
            />
          </div>
          <p className='my-4 inline-flex flex-row items-center gap-2 text-sm text-zinc-400'>
            <LuClock />
            Декабрь 02, 2023
          </p>
          <h3 className='text-3xl font-bold text-zinc-900'>
            We’re incredibly proud to announce we have secured $75m in Series B
          </h3>
          <p className='my-4 text-lg text-zinc-500'>
            Libero neque aenean tincidunt nec consequat tempor. Viverra odio id
            velit adipiscing id. Nisi vestibulum orci eget bibendum dictum.
            Velit viverra posuere vulputate volutpat nunc. Nunc netus sit
            faucibus.
          </p>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center gap-3'>
              <div className='h-[30px] w-[30px]'>
                <Image className='rounded-full' src={avatar} alt='avatar' />
              </div>
              <p className='text-sm font-semibold text-zinc-900'>
                Artyom Tarasov
              </p>
            </div>
            <Link
              href='/'
              className='flex flex-row items-center gap-2 font-semibold text-zinc-900'
            >
              Продолжить чтение
              <FiArrowRight />
            </Link>
          </div>
        </article>
      </div>
      <div className='w-full divide-y lg:w-1/2'>
        <article>
          <Link href='/' className='group flex flex-col'>
            <p className='mb-4 inline-flex flex-row items-center gap-2 text-sm text-zinc-400'>
              <LuClock />
              Декабрь 02, 2023
            </p>
            <h3 className='text-lg font-bold text-zinc-900 group-hover:text-yellow-400 group-hover:underline'>
              We’re incredibly proud to announce we have secured $75m in Series
              B
            </h3>
            <p className='my-4 text-zinc-500'>
              Libero neque aenean tincidunt nec consequat tempor. Viverra odio
              id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum.
              Velit viverra posuere vulputate volutpat nunc. Nunc netus sit
              faucibus.
            </p>
            <div className='mb-4 flex flex-row items-center gap-3'>
              <div className='h-[30px] w-[30px]'>
                <Image className='rounded-full' src={avatar} alt='avatar' />
              </div>
              <p className='text-sm font-semibold text-zinc-900'>
                Artyom Tarasov
              </p>
            </div>
          </Link>
        </article>
        <article>
          <Link href='/' className='group flex flex-col'>
            <p className='my-4 inline-flex flex-row items-center gap-2 text-sm text-zinc-400'>
              <LuClock />
              Декабрь 02, 2023
            </p>
            <h3 className='text-lg font-bold text-zinc-900 group-hover:text-yellow-400 group-hover:underline'>
              We’re incredibly proud to announce we have secured $75m in Series
              B
            </h3>
            <p className='my-4 text-zinc-500'>
              Libero neque aenean tincidunt nec consequat tempor. Viverra odio
              id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum.
              Velit viverra posuere vulputate volutpat nunc. Nunc netus sit
              faucibus.
            </p>
            <div className='mb-4 flex flex-row items-center gap-3'>
              <div className='h-[30px] w-[30px]'>
                <Image className='rounded-full' src={avatar} alt='avatar' />
              </div>
              <p className='text-sm font-semibold text-zinc-900'>
                Artyom Tarasov
              </p>
            </div>
          </Link>
        </article>
        <article>
          <Link href='/' className='group flex flex-col'>
            <p className='my-4 inline-flex flex-row items-center gap-2 text-sm text-zinc-400'>
              <LuClock />
              Декабрь 02, 2023
            </p>
            <h3 className='text-lg font-bold text-zinc-900 group-hover:text-yellow-400 group-hover:underline'>
              We’re incredibly proud to announce we have secured $75m in Series
              B
            </h3>
            <p className='my-4 text-zinc-500'>
              Libero neque aenean tincidunt nec consequat tempor. Viverra odio
              id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum.
              Velit viverra posuere vulputate volutpat nunc. Nunc netus sit
              faucibus.
            </p>
            <div className='mb-4 flex flex-row items-center gap-3'>
              <div className='h-[30px] w-[30px]'>
                <Image className='rounded-full' src={avatar} alt='avatar' />
              </div>
              <p className='text-sm font-semibold text-zinc-900'>
                Artyom Tarasov
              </p>
            </div>
          </Link>
        </article>
        <article>
          <Link href='/' className='group flex flex-col'>
            <p className='my-4 inline-flex flex-row items-center gap-2 text-sm text-zinc-400'>
              <LuClock />
              Декабрь 02, 2023
            </p>
            <h3 className='text-lg font-bold text-zinc-900 group-hover:text-yellow-400 group-hover:underline'>
              We’re incredibly proud to announce we have secured $75m in Series
              B
            </h3>
            <p className='my-4 text-zinc-500'>
              Libero neque aenean tincidunt nec consequat tempor. Viverra odio
              id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum.
              Velit viverra posuere vulputate volutpat nunc. Nunc netus sit
              faucibus.
            </p>
            <div className='mb-4 flex flex-row items-center gap-3'>
              <div className='h-[30px] w-[30px]'>
                <Image className='rounded-full' src={avatar} alt='avatar' />
              </div>
              <p className='text-sm font-semibold text-zinc-900'>
                Artyom Tarasov
              </p>
            </div>
          </Link>
        </article>
      </div>
    </div>
  );
};

export default Blog;
