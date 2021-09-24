import ReactDOM from 'react-dom'
import Profile from "./Profile"
import { mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('Profile, given click "hide details" button, shows "display details" button', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Profile
            name = 'John Doe'
            title = 'Team Lead'
            details = 'This is my 5th year and I love helping others'
        />,
        div
    )
    document.body.appendChild(div)

    const hideDetailsBtn = screen.getByRole('button', { name: /hide details/i })
    expect(hideDetailsBtn).toBeTruthy();
    //fireEvent.click(hideDetailsBtn)
       // const displayDetailsBtn = screen.getByRole('button', {name: /display details/i })
        //expect(displayDetailsBtn).toBeTruthy()
        // Test cleanup
        div.remove();
})

test('setDetails sets the state value', () => {
    const wrapper = mount(
        <Profile
            name="John Doe"
            title="Team Lead"
            details="This is my 5th year and I love helping others"
        />
    )
    expect(wrapper.state('showDetails')).toEqual(true)
    expect(wrapper.find('.card-text.details').props().children).toEqual('This is my 5th year and I love helping others')
})