import React,{useContext, useEffect} from 'react';
import { View, Text, StyleSheet,FlatList,Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import { Feather, AntDesign } from '@expo/vector-icons'; 



const IndexScreen = ({navigation}) => {

    const {state,  deleteBlogPost, getBlogPosts} = useContext(Context);
    //value == value props in blogContext.provider
    //remeber: React cannot render a object data type

    useEffect(() => {
        getBlogPosts();
        // if we only call getBlogPost, the new blogpost after we add will not
        // appear on indexScreen, the new blog post is still there, but not appear
        // because we only call getBlogPost one at the first time the app rendered

        // so we have to call getBlogPost when we navigate back to index screen
        //or when the navigate screen appear
        //to do, we did this
        const listener = navigation.addListener('didFocus',() => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };

    }, []); 
    //use effect is a hook is used for call a bit of code only one time when the app firts rendered
    //use useEffect hook to avoid the endless loop of getBlogPosts
    return ( 

        
    
        <View>
            
            <FlatList
                data= {state}
                keyExtractor = {blogPost => blogPost.title} //this blogPost can be change in any name
                renderItem = {({item}) => {
                
                return (
                <TouchableOpacity onPress = {() => navigation.navigate('Show',{id: item.id}) }>
                    <View  style ={styles.row}>

                        <Text style = {styles.title}>
                            {item.title}
                        </Text>

                        <TouchableOpacity onPress =  {() => deleteBlogPost(item.id)}>
                            <Feather name="trash" size={24} color="black" />
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>);
                }}
            />
        </View>
    

    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: ()=> ( 
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>  
        <AntDesign name="plus" size={24} color="black" />  
        </TouchableOpacity> 
        )
    };
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