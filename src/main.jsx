import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
//import { StrictMode } from 'react';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from './06-memos/MemoHook';
//import { CallBackHook } from './06-memos/CallBackHook';
//import { Padre } from './07-tareamemo/Padre';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { HooksApp } from './HooksApp';
import './08-useReducer/intro-reducer.js';
//import { TodoApp } from './08-useReducer/TodoApp.jsx';
import { MainApp } from './09-useContext/MainApp.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <StrictMode> */}
      <MainApp />
    {/* </StrictMode>, */}
  </BrowserRouter>
) 
