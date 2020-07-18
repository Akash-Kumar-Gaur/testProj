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
          <li>home</li>
          <li>products</li>
          <li>{this.props.fname}</li>
          <li>{this.props.lname}</li>
        </ul>
      </div>
    )
  }
}