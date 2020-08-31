import { StyleSheet } from 'react-native';
import { setValueBasedOnHeight, WIDTH, setValueBasedOnWidth } from '../../utils/deviceDimensions';

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth:setValueBasedOnHeight(1),
        borderBottomColor:'#D3D3D3',
    },
    score:{
        flexDirection:'row',
        backgroundColor:'#0276db',
        paddingHorizontal:setValueBasedOnHeight(10),
        paddingVertical:setValueBasedOnWidth(5),
        borderRadius:setValueBasedOnHeight(8),
        marginRight:setValueBasedOnWidth(10)
    },
    scoreContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:setValueBasedOnHeight(10)
    },
    scoreText:{
        color:'white',
        fontSize:setValueBasedOnHeight(14),
        fontWeight:'bold'
    },
    scoreTextLite:{
        color:'white',
        fontSize:setValueBasedOnHeight(14),
    },
    title:{
        color:'black',
        fontSize:setValueBasedOnHeight(16),
        fontWeight:'bold',
        marginTop:setValueBasedOnHeight(5)
    },

    description:{
        color:'#213f5a',
        fontSize:setValueBasedOnHeight(16),
        marginTop:setValueBasedOnHeight(5)
    },
    name:{
        color:'black',
        fontSize:setValueBasedOnHeight(14),
        fontWeight:'bold',
        marginTop:setValueBasedOnHeight(5)
    },
    date:{
        color:'grey',
        fontSize:setValueBasedOnHeight(14),
        marginBottom:setValueBasedOnHeight(15)
    },
    feedbackContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:setValueBasedOnWidth(5)
    },
    feedbackText:{
        color:'#213f5a',
        fontSize:setValueBasedOnHeight(16),
        marginLeft:setValueBasedOnWidth(5)
    },

})

export default styles