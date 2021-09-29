import { mount } from '@vue/test-utils'

const Component = {
  template: '<div data-test="target">dataset</div>'
}

test('render dataset', () => {
  const wrapper = mount(Component)

  expect(wrapper.get('[data-test="target"]').text()).toBe('dataset')
})