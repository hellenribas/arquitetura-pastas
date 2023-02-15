import React from 'react'
import { Button } from '../../styles/Global.css'
import { fetchAPI } from '../../utils/fetch'

export default function Forms() {
 const handleClick = () => {
  fetchAPI()
 }
  return (
    <form>
      <input type="text" />
      <input type="text" />
      <button></button>
    </form>
  )
}
