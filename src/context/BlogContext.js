import React from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';



const blogReducer = (state, action) => {
    switch(action.type){
        case 'get_blogposts':
            return action.payload; 
            //we dont need the ... because after fetch the return objs is all the blogposy
        case 'delete_blogpost':
            return state.filter((blogPost)=>(blogPost.id !== action.payload));
            //state is array, filter is a function that put every elements which satisfy the condition in a new one 
            // in this case, if the blog post id is not equal to the payload, return true and add it to new state


        /*case 'add_blogpost':
            return [...state,{ 
                id: Math.floor(Math.random()*99999), //random id for each blog box
                title :action.payload.title,
                content: action.payload.content
            }
        ];*/
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

const getBlogPosts = dispatch => {
    return async () => {
         const response = await jsonServer.get('/blogposts');
         //response.data === [{},{},{}] every object is one blogpost
         dispatch({type: 'get_blogposts', payload: response.data});
    };
};

const addBlogPost = (dispatch) => {
    return async (title, content , callback) => {
            await jsonServer.post('/blogposts', {title, content});
            //dispatch({type: 'add_blogpost', payload: { title ,  content}});
            if(callback){
                callback();
            }

    };
};

const deleteBlogPost = dispatch => {
    return async id => { //can receive id as an argument
        
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: 'delete_blogpost', payload: id});
        
    };
}

const editBlogPost = dispatch => {
    return async (id ,title, content, callback) => {

            await jsonServer.put(`/blogposts/${id}`,{title,content});
            dispatch({type: 'edit_blogpost',payload: {id :id , title: title, content: content}
        });
        if (callback){
            callback(); //if callback exist, call callback
        }
    };
};



//children is a component in our custom component, in this file the custom is blogcontent.provider
// children can be used as paremeters
// generally, throw in a value props and the child get the value prop

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost,getBlogPosts},
    []
    );

    //gET, POST, PUT, REqest, : 4 mainmedthod in axios