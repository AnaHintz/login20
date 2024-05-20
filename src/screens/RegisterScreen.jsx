import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    // Verificar se os campos de email, senha e repetir senha estão preenchidos
    if (!email.trim() || !senha.trim() || !repetirSenha.trim()) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    // Verificar se as senhas são iguais
    else if (senha !== repetirSenha) {
      setError("As senhas não estão iguais. Por favor, tente novamente.");
      return;
    }else {
      navigation.navigate("DrawerScreen");
    }
  
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
    
        <Text variant="titleLarge">Página de Registro!</Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TextInput
         activeUnderlineColor="hotpink"
          label={"Email"}
          placeholder={"Digite seu e-mail"}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
         activeUnderlineColor="hotpink"
          label={"Senha"}
          placeholder={"Digite sua Senha"}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry // Para esconder a senha
        />
        <TextInput
         activeUnderlineColor="hotpink"
          label={"Repetir senha"}
          placeholder={"Repita sua senha"}
          value={repetirSenha}
          onChangeText={setRepetirSenha}
          style={styles.esp}
          secureTextEntry 
        />
        <Button mode="contained" onPress={handleRegister} buttonColor="hotpink">
          Fazer Cadastro
        </Button>
      </View>
    </View>
  );
}
