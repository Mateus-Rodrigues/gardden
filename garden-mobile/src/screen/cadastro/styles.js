import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  img: {
    width: '101%',
    height: '100%',
    
  },

  container: {
    marginTop: 40,
    width: 370,
    height: 590,
    color: '#fff',
    borderWidth: 1,
    marginLeft: '5%',
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 15,

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

  textForm: {
    color: "#fff",

  },

  icon: {
    marginRight: 10,
    color: '#fff',
  },

  icoUser: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inpTex: {

    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    borderColor: '#fff',
    color: '#fff',
    fontSize: 20,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    fontFamily: 'Raleway.tff'
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
