'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Alert } from '@/components';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { HomeFormInputs } from './Feedback.types';

const Feedback = () => {
  const [isSend, setIsSend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HomeFormInputs>({ reValidateMode: 'onSubmit' });

  const handleOnSubmit: SubmitHandler<HomeFormInputs> = (data) => {
    setIsSend(true);
    console.log(data);
  };

  return (
    <form
      className='flex flex-col gap-6 pt-8 lg:pt-0'
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <div className='flex flex-col gap-6 sm:flex-row'>
        <div className='w-full flex flex-col gap-4'>
          <label className='text-zinc-900 font-semibold'>* Имя</label>
          <input
            placeholder='Введите имя'
            className=' max-w-full text-zinc-900 outline-none ring-2 ring-inset ring-zinc-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-inset focus:ring-yellow-300'
            {...register('firstName', {
              required: 'Поле Имя обязательно для ввода',
            })}
          />
        </div>
        <div className='w-full flex flex-col gap-4'>
          <label className='text-zinc-900 font-semibold'>* Фамилия</label>
          <input
            placeholder='Введите фамилию'
            className='max-w-full text-zinc-900 outline-none ring-2 ring-inset ring-zinc-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-inset focus:ring-yellow-300'
            {...register('lastName', {
              required: 'Поле Фамилия обязательно для ввода',
            })}
          />
        </div>
      </div>
      <div className='w-full flex flex-col gap-4'>
        <label className='text-zinc-900 font-semibold'>* E-Mail</label>
        <input
          placeholder='Введите E-Mail'
          className='text-zinc-900 outline-none ring-2 ring-inset ring-zinc-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-inset focus:ring-yellow-300'
          {...register('email', {
            required: 'Поле E-Mail обязательно для ввода',
          })}
        />
      </div>
      <div className='w-full flex flex-col gap-4'>
        <label className='text-zinc-900 font-semibold'>Номер телефона</label>
        <input
          placeholder='Введите номер телефона'
          className='text-zinc-900 outline-none ring-2 ring-inset ring-zinc-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-inset focus:ring-yellow-300'
          {...register('phoneNumber')}
        />
      </div>
      <div className='w-full flex flex-col gap-4'>
        <label className='text-zinc-900 font-semibold'>* Сообщение</label>
        <textarea
          placeholder='Введите сообщение'
          className='text-zinc-900 outline-none ring-2 ring-inset ring-zinc-300 rounded-lg px-4 py-3 resize-none h-[160px] focus:ring-2 focus:ring-inset focus:ring-yellow-300'
          {...register('message', {
            required: 'Поле Сообщение обязательно для ввода',
          })}
        />
      </div>
      <div className='flex flex-col gap-6 lg:items-end'>
        {(errors.firstName && (
          <Alert type='error'>{errors.firstName.message}</Alert>
        )) ||
          (errors.lastName && (
            <Alert type='error'>{errors.lastName.message}</Alert>
          )) ||
          (errors.email && (
            <Alert type='error'>{errors.email.message}</Alert>
          )) ||
          (errors.message && (
            <Alert type='error'>{errors.message.message}</Alert>
          ))}
        {isSend && (
          <Alert type='successful'>Сообщение успешно отправлено</Alert>
        )}
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
          className='text-zinc-900 outline-none rounded-lg bg-yellow-300 px-6 py-3 cursor-pointer hover:bg-yellow-200'
        />
      </div>
    </form>
  );
};

export default Feedback;
