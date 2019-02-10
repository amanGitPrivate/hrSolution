import { addFriend, deleteFriend, starFriend } from '../actions/FriendsActions';
import * as types from '../constants/ActionTypes';

test('deleteFriend action it should return the correct object', () => {
  const id = 'test-id';
  const addedAction = deleteFriend(id);
  expect(addedAction.id).toBe(id);
  expect(addedAction.type).toBe(types.DELETE_FRIEND);
});

test('starFriend action it should return the correct object', () => {
  const id = 'test-id';
  const addedAction = starFriend(id);
  expect(addedAction.id).toBe(id);
  expect(addedAction.type).toBe(types.STAR_FRIEND);
});

test('addFriend action it should return the correct object', () => {
  const data = { name: 'aman', gender: 'male' };
  const addedAction = addFriend(data);
  expect(addedAction.data.name).toBe(data.name);
  expect(addedAction.type).toBe(types.ADD_FRIEND);
});
