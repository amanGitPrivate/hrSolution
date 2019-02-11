import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendInputBox.css';

const AddFriendInputBox = props => {
  const { name, onChange, triggerSubmitOnEnter } = props;
  return (
    <div>
      <input
        type="text"
        autoFocus={true}
        name="name"
        className={classnames('form-control', styles.addFriendInputBox)}
        placeholder="Type the name of a friend"
        value={name}
        onChange={onChange}
        onKeyDown={triggerSubmitOnEnter}
      />
    </div>
  );
};

AddFriendInputBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  triggerSubmitOnEnter: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default AddFriendInputBox;
