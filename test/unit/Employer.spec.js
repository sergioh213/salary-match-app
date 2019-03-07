import { shallowMount } from '@vue/test-utils'
import App from '../../src/App.vue'
import Employer from '../../src/components/Employer.vue'

describe('Employer.vue', () => {

  it('Employer component renders correctly', () => {
    const wrapper = shallowMount(Employer)
    const titleText = wrapper.find('h4').text();
    expect(titleText).toBe('Employer')
  })

  it('Employer input takes props and renders existing salary', () => {
    const wrapper = shallowMount(Employer, {
      propsData: {
        salaryProp: 10
      }
    })
    const inputValue = wrapper.find('input').element.value;
    expect(parseInt(inputValue, 10)).toBe(10)
  })
})
