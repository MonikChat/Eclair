import {h, app} from 'hyperapp';

if (process.env.NODE_ENV !== 'production') app = require('hyperapp-redux-devtools')(app);

let globApp;
const state = {};
const actions = {};
const view = () => (
    a
);

if (process.env.NODE_ENV !== 'production') window.globApp = app(state, actions, view, document.body);
else globApp = app(state, actions, view, document.body);