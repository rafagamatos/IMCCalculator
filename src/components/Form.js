import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native";

import ResultIMC from "./ResultIMC";

export default function Formulario() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [imc, setImc] = useState(null);
  const [mensagemImc, setMensagemImc] = useState(
    "Digite os dados de peso e altura!!!"
  );
  const [textoDoBotao, setTextoDoBotao] = useState("Calcular");

  function CalcularIMC() {
    return setImc((peso / (altura * altura)).toFixed(2));
  }

  function ValidarIMC() {
    if (altura != null && peso != null) {
      CalcularIMC();
      setMensagemImc("Seu imc é:");
      setTextoDoBotao("Calcular novamente");
      setAltura(null);
      setPeso(null);
      return;
    }
    setImc(null);
    setTextoDoBotao("Calcular novamente");
    setMensagemImc("Preencha peso e altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setAltura}
          value={altura}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        ></TextInput>

        <Text style={styles.formLabel}>Peso: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPeso}
          value={peso}
          placeholder="Ex. 75"
          keyboardType="numeric"
        ></TextInput>

        <ResultIMC ResultIMC={imc} messageResultIMC={mensagemImc} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#ffffff",
    alignItems: "center",
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: "100%",
    height: "100%",
    marginTop: 30,
    padding: 10,
  },
  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
});
