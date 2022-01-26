import { useRef } from 'react';
import './App.css';
import { Features, Header } from './components';
import { Slider } from './container';

function App() {

  const slide = useRef()

  return (
    <div>
      <Header slide={slide} />
      <Slider slide={slide} />
      <Features />
    </div>
  );
}

export default App;
