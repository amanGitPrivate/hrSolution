import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import AddFriendPagination from './AddFriendPagination';

class FriendList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      page: 1,
      itemsPerPage: 2
    };
    this.goToPrevPage = this.goToPrevPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.isFirstPage = this.isFirstPage.bind(this);
    this.isLastPage = this.isLastPage.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.friends.length !== this.props.friends.length) {
      const totalPages = Math.ceil(
        this.props.friends.length / this.state.itemsPerPage
      );
      if (this.state.page > totalPages || this.state.page === 0) {
        this.setState({ page: totalPages }, () => {
          this.calculatePageItems(this.state.page);
        });
      } else {
        this.calculatePageItems(this.state.page);
      }
    }
  }

  goToPrevPage() {
    this.setState({ page: this.state.page - 1 });
  }

  goToNextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  isFirstPage() {
    return this.state.page === 1;
  }

  isLastPage() {
    const { page, itemsPerPage } = this.state;
    const { friends } = this.props;
    return friends.length <= page * itemsPerPage;
  }

  calculatePageItems(page) {
    const { itemsPerPage } = this.state;
    const { friends } = this.props;

    const itemIndex = page * itemsPerPage - itemsPerPage;
    return [...friends].splice(itemIndex, itemsPerPage);
  }

  render() {
    const pageItems = this.calculatePageItems(this.state.page);
    const { friends } = this.props;
    const { page, itemsPerPage } = this.state;
    return (
      <div className={styles.friendListContentWrapper}>
        <ul className={styles.friendList}>
          {pageItems.length > 0 ? (
            pageItems.map((friend, index) => {
              return (
                <FriendListItem
                  key={index}
                  id={index}
                  {...this.state}
                  {...friend}
                  {...this.props.actions}
                />
              );
            })
          ) : (
            <div className={styles.noFriendsMessage}>
              All items for this page have been deleted
            </div>
          )}
        </ul>
        {friends.length > 2 && (
          <div className={styles.friendListPagination}>
            <AddFriendPagination
              goToPrevPage={this.goToPrevPage}
              goToNextPage={this.goToNextPage}
              isFirstPage={this.isFirstPage}
              isLastPage={this.isLastPage}
              pageNumber={page}
              friends={friends}
              itemsPerPage={itemsPerPage}
            />
          </div>
        )}
      </div>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
