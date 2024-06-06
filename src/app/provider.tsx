'use client'
import { ethers } from 'ethers';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'
import { RecoilRoot } from 'recoil';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '9d8144e157054d061c1c58a856ba0669';

// 2. Set chains
const tbsc = {
    chainId: 97,
    name: "TBSC",
    currency: "BNB",
    explorerUrl: "https://testnet.bscscan.com/",
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
};

// 3. Create a metadata object
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [tbsc],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
});

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
}
