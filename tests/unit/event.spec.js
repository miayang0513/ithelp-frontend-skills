import { mount } from '@vue/test-utils'

const Component = {
  template: `
    <div>
      <button data-test="button" @click="increment">Increment</button>
      <p data-test="count">{{count}}</p>
    </div>
  `,
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count += 1
    }
  },
}
describe('Event', () => {
  test('render button', () => {
    const wrapper = mount(Component)

    expect(wrapper.get('[data-test="button"]').exists()).toBe(true)
  })

  test('The initial value of count is 0', () => {
    const wrapper = mount(Component)

    expect(wrapper.get('[data-test="count"]').text()).toBe('0')
  })

  test('after click, count will be 1', async () => {
    const wrapper = mount(Component)

    await wrapper.get('[data-test="button"]').trigger('click')

    expect(wrapper.get('[data-test="count"]').text()).toBe('1')
  })
})