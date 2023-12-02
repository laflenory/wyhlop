import { Metadata } from 'next';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'wyhlop - Специализированная мастерская по ремонту выхлопных систем',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ru'>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
