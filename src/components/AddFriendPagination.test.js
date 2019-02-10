import React from 'react';
import AddFriendPagination from './AddFriendPagination';
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

test('AddFriendPagination renders correctly', () => {
  const component = renderer.create(
    <AddFriendPagination
      pageNumber={1}
      friends={friends}
      itemsPerPage={2}
      goToPrevPage={jest.fn()}
      isFirstPage={jest.fn()}
      goToNextPage={jest.fn()}
      isLastPage={jest.fn()}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
