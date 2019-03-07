import { shallowMount } from '@vue/test-utils'
import App from '../../src/App.vue'
import Employee from '../../src/components/Employee.vue'

describe('Employee.vue', () => {
  
  it('Employee component renders correctly', () => {
    const wrapper = shallowMount(Employee)
    const titleText = wrapper.find('h4').text();
    expect(titleText).toBe('Employee')
  })

  it('Employee input takes props and renders existing salary', () => {
    const wrapper = shallowMount(Employee, {
      propsData: {
        salaryProp: 10
      }
    })
    const inputValue = wrapper.find('input').element.value;
    expect(parseInt(inputValue, 10)).toBe(10)
  })
})
