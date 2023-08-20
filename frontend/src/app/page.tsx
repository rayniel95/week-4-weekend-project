'use client'

import 'bootstrap/dist/css/bootstrap.css'

import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"


//TODO - add as feature to deploy the contracts
export default function Home() {
  return (
    <main>
      <div>
        <Form>
          <FormGroup>
            <FormLabel>
              Contract address:
            </FormLabel>
            <FormControl type='text' />
          </FormGroup>
          <Button className='mt-2' type='submit'>Connect</Button>
        </Form>
      </div>
    </main>
  )
}
