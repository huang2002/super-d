import { design } from './design';

export const SECTION_CLASS = X.createClass({
    display: 'block',
    padding: '.5em 0',
});

export const Section = design('section', SECTION_CLASS);

export const HEADER_CLASS = X.createClass({
    display: 'block',
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    padding: '.6em 1em',
    whiteSpace: 'nowrap',
    backgroundColor: 'rgba(255,255,255,.9)',
    borderBottom: 'solid 1px #111',
    boxShadow: '0 2px 5px #888',
    backdropFilter: 'blur(2px)',
    zIndex: '9',
});

export const Header = design('header', HEADER_CLASS);

export const TOOLBAR_CLASS = X.createClass({
    display: 'block',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    padding: '.6em 1em',
    whiteSpace: 'nowrap',
    backgroundColor: 'rgba(255,255,255,.9)',
    borderTop: 'solid 1px #222',
    backdropFilter: 'blur(2px)',
    zIndex: '9',
});

export const Toolbar = design('div', TOOLBAR_CLASS);

export const MASK_CLASS = X.createClass({
    display: 'block',
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(100,100,100,.2)',
    backdropFilter: 'blur(2px)',
    overflow: 'auto',
    zIndex: '99',
});

export const Mask = design('div', MASK_CLASS);

export const DIALOG_WINDOW_CLASS = X.createClass({
    display: 'block',
    position: 'fixed',
    top: '2em',
    left: '0',
    width: '16em',
    marginLeft: '50%',
    padding: '1em',
    backgroundColor: 'rgba(255,255,255,.9)',
    border: 'solid 1px #111',
    borderRadius: '5px',
    boxShadow: '0 5px 5px #666',
    transform: 'translateX(-50%)',
});

export const DialogWindow = design('div', DIALOG_WINDOW_CLASS);
