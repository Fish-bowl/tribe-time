import React from 'react'
import {
  Segment,
  Header,
  Grid,
} from 'semantic-ui-react'

import UserFeed from './UserFeed'

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>
          Profile
        </Header>
        <Segment inverted>
          <UserFeed />
        </Segment>
      </div>
    )
  }
}

export default Profile
