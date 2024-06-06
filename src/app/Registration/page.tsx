'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ethers } from 'ethers';
import contract_Abi from '@/contract/contract_abi.json';
import { useWeb3ModalAccount } from '@web3modal/ethers5/react';


export const contract_address = "0xa224EcFf7b64bC3b81417e4af18cbDeC14da5801";

const Page = () => {
    const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    bloodType: '',
    allergies: '',
    diagnosis: '',
    treatment: ''
  });

  const router = useRouter();
  const {address} = useWeb3ModalAccount()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (typeof window !== "undefined" && window.ethereum) {
    try {
      //@ts-ignore
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []); // Request access to the user's MetaMask accounts
      const signer = provider.getSigner();

      const contract = new ethers.Contract(contract_address, contract_Abi, signer);

      const tx = await contract.addRecord(
        // ethers.constants.AddressZero,  // Replace with the patient's address
        address,
        formData.name,
        parseInt(formData.age),
        formData.gender,
        formData.bloodType,
        formData.allergies,
        formData.diagnosis,
        formData.treatment
      );
      console.log('tx',tx)

      await tx.wait();

      router.push('/newpage');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  } else {
    console.error('Ethereum object not found');
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-900 overflow-y-auto mt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Personal Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="form-group">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 p-2 text-black block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 p-2 text-black block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700">Blood Type</label>
            <input
              type="text"
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="mt-1 p-2 text-black block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="form-group">
            <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">Allergies</label>
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="mt-1 p-2 text-black block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="form-group">
            <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700">Diagnosis</label>
            <input
              type="text"
              name="diagnosis"
              value={formData.diagnosis}
              onChange={handleChange}
              className="mt-1 p-2 text-black block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="form-group">
            <label htmlFor="treatment" className="block text-sm font-medium text-gray-700">Treatment</label>
            <input
              type="text"
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              className="mt-1 p-2 text-black block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
