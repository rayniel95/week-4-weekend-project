'use client'

import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import { FormEvent, FormEventHandler, useState } from 'react'

import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"


//TODO - add as feature to deploy the contracts
export default function Home() {
  const [contractAddress, setContractAddress] = useState('')
  const router = useRouter()
  
  function navigate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push(`/contract/${contractAddress}`)
  }
  return (
    <main>
      <div>
        <Form onSubmit={navigate}>
          <FormGroup>
            <FormLabel>
              Contract address:
            </FormLabel>
            <FormControl type='text' value={contractAddress} onChange={e => setContractAddress(e.target.value)} />
          </FormGroup>
          <Button className='mt-2' type='submit'>Connect</Button>
        </Form>
      </div>
    </main>
  )
}
