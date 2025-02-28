import { Text, TextInput, TextInputProps } from "react-native";
import styles from "./styles";
import React from "react";


type Props = TextInputProps & {
    label: String;
};

function Input({ label, ...rest }:Props) {
    return(
    <>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} {...rest} />
    </>
    );
}


export default Input;