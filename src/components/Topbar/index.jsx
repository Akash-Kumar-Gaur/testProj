import React from 'react';
import './index.css';

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSticky: false,
      currentScrollPos: 0,
    }
  }

  render() {
    window.onscroll = function () { myFunction() };
    const myFunction = () => {
      if(window.scrollY < this.state.currentScrollPos && window.scrollY !== 0){
        this.state.isSticky = true;
      } else {
        this.state.isSticky = false;
      }
      this.setState({ currentScrollPos: window.scrollY});
    }


    const { isSticky } = this.state;
    const { subtitle, title, lname } = this.props;

    return (
      <div className={isSticky ? 'stickyTopbar' : "topBar"}>
        <div>
          {title}
          <sup>{subtitle}</sup>
        </div>
        <ul className='list'>
          <li onClick={() => window.location.replace('/')} >home</li>
          <li onClick={() => window.open('/product', '_blank')}>products</li>
          <li onClick={() => window.location.replace('/shop')}>shop</li>
          <li>{lname}</li>
        </ul>
      </div>
    )
  }
}