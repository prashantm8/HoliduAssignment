import React from 'react'
import { background } from '../../assets/index'
import { setValueBasedOnHeight, WIDTH } from '../../utils/deviceDimensions'
import Svg, { Circle, Rect, ClipPath, Image } from 'react-native-svg'
import styles from './styles'

const ClippedSvg = () => {
    return (
        <Svg height={setValueBasedOnHeight(250)} width="100%" style={styles.svg}>
            <ClipPath id="clip">
                <Circle
                    cx={WIDTH / 2}
                    cy={-setValueBasedOnHeight(250)}
                    r={setValueBasedOnHeight(500)}

                />
            </ClipPath>
            <Image
                href={background}
                width={WIDTH}
                height={setValueBasedOnHeight(250)}
                preserveAspectRatio="xMidyMid slice"
                clipPath="url(#clip)"
            />
            <Rect x="0" y="0" width="100%" height="100%" fill='rgba(0,0,0,0.3)' clipPath="url(#clip)" />
        </Svg>
    )
}

export default ClippedSvg