import React from 'react';

export default class ProductPage extends React.Component{
  render(){
    return(
      <div>
        My {this.props.pageName} Page
        <br />
        <img src="https://i.pravatar.cc/150" />
      </div>
    )
  }
}