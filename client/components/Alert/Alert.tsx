import type { AlertProps } from './Alert.types';
import { FiAlertCircle } from 'react-icons/fi';

const Alert = ({ children, type }: AlertProps) => {
  return (
    <div className='w-full rounded-lg flex flex-row items-center gap-3 p-3 bg-red-200 text-red-800'>
      <div className='text-lg'>
        <FiAlertCircle />
      </div>
      {children}
    </div>
  );
};

export default Alert;
