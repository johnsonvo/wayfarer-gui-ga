import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <h4>Profile Page</h4>
        <div className="row">
          <div className="col s12 m7">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">User Name</span>
                <p>Name</p>
                <p>Username</p>
                <p>Email</p>
                <p>Favorite City</p>
                <p>Email</p>
                <p>Email</p>
              </div>
              <ul class="collection with-header">
                <li class="collection-header"><h4>Posts</h4></li>
                <li class="collection-item">Post</li>
                <li class="collection-item">Post</li>
                <li class="collection-item">Post</li>
                <li class="collection-item">Post</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;