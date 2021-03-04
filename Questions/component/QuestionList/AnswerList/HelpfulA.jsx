import React from 'react';
import styles from '../SideBar/SideBar.module.css';

class HelpfulA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.setState({
      show: false
    })
  }

  render() {
    const display = this.state.show ? `${styles['helpful-btn']} ${styles['display-on']}` : `${styles['helpful-btn']} ${styles['display-off']}`;

    return(
      <div className="helpContainer">
        <sub>
          <span className={styles.text}>Helpful?</span>
          <button className={display} onClick={this.handleClick}>Yes</button>
          <span className={styles.number}></span>
        </sub>
      </div>
    )
  }
}

export default HelpfulA;