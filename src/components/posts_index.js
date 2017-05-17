/**
 * Created by scribbleLive on 5/17/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div> Posty! </div>
    }
}

export default connect(null,  { fetchPosts })(PostsIndex);