import React from 'react';
import './index.css';

export default class TopBar extends React.Component {

  render() {
    return (
      <div className="topBar">
        <div>
          {this.props.title}
          <sup>{this.props.subtitle}</sup>
        </div>
        <ul className='list'>
          <li onClick={() => window.location.replace('/')} >home</li>
          <li onClick={() => window.open('/product', '_blank')}>products</li>
          <li onClick={() => window.location.replace('/shop')}>shop</li>
          <li>{this.props.lname}</li>
        </ul>
      </div>
    )
  }
}