'use client'

import { useState, useEffect, FormEvent } from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useAccount, useContractWrite } from "wagmi";
import MyERC20Votes from "../../../../../../blockchain/artifacts/contracts/MyERC20Votes.sol/MyERC20Votes.json";


export default function Delegate({ contractAddress }: { contractAddress: string }) {
    const [delegateAddress, setDelegateAddress] = useState('');
    const { data, isLoading, isSuccess, write } = useContractWrite({
        //@ts-ignore
        address: contractAddress,
        abi: MyERC20Votes.abi,
        functionName: 'delegate',
    })
    const { address, isDisconnected, isConnected } = useAccount()


    function delegate(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        write({
            args: [delegateAddress],
            //@ts-ignore
            from: address,
            // value: parseEther('0.01'),
        })
    }

    return (
        <>
            <Container>
                <Form onSubmit={delegate}>
                    <FormGroup>
                        <FormLabel>Delegate Address</FormLabel>
                        <FormControl type='text' value={delegateAddress} onChange={e => setDelegateAddress(e.target.value)} />
                    </FormGroup>
                    {isDisconnected && "Please connect your wallet"}
                    {isConnected && <Button className='mt-2' type='submit'>Delegate</Button>}
                </Form>
            </Container>
        </>
    );
}
