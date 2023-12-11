import type { AlertProps } from './Alert.types';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Alert = ({ children, type }: AlertProps) => {
  switch (type) {
    case 'successful': {
      return (
        <div className='flex w-full flex-row items-center justify-center gap-3 rounded-lg bg-green-200 p-3 text-green-800 lg:justify-start'>
          <div className='text-lg'>
            <FiCheckCircle />
          </div>
          {children}
        </div>
      );
    }
    case 'error': {
      return (
        <div className='flex w-full flex-row items-center justify-center gap-3 rounded-lg bg-red-200 p-3 text-red-800 lg:justify-start'>
          <div className='text-lg'>
            <FiAlertCircle />
          </div>
          {children}
        </div>
      );
    }
  }
};

export default Alert;
