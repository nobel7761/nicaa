import Providers from '../lib/Providers';
import './global.css';

export const metadata = {
  title: 'NICAA',
  description: 'National Ideal College Alumni Association',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
