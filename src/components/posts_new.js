/**
 * Created by scribbleLive on 5/18/2017.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    render() {
        return (
            <form>
                <Field
                    name="title"
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
}) (PostsNew);