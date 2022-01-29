import { useRef, useState } from 'react';
import LengthSlide from './provider/LengthSlide';
import { Features, Footer, Gallery, Header, NewSeason, Paymant } from './components';
import { Product, Slider } from './container';
import './App.css';

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
    <>
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
      <Gallery />
      <NewSeason />
      <Footer />
    </>
  );
}

export default App;
