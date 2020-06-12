import { design } from './design';

/**
 * Class for block sections with vertical padding
 */
export const SECTION_CLASS = X.createClass({
    display: 'block',
    padding: '.3em 0',
});
/** dts2md break */
/**
 * Component factory of block sections
 */
export const Section = design('section', SECTION_CLASS);
/** dts2md break */
/**
 * Class for headers at the top of view
 */
export const HEADER_CLASS = X.createClass({
    display: 'block',
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    padding: '.6em 1em',
    whiteSpace: 'nowrap',
    backgroundColor: 'rgba(255,255,255,.9)',
    borderBottom: 'solid 1px currentColor',
    boxShadow: '0 2px 3px rgba(0,0,0,.3)',
    backdropFilter: 'blur(2px)',
    zIndex: '9',
});
/** dts2md break */
/**
 * Component factory of headers
 */
export const Header = design('header', HEADER_CLASS);
/** dts2md break */
/**
 * Class for toolbars at the bottom of view
 */
export const TOOLBAR_CLASS = X.createClass({
    display: 'block',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    padding: '.6em 1em',
    whiteSpace: 'nowrap',
    backgroundColor: 'rgba(255,255,255,.9)',
    borderTop: 'solid 1px currentColor',
    backdropFilter: 'blur(2px)',
    zIndex: '9',
});
/** dts2md break */
/**
 * Component factory of toolbars
 */
export const Toolbar = design('div', TOOLBAR_CLASS);
/** dts2md break */
/**
 * Class for mask layers
 */
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
/** dts2md break */
/**
 * Component factory of mask layers
 */
export const Mask = design('div', MASK_CLASS);
/** dts2md break */
/**
 * Class for dialog windows
 */
export const DIALOG_WINDOW_CLASS = X.createClass({
    display: 'block',
    position: 'fixed',
    top: '2em',
    left: '0',
    width: '18em',
    marginLeft: '50%',
    padding: '1em',
    backgroundColor: 'rgba(255,255,255,.9)',
    border: 'solid 1px currentColor',
    borderRadius: '5px',
    boxShadow: '0 3px 3px currentColor',
    transform: 'translateX(-50%)',
});
/** dts2md break */
/**
 * Component factory of dialog windows
 */
export const DialogWindow = design('div', DIALOG_WINDOW_CLASS);
