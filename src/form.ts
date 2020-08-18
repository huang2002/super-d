import { design } from './design';

/**
 * Class for buttons
 */
export const BUTTON_CLASS = X.createClass({
    display: 'inline-block',
    margin: '0 .5em',
    padding: '0 1em',
    backgroundColor: '#FFF',
    border: 'solid 1px currentColor',
    borderRadius: '4px',
    boxShadow: 'none',
    outline: 'none',
    transform: 'none',
    transition: 'background-color .1s ease-out, box-shadow .1s ease-out, transform .1s ease-out',
    cursor: 'pointer',
}, {
    ':hover': {
        boxShadow: '0 0 5px rgba(0,0,0,.3)',
    },
    ':focus': {
        boxShadow: '0 0 5px rgba(0,0,0,.5)',
    },
    ':active': {
        transform: 'scale(.9)',
        backgroundColor: '#F9F9F9',
    },
    ':disabled': {
        color: '#444',
        backgroundColor: '#EEE',
        boxShadow: 'none',
        transform: 'none',
        cursor: 'not-allowed',
    },
});
/** dts2md break */
/**
 * Component factory of buttons
 */
export const Button = design('button', BUTTON_CLASS);
/** dts2md break */
/**
 * Class for text inputs
 */
export const TEXT_INPUT_CLASS = X.createClass({
    display: 'inline-block',
    margin: '.1em .5em',
    padding: '0 .2em',
    width: '6em',
    lineHeight: '1.8em',
    borderBottom: 'solid 1px currentColor',
    outline: 'none',
    transition: 'background-color .1s ease-out, color .1s ease-out',
    cursor: 'text',
}, {
    ':focus': {
        color: '#000',
    },
    ':disabled': {
        color: '#444',
        cursor: 'not-allowed',
    },
});
/** dts2md break */
/**
 * Component factory of text inputs
 */
export const TextInput = design('input', TEXT_INPUT_CLASS);
/** dts2md break */
/**
 * Class for checkbox inputs
 */
export const CHECKBOX_CLASS = X.createClass({
    display: 'inline-block',
    margin: '.5em',
    width: '1em',
    height: '1em',
    borderRadius: '3px',
});
/** dts2md break */
/**
 * Component factory of checkbox inputs
 */
export const Checkbox = design('input', CHECKBOX_CLASS, { type: 'checkbox' });
