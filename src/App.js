
import './App.css';

import TestComponent from './components/TestComponent';
import Testimonial from './components/Testimonial';


function App() {
  return (
    <div className="App">
   
      <TestComponent />

      <div className="relative w-9/11">
        <div className="fading-effect fading-effect-left"></div>
        <div className="fading-effect fading-effect-right"></div>

        <Testimonial />
      </div>

    </div>
  );
}

export default App;
