import React , { useContext} from 'react';
import {  StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm  from '../components/BlogPostForm';

const EditScreen = ({navigation}) => {

    //navigation object has one funtion all pop, it will help us go back to the previous screen after an action
    const id = navigation.getParam('id');

    const {state, editBlogPost} = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id') //go throught all blog post and return true for the id thing 
    );

    

    return  <BlogPostForm 
    initialValues = {{title: blogPost.title, content: blogPost.content}}
    onSubmit={(title,content) => {
        //console.log(title,content);
        //all states are in BlogContext
        editBlogPost(id, title, content, () => navigation.pop());
    }}/>
    ;
};

const styles = StyleSheet.create({});

export default EditScreen ;

