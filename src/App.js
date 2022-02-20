import logo from './logo.svg';
import './App.css';
import React from "react";
import Example from "./Components/Calendar";


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    <div>
      <Example/>
    </div>
          
    //     </a>
    //   </header>
    // </div>
  );
}


export default App;

// App.js

// import { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './App.css';

// function App() {
//   const [date, setDate] = useState(new Date());

//   return (
//     <div className='app'>
//       <h1 className='text-center'>React Calendar with Range</h1>
//       <div className='calendar-container'>
//         <Calendar
//           onChange={setDate}
//           value={date}
//           selectRange={true}
//         />
//       </div>
//       {date.length > 0 ? (
//         <p className='text-center'>
//           <span className='bold'>Start:</span>{' '}
//           {date[0].toDateString()}
//           &nbsp;|&nbsp;
//           <span className='bold'>End:</span> {date[1].toDateString()}
//         </p>
//       ) : (
//         <p className='text-center'>
//           <span className='bold'>Default selected date:</span>{' '}
//           {date.toDateString()}
//         </p>
//       )}
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import { Datepicker, setOptions } from '@mobiscroll/react';

// setOptions({
//     theme: 'ios',
//     themeVariant: 'light'
// });

// function App() {
//     return (
//         <div style={{display: 'flex'}}>
//             <Datepicker
//                 controls={['calendar']}
//                 display="inline"
//                 selectMultiple={true}
//             />
//              {/* <Datepicker
//                 controls={['calendar']}
//                 display="inline"
//                 selectMultiple={true}
//                 selectMax={5}
//                 headerText="Pick up to 5 days"
//             />
//             <Datepicker
//                 controls={['calendar']}
//                 display="inline"
//                 selectMultiple={true}
//                 selectCounter={true}
//             /> */}
//         </div>
//     ); 
// }


// export default App;