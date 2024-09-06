import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  img:{
    width: '101%',
    height: '100%'
  },
  
  container:{
    marginTop:40,
    width: 370,
    height: 590,
    color: '#fff',
    borderWidth: 1,
    marginLeft: '5%',
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 15,
  
  },
  
  title:{
    marginTop: 35,
    fontSize: 64,
    color:'#01D13A', 
    alignContent: 'center',
    textAlign: 'center',
    
  },
  
  cad: {
    fontSize: 45,
    color:'#fff',
    textAlign:'center',
    marginBottom: 20,
  },

  textForm:{
    color: "#fff",
    
  },

  icon: {
    marginRight: 100,
  },

  inpTex:{
    borderWidth:1,
    marginTop: 10,
    borderColor: '#fff',
    color: '#fff',
    fontSize: 20,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },

  links:{
    textAlign: 'center',
    fontSize:15,
    color: '#fff',
    marginBottom: 20  
  },
});

export default styles;
