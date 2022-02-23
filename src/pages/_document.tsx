import * as React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

/*
import {
  GOOGLE_ANALYTICS_G_TAG,
  IS_DEPLOY_GROUP_PROD,
  IS_PROD,
} from '@contants/env';
*/

class MyDocument extends Document {
  // Function will be called below to inject
  // script contents onto page
  /*
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){
          window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', '${GOOGLE_ANALYTICS_G_TAG}', { 'send_page_view': false });
      `,
    };
  }

  */
  render() {
    return (
      <Html  dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <script async src="https://apis.google.com/js/api:client.js" />
          <script
            async
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
