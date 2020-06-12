import { design } from './design';

X.insertStyle('*', {
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
    color: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    textDecoration: 'none',
    lineHeight: '2em',
    background: 'none',
    border: 'none',
    listStyle: 'none',
});

X.insertStyle('body', {
    color: '#333', // secondary foreground by default
    fontSize: '17px',
    backgroundColor: '#F5F5F5',
});

/**
 * Class for primary text spans
 */
export const PRIMARY_TEXT_CLASS = X.createClass({
    display: 'inline',
    color: '#111',
    textShadow: '0 1px 0 #FFF',
});
/** dts2md break */
/**
 * Component factory of primary text spans
 */
export const PrimaryText = design('span', PRIMARY_TEXT_CLASS);
/** dts2md break */
/**
 * Class for primary text spans
 */
export const HIGHLIGHT_CLASS = X.createClass({
    display: 'inline',
    color: '#08F',
    textShadow: '0 1px 0 #FFF',
});
/** dts2md break */
/**
 * Component factory of primary text spans
 */
export const Highlight = design('span', HIGHLIGHT_CLASS);
/** dts2md break */
/**
 * Class for primary text spans
 */
export const LINK_CLASS = X.createClass({
    display: 'inline',
    color: '#06F',
    textShadow: '0 1px 0 #FFF',
    textDecoration: 'underline',
    outline: 'none',
    cursor: 'pointer',
}, {
    ':focus': {
        color: '#03D',
    },
    ':hover': {
        color: '#02C',
    },
});
/** dts2md break */
/**
 * Component factory of primary text spans
 */
export const Link = design('a', LINK_CLASS);
