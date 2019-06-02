import React from 'react';
import { mount } from 'enzyme';
import { TestMe } from './TestMe';

// Enzyme makes it easier to test React components
// Uses mount() to render top-level component (instead of using ReactDOM.render())
// mount() returns wrapper that can be inspected and provides functionality like
// find(), simulating clicks, etc.

describe('TestMe Component', () => {
  it('should render correctly when hovered', () => {
    // 1. mount a <TestMe> Component here
    const wrapper = mount(<TestMe name="test" />);

    // 2. use enzyme wrapper's find() method to retrieve the #innerMe element
    // 3. simulate a hover with "mouseover" event via the simulate() API
    wrapper.find('#innerMe').simulate('mouseover');

    // 4. make assertions with expect on the text() of the #innerMe element
    expect(wrapper.find('#innerMe').text()).toBe('Enabled');
  });
});
