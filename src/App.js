import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          marginTop: 20,
          fontFamily: 'Futura',
        }}
      >
        Random Color Generator
      </h1>

      <div
        style={{
          fontFamily: 'Futura',
          height: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color,
          borderRadius: 10,
          margin: 50,
          boxShadow: 10,
          fontSize: 40,
        }}
      >
        Generated Color: {color}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 20,
        }}
      >
        <button
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
