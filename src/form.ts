import { design } from './design';

export const BUTTON_CLASS = X.createClass({
    display: 'inline-block',
    margin: '0 .5em',
    padding: '0 1em',
    backgroundColor: '#FFF',
    border: 'solid 1px currentColor',
    borderRadius: '3px',
    boxShadow: '0 2px 3px #CCC',
    outline: 'none',
    transition: 'background-color .1s ease-out, box-shadow .1s ease-out',
}, {
    ':hover': {
        color: '#000',
        boxShadow: '0 2px 2px #999',
    },
    ':focus': {
        color: '#111',
        boxShadow: '0 2px 2px #AAA',
    },
    ':active': {
        backgroundColor: '#F5F5F5',
    },
    ':disabled': {
        color: '#444',
        backgroundColor: '#EEE',
        boxShadow: 'none',
        cursor: 'not-allowed',
    },
});

export const Button = design('button', BUTTON_CLASS);

export const TEXT_INPUT_CLASS = X.createClass({
    display: 'inline-block',
    margin: '.1em .5em',
    padding: '0 .2em',
    width: '6em',
    lineHeight: '1.8em',
    borderBottom: 'solid 1px currentColor',
    outline: 'none',
    transition: 'background-color .1s ease-out, box-shadow .1s ease-out',
}, {
    ':focus': {
        color: '#000',
    },
    ':disabled': {
        color: '#444',
        cursor: 'not-allowed',
    },
});

export const TextInput = design('input', TEXT_INPUT_CLASS);
