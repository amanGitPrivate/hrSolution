import React from 'react';
import AddFriend from './AddFriend';
import renderer from 'react-test-renderer';

const addFriend = jest.fn();

test('AddFriend renders correctly', () => {
  const component = renderer.create(<AddFriend addFriend={addFriend} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('AddFriend handleChange click test', () => {
  const component = renderer.create(<AddFriend addFriend={addFriend} />);
  const instance = component.root.instance;
  instance.handleChange({ target: { name: 'gender', value: 'male' } });
  console.assert(instance.state.gender === 'male');
});

test('AddFriend handleSubmit click test', () => {
  const component = renderer.create(<AddFriend addFriend={addFriend} />);
  const instance = component.root.instance;
  instance.state.gender = 'male';
  instance.state.name = 'aman';
  instance.handleSubmit();
});
