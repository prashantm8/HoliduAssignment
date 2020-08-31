import { StyleSheet } from 'react-native';
import { setValueBasedOnHeight, WIDTH, setValueBasedOnWidth } from '../../utils/deviceDimensions';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingTop: setValueBasedOnHeight(30),
        paddingLeft: setValueBasedOnWidth(20),
        paddingRight: setValueBasedOnWidth(20)
    },
    backgroundimage: {
        height: setValueBasedOnHeight(200),
        width: WIDTH,
    },
    svg: {
        position: 'absolute',
        zIndex: 1
    },
    idText: {
        color: 'white',
        fontSize: setValueBasedOnHeight(14),
        paddingBottom: setValueBasedOnHeight(5)
    },
    hotelText: {
        color: 'white',
        fontSize: setValueBasedOnHeight(18),
        paddingBottom: setValueBasedOnHeight(20),
        fontWeight: 'bold'
    }

})

export default styles