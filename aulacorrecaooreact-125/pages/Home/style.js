import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
   home: { flex: 1 },
   cards: { paddingHorizontal: 10 },
   card: {
    width: '100%',
    height: 112,
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 25,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  avatar_url: {
    width: 100,
    height: 100,
    borderRadius: 20,
    objectFit: 'contain',
    margin: 0
  },
  information: { padding: 10 },
  login: { fontWeight: 700, textAlign: 'center' }
});