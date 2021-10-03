import { mount } from '@vue/test-utils'

const Component = {
  template: `
    <nav>
      <a id="profile" href="/profile">My Profile</a>
      <a v-if="admin" id="admin" href="/admin">Admin</a>
    </nav>
  `,
  data () {
    return {
      admin: false
    }
  }
}

describe('Conditional Rendering', () => {
  test('always render profile link', () => {
    const wrapper = mount(Component)
    const profileLink = wrapper.get('#profile')

    expect(profileLink.text()).toBe('My Profile')
  })

  test('does not render an admin link', () => {
    const wrapper = mount(Component)

    expect(wrapper.find('#admin').exists()).toBe(false)
  })

  test('only render admin link when admin is true', () => {
    const wrapper = mount(Component, {
      data () {
        return {
          admin: true
        }
      }
    })

    expect(wrapper.get('#admin').text()).toBe('Admin')
  })
})