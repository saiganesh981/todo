import React from 'react'
import {Button,Stack} from '@mui/material'
const Typo = () => {
  return (
    <div>
      <Stack spacing={2} direction='row'>
      <Button variant="contained" color="error">booking</Button>
      <Button variant="outlined" color="primary">bakery</Button>
      <Button variant="text" color="secondary">payments</Button>
      <Button variant="contained" color="success">upskill</Button>
      <Button variant="contained" color="info">reastaurants</Button>
      </Stack>
    </div>
  )
}

export default Typo



