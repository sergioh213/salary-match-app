import { shallowMount, mount } from '@vue/test-utils'
import App from '../../src/App.vue'
import Employee from '../../src/components/Employee.vue'
import NavBar from '../../src/components/NavBar.vue'

describe('App.vue', () => {

  it('Message should be Success', () => {
    const wrapper = shallowMount(App, {
      data () {
        return {
          employeeSalary: 10, employerSalary: 11, showFinalModal: true
        }
      }
    })
    wrapper.vm.checkSalariesMatchAndShowFinalModal();
    const message = wrapper.find('h1').text();
    expect(message).toBe('Success')
  })

  it('Message should be Failure', () => {
    const wrapper = shallowMount(App, {
      data () {
        return {
          employeeSalary: 12, employerSalary: 11, showFinalModal: true
        }
      }
    })
    wrapper.vm.checkSalariesMatchAndShowFinalModal();
    const message = wrapper.find('h1').text();
    expect(message).toBe('Failure')
  })

  it('Employee modal shouldn\'t be mounted', () => {
    const wrapper = mount(App)
    const modalComponent = wrapper.find(Employee);
    expect(modalComponent.exists()).toBe(false)
  })

  it('Employee modal should be mounted', () => {
    const wrapper = mount(App, {
      data () {
        return {
          showEmployeeComponent: true
        }
      }
    })
    const modalComponent = wrapper.find(Employee);
    expect(modalComponent.exists()).toBe(true)
  })
})

// wrapper.setProps({ foo: 'bar' })
