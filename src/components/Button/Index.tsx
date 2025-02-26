import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";


type Props ={
    label: String;
    onPress: () => void;
};

function Button({label, onPress}:Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

export default Button;
