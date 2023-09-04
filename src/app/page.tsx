"use client";
import React, { useState, useEffect } from 'react'
import ReactShadowRoot from 'react-shadow-root';

import Image from 'next/image'
import styles from './page.module.css'
import Squares from './squares'
import Logo from './logo'

const stylesPage = `
a {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: #b96894;
  color: #333332;
  font-weight: bold;
  word-break: break-all;
}
h1, p {
  color: #727272;
}

p {
  font-size: clamp(1rem, 10vw, 1.3rem);
  color: #222;
}

h1 {
  font-size: clamp(1rem, 10vw, 3rem);
}

sup {
  display: block;
}

hr {
  border: 1px solid #727272;
}
.container {
  position: relative;
  overflow: hidden;
  padding: clamp(30px,calc(100vw - 600px),60px) clamp(30px,calc(100vw - 600px),60px);
  max-width: 1140px;
  margin: auto;
}`;

export default function Home() {

  return (
    <ReactShadowRoot>
      <style>{stylesPage}</style>
      <Squares />
      <main className='container'>
        <Logo />
        <p>I'm Roger Taylor, I have been working in the web industry since 2002 as a designer and frontend developer.</p>
        <p>Here is a list of some of the projects I have worked on, past and present.</p>
        <hr />
        <p><strong>Recent roles:</strong></p>
        <p>
            <a href="https://portswigger.net" target="_blank">portswigger.net</a> - Front end web development (SCSS, HTML and JS), component library (React and SCSS), SVG font generator (Node.js and SCSS) 
        </p>
        <p>
            <a href="https://slimmingworld.com" target="_blank">slimmingworld.com</a> - Front end development and design (SCSS, HTML and React with Redux), Scrum master
        </p>
        <p>
            <a href="https://bet365.com" target="_blank">bet365.com</a> - Front end development, my intial role was to move their site from Flash to HTML5 (SCSS, HTML and Typescript)
        </p>
        <hr />
        <p><strong>Older roles and projects:</strong></p>
        <p>
            <a href="http://ktcoaching.co.uk" target="_blank">ktcoaching.co.uk</a> - Web development and design
        </p>
        <p>
            <a href="https://www.unitedhealthgroup.com/" target="_blank">unitedhealthgroup.com</a> - Web development and design
        </p>
        <p>
            <a href="https://www.worldremit.com/" target="_blank">worldremit.com</a> - Web development and design
        </p>
        <p>
            <a href="https://www.citation.co.uk/" target="_blank">citation.co.uk</a> - Web development and design
        </p>

        <p>
            <a href="https://www.vanuffelenmode.nl/" target="_blank">vanuffelenmode.nl</a> - Web development and design
        </p>
        <p>
            <a href="http://www.thestar.co.uk/" target="_blank">thestar.co.uk</a> - Web development and design
        </p>
        <hr />
        <p><strong>Other items of interest:</strong></p>
        <p>
            <a href="https://www.linkedin.com/in/roger-taylor-35381310/" target="_blank">https://www.linkedin.com/in/roger-taylor-35381310/</a> - my linkedin profile
        </p>
        <p>
            <a href="https://codepen.io/ro6er" target="_blank">https://codepen.io/ro6er</a> - my codepen.io
        </p>
        <p>
            <a href="https://www.instagram.com/rogertaylorart/" target="_blank">https://www.instagram.com/rogertaylorart/</a> - my art work on instagram
        </p>
        <p>
            <a href="https://rogergtaylor.blogspot.com/" target="_blank">https://rogergtaylor.blogspot.com/</a> - my art work on blogger.com
        </p>
        

        <sup><i>This small site was made using HTML, JS, small SVG art, SCSS and http-server</i></sup>
        <sup><i>My codepen for this animated background: <a href="https://codepen.io/ro6er/pen/xxQPvwY" target="_blank">https://codepen.io/ro6er/pen/xxQPvwY</a></i></sup>
      </main>
    </ReactShadowRoot>

    // <main className={styles.main}>

    //   <Squares />
    //   yo
    //   {/* <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp; dasd asda sdasdasdasd
    //       <code className={styles.code}>src/app/page.tsx</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore the Next.js 13 playground.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div> */}
    // </main>
  )
}
