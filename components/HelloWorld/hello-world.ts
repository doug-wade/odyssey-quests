import { defineComponent, html } from '@tybalt/core';
import { compose, string, required } from '@tybalt/validator';

export default defineComponent({
    name: 'hello-world',
    
    props: { name: { validator: compose(string(), required) } },
    render({ name }) {
        return html`<div class="hello-world">Hello ${name}</div>`;
    }
});