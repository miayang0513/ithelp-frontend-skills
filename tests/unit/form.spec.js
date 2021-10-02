import { mount } from '@vue/test-utils'
import { reactive } from 'vue'

const Component = {
  template: `
    <form data-test="form" @submit.prevent="submit">
      <input data-test="email" type="email" v-model="form.email" />

      <textarea data-test="description" v-model="form.description" />

      <select data-test="city" v-model="form.city">
        <option value="taipei">Taipei</option>
        <option value="tainan">Tainan</option>
      </select>

      <input data-test="subscribe" type="checkbox" v-model="form.subscribe" />

      <input data-test="interval.weekly" type="radio" value="weekly" v-model="form.interval" />
      <input data-test="interval.monthly" type="radio" value="monthly" v-model="form.interval" />

      <button type="submit">Submit</button>
    </form>
  `,
  emits: ['submit'],
  setup (props, { emit }) {
    const form = reactive({
      email: '',
      description: '',
      city: '',
      subscribe: false,
      interval: ''
    })

    const submit = () => {
      emit('submit', form)
    }

    return {
      form,
      submit
    }
  }
}

describe('Form', () => {
  test('fill up form', async () => {
    const wrapper = mount(Component)

    const email = 'name@mail.com'
    const description = 'Lorem ipsum dolor sit amet'
    const city = 'taipei'
    const subscribe = true

    await wrapper.get('[data-test="email"]').setValue(email)
    await wrapper.get('[data-test="description"]').setValue(description)
    await wrapper.get('[data-test="city"]').setValue(city)
    await wrapper.get('[data-test="subscribe"]').setValue(subscribe)
    await wrapper.get('[data-test="interval.weekly"]').setValue()

    expect(wrapper.vm.form).toEqual({
      email,
      description,
      city,
      subscribe,
      interval: 'weekly'
    })
  })

  test('submits the form', async () => {
    const wrapper = mount(Component)

    const email = 'name@mail.com'
    const description = 'Lorem ipsum dolor sit amet'
    const city = 'taipei'
    const subscribe = true

    await wrapper.get('[data-test="email"]').setValue(email)
    await wrapper.get('[data-test="description"]').setValue(description)
    await wrapper.get('[data-test="city"]').setValue(city)
    await wrapper.get('[data-test="subscribe"]').setValue(subscribe)
    await wrapper.get('[data-test="interval.monthly"]').setValue()

    await wrapper.get('[data-test="form"]').trigger('submit.prevent')

    expect(wrapper.emitted('submit')[0][0]).toEqual({
      email,
      description,
      city,
      subscribe,
      interval: 'monthly'
    })
  })
})
