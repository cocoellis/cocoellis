import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2> Coco Ellis</h2>
        <p><a href="mailto:mellis1223@gmail.com">mellis1223@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hey! I&apos;m Coco. I love building things.
            I am a <a href="https://wlu.edu">Washington and Lee</a> graduate, <a href="https://bloc.io">Bloc</a> Alumni, and
            design enthusiast. I have worked at two of New Orleans' top tech companies: <a href="http://luc.id">Lucid</a> and <a href="http://iseatz.com">iSeatz</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy; Coco Ellis <Link to="/">cocoellis.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
