import 'antd/dist/antd.css';

import * as React from 'react';
import { Router } from 'next/router';
import { AppProps } from 'next/app';

import Core from '@components/common/Core';
import SEO from '@components/common/SEO';

import { AppProvider } from "@provider/index";

const Noop: React.FC = ({ children }) => <>{children}</>;

function AppPage({ Component, pageProps }: AppProps) {
 
    const Layout = (Component as any).Layout || Noop;
  
    return (
      <>
        <SEO />
        <AppProvider>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
          <Core />
        </AppProvider>
      </>
    );
  }
  
  export default AppPage;
  