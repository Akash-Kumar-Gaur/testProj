import React from 'react';

export default class Form extends React.Component{

  //props
  constructor(props){
    super(props);

    this.state = {
      fname: this.props.fname,
      lname: this.props.lname,
    }
  }

  render(){
    return(
      <div>
        {/* <span>{this.state.fname.length ? 'mobile' : 'first'}</span> */}
        <input 
          onChange={(e) => this.setState({ fname: e.target.value })}
          value={this.state.fname}
        />
        {/* <span>{this.state.lname.length ? 'email' : 'last'}</span> */}
        <input 
          onChange={(e) => this.setState({ lname: e.target.value })}
          value={this.state.lname}
        />
        <button
          onClick={() => {
            console.log('this', this);
            this.props.onClick(this.state.fname, this.state.lname)}
          }
        >
          Submit
        </button>
      </div>
    );
  }
}