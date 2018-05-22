import {h} from 'hyperapp';
import {Link} from '@hyperapp/router';
import overlayScrollbars from 'overlayscrollbars';

import {Rocket, Back, Shuffle, Loop, X, XCircle, PlusCircle, Face, Body, ArrowDown, Keyboard, PlayCircle, ChevronLeft, ChevronRight} from '../components';

const codeTemplate = `
init 5 python:
    addEvent(Event(persistent.event_database, eventlabel="{{label}}", category={{categories}}, prompt={{prompt}}, {{option}}))

label {{label}}:
{{dialogue}}
    return
`.trim();

export const Advanced = (state, actions) => (
    <div key="advanced" data-hyperapp-root>
        <nav>
            <Link to="/">
                <button class="back-button"><Back/></button>
            </Link>
            <div class="title">
                <h3 class="white ml-4 w-400">Advanced Editor</h3>
                <Rocket class="ml-2"/>
            </div>
        </nav>

        <div class="advanced-container py-6 large-pad-x">
            <div class="columns gutter-4">
                <div class="column one-half-lg-full-sm pr-4 pl-2">
                    <div class="editor shadow" oncreate={el => overlayScrollbars(el, {})}>
                        <div class="header columns">
                            <div class="column dialogue-option one-third-lg-full-sm">
                                <input type="radio" id="randomised" name="special-options" value="randomised"/>
                                <label for="randomised">
                                    <Shuffle/>
                                    Randomised
                                </label>
                            </div>

                            <div class="column dialogue-option one-third-lg-full-sm">
                                <input type="radio" id="pool" name="special-options" value="pool"/>
                                <label for="pool">
                                    <Loop/>
                                    Pool
                                </label>
                            </div>

                            <div class="column dialogue-option one-third-lg-full-sm">
                                <input type="radio" id="none" name="special-options" value="none" checked/>
                                <label for="none">
                                    <X/>
                                    None
                                </label>
                            </div>
                        </div>

                        <div class="content p-4">
                            <fieldset class="pb-4">
                                <label class="f3 pb-1">Title</label>
                                <input type="text" class="form-control two-thirds-lg-full-sm" placeholder="Roses"/>
                            </fieldset>

                            <fieldset class="pb-4">
                                <label class="f3 pb-1">Prompt</label>
                                <input type="text" class="form-control two-thirds-lg-full-sm" placeholder="Do you like roses?"/>
                            </fieldset>

                            <fieldset class="pb-4">
                                <label class="f3 pb-1">Topics</label>
                                <div class="form-wrapper two-thirds-lg-full-sm pb-4">
                                    <select class="form-control full" aria-label="Topics">
                                        <option value="bananas">Bananas</option>
                                        <option value="apples">Apples</option>
                                        <option value="cutes">Cutes</option>
                                        <option value="games">Games</option>
                                        <option value="memes">Memes</option>
                                    </select>

                                    <div class="btn-wrapper">
                                        <div class="btn-wrapper__inner">
                                            <button class="btn-circle bg-red shadow"><XCircle/></button>
                                        </div>
                                    </div>
                                    <div class="fake-arrow"><ArrowDown/></div>
                                </div>

                                <div class="form-wrapper two-thirds-lg-full-sm pb-4">
                                    <select class="form-control full" aria-label="Topics">
                                        <option value="bananas">Bananas</option>
                                        <option value="apples">Apples</option>
                                        <option value="cutes">Cutes</option>
                                        <option value="games">Games</option>
                                        <option value="memes">Memes</option>
                                    </select>

                                    <div class="btn-wrapper">
                                        <div class="btn-wrapper__inner">
                                            <button class="btn-circle bg-green shadow"><PlusCircle/></button>
                                            <button class="btn-circle bg-red shadow"><XCircle/></button>
                                        </div>
                                    </div>
                                    <div class="fake-arrow"><ArrowDown/></div>
                                </div>
                            </fieldset>

                            <fieldset class="pb-4">
                                <label class="f3 pb-1">Responses</label>
                                <div class="form-wrapper two-thirds-lg-full-sm pb-4">
                                    <input type="text" class="form-control full" placeholder="Blah blah blah."/>
                                    <div class="btn-wrapper">
                                        <div class="btn-wrapper__inner">
                                            <button class="btn-circle bg-orange shadow"><Body/></button>
                                            <button class="btn-circle bg-yellow shadow"><Face/></button>
                                            <button class="btn-circle bg-red shadow"><XCircle/></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-wrapper two-thirds-lg-full-sm pb-4">
                                    <input type="text" class="form-control full" placeholder="Blah blah blah."/>
                                    <div class="btn-wrapper">
                                        <div class="btn-wrapper__inner">
                                            <button class="btn-circle bg-green shadow"><PlusCircle/></button>
                                            <button class="btn-circle bg-orange shadow"><Body/></button>
                                            <button class="btn-circle bg-yellow shadow"><Face/></button>
                                            <button class="btn-circle bg-red shadow"><XCircle/></button>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <div class="card-actions">
                                <div class="card-buttons">
                                    <button class="btn-circle large bg-red shadow"><XCircle width={36} height={36}/></button>
                                    <button class="btn-circle large bg-green shadow"><PlusCircle width={36} height={36}/></button>
                                </div>

                                <div class="card-paginator">
                                    <button class="paginate-btn left"><ChevronLeft/></button>

                                    <div class="dots">
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot selected"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                    </div>

                                    <button class="paginate-btn right"><ChevronRight/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column one-half-lg-full-sm pr-4 pl-2">
                    <div class="code shadow">
                        <div class="header px-4">
                            <Keyboard/>
                            <h2 class="white w-400">Code</h2>

                            <div class="right">
                                <button class="code-test-btn">
                                    <h2 class="green w-400">Test</h2>
                                    <PlayCircle class="ml-2"/>
                                </button>
                            </div>
                        </div>

                        <pre class="code-block">
                            <code class="language-renpy">{codeTemplate}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
);