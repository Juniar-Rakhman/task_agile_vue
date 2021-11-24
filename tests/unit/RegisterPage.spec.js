import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import RegisterPage from '@/views/RegisterPage'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('RegisterPage.vue', () => {
  let wrapper
  let fieldUsername
  let fieldEmailAddress
  let fieldPassword
  let buttonSubmit

  beforeEach(() => {
    wrapper = mount(RegisterPage)
    fieldUsername = wrapper.find('#username')
    fieldEmailAddress = wrapper.find('#emailAddress')
    fieldPassword = wrapper.find('#password')
    buttonSubmit = wrapper.find('form button[type="submit"]')
  })

  it('should render correct contents', () => {
    expect(wrapper.find('.logo').attributes().src).toEqual('/static/images/logo.png')
    expect(wrapper.find('.tagline').text()).toEqual('Open source task management tool')
    expect(fieldUsername.element.value).toEqual('')
    expect(fieldEmailAddress.element.value).toEqual('')
    expect(fieldPassword.element.value).toEqual('')
    expect(buttonSubmit.text()).toEqual('Create account')
  })

  it('should contain data model with initial values', () => {
    expect(wrapper.vm.form.username).toEqual('')
    expect(wrapper.vm.form.emailAddress).toEqual('')
    expect(wrapper.vm.form.password).toEqual('')
  })

  it('should have form inputs bound with data model', async () => {
    const username = 'sunny'
    const emailAddress = 'sunny@local'
    const password = 'VueJsRocks!'

    await wrapper.setData({
      form: {
        username: username,
        emailAddress: emailAddress,
        password: password
      }
    })

    expect(fieldUsername.element.value).toEqual(username)
    expect(fieldEmailAddress.element.value).toEqual(emailAddress)
    expect(fieldPassword.element.value).toEqual(password)
  })

  it('should have form submit event handler `submitForm`', () => {
    const stub = jest.spyOn(wrapper.vm, 'submitForm')
    buttonSubmit.trigger('submit')
    expect(stub).toBeCalled()
  })
})
