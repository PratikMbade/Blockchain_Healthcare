'use client';
import { contract_abi, contract_address } from '@/contract/contract_instance';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'

const useReg = () => {
   const [isReg,setReg] = useState<boolean>(false);
   const {walletProvider} = useWeb3ModalProvider();
   const{address,isConnected} = useWeb3ModalAccount();
  
   useEffect(()=>{
    const getUserRegStatus = async () =>{
        try {

            if(!address || !isConnected){
                setReg(false)
                return;
            }
          const provider = new ethers.providers.Web3Provider(walletProvider as any);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contract_address,contract_abi,signer);
    
          const Registered = await contract!.isPatientRegistered(address);

          console.log("is user registered",Registered)
          if(Registered){
            setReg(true)
          }  
        } catch (error) {
          console.log('Something went wrong',error)
        }
       }


       getUserRegStatus()
   },[address,isConnected])

   
  return isReg;
}

export default useReg