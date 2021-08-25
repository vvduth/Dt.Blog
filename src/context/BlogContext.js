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
                title :action.payload.title,
                content: action.payload.content
            }
        ];
        case 'edit_blogpost' :
            return state.map((blogPost)=> { 
                //map function will go throught all the components in the state, return a compo one by one
                //after that do the code below
                if(blogPost.id === action.payload.id){
                    return action.payload;
                } else {
                    return blogPost ;
                }
            });
        default:
            return state;
    }

};

const addBlogPost = (dispatch) => {
    return  (title, content , callback) => {

            dispatch({type: 'add_blogpost', payload: { title ,  content}});
            callback();

    };
};

const deleteBlogPost = dispatch => {
    return (id) => { //can receive id as an argument
        dispatch({type: 'delete_blogpost', payload: id});
    };
}

const editBlogPost = dispatch => {
    return(id ,title, content, callback) => {
            dispatch({type: 'edit_blogpost',payload: {id :id , title: title, content: content}
        });
        if (callback){
            callback(); //if callback exist, call callback
        }
    };
}



//children is a component in our custom component, in this file the custom is blogcontent.provider
// children can be used as paremeters
// generally, throw in a value props and the child get the value prop

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost},
    [{title: 'TEST POST',content: 'TEST CONTENT', id: 1}]
    );