import React from 'react';
import AddFriendInputBox from './AddFriendInputBox';
import renderer from 'react-test-renderer';

test('AddFriendInputBox renders correctly', () => {
  const component = renderer.create(
    <AddFriendInputBox
      name={'Aman'}
      triggerSubmitOnEnter={jest.fn()}
      onChange={jest.fn()}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
