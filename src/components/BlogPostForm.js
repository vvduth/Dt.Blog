import React,{useState} from 'react';
import { View, Text, StyleSheet , TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit , initialValues}) => {
    //have to put onSubmit into the param so that the program can realize the fuction is from CreatScreen.js
    const[title, setTitle] = useState(initialValues.title);
    const[content, setContent] = useState(initialValues.content);

    //when we use initial valuse at the first time, it will return undefined 
    //becuz in creatScreen, there is no prop call initial value

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
                title="Save to Blog Posts" 
                onPress = {() => onSubmit(title,content)}
        />
   </View>);
}

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

export default BlogPostForm;