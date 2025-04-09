import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function UpdateUser() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSave = () => {
    console.log({ name, email, telefone });
    router.back(); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={32} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Usuário</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>nome</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />


        <Text style={styles.label}>email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

        <Text style={styles.label}>telefone</Text>
        <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} secureTextEntry />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Alterar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.removeButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#1976D2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  saveButton: {
    backgroundColor: '#1976D2',
    marginTop: 30,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 4,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#FF0000',
    marginTop: 30,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 4,
  },
});
