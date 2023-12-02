import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  return (
    <div className='flex flex-col divide-y gap-8 lg:flex-row lg:gap-14 lg:divide-y-0'>
      <div className='w-full lg:w-1/2'>
        <div className='flex flex-col'>
          <div className='rounded-lg h-[280px] bg-zinc-100'></div>
          <p className='text-zinc-400 text-sm my-4'>Декабрь 02, 2023</p>
          <h3 className='text-3xl text-zinc-900 font-bold'>
            We’re incredibly proud to announce we have secured $75m in Series B
          </h3>
          <p className='text-lg text-zinc-500 my-4'>
            Libero neque aenean tincidunt nec consequat tempor. Viverra odio id
            velit adipiscing id. Nisi vestibulum orci eget bibendum dictum.
            Velit viverra posuere vulputate volutpat nunc. Nunc netus sit
            faucibus.
          </p>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center gap-4'>
              <div className='bg-zinc-100 h-[30px] w-[30px] rounded-full'></div>
              <p className='text-zinc-900 font-semibold text-sm'>
                Artyom Tarasov
              </p>
            </div>
            <Link
              href='/'
              className='flex flex-row items-center gap-2 text-yellow-500 font-semibold'
            >
              Продолжить чтение
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full divide-y lg:w-1/2'>
        <Link href='/' className='group flex flex-col'>
          <p className='text-zinc-400 text-sm my-4'>Декабрь 02, 2023</p>
          <h3 className='text-lg text-zinc-900 font-bold group-hover:text-yellow-400 group-hover:underline'>
            We’re incredibly proud to announce we have secured $75m in Series B
          </h3>
          <p className='text-zinc-500 my-4'>
            Libero neque aenean tincidunt nec consequat tempor. Viverra odio id
            velit adipiscing id. Nisi vestibulum orci eget bibendum dictum.
            Velit viverra posuere vulputate volutpat nunc. Nunc netus sit
            faucibus.
          </p>
          <div className='flex flex-row items-center gap-4 mb-4'>
            <div className='bg-zinc-100 h-[30px] w-[30px] rounded-full'></div>
            <p className='text-zinc-900 font-semibold text-sm'>
              Artyom Tarasov
            </p>
          </div>
        </Link>
        <Link href='/' className='group flex flex-col'>
          <p className='text-zinc-400 text-sm my-4'>Декабрь 02, 2023</p>
          <h3 className='text-lg text-zinc-900 font-bold group-hover:text-yellow-400 group-hover:underline'>
            We’re incredibly proud to announce we have secured $75m in Series B
          </h3>
          <p className='text-zinc-500 my-4'>
            Libero neque aenean tincidunt nec consequat tempor. Viverra odio id
            velit adipiscing id. Nisi vestibulum orci eget bibendum dictum.
            Velit viverra posuere vulputate volutpat nunc. Nunc netus sit
            faucibus.
          </p>
          <div className='flex flex-row items-center gap-4 mb-4'>
            <div className='bg-zinc-100 h-[30px] w-[30px] rounded-full'></div>
            <p className='text-zinc-900 font-semibold text-sm'>
              Artyom Tarasov
            </p>
          </div>
        </Link>
        <Link href='/' className='group flex flex-col'>
          <p className='text-zinc-400 text-sm my-4'>Декабрь 02, 2023</p>
          <h3 className='text-lg text-zinc-900 font-bold group-hover:text-yellow-400 group-hover:underline'>
            We’re incredibly proud to announce we have secured $75m in Series B
          </h3>
          <p className='text-zinc-500 my-4'>
            Libero neque aenean tincidunt nec consequat tempor. Viverra odio id
            velit adipiscing id. Nisi vestibulum orci eget bibendum dictum.
            Velit viverra posuere vulputate volutpat nunc. Nunc netus sit
            faucibus.
          </p>
          <div className='flex flex-row items-center gap-4 mb-4'>
            <div className='bg-zinc-100 h-[30px] w-[30px] rounded-full'></div>
            <p className='text-zinc-900 font-semibold text-sm'>
              Artyom Tarasov
            </p>
          </div>
        </Link>
        <Link href='/' className='group flex flex-col'>
          <p className='text-zinc-400 text-sm my-4'>Декабрь 02, 2023</p>
          <h3 className='text-lg text-zinc-900 font-bold group-hover:text-yellow-400 group-hover:underline'>
            We’re incredibly proud to announce we have secured $75m in Series B
          </h3>
          <p className='text-zinc-500 my-4'>
            Libero neque aenean tincidunt nec consequat tempor. Viverra odio id
            velit adipiscing id. Nisi vestibulum orci eget bibendum dictum.
            Velit viverra posuere vulputate volutpat nunc. Nunc netus sit
            faucibus.
          </p>
          <div className='flex flex-row items-center gap-4 mb-4'>
            <div className='bg-zinc-100 h-[30px] w-[30px] rounded-full'></div>
            <p className='text-zinc-900 font-semibold text-sm'>
              Artyom Tarasov
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
