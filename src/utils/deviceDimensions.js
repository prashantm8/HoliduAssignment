import React from 'react'
import { Dimensions } from 'react-native';
import HOLIDU from '../assets/HOLIDU'
import AIRBNB from '../assets/AIRBNB'
import BOOKINGCOM from '../assets/BOOKINGCOM'
import ThumbUP from '../assets/thumb-up'
import ThumbDown from '../assets/thumb-down'
import { Channels } from './Constants';



export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const REFERENCE_WIDTH = 360;
export const REFERENCE_HEIGHT = 640;

export const setValueBasedOnWidth = (dp) => {
  if (dp) {
    return WIDTH * dp / REFERENCE_WIDTH
  }
  return dp
}

export const setValueBasedOnHeight = (dp) => {
  if (dp) {
    return HEIGHT * dp / REFERENCE_HEIGHT
  }
  return dp
}

export const getLogoFromChannel = (channel) => {
  switch(channel) {
    case Channels.airbnb:
      return <AIRBNB/>
    case Channels.bookingCom:
      return <BOOKINGCOM/>
    case Channels.holidu:
      return <HOLIDU/>
    case Channels.thumbUp:
      return <ThumbUP/>
    case Channels.thumbDown:
      return <ThumbDown/>
    default:
      return <HOLIDU/>
  }
}

