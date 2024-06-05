// 'use client'
// import { useWeb3ModalAccount } from "@web3modal/ethers/react";
// import React, { useEffect, useState, createContext } from "react";

// interface walletContextType {
//     userAddress: string | undefined;
//     setUserAddressState: React.Dispatch<React.SetStateAction<string | undefined>>;
   
// }

// export const WalletContext = createContext<walletContextType | undefined>(undefined);

// export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

//     const [userAddress, setUserAddressState] = useState<string | undefined>(() => {
//         // Retrieve user address from localStorage on initial render
//         if (typeof window !== 'undefined') {
//             const storedAddress = localStorage.getItem("userAddress");
//             return storedAddress !== null ? storedAddress : undefined;
//         } else {
//             return undefined;
//         }
//     });
    
//     const [userBalance, setUserBalance] = useState<string | undefined>();

//     const { address, isConnected } = useWeb3ModalAccount();

//     const setUserAddress = (address: string | undefined) => {
//         // Set user address in localStorage
//         if (address) {
//             localStorage.setItem("userAddress", address.toLowerCase());
//         } else {
//             localStorage.removeItem("userAddress");
//         }
//         setUserAddressState(address);
//     };

 

//     useEffect(() => {
//         if (isConnected && address) {
//             setUserAddress(address);
//         }
//         // Fetch user details whenever isConnected changes
//     }, [address, isConnected]); // Listen for changes in address and isConnected

//     return (
//         <WalletContext.Provider
//             value={{ userAddress, setUserAddressState }}
//         >
//             {children}
//         </WalletContext.Provider>
//     );
// };