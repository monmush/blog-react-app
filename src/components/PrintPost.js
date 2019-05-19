import React, {Component} from 'react'
import PostContext from '../context/PostContext';

class PrintPost extends Component {

  render() {

    return (
      <PostContext.Consumer>
        {context => (
          <div>
            <ul>
              {context
                .posts
                .map(post => {
                  return <div className="row">
                    <div className="col s12 m6">
                      <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                          <a href="#" className="card-title">{post.title}</a>
                          <p>{post.body}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                })}
            </ul>
          </div>

        )
}
      </PostContext.Consumer>
    )

  }
}
export default PrintPost;
