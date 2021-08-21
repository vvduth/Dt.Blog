import React, { useReducer } from 'react';
import createDataContext from './createDataContext';



const blogReducer = (state, action) => {
    switch(action.type){
        case 'add_blogpost':
            return [...state, {title :`Blog Post #${state.length + 1}`}];
        default:
            return state;
    }

};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: 'add_blogpost'});
    }
};




//children is a component in our custom component, in this file the custom is blogcontent.provider
// children can be used as paremeters
// generally, throw in a value props and the child get the value prop

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost},
    []);