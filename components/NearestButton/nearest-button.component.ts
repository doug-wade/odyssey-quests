import { defineComponent, html } from "@tybalt/core";
import { oneOf } from "@tybalt/validator";
import { reactive } from "@tybalt/reactive";

import { BUTTON_VARIANTS } from '../Button/button.component.ts';

export default defineComponent({
    name: 'oq-button',
    props: {
        variant: {
            validator: oneOf(Object.values(BUTTON_VARIANTS)),
            default: BUTTON_VARIANTS.PRIMARY
        }
    },
    setup() {
        const geoError = reactive(null);
        const geoPosition = reactive(null);

        const successCallback = (position) => {
            geoPosition.value = position;
        };
        
        const errorCallback = (error) => {
            geoError.value = error;
        };
        
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        
        const onClick = () => {
            if (geoError.value) {
                console.error('geoError', geoError);
                return;
            }

            if (geoPosition.value) {
                console.log('geoPosition', geoPosition.value);
                return;
            }

            console.log('user still deciding...');
        };

        return {
            onClick
        }
    },
    render({ onClick, variant }) {
        return html`
            <oq-button @click=${onClick} variant="${variant}">
                <slot></slot>
            </button>
        `;
    }
});