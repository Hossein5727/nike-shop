import { useRef, useState } from 'react';
import './App.css';
import { Features, Header, Paymant } from './components';
import { Product, Slider } from './container';
import LengthSlide from './provider/LengthSlide';

function App() {

  const [isOpenPaymantTool, setIsOpenPaymantTool] = useState(false)
  const slide = useRef()

  const openPaymantTool = () => {
    setIsOpenPaymantTool(true)
  }

  const closePaymantTool = () => {
    setIsOpenPaymantTool(false)
  }

  return (
    <LengthSlide>
      <Header slide={slide} />
      <Slider slide={slide} />
      <Features />
      <Product
        openPaymantTool={openPaymantTool}
      />
      {isOpenPaymantTool && (
        <Paymant
          closePaymantTool={closePaymantTool}
        />
      )}
    </LengthSlide>
  );
}

export default App;
