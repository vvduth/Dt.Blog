import React from 'react';
import createDataContext from './createDataContext';



const blogReducer = (state, action) => {
    switch(action.type){
        case 'delete_blogpost':
            return state.filter((blogPost)=>(blogPost.id !== action.payload));
            //state is array, filter is a function that put every elements which satisfy the condition in a new one 
            // in this case, if the blog post id is not equal to the payload, return true and add it to new state
        case 'add_blogpost':
            return [...state,{ 
                id: Math.floor(Math.random()*99999), //random id for each blog box
                title :`Blog Post #${state.length + 1}`
            }
        ];
        default:
            return state;
    }

};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: 'add_blogpost'});
    }
};

const deleteBlogPost = dispatch => {
    return (id) => { //can receive id as an argument
        dispatch({type: 'delete_blogpost', payload: id});
    };
}



//children is a component in our custom component, in this file the custom is blogcontent.provider
// children can be used as paremeters
// generally, throw in a value props and the child get the value prop

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost},
    []);