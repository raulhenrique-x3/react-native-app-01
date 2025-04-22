import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import api from '@/api/api';

export default function UpdateUser() {
  const router = useRouter();
  const { id, name: initialName, phone: initialPhone } = useLocalSearchParams();

  const [name, setName] = useState(String(initialName || ''));
  const [telefone, setTelefone] = useState(String(initialPhone || ''));

  const handleSave = async () => {
    if (!name || !telefone) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      const response = await api.put(`/contacts/${id}`, {
        name,
        phone: telefone,
      });

      console.log('Contato atualizado:', response.data);
      Alert.alert('Sucesso', 'Contato atualizado com sucesso!');
      router.back();
    } catch (error) {
      console.error('Erro ao atualizar contato:', error);
      Alert.alert('Erro', 'Não foi possível atualizar o contato.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={32} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Editar Contato</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar Alterações</Text>
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
