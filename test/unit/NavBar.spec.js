import { shallowMount } from '@vue/test-utils'
import NavBar from '../../src/components/NavBar.vue'
import App from '../../src/App.vue'

describe('NavBar.vue', () => {
  it('NavBar renders correctly', () => {
    const parent = shallowMount(App)
    const wrapper = shallowMount(NavBar, {
      propsData: {
        hideAllModals: parent.vm.hideAllModals,
        toggleShowEmployeeComponent: parent.vm.toggleShowEmployeeComponent,
        toggleShowEmployerComponent: parent.vm.toggleShowEmployerComponent
      }
    })
    const firstButtonText = wrapper.find('#nav-button').text();
    const allNavbuttons = wrapper.findAll('button');
    expect(firstButtonText).toBe('home')
    expect(allNavbuttons.length).toBe(3)
  })
})
