 import React, { useState, useEffect } from 'react';
 import Link from 'next/link';
 import { useRouter } from 'next/router';
 //import isEmpty from 'lodash-es/isEmpty';
 
 //import Footer from '@components/common/Footer';
 
 import { Logo } from './common/Logo';
 
 /*
 interface OnnanocosProps {
   onnanocos: any;
 }
 */

 const Onnanocos = () => {
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
 
     </div>
   );
 };
 
 export default Onnanocos;
 