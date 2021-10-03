import { mount } from '@vue/test-utils'
import { ref } from 'vue'

const Component = {
  template: `
    <div>
      <input type="email" v-model="email" data-test="email" />
    </div>
  `,
  setup () {
    const email = ref('')

    return {
      email
    }
  }
}

describe('Input Element', () => {
  test('value of input element should be my@mail.com', async () => {
    const wrapper = mount(Component)
    const input = wrapper.get('[data-test="email"]')

    await input.setValue('my@mail.com')

    expect(input.element.value).toBe('my@mail.com')
  })

  test('after setted value, value of email should be my@mail.com', async () => {
    const wrapper = mount(Component)

    await wrapper.get('[data-test="email"]').setValue('my@mail.com')

    expect(wrapper.vm.email).toBe('my@mail.com')
  })
})
