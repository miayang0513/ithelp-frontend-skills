import { mount, shallowMount } from '@vue/test-utils'

const Child = {
  template: "<div>Child component</div>"
}

const Parent = {
  template: "<div><child /></div>",
  components: {
    Child
  }
}

describe('shallowMount example', () => {
  test('test', () => {
    const childShallowWrapper = shallowMount(Child)
    const childMountWrapper = mount(Child)
    console.log(childShallowWrapper.html())
    console.log(childMountWrapper.html())

    const parentShallowWrapper = shallowMount(Parent)
    const parentMountWrapper = mount(Parent)
    console.log(parentShallowWrapper.html())
    console.log(parentMountWrapper.html())
  })
})


