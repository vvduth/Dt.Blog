import React, {useContext, useState} from 'react';
import { TextInput, View, StyleSheet,Text, Button } from 'react-native';
import {Context} from '../context/BlogContext'

const CreateScreen = ({navigation}) => {
    //the id we parse for each blog post is not as a prop yet so we can not use props.id or {id}
    //it is located in the navigation prop, specificlly navigation.id
    //navigation.getParam('id');
    //get param is an avaiable fuction in navigation, we have to parse the exactly same key value of
    //the navigate funtion in indexScreen

    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const {addBlogPost} = useContext(Context);

    return (<View>
                <Text style = {styles.label}>
                    Enter title: 
                </Text>
                <TextInput style = {styles.input} value={title} onChangeText={(text)=> setTitle(text)} />

                <Text style = {styles.label}>
                    Enter Content: 
                </Text>
                <TextInput style = {styles.input} value={content} onChangeText={(text)=> setContent(text)}/>

                <Button 
                        title="Add to Blog Posts" 
                        onPress={() => {addBlogPost(title,content,()=> {
                            navigation.navigate('Index');
                        });
                    }}
                
                />
           </View>)
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