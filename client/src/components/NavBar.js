import React, { Component } from 'react';
import { 
  Menu,
  Dropdown 
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  state = {}

  mainNavs = () => {
    const {activeItem} = this.state

    return (
      <Menu.Menu>
        <Menu.Item active={activeItem === 'Home'} as={Link} to='/' name='Home' />
        <Menu.Item active={activeItem === 'Profile'} as={Link} to='/profile' name='Profile' />
      </Menu.Menu>
    )
  }

  dropdownNavs = () => {
    return (
      <Menu.Menu>
        <Dropdown item icon='settings'>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => this.setState({ currentPage: 'Profile' })}
              as={Link}
              to='/profile'
            >
              Profile
                </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.setState({ currentPage: 'Wallet' })}
              as={Link}
              to='/wallet'
            >
              Wallet
                </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    )
  }

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          {this.dropdownNavs()}
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position="right">
        <Link to="/register">
          <Menu.Item name="Register" />
        </Link>
        <Link to="/login">
          <Menu.Item name="Login" />
        </Link>
      </Menu.Menu>
    );
  }

  handleItemClick = (e, {name}) => this.setState({ activeItem: name})

  // handleClick = () => {
  //   this.setState({currentPage: this.name})
  // }\

  render() {
    const {activeItem} = this.state
    return (
      <div>
        <Menu attached='bottom' stackable tabular>
          {this.mainNavs()}

          {this.rightNavs()}
        </Menu>
      </div>
    )
  }
}
  
//   render() {
//     return (
//       <div>
//         <Menu tabular style={{display: 'flex', }}>
//           <Link to="/">
//             <Menu.Item onClick={() => this.setState({currentPage: 'Home'})} name="Tribe Time" />
//           </Link>
//           <Dropdown item text="Profile" >
//               <Dropdown.Menu>
                // <Dropdown.Item 
                //   onClick={() => this.setState({ currentPage: 'Profile' })} 
                //   as={Link} 
                //   to='/profile'
                // >
                //   Profile
                // </Dropdown.Item>
                // <Dropdown.Item 
                //   onClick={() => this.setState({currentPage: 'Wallet'})} 
                //   as={Link} 
                //   to='/wallet'
                // >
                //   Wallet
                // </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//             <Menu.Header as='h1'>
//               {this.state.currentPage}
//             </Menu.Header>
         
//           { this.rightNavs() }
//         </Menu>
//       </div>
//     );
//   }
// }

const mapStateToProps = state => {
  return { user: state.user, currentPage: state.currentPage }
};

export default withRouter(connect(mapStateToProps)(NavBar));
