import * as React from 'react';
import Head from 'next/head';
import { SITE_URL } from '@contants/env';

const SEO: React.FC = () => {
  return (
    <Head>
      <title>onnano.co</title>
      <link
        rel="canonical"
        href={typeof window === 'undefined' ? SITE_URL : window.location.href}
      />
      <meta
        name="description"
        content="ライトノベル、漫画、アニメ、ゲームなどに登場する女の子の情報を誰でも登録、編集することが可能なスマートコントラクトを通じて、イーサリアムブロックチェーン上に公開し、データベースとして運営していきます。ランキング付けも可能で、将来的にはブロックチェーン版コミックマーケット、ブロックコミケを運営していきます。"
      />
      <meta property="og:image" content="/images/main_topbanner.png" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/images/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/images/apple-touch-icon.png"
      />
      <link rel="icon" sizes="16x16" href="/images/favicon-16x16.png" />
      <link rel="icon" sizes="32x32" href="/images/favicon-32x32.png" />
      <meta property="og:title" content="onnano.co" />
      <meta
        property="og:description"
        content="ライトノベル、漫画、アニメ、ゲームなどに登場する女の子の情報を誰でも登録、編集することが可能なスマートコントラクトを通じて、イーサリアムブロックチェーン上に公開し、データベースとして運営していきます。ランキング付けも可能で、将来的にはブロックチェーン版コミックマーケット、ブロックコミケを運営していきます。"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={
          typeof window === 'undefined' ? SITE_URL : window.location.href
        }
      />
      <meta property="og:image" content="/images/main_topbanner.png" />
      <meta property="og:site_name" content="onnano.co" />
      <meta property="twitter:title" content="onnano.co" />
      <meta
        property="twitter:description"
        content="ライトノベル、漫画、アニメ、ゲームなどに登場する女の子の情報を誰でも登録、編集することが可能なスマートコントラクトを通じて、イーサリアムブロックチェーン上に公開し、データベースとして運営していきます。ランキング付けも可能で、将来的にはブロックチェーン版コミックマーケット、ブロックコミケを運営していきます。"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/images/main_topbanner.png" />
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      /> */}
      <meta
        name="viewport"
        content="width=device-width,  viewport-fit=cover, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
    </Head>
  );
};

export default SEO;
