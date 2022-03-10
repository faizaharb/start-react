import React from 'react';
import Bottom from './BottomFooter/Bottom';
import Top from './TopFooter/Top';
import style from './Footer.module.css';

export default function Footer() {
  return (
    <>
        <footer className={`${style.custumization}`}>
            <Top/>
            <Bottom/>
        </footer>
    </>
  )
}
