import type { AlertProps } from './Alert.types';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Alert = ({ children, type }: AlertProps) => {
  switch (type) {
    case 'successful': {
      return (
        <div className='w-full rounded-lg flex flex-row items-center gap-3 p-3 bg-green-200 text-green-800'>
          <div className='text-lg'>
            <FiCheckCircle />
          </div>
          {children}
        </div>
      );
    }
    case 'error': {
      return (
        <div className='w-full rounded-lg flex flex-row items-center gap-3 p-3 bg-red-200 text-red-800'>
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
