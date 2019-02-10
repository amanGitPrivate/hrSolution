import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddFriendPagination.css';
import classnames from 'classnames';

const AddFriendPagination = props => {
  const {
    pageNumber,
    friends,
    itemsPerPage,
    goToPrevPage,
    isFirstPage,
    goToNextPage,
    isLastPage
  } = props;
  return (
    <div className={classnames(styles.friendListPagination)}>
      <button
        onClick={() => goToPrevPage()}
        disabled={isFirstPage()}
        className="btn btn-default"
      >
        <i className="fa fa-caret-left" />
      </button>
      <label className={styles.friendListPaginationPageNumber}>
        {pageNumber} of {Math.ceil(friends.length / itemsPerPage)}
      </label>
      <button
        onClick={() => goToNextPage()}
        disabled={isLastPage()}
        className="btn btn-default"
      >
        <i className="fa fa-caret-right" />
      </button>
    </div>
  );
};

AddFriendPagination.propTypes = {
  pageNumber: PropTypes.number,
  friends: PropTypes.array,
  itemsPerPage: PropTypes.number,
  goToPrevPage: PropTypes.func.isRequired,
  isFirstPage: PropTypes.func.isRequired,
  goToNextPage: PropTypes.func.isRequired,
  isLastPage: PropTypes.func.isRequired
};

export default AddFriendPagination;
