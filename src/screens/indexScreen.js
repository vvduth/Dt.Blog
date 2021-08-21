import React,{useContext} from 'react';
import { View, Text, StyleSheet,FlatList,Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'; 



const IndexScreen = () => {

    const {state, addBlogPost, deleteBlogPost} = useContext(Context);
    //value == value props in blogContext.provider
    //remeber: React cannot render a object data type

    return (
        <View>
            <Button title = "Add Post" onPress={() => addBlogPost()}/>
            <FlatList
                data= {state}
                keyExtractor = {blogPost => blogPost.title} //this blogPost can be change in any name
                renderItem = {({item}) => {
                    return <View  style ={styles.row}>
                    <Text style = {styles.title}>{item.title}</Text>
                    <TouchableOpacity onPress =  {() => deleteBlogPost(item.id)}>
                    <Feather name="trash" size={24} color="black" />
                    </TouchableOpacity>
                    </View>
                }}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1 ,
        paddingHorizontal: 10 ,
        borderBottomWidth: 1,
        borderColor: 'gray',

        
    },
    title: {
        fontSize: 18
    }
});

export default IndexScreen ;