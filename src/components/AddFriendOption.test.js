import React from 'react';
import AddFriendOption from './AddFriendOption';
import renderer from 'react-test-renderer';

test('AddFriendOption renders correctly', () => {
  const component = renderer.create(
    <AddFriendOption gender={'male'} onChange={jest.fn()} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
