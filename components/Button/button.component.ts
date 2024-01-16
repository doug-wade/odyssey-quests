import { defineComponent, html } from "@tybalt/core";
import { oneOf } from "@tybalt/validator";

export const BUTTON_VARIANTS = Object.freeze({
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY'
});

export default defineComponent({
    name: 'oq-button',
    emits: ['click'],
    props: {
        variant: { 
            validator: oneOf(Object.values(BUTTON_VARIANTS)) 
        }
    },
    render({ variant }) {
        return html`
            <button class="${variant}">
                <slot></slot>
            </button>
        `;
    }
});