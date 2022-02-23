import React from 'react';
import { useRouter } from 'next/router';
import { useIsomorphicLayoutEffect } from 'react-use';
import { Toaster } from 'react-hot-toast';


// const isLoginPage = /^\/(login|login\/|signup|signup\/|email-verification|email-verification\/)$/;
const notEmailAuthenticatedPage = /^\/(login|signup|email-verification)\/?$/;

interface CoreProps {}
const Core: React.FC<CoreProps> = () => {
  const router = useRouter();

  // 라우팅이 변경되었을 경우
  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (router.isReady) {
      
    }
  }, [router]);

  return (
    <>
      <Toaster />
    </>
  );
};

export default Core;
