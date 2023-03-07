import type { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500'],
  style: ['normal'],
});

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={roboto.className}>
        <Component {...pageProps} />
    </div>
  );
};
