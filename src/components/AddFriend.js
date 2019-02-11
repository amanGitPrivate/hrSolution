import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriend.css';
import AddFriendOption from './AddFriendOption';
import AddFriendInputBox from './AddFriendInputBox';

class AddFriendInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      gender: this.props.gender || 'noOptionSelected',
      validation: {
        name: false,
        gender: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.triggerSubmitOnEnter = this.triggerSubmitOnEnter.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({
      validation: {
        ...this.state.validation,
        [name]: true
      }
    });
  }

  isFormValid() {
    const { name, gender } = this.state;
    let validation = {
      name: !!name,
      gender: gender !== 'noOptionSelected'
    };
    this.setState({ validation });

    if (!name || gender === 'noOptionSelected') {
      return false;
    }

    return true;
  }

  handleSubmit() {
    const { name, gender } = this.state;
    if (this.isFormValid()) {
      this.props.addFriend({ name, gender });
      this.setState({
        name: '',
        gender: 'noOptionSelected',
        validation: {
          name: false,
          gender: false
        }
      });
    }
  }

  triggerSubmitOnEnter(e) {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  }

  render() {
    const { name, validation, gender } = this.state;
    return (
      <div className={styles.addFriendForm}>
        <AddFriendInputBox
          name={name}
          onChange={this.handleChange}
          triggerSubmitOnEnter={this.triggerSubmitOnEnter}
        />
        <AddFriendOption onChange={this.handleChange} gender={gender} />
        <div className={styles.submitButton}>
          <button
            className={classnames(
              'btn btn-default',
              styles.addFriendSubmitButton
            )}
            onClick={this.handleSubmit}
            disabled={!validation.name || !validation.gender}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput;
