import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(null)
  const getVal = (val) => {
    setValue(val.target.value)
  }

  const num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '_', '=']
  const line1 = ['Q', 'W', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'];
  const line2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'];
  const line3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];
  const line4 = ['ctrl', 'alt', 'cmd'];
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
              <li>{char}</li>
            ))}
          </ul>
          <ul class="keys">
            <li id="blue">🧢</li>
            {line2.map((char)=>(
              <li>{char}</li>
            ))}
            <li>""</li>
            <li id="green">🔫</li>
          </ul>
          <ul class="keys">
            <li id="rebeca">🔥</li>
            {line3.map((char)=>(
              <li>{char}</li>
            ))}
            <li id="up">🧬</li>
          </ul>
          <ul class="keys">
            {/* <li id="one">ctrl</li>
            <li id="one">alt</li>
            <li id="one">cmd</li>
            <li id="two"></li>
            <li id="one">cmd</li>
            <li id="one">alt</li> */}
             {line4.map((char)=>(
              <li id='one'>{char}</li>
            ))}
            <li className='glow' id="two"></li>
            <li className='glow' id="one">{line4[0]}</li>
            <li id="one">{line4[1]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
