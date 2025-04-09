import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

const contacts = [
  { id: '1', name: 'Marcos Andrade', phone: '81 988553424' },
  { id: '2', name: 'Patrícia Tavares', phone: '81 998765332' },
  { id: '3', name: 'Rodrigo Antunes', phone: '81 987765525' },
];

export default function HomeScreen() {
  const router = useRouter();
  const renderItem = ({ item }: { item: { id: string, name: string, phone: string } }) => (
    <TouchableOpacity onPress={() => router.navigate('/updateUser', { id: item.id})}>
          <View style={styles.contactCard}>
      <View style={styles.contactIcon}>
        <Ionicons name="person-circle" size={48} color="#1976D2" />
      </View>
      <View>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactPhone}>{item.phone}</Text>
      </View>
    </View>
    </TouchableOpacity>

  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista de Contatos</Text>
          <TouchableOpacity style={styles.addButton} onPress={() => router.navigate('/userRegister')}>
            <Ionicons name="add-circle" size={32} color="white" />
          </TouchableOpacity>

      </View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1976D2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    padding: 4,
  },
  listContent: {
    paddingVertical: 8,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  contactIcon: {
    marginRight: 12,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 16,
    color: '#555',
  },
});
