import '../styles/global.css';

import type { AppProps } from 'next/app';
import { ToastBar, Toaster } from 'react-hot-toast';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Toaster position="top-right">
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            animation: t.visible
              ? 'toast-enter 0.5s ease'
              : 'toast-exit 0.5s ease',
          }}
        />
      )}
    </Toaster>
  </>
);

export default MyApp;
