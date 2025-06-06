import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ServiceCard from '../ServiceCard.vue';

describe('ServiceCard', () => {
  it('renders the service name', () => {
    const wrapper = mount(ServiceCard, {
      props: { name: 'Test Service', description: 'desc' }
    });
    expect(wrapper.text()).toContain('Test Service');
  });
});
