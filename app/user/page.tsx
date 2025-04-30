'use client';

import React from 'react'
import Single from '../components/Single'
import {  singleUser } from '../data'

function page() {
  return (
    <div>
        <Single {...singleUser} />
    </div>
  )
}

export default page