import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import api from '@/api/api';

interface IContacts {
  id: string;
  name: string;
  phone: string
}

export default function HomeScreen() {
  const [data, setData] = useState<IContacts[]>([]);
  const router = useRouter();

  async function getContatcs() {
    try {
      await api.get('/contacts')
        .then((res) => {
          setData(res.data);
        })
        .catch(error => console.error(error));
    } catch (error) {
      console.error("ERRO AO BUSCAR CONTATOS:", error)
    }
  }

  useEffect(() => {
    getContatcs();
  }, [getContatcs])


  const renderItem = ({ item }: { item: IContacts }) => (
    <TouchableOpacity >

      <View style={styles.contactCard}>
        <Link
          href={{
            pathname: '/updateUser',
            params: { id: item.id, name: item.name, phone: item.phone }
          }}>
          <View style={styles.contactIcon}>
            <Ionicons name="person-circle" size={48} color="#1976D2" />
          </View>
          <View>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactPhone}>{item.phone}</Text>
          </View>
        </Link>
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
        data={data}
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
