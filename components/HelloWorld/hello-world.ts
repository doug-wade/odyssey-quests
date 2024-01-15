import { defineComponent, html } from '@tybalt/core';
import { compose, string, required } from '@tybalt/validator';

export default defineComponent({
    name: 'oq-hello-sayer',
    props: { name: { validator: compose(string(), required) } },
    render({ name }) {
        return html`<div class="hello-sayer">Hello ${name}</div>`;
    }
});