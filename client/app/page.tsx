import Link from 'next/link';
import { Accordion, Blog, Feedback, Map, Wrapper } from '@/components';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import {
  LuTrendingUp,
  LuWrench,
  LuSofa,
  LuRefreshCcw,
  LuThumbsUp,
} from 'react-icons/lu';

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

  const advantages = [
    {
      icon: <LuTrendingUp />,
      heading: 'Опыт работы и специализация',
      content:
        'Мы занимаемся ремонтом выхлопных систем с 2002 года и специализируемся исключительно на ремонте глушителей. У нас отмечается огромный опыт работы с различными системами выпуска отработавших газов.',
    },
    {
      icon: <LuThumbsUp />,
      heading: 'Качество работы и гарантия',
      content:
        'Мы гарантируем качество выполнения работ на порядок выше, чем на универсальных СТО, и предоставляем пожизненную гарантию на сварочный шов. Это позволяет завоевать доверие у наших клиентов.',
    },
    {
      icon: <LuRefreshCcw />,
      heading: 'Широкий спектр услуг',
      content:
        'Мы предлагаем разнообразные услуги, связанные с ремонтом, заменой, тюнингом и обслуживанием выхлопной системы. Это включает работу с глушителями, катализаторами, сажевыми фильтрами, выпускными коллекторами.',
    },
    {
      icon: <LuWrench />,
      heading: 'Оборудование и возможности',
      content:
        'Мы распологаем высокими воротами, что позволяет производить ремонт выхлопных систем в большегрузах и автобусах. Также дополнительный бонус - замер уровня шума после проведения работ.',
    },
    {
      icon: <LuSofa />,
      heading: 'Удобство и дополнительные сервисы',
      content:
        'Мы предлагаем бесплатный Wi-Fi для наших клиентов, предварительную запись для удобства, оплату банковской картой, а также квалифицированную помощь в выборе запчастей.',
    },
  ];

  return (
    <>
      <main className='flex flex-col gap-16'>
        <section>
          <Wrapper>
            <div className='flex flex-col lg:p-8'>
              <header className='flex flex-col justify-center items-center gap-4'>
                <p className='text-yellow-400 font-semibold'>
                  Наши преимущества
                </p>
                <h2 className='max-w-lg text-center text-3xl text-zinc-900 font-bold'>
                  Делаем ремонт выхлопной системы простым и доступным
                </h2>
                <p className='max-w-xl text-lg text-center text-zinc-500'>
                  С 2002 года мы занимаемся исключительно ремонтом выхлопных
                  систем автомобилей и гарантируем качество выполнения работ на
                  порядок выше, чем на универсальных СТО.
                </p>
              </header>
              <div className='grid grid-cols-1 gap-x-6 gap-y-6 mt-16 lg:grid-cols-2'>
                {advantages.map(({ heading, content, icon }) => (
                  <article className='flex flex-col border border-zinc-300 rounded-lg p-8'>
                    <header className='flex flex-col gap-6 text-zinc-900 font-bold'>
                      <div className='text-2xl'>{icon}</div>
                      <h3 className='text-lg'>{heading}</h3>
                    </header>
                    <p className='mt-4 text-zinc-500'>{content}</p>
                  </article>
                ))}
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
                <div className='rounded-lg h-[280px] bg-zinc-100'>
                  <Map />
                </div>
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
              </div>
            </header>
            <div className='py-8 lg:p-8'>
              <Blog />
            </div>
          </Wrapper>
        </section>
      </main>
    </>
  );
};

export default Home;
