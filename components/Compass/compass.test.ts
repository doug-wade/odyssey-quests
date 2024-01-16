import { mount } from '@tybalt/test-utils';
import { describe, it, expect } from '@jest/globals';

import Compass from './compass';

describe('Compass', () => {
    it('renders', async () => {
        const mockName = 'World';
        const wrapper = await mount(Compass, { attributes: { name: mockName } });
        
        expect(wrapper.html()).toContain(`Hello ${mockName}`);
    });
});
