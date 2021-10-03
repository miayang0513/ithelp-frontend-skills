import { mount } from '@vue/test-utils'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { createVuexStore } from '@/store'

const Component = {
  template: `
    <div>
      <button data-test="increment" @click="increment" />
      <p data-test="count">Count: {{ count }}</p>
    </div>
  `,
  setup () {
    const store = useStore()
    const count = computed(() => store.getters['count'])

    const increment = () => {
      store.commit('increment')
    }
    return {
      count,
      increment
    }
  }
}

describe('Testing Component with Vuex', () => {
  test('After clicked, value of count will become 0 to 1', async () => {
    const wrapper = mount(Component, {
      global: {
        plugins: [createVuexStore()]
      }
    })

    expect(wrapper.html()).toContain('Count: 0')

    await wrapper.get('[data-test="increment"]').trigger('click')

    expect(wrapper.html()).toContain('Count: 1')
  })

  test('The initial value of count is 0', async () => {
    const wrapper = mount(Component, {
      global: {
        plugins: [createVuexStore({ count: 10 })]
      }
    })

    expect(wrapper.html()).toContain('Count: 10')
  })
})


describe('Testing Vuex in Isolation', () => {
  test('increment: 0 -> 1', () => {
    const store = createVuexStore()
    store.commit('increment')

    expect(store.getters['count']).toBe(1)
  })

  test('increment: 10 -> 11', () => {
    const store = createVuexStore({ count: 10 })
    store.commit('increment')

    expect(store.getters['count']).toBe(11)
  })
})
