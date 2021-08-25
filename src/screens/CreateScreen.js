import React, {useContext, useState} from 'react';
import {  StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}) => {
    //the id we parse for each blog post is not as a prop yet so we can not use props.id or {id}
    //it is located in the navigation prop, specificlly navigation.id
    //navigation.getParam('id');
    //get param is an avaiable fuction in navigation, we have to parse the exactly same key value of
    //the navigate funtion in indexScreen

    
    const {addBlogPost} = useContext(Context);

    return <BlogPostForm/>

   
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18 ,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20 ,
        marginBottom: 20,
        marginLeft: 5
    }
});

export default CreateScreen ;