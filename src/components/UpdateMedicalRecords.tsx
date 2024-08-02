"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// Adding Textarea component for larger text inputs
import { cn } from "@/utils/cn";
import { ethers } from "ethers";
import { contract_abi, contract_address } from "@/contract/contract_instance";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers5/react";

export function UpdateMedicalRecords() {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    bloodType: '',
    allergies: '',
    diagnosis: '',
    treatment: ''
  });

  const {address} = useWeb3ModalAccount()

  const {walletProvider} = useWeb3ModalProvider()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };


  const UpdateMedicalRecordsSC = async () =>{
    try {
      const provider = new ethers.providers.Web3Provider(walletProvider as any);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contract_address,contract_abi,signer);

      const updateData = await contract!.updateRecord(
        address,
        formData.name,
        parseInt(formData.age),
        formData.gender,
        formData.bloodType,
        formData.allergies,
        formData.diagnosis,
        formData.treatment
      )

      



      
    } catch (error) {
      
    }
  }

  return (
    <div className=" w-[80%] mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-stone-900">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Update Your Medical Records
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        {/* Personal Information */}
     <div className="flex flex-row gap-x-9">
     <div>
       <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First Name</Label>
            <Input id="firstname" placeholder="John" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last Name</Label>
            <Input id="lastname" placeholder="Doe" type="text" />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="johndoe@example.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input id="dob" placeholder="01/15/1985" type="date" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="gender">Gender</Label>
          <Input id="gender" placeholder="Male/Female/Other" type="text" />
        </LabelInputContainer>

        {/* Emergency Contact */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="emergency-contact">Emergency Contact</Label>
          <Input
            id="emergency-contact"
            placeholder="Jane Doe - 555-123-4567"
            type="text"
          />
        </LabelInputContainer>
       </div>

       <div className=" w-1/2">
         {/* Medical History */}
         <LabelInputContainer className="mb-4">
          <Label htmlFor="medical-history">Medical History</Label>
          <Input
          className="bg-via-neutral-700"
            id="medical-history"
            placeholder="List any medical conditions or diagnoses"
           type="text"
          />
        </LabelInputContainer>

        {/* Medications */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="medications">Medications</Label>
          <Input
          className="bg-via-neutral-700"
            id="medications"
            placeholder="List your current medications with dosage and frequency"
            type="text"
          />
        </LabelInputContainer>

        {/* Allergies */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="allergies">Allergies</Label>
          <Input
            id="allergies"
            placeholder="List known allergies (medications, foods, etc.)"
            type="text"
          />
        </LabelInputContainer>

        {/* Vaccinations */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="vaccinations">Vaccinations</Label>
          <Input
            id="vaccinations"
            className="bg-via-neutral-700"
            placeholder="List your vaccinations with dates"

          />
        </LabelInputContainer>
       </div>
     </div>

     <div className="flex items-center justify-center">
     <button
          className="bg-gradient-to-br relative group/btn bg-blue-500  w-fit p-2 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Update Records &rarr;
          <BottomGradient />
        </button>
     </div>

       
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }:any) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default UpdateMedicalRecords;
