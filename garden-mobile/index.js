import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();

//import NavegacaoBottomTab from './src/screen/cadastro/index';

export default function NavegacaoDrawer(){
    return (
        <NavigationContainer>
            <Drawer.Screen name="cadastrar" component={NavegacaoBottomTab} />
        </NavigationContainer>
    )
}