import { Alert, Button, StyleSheet,Text, View } from "react-native";

function Index() {
    function handleSubmit(){
        const name = "Guilherme";
        Alert.alert(`Olá, ${name}`);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hello Word</Text>
            <Button title="Enviar" onPress={handleSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color:"blue", 
        fontSize: 26,
        fontWeight:"bold",
    },
    container:{
        flex:1,
        padding: 32,
        justifyContent: "center",
        alignItems: "center",
        gap: 12
    }
});

export default Index;