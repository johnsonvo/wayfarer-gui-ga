import React, { Component } from 'react';

class CreatePost extends Component {
  constructor() {
    super()
    this.state = {
      cityName: '',
      title: '',
      content: '',
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="title" type="text" />
                <label for="title">Title</label>
              </div>
              <div className="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea"></textarea>
                <label for="textarea1">Textarea</label>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }



}

export default CreatePost;