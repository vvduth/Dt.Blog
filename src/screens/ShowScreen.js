import React, {useContext} from 'react';
import { TextBase, View, StyleSheet,Text } from 'react-native';
import {Context} from '../context/BlogContext'

const ShowScreen = ({navigation}) => {
    //the id we parse for each blog post is not as a prop yet so we can not use props.id or {id}
    //it is located in the navigation prop, specificlly navigation.id
    //navigation.getParam('id');
    //get param is an avaiable fuction in navigation, we have to parse the exactly same key value of
    //the navigate funtion in indexScreen
    const {state} = useContext(Context) ;

    const blogPost  = state.find(blogPost => blogPost.id === navigation.getParam('id'));
    return <View>
                <Text>
                    {blogPost.title}
                    {blogPost.content}
                </Text>
           </View>
};

const styles = StyleSheet.create({});

export default ShowScreen ;