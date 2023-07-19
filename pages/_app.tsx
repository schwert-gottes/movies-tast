import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from '@app/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
