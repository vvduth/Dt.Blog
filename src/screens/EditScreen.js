import React , { useContext} from 'react';
import {  StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm  from '../components/BlogPostForm';

const EditScreen = ({navigation}) => {

    const {state} = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id') //go throught all blog post and return true for the id thing 
    );

    

    return  <BlogPostForm/>
    ;
};

const styles = StyleSheet.create({});

export default EditScreen ;

