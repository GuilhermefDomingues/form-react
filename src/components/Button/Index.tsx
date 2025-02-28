import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import styles from "./styles";

type Props = TouchableOpacityProps & {
  label: String;
};

function Button({ label, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.5} {...rest}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

export default Button;
