'use client';
import { useState, useEffect } from 'react';

// const isMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';
const isMockingMode = true;

export const MSWComponent = () => {
  const [mswReady, setMSWReady] = useState(!isMockingMode);

  useEffect(() => {
    const init = async () => {
      if (isMockingMode) {
        // const { initMocks } = await import('./index');
        const initMocks = await import('./index').then(res => res.initMocks);
        await initMocks();
        setMSWReady(true);
      }
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  if (!mswReady) {
    return null;
  }

  return null;
};
