'use client'

import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

import { Button, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"

//TODO - improve ux
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
      <Container>
        <Row>
          <div>
            <Form onSubmit={navigate}>
              <FormGroup>
                <FormLabel>
                  ERC20Votes Contract address:
                </FormLabel>
                <FormControl type='text' value={contractAddress} onChange={e => setContractAddress(e.target.value)} />
              </FormGroup>
              <Button className='mt-2' type='submit'>Connect</Button>
            </Form>
          </div>
        </Row>
        <Row className='mt-2'>
          <div>
            <Form onSubmit={navigate}>
              <FormGroup>
                <FormLabel>
                  TokenizedBallot Contract address:
                </FormLabel>
                <FormControl type='text' value={contractAddress} onChange={e => setContractAddress(e.target.value)} />
              </FormGroup>
              <Button className='mt-2' type='submit'>Connect</Button>
            </Form>
          </div>
        </Row>
      </Container>
    </main>
  )
}
