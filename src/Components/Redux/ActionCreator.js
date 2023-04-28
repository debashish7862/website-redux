import React from 'react'

import { product } from './ActionType'

export default function ActionCreator(data) {
  return {
    type:product,
    payLoad:data,
  }
}
