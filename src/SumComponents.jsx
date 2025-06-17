// import React, { useState, useMemo } from "react";

// function SumComponent() {
//   const [a, setA] = useState(0);
//   const [b, setB] = useState(0);
//   const [count, setCount] = useState(0);

//   const sum = useMemo(() => {
//     console.log("Calculating sum...");
//     return a + b;
//   }, [a, b]);

//   return (
//     <div>
//       <div>
//         <input
//           type="number"
//           value={a}
//           onChange={(e) => setA(Number(e.target.value))}
//           placeholder="Enter a"
//         />
//         <input
//           type="number"
//           value={b}
//           onChange={(e) => setB(Number(e.target.value))}
//           placeholder="Enter b"
//         />
//       </div>
//       <p>Sum: {sum}</p>
//       <button onClick={() => setCount(count + 1)}>Re-render</button>
//       <p>Button clicked: {count} times</p>
//     </div>
//   );
// }

// export default SumComponent;

// import React, { useState } from "react";

// function SumComponentWithoutUseMemo() {
//   const [a, setA] = useState(0);
//   const [b, setB] = useState(0);
//   const [count, setCount] = useState(0);

//   // sum recalculates on every render
//   const sum = (() => {
//     console.log("Calculating sum...");
//     return a + b;
//   })();

//   return (
//     <div>
//       <div>
//         <input
//           type="number"
//           value={a}
//           onChange={(e) => setA(Number(e.target.value))}
//           placeholder="Enter a"
//         />
//         <input
//           type="number"
//           value={b}
//           onChange={(e) => setB(Number(e.target.value))}
//           placeholder="Enter b"
//         />
//       </div>
//       <p>Sum: {sum}</p>
//       <button onClick={() => setCount(count + 1)}>Re-render</button>
//       <p>Button clicked: {count} times</p>
//     </div>
//   );
// }

// export default SumComponentWithoutUseMemo;
