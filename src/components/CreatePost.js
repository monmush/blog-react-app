import React, {Component} from 'react'
import PostContext from '../context/PostContext';
import Post from '../container/Post';

class CreatePost extends Component {
  static contextType = PostContext;

  state = {
    post:{
      title:'',
      body:''
    },
    message: ''
  }

  titleHandler = (e) => {
    this.setState({post: {...this.state.post,title: e.target.value}})
    console.log(this.state)
  }

  bodyHandler = (e) => {
    this.setState({post: {...this.state.post,body: e.target.value}})

  }

  submitHandler = (e) => {
    e.preventDefault();
    this.context.addPost(this.state.post);
    this.setState({post: {...this.state.post,body: '',title:''}})
    this.setState({message: 'Your post is succesfully submitted!'})
  }

  render() {
    return (
        <div className="row">
          <form className="col s12 m8 l8" onSubmit={this.submitHandler}>
            <div class="row">
              <div class="input-field col s12 m8 l8">
                <input placeholder="titile" type="text" value = {this.state.post.title} onChange = {this.titleHandler} class="validate"/>
              </div>
              <div class="input-field col s12 m8 l8">
                <textarea id="textarea1" class="materialize-textarea" placeholder="body" value = {this.state.post.body} onChange = {this.bodyHandler}></textarea>
              </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            {this.state.message}
          </form>
        </div>
    );
  }
}

export default CreatePost;
