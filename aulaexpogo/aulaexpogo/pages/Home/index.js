import { useEffect, useState } from "react";

import { View, Text, ScrollView, Image } from "react-native";

import style from "./style";

import api from "../../services/api";

export default Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

  }, []);

  getUsers = async () =>{
    try{
      let response = await api.get("/users");
      setUsers(response.data);
    }catch(error){
      console.log(error)
    }
  }

  return(
    <View style={style.home}>
    <ScrollView style={style.cards}>
    {
      users.map((user, key) => {
        <View key={key} style={style.card}>
        <Image style={style.avatar_url} source={{url: user.avatar_url}}/>
          <Text style={style.login}>{user.login}</Text>
        </View>
      })
    }
    </ScrollView>
    </View>
  )
}