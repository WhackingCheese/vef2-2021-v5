import React from "react";
import './styles.scss';

export function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>RÚV fréttir</h1>
      </header>
      {React.Children.map(children, child => child)}
      <footer>
        <hr></hr>
        <p>Frettir frá <a href="https://www.ruv.is">RÚV</a>.</p>
      </footer>
    </div>
  );
}
