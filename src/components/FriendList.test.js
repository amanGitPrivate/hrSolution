import React from 'react';
import FriendList from './FriendList';
import renderer from 'react-test-renderer';

const friends = [
  {
    name: 'Theodore Roosevelt',
    starred: true
  },
  {
    name: 'Abraham Lincoln',
    starred: false
  },
  {
    name: 'George Washington',
    starred: false
  }
];

const starFriend = jest.fn();
const deleteFriend = jest.fn();

test('FriendList renders correctly', () => {
  const component = renderer.create(
    <FriendList
      friends={friends}
      actions={{ starFriend: starFriend, deleteFriend: deleteFriend }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('FriendList goToPrevPage click test', () => {
  const component = renderer.create(
    <FriendList
      friends={friends}
      actions={{ starFriend: starFriend, deleteFriend: deleteFriend }}
    />
  );
  const instance = component.root.instance;
  instance.state.page = 2;
  instance.goToPrevPage();
  console.assert(instance.state.page === 1);
});
