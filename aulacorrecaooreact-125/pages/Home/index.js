import { useEffect, useState } from "react";

import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

import style from "./style";

import api from "../../services/api";

export default Home = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  getUsers = async () => {
    try{
      let response = await api.get("/users");
      setUsers(response.data);
    }catch(error){
      console.log(error)
    }
  }

  goToProfile = user => {
    navigation.push("Profile", { user })
  }

  return (
    <View style={style.home}>
      <ScrollView style={style.cards}>
        {
          users.map((user, key) => (
            <View key={key} style={style.card}>
              <Image style={style.avatar_url} source={{ uri: user.avatar_url }} />
              <View style={style.information}>
                <Text style={style.login}>{user.login}</Text>
                <TouchableOpacity onPress={() => goToProfile(user)} style={style.button}>
                  <Text style={style.buttonText}>Acessar perfil</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}