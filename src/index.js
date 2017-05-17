import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PostsIndex from './components/posts_index';
import promise from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';
const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
    render() {
        return <div> Hello! </div>
    }
}

class Goodbye extends React.Component {
    render() {
        return <div> Goodbye! </div>
    }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex}/>
        <Route path="/posts/:id" component={PostsIndex}/>
        <Route path="/posts/new" component={PostsIndex}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
