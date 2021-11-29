import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/View/Home';
import Task from '../src/View/Task';

import Rout from './routes/index';

/* INJETA A FUNÇÃO QUE REPRESENTA A PÁGINA DE HOME NO DOC HTML ATRAVÉS DA DIV ROOT */

ReactDOM.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>,
  document.getElementById('root')
);