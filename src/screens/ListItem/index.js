import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import moment from 'moment'
import { getLogoFromChannel } from '../../utils/deviceDimensions'
import { Channels } from '../../utils/Constants'

const ListItem = (props) => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.scoreContainer}>
                <View style={styles.score}>
                    <Text style={styles.scoreText}>
                        {props.score}
                    </Text>
                    <Text style={styles.scoreTextLite}>
                        /5
                    </Text>
                </View>
                {getLogoFromChannel(props.channel)}
            </View>
            <Text style={styles.title}>{props.headline}</Text>
            {props.positiveFeedback && <View style={styles.feedbackContainer}>
                {getLogoFromChannel(Channels.thumbUp)}
                <Text style={styles.feedbackText}>{props.positiveFeedback}</Text>
            </View>}
            {props.negativeFeedback && <View style={styles.feedbackContainer}>
                {getLogoFromChannel(Channels.thumbDown)}
                <Text style={styles.feedbackText}>{props.negativeFeedback}</Text>
            </View>}
            <Text style={styles.description}>{props.comment}</Text>
            <Text style={styles.name}>{props.author}</Text>
            <Text style={styles.date}>Reviewed {moment(props.publishedAt).format("DD MMMM YYYY")}</Text>
        </View>
    )
}

export default ListItem