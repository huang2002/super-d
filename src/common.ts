import { design } from './design';

X.insertStyle('*', {
    margin: '0',
    padding: '0',
    color: 'inherit',
    fontSize: 'inherit',
    lineHeight: '2em',
    background: 'none',
    border: 'none',
    sizingBox: 'border-box',
});

X.insertStyle('body', {
    color: '#222', // secondary foreground by default
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
