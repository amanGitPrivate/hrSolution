import reducer from './friendlist';
import * as types from '../constants/ActionTypes';

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      gender: 'male'
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      gender: 'male'
    },
    {
      name: 'George Washington',
      starred: false,
      gender: 'male'
    }
  ]
};
describe('friendlist reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should handle ADD_FRIEND,', () => {
    const startAction = {
      type: types.ADD_FRIEND,
      data: {
        name: 'Aman Seth',
        gender: 'Male'
      }
    };
    expect(reducer(initialState, startAction)).toEqual({
      friendsById: [
        {
          name: 'Theodore Roosevelt',
          starred: true,
          gender: 'male'
        },
        {
          name: 'Abraham Lincoln',
          starred: false,
          gender: 'male'
        },
        {
          name: 'George Washington',
          starred: false,
          gender: 'male'
        },
        {
          name: 'Aman Seth',
          gender: 'Male'
        }
      ]
    });
  });
  it('should handle DELETE_FRIEND,', () => {
    const startAction = {
      type: types.DELETE_FRIEND,
      id: 1
    };
    expect(reducer(initialState, startAction)).toEqual({
      friendsById: [
        {
          name: 'Theodore Roosevelt',
          starred: true,
          gender: 'male'
        },
        {
          name: 'George Washington',
          starred: false,
          gender: 'male'
        }
      ]
    });
  });
  it('should handle STAR_FRIEND,', () => {
    const startAction = {
      type: types.STAR_FRIEND,
      id: 1
    };
    expect(reducer(initialState, startAction)).toEqual({
      friendsById: [
        {
          name: 'Theodore Roosevelt',
          starred: true,
          gender: 'male'
        },
        {
          name: 'Abraham Lincoln',
          starred: true,
          gender: 'male'
        },
        {
          name: 'George Washington',
          starred: false,
          gender: 'male'
        }
      ]
    });
  });
});
