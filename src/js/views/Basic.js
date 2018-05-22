import {h} from 'hyperapp';
import {Link} from '@hyperapp/router';
import {Enter, Exit} from '@hyperapp/transitions';

import {Back, Hat, ChevronLeft, ChevronRight, ArrowDown} from '../components';
import * as otherIcons from '../components';
import {cleanString, defer} from '../lib/utils.js';
import sections from '../basicSections.json';
import categories from '../categories.json';
import overlayScrollbars from 'overlayscrollbars';

const codeTemplate = `
init 5 python:
    addEvent(Event(persistent.event_database, eventlabel="{{label}}", category={{categories}}, prompt={{prompt}}, {{option}}))

label {{label}}:
{{dialogue}}
    return
`.trim();

export const Basic = (state, actions) => {
    const currentSection = sections[state.basic.position];
    const currentValue = state.basic.completedSections[currentSection.section];

    return (
        <div key="basic" data-hyperapp-root>
            <nav>
                <Link to="/">
                    <button class="back-button"><Back/></button>
                </Link>
                <div class="title">
                    <h3 class="white ml-4 w-400">Basic Editor</h3>
                    <Hat class="ml-2"/>
                </div>
            </nav>

            <div class="basic-container large-pad-x">
                <div style={{width: '100%'}}>
                    <Enter css={() => ({transform: state.basic.toRight ? 'translateX(-200%)' : 'translateX(200%)'})} time={500} delay={550} easing="cubic-bezier(0.0, 0.0, 0.2, 1)">
                        <Exit css={() => ({transform: state.basic.toRight ? 'translateX(200%)' : 'translateX(-200%)'})} time={500} easing="cubic-bezier(0.4, 0.0, 1, 1)">
                            <div class="basic-container__inner" key={currentSection.section}>
                                <h1 class="green f00-light">{currentSection.title}</h1>
                                <div class="two-thirds-lg-full-sm">
                                    <h2 class="f2-light">{currentSection.body}</h2>
                                    <h4 class="mt-2 mb-6 f4-light">{currentSection.extra}</h4>
                                </div>

                                {generateSection(actions, currentSection, currentValue)}
                                <button class={`mt-3 btn btn-basic-submit btn-green ${!state.basic.completedSections[currentSection.section] ? 'disabled' : ''}`} onclick={() => actions.basic.setDir(false) && defer(actions.basic.nextSection)}>
                                    {state.basic.position === sections.length - 1 ? 'Finish' : 'Next'}
                                </button>
                            </div>
                        </Exit>
                    </Enter>
                </div>
            </div>

            <nav>
                <div class="navigation">
                    <div class="navigation__inner">
                        <button onclick={() => actions.basic.setDir(true) && defer(actions.basic.previousSection)} class={state.basic.position === 0 ? 'disabled' : ''}>
                            <ChevronLeft/>
                        </button>
                        <button onclick={() => actions.basic.setDir(false) && defer(actions.basic.nextSection)}
                            class={state.basic.position === sections.length - 1 || !state.basic.completedSections[currentSection.section] ? 'disabled' : ''}>
                            <ChevronRight/>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

function generateSection(actions, currentSection, currentValue) {
    let baseInput = ({
        input: <input id={`basic-${currentSection.section}`}
            type="text" class="form-control one-half-lg-full-sm" placeholder={currentSection.placeholder}
            oncreate={el => {
                el.value = currentValue || '';
                el.addEventListener('keyup', ev => ev.keyCode === 13 && el.nextElementSibling.click()); // Press the "next" button when the user presses enter.
                el.focus(); // Forces keyboard focus to this element, so the user almost never has to move their mouse.
            }}
            oninput={ev => actions.basic.updateSection(ev.target.value)}/>,
        dropdown: (
            <div class="form-wrapper one-half-lg-full-sm" id="dropdown">
                <select id={`basic-${currentSection.section}`}
                    class="form-control full" aria-label="Categories"
                    oncreate={el => {
                        if (currentValue) el.value = currentValue;
                    }}
                    onchange={ev => {
                        if (ev.target.value && ev.target.value !== 'null') actions.basic.updateSection([ev.target.value]);
                        else actions.basic.updateSection(null);
                    }}>
                    <option value="null">Select a category</option>
                    {categories.map(v => <option value={cleanString(v)}>{v}</option>)}
                </select>
                <div class="fake-arrow"><ArrowDown/></div>
            </div>
        )
    })[currentSection.type];
    
    if (!baseInput) return (
        <div class="flash flash-error">
            <h3>Unknown section type "{currentSection.type}"</h3>
            <p>If you're seeing this in production, you might want to report that <a href="https://github.com/ProjectMonika/Eclair/issues" target="_blank">here</a></p>
        </div>
    );

    if (currentSection.multi) currentSection.buttons = currentSection.buttons ? currentSection.buttons.concat({
        click: 'newInput(this)',
        icon: 'PlusCircle',
        colour: 'green',
        label: 'Add another.'
    }) : [{
        click: 'newInput(this)',
        icon: 'PlusCircle',
        colour: 'green',
        label: 'Add another.'
    }];

    if (currentSection.buttons) baseInput = (
        <div class="input-group one-half-lg-full-sm">
            {baseInput}
            {currentSection.buttons.map(btn => (
                <span class="input-group-button">
                    <button class={`btn btn-${btn.colour} tooltipped tooltipped-n`} aria-label={btn.label} onclick={btn.click}>
                        {h(otherIcons[btn.icon], {}, null)}
                    </button>
                    {/*i === 0 && <div class="image-selector shadow" oncreate={el => overlayScrollbars(el, {className: 'os-theme-light'})}>
                        <div class="image-selector__inner">
                            <img src="https://knife-serv.ovyerus.me/knife-beta/img/knife.png" onclick={ev => ev.target.classList.toggle('highlighted')}/>
                            <img src="https://knife-serv.ovyerus.me/knife-beta/img/knife.png" onclick={ev => ev.target.classList.toggle('highlighted')}/>
                            <img src="https://knife-serv.ovyerus.me/knife-beta/img/knife.png" onclick={ev => ev.target.classList.toggle('highlighted')}/>
                            <img src="https://knife-serv.ovyerus.me/knife-beta/img/knife.png" onclick={ev => ev.target.classList.toggle('highlighted')}/>
                            <img src="https://knife-serv.ovyerus.me/knife-beta/img/knife.png" onclick={ev => ev.target.classList.toggle('highlighted')}/>
                            <img src="https://knife-serv.ovyerus.me/knife-beta/img/knife.png" onclick={ev => ev.target.classList.toggle('highlighted')}/>
                            <img src="https://knife-serv.ovyerus.me/knife-beta/img/knife.png" onclick={ev => ev.target.classList.toggle('highlighted')}/>
                            <img src="https://knife-serv.ovyerus.me/knife-beta/img/knife.png" onclick={ev => ev.target.classList.toggle('highlighted')}/>
                        </div>
                    </div>*/}
                </span>
            ))}
        </div>
    );

    return baseInput;
}

// function createSelector(imgStart, range, attr) {}