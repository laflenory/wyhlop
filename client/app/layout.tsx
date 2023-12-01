import '@/styles/globals.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ru'>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
