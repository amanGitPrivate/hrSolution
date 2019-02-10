import React from 'react';
import AddFriendInput from './AddFriendInput';
import renderer from 'react-test-renderer';

const addFriend = jest.fn();

test('AddFriendInput renders correctly', () => {
  const component = renderer.create(<AddFriendInput addFriend={addFriend} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('AddFriendInput handleChange click test', () => {
  const component = renderer.create(<AddFriendInput addFriend={addFriend} />);
  const instance = component.root.instance;
  instance.handleChange({ target: { name: 'gender', value: 'male' } });
  console.assert(instance.state.gender === 'male');
});

test('AddFriendInput handleSubmit click test', () => {
  const component = renderer.create(<AddFriendInput addFriend={addFriend} />);
  const instance = component.root.instance;
  instance.state.gender = 'male';
  instance.state.name = 'aman';
  instance.handleSubmit();
});
