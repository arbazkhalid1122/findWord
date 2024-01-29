import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(null)
  const getVal = (val) => {
    setValue(val.target.value)
  }

  const num = [{icon:'💀',id: 'grey'},1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '_', '=',{icon:'🎨',id:'yellow'}]
  const line1 = [{icon:'🌵',id:'red'},'Q', 'W', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'];
  const line2 = [{icon:'🧢',id:'blue'},'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';',{icon:'" "'},{icon:'🔫',id:'green'}];
  const line3 = [{icon:'🔥',id:'rebeca'},'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];
  const line4 = ['ctrl', 'alt', 'cmd'];
  return (
    <div className="App">
      <input onChange={getVal} />
      <p>{value}</p>

      <div>
        <div>
          <ul>
            {num.map((number, index) => (
              <li key={index} id={number.id}>{number.icon ? number.icon: number}</li>
            ))}
          </ul>
          <ul>
            {line1.map((char) => (
              <li id={char.id}>{char.icon ? char.icon: char}</li>
            ))}
          </ul>
          <ul>
            {line2.map((char) => (
              <li id={char.id}>{char.icon ? char.icon : char}</li>
            ))}
          </ul>
          <ul>
            {line3.map((char) => (
              <li id={char.id}>{char.icon ? char.icon: char}</li>
            ))}
            <li id="up">🧬</li>
          </ul>
          <ul>
            {line4.map((char) => (
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
