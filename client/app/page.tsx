import { Feedback, Wrapper } from '@/components';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Home = () => {
  return (
    <>
      <main>
        <section>
          <Wrapper>
            <div className='flex flex-col lg:flex-row'>
              <div className='w-full p-8 lg:w-1/2'>
                <h2 className='text-3xl text-zinc-900 font-bold'>Связаться</h2>
                <p className='max-w-xl text-lg text-zinc-500 mt-4 mb-8'>
                  Готовы ответить на ваши вопросы и предоставить необходимую
                  информацию. Свяжитесь с нами, и мы постараемся оперативно
                  помочь.
                </p>
                <ul className='flex flex-col gap-2 text-lg text-zinc-500 mb-8'>
                  <li className='flex items-center gap-3'>
                    <div className='text-zinc-900'>
                      <FiMapPin />
                    </div>
                    г. Гродно, ул. Суворова, 109
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='text-zinc-900'>
                      <FiPhone />
                    </div>
                    +375 (29) 889-66-10
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='text-zinc-900'>
                      <FiMail />
                    </div>
                    laflenory@wyhlop.com
                  </li>
                </ul>
                <div className='rounded-lg h-[280px] bg-zinc-100'></div>
              </div>
              <div className='w-full p-8 lg:w-1/2'>
                <Feedback />
              </div>
            </div>
          </Wrapper>
        </section>
      </main>
    </>
  );
};

export default Home;
