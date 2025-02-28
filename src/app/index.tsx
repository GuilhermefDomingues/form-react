import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button/index";
import Input from "../components/input";

function Index() {
  function handleSubmit() {
    const name = "Thiago";
    alert(`Olá, ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World</Text>
      <Input label={"Nome"}/>
      <Input label={"Idade"}/>
      <Button label={"Enviar"} onPress={handleSubmit} activeOpacity={1} />
      <Button label={"Continuar"} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 26,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 12,
  },
});

export default Index;
