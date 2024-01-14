import { mount } from '@tybalt/test-utils';
import { describe, it, expect } from '@jest/globals';

import HelloWorld from './hello-world';

describe('HelloWorld', () => {
    it('renders', async () => {
        const mockName = 'World';
        const wrapper = await mount(HelloWorld, { attributes: { name: mockName } });
        
        expect(wrapper.html()).toContain(`Hello ${mockName}`);
    });
});