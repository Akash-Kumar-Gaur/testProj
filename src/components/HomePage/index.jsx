import React from 'react';
import Form from '../Banner';
import ProductPage from '../ProductPage';
import TopBar from '../Topbar';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fnameHere: 'akash123',
      lnameHere: 'kumar321',
      pageTitle: 'My Banner'
    }
  }

  render() {

    return (
      <div>
        {/* My Homepage */}
        {
          this.state.pageTitle === 'My Banner' ? <TopBar
            title='TestPage'
            subtitle='I&apos;m testing this app'
            fname={this.state.fnameHere}
            lname={this.state.lnameHere}
            onClick={(params) => this.setState({ pageTitle: params })}
          />
            : null
        }
        <div>
          {
            this.state.pageTitle === 'My Banner' ?
              (
                <div>
                  {this.state.pageTitle}
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
              )
              : (this.state.pageTitle === 'Shopping Page' ? <TopBar /> : <ProductPage />)
          }
        </div>
      </div>
    )
  }
}