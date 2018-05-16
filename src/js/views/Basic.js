import {h} from 'hyperapp';
import {Link} from '@hyperapp/router';

import {Back, Hat, ChevronLeft, ChevronRight, ArrowDown} from '../components';
import {cleanString} from '../lib/utils.js';
import sections from '../basicSections.json';
import categories from '../categories.json';

const codeTemplate = `
init 5 python:
    addEvent(Event(persistent.event_database, eventlabel="{{label}}", category={{categories}}, prompt={{prompt}}, {{option}}))

label {{label}}:
{{dialogue}}
    return
`.trim();

export const Basic = (_, {state, actions}) => {
    const currentSection = sections[state.basic.position];
    const currValue = state.basic.completedSections[currentSection.section];

    return (
        <div data-hyperapp-root>
            <nav>
                <Link to="/">
                    <button class="back-button"><Back/></button>
                </Link>
                <div class="title">
                    <h3 class="white ml-4 w-400">Basic Editor</h3>
                    <Hat/>
                </div>
            </nav>

            <div class="basic-container large-pad-x">
                <div class="basic-container__inner">
                    <h1 class="green f00-light">{currentSection.title}</h1>
                    <div class="two-thirds-lg-full-sm">
                        <h2 class="f2-light">{currentSection.body}</h2>
                        <h4 class="mt-2 mb-6 f4-light">{currentSection.extra}</h4>
                    </div>

                    {
                        ({
                            input: <input id={`basic-${currentSection.section}`} key={currentSection.section}
                                type="text" class="form-control one-half-lg-full-sm" placeholder={currentSection.placeholder}
                                oncreate={el => {
                                    el.value = currValue || '';
                                    el.addEventListener('keyup', ev => ev.keyCode === 13 && el.nextElementSibling.click()); // Press the "next" button when the user presses enter.
                                    el.focus(); // Forces keyboard focus to this element, so the user almost never has to move their mouse.
                                }}/>,
                            dropdown: (
                                <div class="form-wrapper one-half-lg-full-sm" id="dropdown">
                                    <select id={`basic-${currentSection.section}-1`} key={`${currentSection.section}-1`}
                                        class="form-control full" aria-label="Categories"
                                        oncreate={el => {
                                            if (currValue) el.value = currValue;
                                        }}>
                                        {categories.map(v => <option value={cleanString(v)}>{v}</option>)}
                                    </select>
                                    <div class="fake-arrow"><ArrowDown/></div>
                                </div>
                            )
                        })[currentSection.type] || (
                            <div class="flash flash-error">
                                <h3>Unknown section type "{currentSection.type}"</h3>
                                <p>If you're seeing this in production, you might want to report that <a href="https://github.com/ProjectMonika/Eclair/issues" target="_blank">here</a></p>
                            </div>
                        )
                    }
                    {/*<input id={`basic-${currentSection.section}`} key={currentSection.section} type="text" class="form-control one-half-lg-full-sm"
                        placeholder={currentSection.placeholder} oncreate={el => {
                            el.value = currValue || '';
                            el.addEventListener('keyup', ev => ev.keyCode === 13 && el.nextElementSibling.click()); // On enter, press the button below.
                            el.focus();
                        }}/>*/}
                    <button class="mt-3 btn btn-basic-submit btn-green" onclick={ev => {
                        let lastSibling = ev.target.previousElementSibling;
                        lastSibling = lastSibling.id === 'dropdown' ? [lastSibling.firstChild.value] : lastSibling.value;
                        actions.basic.updateSection(lastSibling) && actions.basic.nextSection();
                    }}>Next</button>
                </div>
            </div>

            <nav>
                <div class="navigation">
                    <div class="navigation__inner">
                        <button onclick={actions.basic.previousSection} class={state.basic.position === 0 ? 'disabled' : ''}>
                            <ChevronLeft/>
                        </button>
                        <button onclick={actions.basic.nextSection}
                            class={state.basic.position === sections.length - 1 || !state.basic.completedSections[currentSection.section] ? 'disabled' : ''}>
                            <ChevronRight/>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};