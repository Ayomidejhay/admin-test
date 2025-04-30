'use client";'

import React from 'react'
import { singleProduct } from '../../data'
import Single from '../../components/Single'

function page() {
  return (
    <div>
        <Single {...singleProduct}/>
    </div>
  )
}

export default page