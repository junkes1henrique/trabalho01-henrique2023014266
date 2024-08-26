import React, { useState } from "react";
import { StatusBar } from "expo-status-bar"
import { Alert, StyleSheet,Text, TextInput, TouchableOpacity, View, Image, FlatList} from "react-native"
import { Product } from "../Components/Product";

export function Home() {
    const[products, setProducts] = useState<string[]>([])
    const[productName, setProductName] = useState('')

    
    function handleProductAdd() {
      if (products.includes(productName)) {
          return Alert.alert("Produto ja foi cadastrado!", "Ja tem um produto na lista com este nome.");
      }

      setProducts((prevState) => [...prevState, productName]);
      setProductName('');
    }

  function handleProductRemove(name: string) {
    Alert.alert("Remover", `Quer remover o produto ${name}?`, [
            {
              text: 'Sim',
              onPress: () => setProducts(prevState => prevState.filter(product => product != name)) 
            },
            {
              text: 'Não',
              style: 'cancel'
            }
        ]);
    }


  return (
    <View style={styles.container}>
      
      <View style={styles.secaoRoxa}>
        <Text style={styles.title}>Lista de Compras</Text>
        
      </View> 
      
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione um  produto"
          placeholderTextColor="#BDBABA"
          keyboardType="default"
          />
          <TouchableOpacity style={styles.button} onPress={handleProductAdd}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.secaoBranca}>

      <FlatList
       data={products}
       keyExtractor={item => item}
       renderItem={({item}) => (
         <Product name={item} onRemove={() => handleProductRemove(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={products.length <= 0 && styles.List}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>        
          <Image style={styles.image} source={require('../images/ListaCompras.png.png')}/>
          <Text style={styles.emptyMessage}>
          Você ainda não tem produtos na lista de compra{'\n'}
          Adicione produtos e organize sua lista de compras
        </Text>
      </View>
        )}
      />
      
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex:  1,     
      flexDirection: "column"
  },
  secaoRoxa: {
      flex: 2,
      backgroundColor: "#7A4A9E",
      justifyContent: 'center', 
      alignItems: 'center'
  },
  input: {
    flex: 3,
    backgroundColor: "#fff",
    height: 56,
    padding: 16,
    fontSize: 18,
    borderRadius: 5,
    marginRight: 16,
    
  },
  button: {
    backgroundColor: "#31C667",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textButton: {
    color: "#FFF",
    fontSize: 20
  },
  form: {
    justifyContent: "center",
    flexDirection: 'row',
    height: 54,
    paddingLeft: 24,
    paddingRight: 24,
    top: -30
  },
  secaoBranca: {
      flex: 7,
      backgroundColor: "#FFF"
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold"
  },
  emptyContainer: {
    alignItems:"center",
    flex: 1
  },
  emptyMessage: {
    color: '#666',
    textAlign: 'center',
    fontSize: 14,
    
  },
  image:{
    width: 56,
    height: 56,
  },
  List: {
    justifyContent: "center"
  }
})