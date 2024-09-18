import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  img:{
    width: '101%',
    height: '100%'
  },
  
  container:{
    marginTop:60,
    width: 370,
    height: 550,
    color: '#fff',
    borderWidth: 1,
    marginLeft: '5%',
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 15,
  
  },
  
  title:{
    marginTop: 40,
    fontSize: 64,
    color:'#fff', 
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
    
  },
  
  cad: {
    fontSize: 45,
    color:'#fff',
    textAlign:'center',
    marginBottom: 40,
  },

  textForm:{
    color: "#fff",
    
  },

  icon: {
    marginRight: 100,
  },

  inpTex:{
    borderWidth:1,
    marginTop: 25,
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
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default styles;
