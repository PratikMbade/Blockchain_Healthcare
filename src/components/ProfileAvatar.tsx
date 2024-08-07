'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import UserInfo from './UserInfo';
import { BigNumber, ethers } from 'ethers';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
import { contract_abi, contract_address } from '@/contract/contract_instance';

const ProfileAvatar = () => {
    const {walletProvider} = useWeb3ModalProvider()
    const {address} = useWeb3ModalAccount()
    const [patientData, setPatientData] = useState<any>('');



    const copyToClipboard = (text: string) => {
        try {
            navigator.clipboard.writeText(text);
            alert("Copied");
        } catch (error) {
            console.log(error);
        }
    };

  
   
  return (
    <>
    <div className=" flex flex-col items-center justify-center  w-auto  h-auto">
        <Image src='/male_avatar.jpg' alt='avatar img' width={300} height={300} loading='lazy' className='rounded-full'/>
    </div>

    <div
        onClick={() =>
            copyToClipboard(``)
        }
        className="flex cursor-pointer items-center justify-center gap-x-3 w-auto lg:w-full bg-blue-500 rounded-md px-[20%] sm:px-28 md:px-16 py-1 mt-2"
    >
        <p>Copy Patient Address </p>
        <span>
            <FaRegCopy />
        </span>
    </div>
    <div className="pt-5 lg:w-full">
        <UserInfo/>
    </div>
</>
  )
}

export default ProfileAvatar