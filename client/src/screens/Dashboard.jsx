import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { View, Text, SafeAreaView, Platform, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Dashboard() {
    const navigation = useNavigation(); 

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex: 1, marginTop: Platform.OS === "android" && Constants.statusBarHeight}}>
                <View style={{flex: 0.1, backgroundColor:"blue", alignItems: "center", justifyContent: "center"}}>
                    <Text style={{color: "#fff", fontWeight: 800, fontSize: 19}}>Dashboard</Text>
                </View>
                <View style={{flex: 0.9}}>
                    <View style={{flexDirection: "row", padding: 10, width:"100%"}}>
                        <View style={{width: "20%"}}>
                            <Image style={{width: 50, height: 50, borderRadius: 50, marginRight: 10}} source={{uri: "https://imgs.search.brave.com/bHpTjt49BE6IN6GPjmIm4FaNZXFj4xFH3ey8KXtPew0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw"}}/>
                        </View>
                        <View style={{width: "60%", alignSelf:"center"}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>
                                <Text style={{fontWeight: 700, fontSize: 16}}>todd Peterson</Text>
                                <Text style={{color: "gray"}}>Lorem ipsum dolor sit amet.</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: "20%"}}>
                            <Text>2 min ago</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}