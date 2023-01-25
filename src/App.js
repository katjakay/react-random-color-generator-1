import './Styles.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  // 2. useState hook: reactive value > change value whenever we want.
  // 2.1 Using randomColor npm to generate random HEX codes. -> initial value (to create function to change that value)
  const [color, setColor] = useState(randomColor());
  return (
    <div>
      <div className="fun">👋</div>
      <div>
        <h1>Random Color Generator</h1>
      </div>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',

          // 3. Input color var in the style to make the background change according to click.
          backgroundColor: color,
          fontFamily: 'Futura',
          fontSize: 25,
          borderRadius: 10,
          width: 800,
          height: 500,
          transition: 'background-color 0.5s ease in ease out',
        }}
      >
        Generated Color: {color}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10,
        }}
      >
        <button
          // 1. Random color is generated when button is clicked using OnClick event
          onClick={() => {
            setColor(randomColor());
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
