// @ts-check
/// <reference types=".." />
const { createElement: h } = X;

/**
 * @type {X.ReactiveValue<boolean>}
 */
const $dialogVisibility = X.toReactive(false);

const FORM_LABEL_CLASS = X.createClass({
    display: 'inline-block',
    width: '40%',
});

/**
 * @param {string} target
 * @param {string} text
 */
const FormLabel = (target, text) => (
    h('label', {
        for: target,
        class: FORM_LABEL_CLASS,
    },
        text
    )
);

/**
 * @param {string} text
 */
const AlertButton = text => (
    D.Button({
        listeners: {
            click() {
                alert(text);
            },
        },
    },
        text
    )
);

document.body.appendChild(
    h('div', {
        id: 'app',
        style: {
            padding: '5em 2em',
        },
    },
        /* header */
        D.Header({ id: 'header' },
            D.PrimaryText({
                style: {
                    fontWeight: 'bold',
                },
            },
                'super-d'
            ),
            D.Button({
                style: {
                    position: 'absolute',
                    top: '1.1em',
                    right: '3em',
                    fontSize: '.8em',
                },
                listeners: {
                    click() {
                        $dialogVisibility.setSync(true);
                    },
                },
            },
                'login'
            ),
        ),
        /* body */
        h('h2', null, 'TEST PAGE'),
        Array.from({ length: 16 }, (_, i) => (
            D.Section(null,
                h('p', {
                    style: {
                        lineHeight: '1.6em',
                    },
                },
                    `This is line ${i}, part of automatically generated test content.`
                )
            )
        )),
        /* login dialog */
        D.Mask({
            style: {
                display: $dialogVisibility.map(
                    visible => visible ? 'block' : 'none'
                ),
            },
        },
            D.DialogWindow({
                style: {
                    textAlign: 'center',
                },
            },
                h('h2', null,
                    'Login'
                ),
                h('form', {
                    action: 'javascript:;',
                    listeners: {
                        submit() {
                            alert('Failed to sign in because this is only a test page!');
                        },
                    },
                },
                    D.Section(null,
                        FormLabel('usr', 'User Name:'),
                        D.TextInput({
                            required: '',
                            id: 'usr',
                            name: 'usr',
                        }),
                    ),
                    D.Section(null,
                        FormLabel('pwd', 'Password:'),
                        D.TextInput({
                            type: 'password',
                            required: '',
                            id: 'pwd',
                            name: 'pwd',
                        }),
                    ),
                    D.Section(null,
                        FormLabel('usr_type', 'User Type:'),
                        h('select', {
                            class: D.TEXT_INPUT_CLASS,
                            id: 'usr_type',
                            name: 'usr_type',
                            style: {
                                textAlign: 'left',
                            },
                        },
                            h('option', {
                                value: 'admin',
                            },
                                'admin'
                            ),
                            h('option', {
                                selected: '',
                                value: 'normal',
                            },
                                'normal'
                            ),
                        ),
                    ),
                    D.Section(null,
                        D.Checkbox({
                            id: 'save_cred`',
                            name: 'save_cred`',
                            value: 'save_cred`',
                        }),
                        FormLabel('save_cred', 'Save Cred.'),
                    ),
                    D.Section(null,
                        h('input', {
                            class: D.BUTTON_CLASS,
                            type: 'submit',
                            value: 'sign in',
                        }),
                        D.Button({
                            listeners: {
                                /**
                                 * @param {Event} event
                                 */
                                click(event) {
                                    event.preventDefault();
                                    $dialogVisibility.setSync(false);
                                },
                            },
                        },
                            'cancel'
                        ),
                    ),
                ),
            ),
        ),
        /* toolbar */
        D.Toolbar({
            id: 'toolbar',
            style: {
                fontSize: '.8em',
            },
        },
            D.PrimaryText(null, 'Toolbar: '),
            AlertButton('hello'),
            AlertButton('world'),
            D.Button({
                disabled: '',
            },
                'disabled'
            ),
        ),
    )
);
