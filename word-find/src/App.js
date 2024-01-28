import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(null)
  const getVal = (val) => {
    setValue(val.target.value)
  }

  const num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '_', '=']
  const line1 = ['Q', 'W', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'];
  return (
    <div className="App">
      <input onChange={getVal} />
      <p>{value}</p>

      <div>
        <div>
          <ul class="keys">
            <li id="grey">💀</li>
            {num.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
            <li id="yellow">🎨</li>
          </ul>
          <ul class="keys">
            <li id="red">🌵</li>
            {line1.map((char)=>(
              <li id={char}>{char}</li>
            ))}
          </ul>
          <ul class="keys">
            <li id="blue">🧢</li>
            <li>A</li>
            <li>S</li>
            <li>D</li>
            <li>F</li>
            <li>G</li>
            <li>H</li>
            <li>J</li>
            <li>K</li>
            <li>L</li>
            <li>;</li>
            <li>""</li>
            <li id="green">🔫</li>
          </ul>
          <ul class="keys">
            <li id="rebeca">🔥</li>
            <li>Z</li>
            <li>X</li>
            <li>C</li>
            <li>V</li>
            <li>B</li>
            <li>N</li>
            <li>M</li>
            <li>,</li>
            <li>.</li>
            <li>?</li>
            <li id="up">🧬</li>
          </ul>
          <ul class="keys">
            <li id="one">ctrl</li>
            <li id="one">alt</li>
            <li id="one">cmd</li>
            <li id="two"></li>
            <li id="one">cmd</li>
            <li id="one">alt</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
