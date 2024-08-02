import { contract_abi, contract_address } from '@/contract/contract_instance';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'

const UserInfo = () => {

  const {walletProvider} = useWeb3ModalProvider()
  const {address} = useWeb3ModalAccount()
  const [patientData, setPatientData] = useState<any>('');


  const getPatientDetailas = async ()=>{
    try {
        const provider = new ethers.providers.Web3Provider(walletProvider as any);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contract_address,contract_abi,signer);


      const patientData = await contract!.getRecord(address)
      console.log("patient data",patientData)

      const extractedData = {
        timestamp: patientData[0].toNumber(),
        name: patientData[1],
        age: patientData[2].toNumber(),
        gender: patientData[3],
        bloodType: patientData[4],
        allergies: patientData[5],
        diagnosis: patientData[6],
        treatment: patientData[7]
    };

    console.log("patient data", extractedData);
    setPatientData(extractedData!)


    //   console.log("formatted",formatted)

    } catch (error) {
       console.log("Something went wrong in getPatient ",error)
    }

  
}


useEffect(()=>{
  getPatientDetailas()
},[])
  return (
    <div>
        <div>
            <p>Name: {patientData.name}</p>
            <p>Age: {patientData.age}</p>
            <p>Blood Group: {patientData.bloodType}</p>
            <p>Insurance Status: InActive</p>
        </div>
    </div>
  )
}

export default UserInfo