import { TextInput, TextInputProps } from "react-native";
import styles from "./styles";

function Input({ ...rest }:TextInputProps) {
    return( <TextInput style={styles.input} {...rest} />
)}

export default Input;