import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  img: {
    width: '101%',
    height: '100%',
    
  },

  container: {
    marginTop: 15,
    width: 370,
    height: 540,
    color: '#fff',
    borderWidth: 1,
    marginLeft: '3%',
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 15,
    borderRadius: 15

  },

  title: {
    marginTop: 35,
    fontSize: 64,
    color: '#fff',
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    

  },

  cad: {
    fontSize: 45,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },



  olhoInput:{
    display: 'flex',
    flexDirection: 'row',
    //justifyContent: 'flex-end',
    alignItems: 'center'
    
  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
  },

  iconInput: {
    marginLeft: -25,
    color: '#fff',
    position: 'relative'
    
  },

  inpTex: {

    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5,
    borderColor: '#fff',
    color: '#fff',
    fontSize: 20,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    width: '100%'
  },

  button: {
    backgroundColor: '#074A05',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  }

});

export default styles;
