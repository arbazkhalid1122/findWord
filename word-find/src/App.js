import React, { useState } from 'react';
import './App.css';

const Keyboard = ({ onKeyPress, activeKey }) => {
  const keys = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="keyboard">
      {keys.map((key) => (
        <div
          key={key}
          className={`key ${activeKey === key ? 'active' : ''}`}
          onClick={() => onKeyPress(key)}
        >
          {key}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (key) => {
    setInputValue(key);
  };
  
  console.log(inputValue,'input');
  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue((prev) => [...prev, ...e.target.value])}
        />
      <Keyboard onKeyPress={handleKeyPress} activeKey={inputValue} />
    </div>
  );
}

export default App;


// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [value, setValue] = useState('');
//   const [activeKey, setActiveKey] = useState(null);



//   const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', '='];
//   const line1 = ['Q', 'W', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'];
//   const line2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'];
//   const line3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];
//   const line4 = ['ctrl', 'alt', 'cmd'];

//   const getVal = (val) => {
//     console.log(val, 'val');
//     const enteredValue = val.target.value.toUpperCase();
//     const foundKeys = [...num, ...line1, ...line2, ...line3, ...line4]
//     const get = foundKeys.filter((item)=> item == enteredValue)
//     // console.log(get,'get');
//     // console.log(foundKeys,'found');
//     console.log(get.split(','),'aaaaaaaaaaa');
//         setActiveKey(get.split(','));
// // console.log(foundKeys,'dont');
//   };
//   return (
//     <div className="App">
//       <input onChange={getVal} />

//       <div>
//         <div>
//           <ul className="keys">
//             <li id="grey">💀</li>
//             {num.map((number, index) => (
//               <li key={index} style={{ background: activeKey === number ? 'red' : 'transparent' }}>{number}</li>
//             ))}
//             <li id="yellow">🎨</li>
//           </ul>
//           <ul className="keys">
//             <li id="red" style={{ background: activeKey === 'Q' ? 'red' : 'transparent' }}>🌵</li>
//             {line1.map((char, index) => (
//               <li key={index} style={{ background: activeKey === char ? 'red' : 'transparent' }}>
//                 {char}
//               </li>
//             ))}
//           </ul>
//           <ul className="keys">
//             <li id="blue">🧢</li>
//             {line2.map((char, index) => (
//               <li key={index} style={{ background: activeKey === char ? 'red' : 'transparent' }}>
//                 {char}
//               </li>
//             ))}
//             <li>""</li>
//             <li id="green">🔫</li>
//           </ul>
//           <ul className="keys">
//             <li id="rebeca">🔥</li>
//             {line3.map((char, index) => (
//               <li key={index} style={{ background: activeKey === char ? 'red' : 'transparent' }}>
//                 {char}
//               </li>
//             ))}
//             <li id="up">🧬</li>
//           </ul>
//           <ul className="keys">
//             {line4.map((char, index) => (
//               <li key={index} id="one" style={{ background: activeKey === char ? 'red' : 'transparent' }}>
//                 {char}
//               </li>
//             ))}
//             <li className="glow" id="two"></li>
//             <li className="glow" id="one">
//               {line4[0]}
//             </li>
//             <li id="one">{line4[1]}</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;