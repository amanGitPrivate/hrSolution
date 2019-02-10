import React from 'react';
import FriendListItem from './FriendListItem';
import renderer from 'react-test-renderer';

test('FriendListItem renders correctly', () => {
  const component = renderer.create(
    <FriendListItem
      name={'Aman Seth'}
      id={1}
      starred={false}
      starFriend={jest.fn()}
      deleteFriend={jest.fn()}
      page={2}
      itemsPerPage={2}
      gender={'Male'}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
