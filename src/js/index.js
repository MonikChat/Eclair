import {h, app as original} from 'hyperapp';
import {location, Route, Switch} from '@hyperapp/router';
// import {Enter, Exit} from '@hyperapp/transitions';

import {Intro, Basic, Advanced} from './views';
import sections from './basicSections.json';

let globApp;
let app = original;

if (process.env.NODE_ENV !== 'production') app = require('hyperapp-redux-devtools')(app);

const state = {
    mode: null,
    location: location.state,
    basic: {
        position: 0,
        completedSections: {},
        toRight: false
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
        },
        setDir: val => () => ({toRight: val})
    },
    advanced: {},
    location: location.actions,
    getState: () => state => process.env.NODE_ENV !== 'production' && state
};
const view = (state, actions) => (
    <Switch>
        {/* <Enter css={{opacity: 0}} time={500} easing="cubic-bezier(0.0, 0.0, 0.2, 1)">
            <Exit css={{opacity: 0}} time={500} easing="cubic-bezier(0.4, 0.0, 1, 1)"> */}
        <Route path="/" render={() => Intro(state, actions)}/>
        {/* </Exit>
        </Enter> */}

        {/* <Enter css={{opacity: 0}} time={500} easing="cubic-bezier(0.0, 0.0, 0.2, 1)">
            <Exit css={{opacity: 0}} time={500} easing="cubic-bezier(0.4, 0.0, 1, 1)"> */}
        <Route path="/basic" render={() => Basic(state, actions)}/>
        {/* </Exit>
        </Enter> */}

        {/* <Enter css={{opacity: 0}} time={500} easing="cubic-bezier(0.0, 0.0, 0.2, 1)">
            <Exit css={{opacity: 0}} time={500} easing="cubic-bezier(0.4, 0.0, 1, 1)"> */}
        <Route path="/advanced" render={() => Advanced(state, actions)}/>
        {/* </Exit>
        </Enter> */}
    </Switch>
);

if (process.env.NODE_ENV !== 'production') globApp = window.globApp = app(state, actions, view, document.body);
else globApp = app(state, actions, view, document.body);
window.h = h;

location.subscribe(globApp.location);