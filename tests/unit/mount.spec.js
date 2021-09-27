import { mount } from '@vue/test-utils'

const Component = {
  template: '<div>Hello world</div>'
}

const ComponentWithProps = {
  template: '<div>{{ msg }}</div>',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}

describe('Mount example', () => {
  test('mounts a component', () => {
    const wrapper = mount(Component)

    expect(wrapper.html()).toContain('Hello world')
  })

  test('mounts a component with props', () => {
    const wrapper = mount(ComponentWithProps, {
      props: {
        msg: 'Hello world'
      }
    })

    expect(wrapper.html()).toContain('Hello world')
  })
})