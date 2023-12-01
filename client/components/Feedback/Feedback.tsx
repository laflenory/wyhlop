'use client';

import Link from 'next/link';

const Feedback = () => {
  return (
    <form className='flex flex-col gap-6 pt-8 lg:pt-0'>
      <div className='flex flex-col gap-6 sm:flex-row'>
        <div className='w-full flex flex-col gap-4'>
          <label className='text-zinc-900 font-semibold'>* Имя</label>
          <input
            placeholder='Введите имя'
            className=' max-w-full text-zinc-900 outline-none ring-1 ring-inset ring-zinc-300 rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-inset focus:ring-yellow-300'
          />
        </div>
        <div className='w-full flex flex-col gap-4'>
          <label className='text-zinc-900 font-semibold'>* Фамилия</label>
          <input
            placeholder='Введите фамилию'
            className='max-w-full text-zinc-900 outline-none ring-1 ring-inset ring-zinc-300 rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-inset focus:ring-yellow-300'
          />
        </div>
      </div>
      <div className='w-full flex flex-col gap-4'>
        <label className='text-zinc-900 font-semibold'>* E-Mail</label>
        <input
          placeholder='Введите E-Mail'
          className='text-zinc-900 outline-none ring-1 ring-inset ring-zinc-300 rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-inset focus:ring-yellow-300'
        />
      </div>
      <div className='w-full flex flex-col gap-4'>
        <label className='text-zinc-900 font-semibold'>Номер телефона</label>
        <input
          placeholder='Введите номер телефона'
          className='text-zinc-900 outline-none ring-1 ring-inset ring-zinc-300 rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-inset focus:ring-yellow-300'
        />
      </div>
      <div className='w-full flex flex-col gap-4'>
        <label className='text-zinc-900 font-semibold'>* Сообщение</label>
        <textarea
          placeholder='Введите сообщение'
          className='text-zinc-900 outline-none ring-1 ring-inset ring-zinc-300 rounded-lg shadow-sm px-4 py-3 resize-none h-[160px] focus:ring-2 focus:ring-inset focus:ring-yellow-300'
        />
      </div>
      <div className='flex flex-col gap-6 md:items-end'>
        <p className='text-center text-zinc-500 md:text-right'>
          Отправляя эту форму, я соглашаюсь с{' '}
          <Link href='/' className='text-yellow-400 font-semibold'>
            политикой конфиденциальности
          </Link>
          .
        </p>
        <input
          value='Отправить сообщение'
          type='submit'
          className='text-zinc-900 font-semibold outline-none rounded-lg bg-yellow-300 px-6 py-3 cursor-pointer hover:bg-yellow-200'
        />
      </div>
    </form>
  );
};

export default Feedback;
