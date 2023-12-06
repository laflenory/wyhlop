const Stats = () => {
  return (
    <ul className='flex flex-row gap-8 pt-4 flex-wrap text-zinc-900'>
      <li className='flex flex-col gap-2'>
        <p>Основаны</p>
        <h3 className='text-3xl font-bold'>2002</h3>
      </li>
      <li className='flex flex-col gap-2'>
        <p>Довольных клиентов</p>
        <h3 className='text-3xl font-bold'>+100</h3>
      </li>
      <li className='flex flex-col gap-2'>
        <p>Профессионалов</p>
        <h3 className='text-3xl font-bold'>+5</h3>
      </li>
    </ul>
  );
};

export default Stats;
