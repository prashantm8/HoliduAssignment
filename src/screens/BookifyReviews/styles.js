import { StyleSheet } from 'react-native';
import { setValueBasedOnHeight, WIDTH, setValueBasedOnWidth } from '../../utils/deviceDimensions';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    reviewsContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius:setValueBasedOnWidth(5),
        paddingTop:setValueBasedOnHeight(10),
        paddingLeft:setValueBasedOnWidth(10),
        paddingRight:setValueBasedOnWidth(10)
    },
    reviewText:{
        color:'black',
        fontSize:setValueBasedOnHeight(20),
        marginBottom:setValueBasedOnHeight(10),
        fontWeight:'bold'
    },

    indicatorContainer:{
        position:'absolute',
        left:(WIDTH-60)/2
    }

})

export default styles