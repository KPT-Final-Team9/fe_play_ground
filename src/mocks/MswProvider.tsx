'use client';
// TODO: client 사이드 질문
import { useEffect } from 'react';

export const MswComponent = () => {
  console.log('MswComp');
  useEffect(() => {
    if ('development' === 'development') {
      if (typeof window === 'undefined') {
        (async () => {
          const { server } = await import('@/mocks/server');
          server.listen();
        })();
      } else {
        (async () => {
          const { worker } = await import('@/mocks/browser');
          worker.start();
        })();
      }
    }
  });

  return null;
};
