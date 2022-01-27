import { useRef } from 'react';
import './App.css';
import { Features, Header } from './components';
import { Product, Slider } from './container';
import LengthSlide from './provider/LengthSlide';

function App() {

  const slide = useRef()

  return (
    <LengthSlide>
        <Header slide={slide} />
        <Slider slide={slide} />
        <Features />
        <Product />
    </LengthSlide>
  );
}

export default App;
