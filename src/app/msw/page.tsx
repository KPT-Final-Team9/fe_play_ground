'use client';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const fetchData = async () => {
    try {
      const response = await fetch('https://example.com/user');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  const fetchDataCbs = async () => {
    try {
      const response = await fetch('/api/cbs');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  const fetchDataAbs = async () => {
    try {
      const response = await fetch('/api/abs');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <button onClick={fetchData}>fetchData</button>
      </div>
      <div>
        <button onClick={fetchDataCbs}>fetchDataCbs</button>
      </div>

      <button onClick={fetchDataAbs}>fetchDataAbs</button>
    </div>
  );
}
