import Link from 'next/link';
import { Feedback, Wrapper } from '@/components';
import { FiMapPin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi';
import { Accordion } from '@/components/Accordion';

const Home = () => {
  const questions = [
    {
      heading: 'Какие виды услуг входят в спектр работ вашей мастерской?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      heading:
        'Каким образом проводится диагностика перед ремонтом и после заврершения работ?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      heading:
        'На каких марках и моделей автомобилей вы специализируетесь на ремонте? ',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      heading: 'Какие акции и скидки в данный момент действуют у вас?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      heading: 'Какой режим работы для осмотра автомобиля?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      heading:
        'Какие способы оплаты вы принимаете? Есть ли возможность оплаты картой?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      heading: 'Как долго обычно занимает ремонт выхлопной системы?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
  ];

  return (
    <>
      <main className='flex flex-col gap-16'>
        <section>
          <Wrapper>
            <div className='flex flex-col lg:flex-row'>
              <div className='w-full lg:w-1/2 lg:p-8'>
                <header>
                  <h2 className='text-3xl text-zinc-900 font-bold'>
                    Часто задаваемые вопросы
                  </h2>
                  <p className='max-w-xl text-lg text-zinc-500 mt-4 mb-8'>
                    Не можете найти ответ на интересующий вас вопрос? Обратитесь
                    в нашу{' '}
                    <Link href='/' className='text-yellow-400 font-semibold'>
                      службу поддержки
                    </Link>{' '}
                    клиентов.
                  </p>
                </header>
              </div>
              <div className='w-full lg:w-1/2 lg:p-8'>
                <Accordion items={questions} />
              </div>
            </div>
          </Wrapper>
        </section>
        <section>
          <Wrapper>
            <div className='flex flex-col lg:flex-row'>
              <div className='w-full lg:w-1/2 lg:p-8'>
                <header>
                  <h2 className='text-3xl text-zinc-900 font-bold'>
                    Связаться
                  </h2>
                  <p className='max-w-xl text-lg text-zinc-500 mt-4 mb-8'>
                    Готовы ответить на ваши вопросы и предоставить необходимую
                    информацию. Свяжитесь с нами, и мы постараемся оперативно
                    помочь.
                  </p>
                </header>
                <ul className='flex flex-col gap-4 text-zinc-500 mb-8'>
                  <li className='flex items-center gap-3'>
                    <div className='text-zinc-900 text-xl'>
                      <FiMapPin />
                    </div>
                    г. Гродно, ул. Суворова, 109
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='text-zinc-900 text-xl'>
                      <FiPhone />
                    </div>
                    +375 (29) 889-66-10
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='text-zinc-900 text-xl'>
                      <FiMail />
                    </div>
                    laflenory@wyhlop.com
                  </li>
                </ul>
                <div className='rounded-lg h-[280px] bg-zinc-100'></div>
              </div>
              <div className='w-full lg:w-1/2 lg:p-8'>
                <Feedback />
              </div>
            </div>
          </Wrapper>
        </section>
        <section>
          <Wrapper>
            <header className='w-full bb-1 lg:p-8'>
              <div className='flex flex-row justify-between items-center gap-8 border-b border-gray-200'>
                <div>
                  <h2 className='text-3xl text-zinc-900 font-bold'>Из блога</h2>
                  <p className='max-w-xl text-lg text-zinc-500 mt-4 mb-8'>
                    Советы по ремонту выхлопных систем. Следите за новостями и
                    полезной информацией от наших экспертов.
                  </p>
                </div>
                <Link
                  href='/blog/page/1'
                  className='flex flex-row gap-2 items-center text-lg text-zinc-900'
                >
                  Перейти в блог
                  <FiArrowRight />
                </Link>
              </div>
            </header>
            <div className='lg:p-8'></div>
          </Wrapper>
        </section>
      </main>
    </>
  );
};

export default Home;
