'use client'

import { useState, useEffect } from "react";
import { TransactionResponse } from "alchemy-sdk";
import Delegate from "./components/Delegate";
import Mint from "./components/Mint";


export default function ERC20Votes({params}: {params:{contractAddress:string}}) {
	const {contractAddress} = params;



	return (
		<>
			<Delegate contractAddress={contractAddress}/>
			<Mint contractAddress={contractAddress} />
		</>
	);
}
