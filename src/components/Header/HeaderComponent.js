import React from 'react';
const LOGO = require('../../assets/img/f1_logo.svg');

class HeaderComponent extends React.Component {
  render() {
    return(
      <header 
        className="main-header" 
        style={styles.header}>
        <div className="container">
          <div 
            className="header-logo"
            style={styles.logo}>
            <a href='/'>
              <img src={LOGO} alt="Formula 1" />
            </a>
          </div>
        </div>
      </header>
    );
  }

}

const styles = {
  header: {
    width: 100+'%',
    backgroundColor: '#e10600',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 10
  },
  logo: {
    width: 80,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 'auto',
    marginRight: 'auto' 
  }
}

export default HeaderComponent;