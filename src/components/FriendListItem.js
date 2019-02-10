import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FriendListItem.css';

class FriendListItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      gender: this.props.gender || 'noOptionSelected',
      validation: {
        name: true,
        gender: true
      }
    };
    this.starFriend = this.starFriend.bind(this);
    this.deleteFriend = this.deleteFriend.bind(this);
  }

  starFriend() {
    const { id, page, itemsPerPage } = this.props;
    this.props.starFriend(id + (page - 1) * itemsPerPage);
  }

  deleteFriend() {
    const { id, page, itemsPerPage } = this.props;
    this.props.deleteFriend(id + (page - 1) * itemsPerPage);
  }

  render() {
    const { name, starred, gender } = this.props;
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div>
            <span>{name}</span>
            <i className={`fa fa-${gender}`} />
          </div>
          <div>
            <small>xx friends in common</small>
          </div>
        </div>
        <div className={styles.friendActions}>
          <button
            className={`btn btn-default ${styles.btnAction}`}
            onClick={this.starFriend}
          >
            <i
              className={classnames('fa', {
                'fa-star': starred,
                'fa-star-o': !starred
              })}
            />
          </button>
          <button
            className={`btn btn-default ${styles.btnAction}`}
            onClick={this.deleteFriend}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired,
  deleteFriend: PropTypes.func.isRequired
};

export default FriendListItem;
