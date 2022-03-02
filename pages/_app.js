import '../styles/globals.css';
import Link from 'next/link';
// import { css } from 'emotion';

import Amplify from 'aws-amplify';
import config from '../src/aws-exports';

import { AmplifyProvider, Theme } from '@aws-amplify/ui-react';

Amplify.configure({
  ...config,
  ssr: true
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="navStyle">
        <Link href="/">
          <div className="linkStyle">Home</div>
        </Link>
        <Link href="/profile">
          <div className="linkStyle">Profile</div>
        </Link>
        <Link href="/protected">
          <div className="linkStyle">Protected SSR route</div>
        </Link>
        <Link href="/protected-client">
          <div className="linkStyle">Protected Client</div>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}


export const myTheme = {
  name: 'my-theme',
  tokens: {
    colors: {
      font: {
        primary: { value: 'red' },
      },
    },
  },
};

