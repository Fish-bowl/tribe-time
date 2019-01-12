import React, { Component } from 'react';
import { 
  Menu,
  Dropdown 
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  state = {
    currentPage: 'Tribe Time'
  }
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
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

  // handleClick = () => {
  //   this.setState({currentPage: this.name})
  // }
  
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item onClick={() => this.setState({currentPage: 'Home'})} name="Tribe Time" />
          </Link>
          <Dropdown item text="Profile" onClick={() => this.setState({ currentPage: 'Profile' })} >
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/profile'>Profile</Dropdown.Item>
                <Dropdown.Item onClick={() => this.setState({currentPage: 'Wallet'})} as={Link} to='/wallet'>Wallet</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          {this.state.currentPage}
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, currentPage: state.currentPage }
};

export default withRouter(connect(mapStateToProps)(NavBar));
