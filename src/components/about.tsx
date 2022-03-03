import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
//import isEmpty from 'lodash-es/isEmpty';

//import Footer from '@components/common/Footer';

import { SmileTwoTone, QuestionCircleTwoTone } from '@ant-design/icons';

import { Logo } from './common/Logo';

/*
interface OnnanocosProps {
  onnanocos: any;
}
*/

const About = () => {
  //const { onnanocos } = props;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      console.log('router changed');
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <div>
      <div className="top-bar">
        <Logo />
      </div>

      <ul className="qna-list">
        <li>
          <div className="question">
            <QuestionCircleTwoTone />
            これは一体なんですか…？
          </div>
          <div className="answer">
            <SmileTwoTone twoToneColor="#aaaaaa" />
            ブロックチェーン版女の子『限定』データベースです。
          </div>
        </li>
        <li>
          <div className="question">
            <QuestionCircleTwoTone />
            なぜこれを作ったのですか？
          </div>
          <div className="answer">
            <SmileTwoTone twoToneColor="#aaaaaa" />
            Kawaii女の子の情報は当然ブロックチェーン上に記録されるべきだからです。
          </div>
        </li>
        <li>
          <div className="question">
            <QuestionCircleTwoTone />
            もう少し詳しく説明してください。
          </div>
          <div className="answer">
            <SmileTwoTone twoToneColor="#aaaaaa" />
            ライトノベル、漫画、アニメ、ゲームなどに登場する女の子の情報を誰でも登録、編集することが可能なスマートコントラクトを通じて、イーサリアムブロックチェーン上に公開し、データベースとして運営していきます。ランキング付けも可能で、将来的にはブロックチェーン版コミックマーケット、ブロックコミケを運営していきます。
          </div>
        </li>
        <li>
          <div className="question">
            <QuestionCircleTwoTone />
            なぜブロックチェーンを使用するのですか？既にキャラクター用のwikiなどはありますが……
          </div>
          <div className="answer">
            <SmileTwoTone twoToneColor="#aaaaaa" />
            ブロックチェーンを利用することで、特定の誰かが権限を独占するのではなく誰もが平等に参加できる空間を創ることができるからです。ブロックチェーンに記録された情報は誰でも無料で閲覧できます。
          </div>
        </li>
        <li>
          <div className="question">
            <QuestionCircleTwoTone />
            トークンを使用しますか？
          </div>
          <div className="answer">
            <SmileTwoTone twoToneColor="#aaaaaa" />
            使用します。MOEというイーサリアム基盤のトークンになります。情報の登録や、変更をする際に使用されます。正確な情報を入力したユーザーへの報酬として支払われ、間違った情報を入力したユーザーへのペナルティとしても使用します。キャラクターのランキング情報などにも使用されます。
          </div>
        </li>
        <li>
          <div className="question">
            <QuestionCircleTwoTone />
            MOEに価値はありますか？
          </div>
          <div className="answer">
            <SmileTwoTone twoToneColor="#aaaaaa" />
            あると思えばあります。その積み重ねがMOEの価値になります。
          </div>
        </li>
        <li>
          <div className="question">
            <QuestionCircleTwoTone />
            男の子の情報をあげてもいいですか？
          </div>
          <div className="answer">
            <SmileTwoTone twoToneColor="#aaaaaa" />
            お前何言ってんの？
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
