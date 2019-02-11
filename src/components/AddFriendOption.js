import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FEMALE, MALE } from './../constants/GenderConfig';

import styles from './AddFriendOption.css';

const AddFriendOption = props => {
  const { gender, onChange } = props;
  return (
    <div className={classnames('form-control', 'radio', styles.addFriendRadio)}>
      <label className={classnames(styles.addFriendRadioMaleOption)}>
        <input
          type="radio"
          name="gender"
          value={MALE}
          checked={gender === MALE ? true : false}
          onChange={onChange}
        />{' '}
        {MALE}
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value={FEMALE}
          checked={gender === FEMALE ? true : false}
          onChange={onChange}
        />{' '}
        {FEMALE}{' '}
      </label>
    </div>
  );
};

AddFriendOption.propTypes = {
  gender: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default AddFriendOption;
