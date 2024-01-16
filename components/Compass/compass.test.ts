import { mount } from '@tybalt/test-utils';
import { describe, it, expect } from '@jest/globals';

import Compass from './compass';

describe('Compass', () => {
    it('renders', async () => {
        const longitude = -122.37323;
        const latitude = 47.66551;

        const wrapper = await mount(Compass, { attributes: { longitude, latitude } });

        expect(wrapper.html()).toContain(`${longitude}`);
        expect(wrapper.html()).toContain(`${latitude}`);
    });
});
