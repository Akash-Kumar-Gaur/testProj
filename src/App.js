import React, { Component } from 'react';
import Homepage from './components/HomePage';
import ProductPage from './components/ProductPage';
import TopBar from './components/Topbar';
// React.Component
// import React, { Component } from 'react;
// Component

// function App() {
//   return (
//     <div className="App">
//       Akash Kumar
//     </div>
//   );
// }
// React, { Component } from 'react;
// Component
//  React.Component

// export default class calcu

// export // export tells what to export
//  default // 

// HEAD -> SubHead -> Everything
// class 
//  TestApp 
//  extends 
//  React.Component {
//   render(){
//     return(
//       <div>Akash TESTAPP</div>
//     );
//   }
// }

// function checkUrl(){
//   window.location.pathname === '/contact';
//   return null;
// }

export default class App extends Component {
  render() {
    const path = window.location.pathname;
    return (
      // <Header />
      // path === '/' ?
        <Homepage />
        // : (
        //   path === '/shop' ?
        //     <div>
        //       <TopBar />
        //       <ProductPage pageName="shop" />
        //     </div>
        //     :
        //     <div>
        //       <TopBar />
        //       <ProductPage pageName='product'/>
        //     </div>
        // )
    )
  }
}


// render(){ } // everything in return is rendered on the screen


// export default App;

// function/class/const
// export default TestApp

// function/const

// export {
//   Test, TestApp
// }
