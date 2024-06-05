// 'use client';
// import { contract_abi, contract_address } from '@/contract/contract_instance';
// import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
// import { ethers } from 'ethers';
// import React, { useState } from 'react'

// const useReg = () => {
//    const [isReg,setReg] = useState<boolean>(false);
//    const {walletProvider} = useWeb3ModalProvider();
//    const{address,isConnected} = useWeb3ModalAccount();
  
//    const getUserRegStatus = async () =>{
//     try {
//       const provider = new ethers.providers.Web3Provider(walletProvider as any);
//       const signer = provider.getSigner();
//       const contract = new ethers.Contract(contract_address,contract_abi,signer);



//     } catch (error) {
      
//     }
//    }

   
//   return 
// }

// // export default useReg