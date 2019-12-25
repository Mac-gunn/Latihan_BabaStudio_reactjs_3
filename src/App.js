import React from 'react';
import Kursus from './state/State.jsx';
import Materi from './props/props';
import './props/style.css';

function App() {
  return (
        <div className="wrapperapp">
        <Kursus/>
        <p>Contoh State</p>    
        <hr/>
        <Materi img={require('./props/1.jpg')} des="Belajar Seo" harga="120.000"/>
        <Materi img={require('./props/3.jpg')} des="Belajar Google AdWord" harga="400.000"/>
        <Materi img={require('./props/4.png')} des="Belajar React JS" harga="500.000"/>
        </div>
  );
}

export default App;
