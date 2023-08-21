'use client'

import { useState, useEffect, FormEvent } from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useAccount, useContractWrite } from "wagmi";
import MyERC20Votes from "../../../../../../blockchain/artifacts/contracts/MyERC20Votes.sol/MyERC20Votes.json";


export default function Mint({ contractAddress }: { contractAddress: string }) {
    const [mintAmount, setMintAmount] = useState('0');
    const { data, isLoading, isSuccess, write } = useContractWrite({
        //@ts-ignore
        address: contractAddress,
        abi: MyERC20Votes.abi,
        functionName: 'mint',
    })
    const { address, isDisconnected, isConnected } = useAccount()


    function mint(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        write({
            args: [parseInt(mintAmount)],
            //@ts-ignore
            from: address,
            // value: parseEther('0.01'),
        })
    }

    return (
        <>
            <Container>
                <Form onSubmit={mint}>
                    <FormGroup>
                        <FormLabel>Mint</FormLabel>
                        <FormControl type='text' value={mintAmount} onChange={e => setMintAmount(e.target.value)} />
                    </FormGroup>
                    {isDisconnected && "Please connect your wallet"}
                    {isConnected && <Button className='mt-2' type='submit'>Mint</Button>}
                </Form>
            </Container>
        </>
    );
}
