import React from "react";
import { Text, View } from "react-native";
import { Avatar, Input, Button, Icon } from '@rneui/themed';

export default function Index() {

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
          />
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
          />
        </View>
      </View>

    </View>
  );
}
