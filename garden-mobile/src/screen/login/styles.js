import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  img:{
    width: '101%',
    height: '100%'
  },
  
  container:{
    marginTop:60,
    width: 370,
    height: 540,
    color: '#fff',
    borderWidth: 1,
    marginLeft: '3%',
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 15,
    borderRadius: 10
  
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
    marginTop: 9,
    borderColor: '#fff',
    color: '#fff',
    fontSize: 20,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    width: '100%'
  },

  olhoInput:{
    display: 'flex',
    flexDirection: 'row',
    //justifyContent: 'flex-end',
    alignItems: 'center',
    
  },

  iconInput: {
    marginLeft: -25,
    color: '#fff',
    position: 'relative',
    
  },

  links:{
    cursor: 'pointer',
    textAlign: 'center',
    fontSize:15,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default styles;
