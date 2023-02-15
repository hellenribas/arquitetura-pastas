import React from 'react'
import { Button } from '../../styles/Global.css'
import { fetchAPI } from '../../utils/fetch'

export default function Forms() {
  
  const handleClick = () {
    fetchAPI()
  }
  return (
    <div>
      <Button />
    </div>
  )
}
