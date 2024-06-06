import ReactDOM from 'react-dom/client';
import { App } from './App';
import './app/store';

// npm i react-redux @types/react-redux

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App />
);
