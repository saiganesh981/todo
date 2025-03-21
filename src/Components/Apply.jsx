import React from 'react'
import {Button, Stack} from '@mui/material'
const Apply = () => {
  return (
    <>

    <Stack direction='row' spacing={2} >
      <Button variant="contained" color='success'>movies</Button>
      <Button variant="outlined" color='secondary'>social media</Button>
      <Button variant="contained" color='inherit'>popcorn</Button>
      <Button variant="contained" color='primary'>Restaurant</Button>
      </Stack>
      </>  
  )
}

export default Apply
