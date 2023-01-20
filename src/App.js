import './Styles.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  // 1. Passing the initial state and it return a variable with the current state value + add another function to update this value.
  // 1.1 Using randomColor npm to generate random HEX codes.

  const [color, setColor] = useState(randomColor());
  return (
    <div className="alignItem">
      <div className="fun">👋</div>
      <div>
        <h1>Random Color Generator</h1>
      </div>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',

          // 2. Using color variable in the style to make the background change according to click.
          backgroundColor: color,
          fontFamily: 'Futura',
          fontSize: 25,
          borderRadius: 10,
          width: 800,
          height: 500,
        }}
      >
        GeneratedColor: {color}
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
          // 3. Random color is generated when button is clicked using OnClick event
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
