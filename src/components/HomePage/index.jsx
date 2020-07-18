import React from 'react';
import Form from '../Banner';
import TopBar from '../Topbar';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fnameHere: 'akash123',
      lnameHere: 'kumar321'
    }
  }

  render() {
    return (
      <div>
        {/* My Homepage */}
        <TopBar
          title='TestPage'
          subtitle='I&apos;m testing this app'
          fname={this.state.fnameHere}
          lname={this.state.lnameHere}
        />
        <div>
          MY Banner
          <Form
            fname={this.state.fnameHere}
            lname={this.state.lnameHere}
            onClick={(fname, lname) => {
              this.setState({
                fnameHere: fname,
                lnameHere: lname
              })
            }} />
        </div>
      </div>
    )
  }
}