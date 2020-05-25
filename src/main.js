//document.getElementById('app').innerText = 'Hello world';

import { h, render } from 'preact';

import {App} from './app.js';

render(<App />, document.getElementById('app'));