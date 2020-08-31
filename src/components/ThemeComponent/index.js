import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import ClippedSvg from '../clippledSvg'


const ThemeComponent = (props) => {
    return (
        <>
            <ClippedSvg/>
            <View style={styles.containerStyle}>  
                <Text style={styles.idText}>
                    ID:{props.id}
                </Text>
                <Text style={styles.hotelText}>
                    {props.hotelName}
                </Text>
                {props.children}
            </View>
        </>


    )
}

export default ThemeComponent