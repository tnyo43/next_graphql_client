import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GraphQLProvider } from '~/hooks/config/GraphQLProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <GraphQLProvider>
    <Component {...pageProps} />
  </GraphQLProvider>
);

export default MyApp;
