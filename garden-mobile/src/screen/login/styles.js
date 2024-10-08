import { StyleSheet } from 'react-native';

// Definindo constantes para cores e tamanhos
const colors = {
  white: '#fff',
  semiTransparentWhite: 'rgba(255,255,255,0.3)',
};

const sizes = {
  imgWidth: '101%',
  containerWidth: 370,
  containerHeight: 540,
  titleFontSize: 64,
  cadFontSize: 45,
  inputFontSize: 20,
  linkFontSize: 15,
};

const styles = StyleSheet.create({
  img: {
    width: sizes.imgWidth,
    height: '100%',
  },
  container: {
    marginTop: 60,
    width: sizes.containerWidth,
    height: sizes.containerHeight,
    borderWidth: 1,
    marginLeft: '3%',
    borderColor: colors.white,
    backgroundColor: colors.semiTransparentWhite,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    marginTop: 40,
    fontSize: sizes.titleFontSize,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cad: {
    fontSize: sizes.cadFontSize,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 40,
  },
  textForm: {
    color: colors.white,
  },
  icon: {
    marginRight: 100,
  },
  inpTex: {
    borderWidth: 1,
    marginTop: 9,
    borderColor: colors.white,
    color: colors.white,
    fontSize: sizes.inputFontSize,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    width: '100%',
  },
  olhoInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconInput: {
    marginLeft: -25,
    color: colors.white,
    position: 'relative',
  },
  links: {
    textAlign: 'center',
    fontSize: sizes.linkFontSize,
    color: colors.white,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default styles;
