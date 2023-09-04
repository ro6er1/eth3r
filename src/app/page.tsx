"use client";
import ReactShadowRoot from 'react-shadow-root';
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
        

        <sup><i>This small site was made using NextJs and Web ComponentsL <a href="https://github.com/ro6er1/eth3r" target="_blank">https://github.com/ro6er1/eth3r</a></i></sup>
        <sup><i>Codepen for a JS version of the animated background: <a href="https://codepen.io/ro6er/pen/xxQPvwY" target="_blank">https://codepen.io/ro6er/pen/xxQPvwY</a></i></sup>
      </main>
    </ReactShadowRoot>
  )
}
