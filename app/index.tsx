import React from "react";
import { Text, View } from "react-native";
import { Avatar, Input, Button, Icon } from '@rneui/themed';
import { Link, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar
        size={96}
        rounded
        icon={{ name: "user", type: "font-awesome" }}
        containerStyle={{ backgroundColor: "#000000" }}
      />
      <View>
        <View>
          <Text>Email</Text>
          <Input
          />
        </View>
        <View>
          <Text>Senha</Text>
          <Input
          />
        </View>

        <View>
          <Link href={'/home'}
          >
            <Button
              title="Logar"
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            /></Link>

          <Link
            href={'/register'}>
            <Button
              title="Cadastre-se"
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            /></Link>

        </View>
      </View>

    </View>
  );
}
