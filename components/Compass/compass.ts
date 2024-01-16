import { defineComponent, html } from '@tybalt/core';
import { compose, number, required } from '@tybalt/validator';

import { geoPosition, theme } from '../../contexts';

export default defineComponent({
    name: 'oq-compass',
    contexts: [geoPosition, theme],
    props: {
        latitude: compose(number(), required),
        longitude: compose(number(), required),
    },
    render({ latitude, longitude }) {
        return html`
            <div class="oq-compass">
                Compass with arrow pointing to lat ${latitude} long ${longitude}
            </div>`;
    }
});
