import { React } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Start() {
    const navigation = useNavigation();

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image
                        source={require("../../assets/icons/logo3.png")} 
                    />
                    <Text>Vamos transformar sua vida em um jogo</Text>
                </View>
            </ScrollView>
        </View>
    );
}