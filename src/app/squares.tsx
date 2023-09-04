"use client";
import React, { useState, useEffect, useRef } from 'react'
import ReactShadowRoot from 'react-shadow-root';

interface AppProps {
  squaresGrid?: HTMLElement | null;
  parent?: string;
}


const stylesSquares = `.squares {
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  opacity: 0.4;
}

.squares__grid {
  transform: perspective(100rem) rotateY(21deg) rotateX(21deg) scale(2.2);
  display: flex;
  flex-wrap: wrap;
}

.square {
  transform-origin: bottom right;
    transition: transform 0.9s ease-in-out, filter 0.9s ease;
    transform: scale(1);
  filter: blur(3px) sepia(0);
}
.square svg {
  height: 130px;
  @media only screen and (min-width: 700px) {
    height: 260px;
  }
}

.square--big {
  transform: scale(1.2);
  filter: blur(0px) sepia(.3);
}`;

export default function Squares({parent}:AppProps) {
  const squaresGrid = useRef(document.createElement("div"))
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    if (isLoaded) {
      setIsPageLoaded(true);
      createGrid(200);
    }
    window.addEventListener("resize", () => {
      let i = squaresGrid.current.childElementCount;
      let divs = squaresGrid.current.children;
      while (i--) {
        divs[i].remove()
      }
      createGrid(200);
    });
  }, [isLoaded]);

  

  function createGrid(size: any) {
    size = window.innerWidth < 700 ? (size / 2) : size; //for tablet & mobile
    let ratioW = Math.floor((window.innerWidth || document.documentElement.offsetWidth) / size),
      ratioH = Math.floor((window.innerHeight || document.documentElement.offsetHeight) / size);

    const parent = squaresGrid.current;

    parent.style.width = (ratioW * size) + 'px';
    parent.style.height = (ratioH * size) + 'px';

    for (let i = 0; i < ratioH; i++) {
      for (let p = 0; p < ratioW; p++) {
        let cell = document.createElement('div');
        cell.innerHTML = `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.14 50.59">
      <polyline points="50.09 50.35 50.09 14.45 25.06 0 .04 14.45 .04 50.35" fill="#939393"/>
      <polyline points="25.07 50.59 25.07 28.91 .07 14.59 0 50.59" fill="#b7b7b7"/>
      <polygon points="25.06 9.13 13.85 15.38 25.07 21.91 36.21 15.33 25.06 9.13" fill="#7b7b7b"/>
      <polyline points="25.07 50.59 25.07 28.91 50.07 14.59 50.14 50.59" fill="#898989"/>
      <polyline points="25.06 9.13 13.85 15.38 25.07 21.91" fill="#898989"/>
    </svg>`;
        cell.style.height = (size - 1) + 'px';
        cell.style.width = (size - 1) + 'px';
        cell.classList.add("square");
        parent.appendChild(cell);
      }
    }

    randomlyAnimate();
  }

  function randomlyAnimate() {
    setInterval(function () {
      let i = squaresGrid.current.childElementCount;
      let divs = squaresGrid.current.children;
      while (i--) {
        if (divs[i] && divs[i].classList.contains("square--big")) {
          divs[i].classList.remove("square--big");
        } else {
          divs[Math.floor(Math.random() * divs.length)].classList.add("square--big");
        }
      }
    }, 2000);
  }

  return (
    <div>
      <ReactShadowRoot>
        <style>{stylesSquares}</style>
        <div className='squares'>
          <div ref={squaresGrid} className='squares__grid'>
          </div>
        </div>
      </ReactShadowRoot>
    </div>
  );
}