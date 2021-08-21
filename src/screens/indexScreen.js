import React,{useContext} from 'react';
import { View, Text, StyleSheet,FlatList,Button } from 'react-native';
import BlogContext from '../context/BlogContext';


const IndexScreen = () => {

    const {data, addBlogPost} = useContext(BlogContext);
    //value == value props in blogContext.provider
    //remeber: React cannot render a object data type

    return (
        <View>
            <Text>Index Screen</Text>
            <Button title = "Add Post" onPress={() => addBlogPost()}/>
            <FlatList
                data= {data}
                keyExtractor = {blogPost => blogPost.title} //this blogPost can be change in any name
                renderItem = {({item}) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>

    );
};

const styles = StyleSheet.create({});

export default IndexScreen ;