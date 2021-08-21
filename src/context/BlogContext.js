import React, { useReducer } from 'react';

const BlogContext  = React.createContext();

const blogReducer = (state, action) => {
    switch(action.type){
        case 'add_blogpost':
            return [...state, {title :`Blog Post #${state.length + 1}`}];
        default:
            return state;
    }

};

export const BlogProvider = ({children}) => { //props.children

    const[blogPosts, dispatch] =  useReducer(blogReducer,[]);

    const addBlogPost = () => {
        dispatch({type: 'add_blogpost'});
    };



    return (
    <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>
    );
};

//children is a component in our custom component, in this file the custom is blogcontent.provider
// children can be used as paremeters
// generally, throw in a value props and the child get the value prop

export default BlogContext;