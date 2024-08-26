import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        display:"flex",
        paddingTop:12,
        paddingRight:9,
        paddingBottom:12,
        paddingLeft:12,
        alignItems:"center",
        gap:9,
        alignSelf:"center",
        borderRadius: 8,
        borderWidth:1,
        borderColor:"#D9D9D9",
        flexDirection:"row",
        marginLeft:"10%",
        marginRight:"10%",
        width:"90%",
        justifyContent:"space-between",
        padding:12,
        marginBottom:8
    },
    name: {
        color:"#000",
        marginRight:"auto",
        marginLeft:8,
        textDecorationLine:"line-through"
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24
    },
    button: {width: 56, height: 56,borderTopRightRadius: 5, borderBottomRightRadius: 5,
        backgroundColor: '#E23C44', alignItems: 'center', justifyContent: 'center'
    }
})
