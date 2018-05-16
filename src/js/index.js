import {h, app as original} from 'hyperapp';
import {location, Route, Switch} from '@hyperapp/router';

import {Intro, Basic, Advanced} from './views';
import sections from './basicSections.json';
import '../sass/index.sass';

let globApp;
let app = original;

if (process.env.NODE_ENV !== 'production') app = require('hyperapp-redux-devtools')(app);

const state = {
    mode: null,
    location: location.state,
    basic: {
        position: 0,
        completedSections: {}
    },
    advanced: {}
};
const actions = {
    setMode: mode => () => {
        if (['basic', 'advanced'].includes(mode)) return {mode};
    },
    basic: {
        nextSection: () => ({position}) => position < sections.length - 1 ? ({position: ++position}) : null,
        previousSection: () => ({position}) => position > 0 ? ({position: --position}) : null,
        updateSection: val => state => {
            state.completedSections[sections[state.position].section] = val;
            return {completedSections: state.completedSections};
        }
    },
    advanced: {},
    location: location.actions
};
const view = (state, actions) => (
    <Switch>
        <Route path="/" render={pass => Intro(pass, {state, actions})}/>
        <Route path="/basic" render={pass => Basic(pass, {state, actions})}/>
        <Route path="/advanced" render={pass => Advanced(pass, {state, actions})}/>
    </Switch>
);

if (process.env.NODE_ENV !== 'production') globApp = window.globApp = app(state, actions, view, document.body);
else globApp = app(state, actions, view, document.body);

location.subscribe(globApp.location);