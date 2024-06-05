import { HoverEffect } from '@/components/ui/card-hover-effect';

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <div className=' text-center text-3xl font-semibold'><p>Getting Started is easy and quick </p></div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
      title: "Register Yourself",
      description: "Register yourself to the platform, secured by blockchain technology.",
      link: "",
    },
    {
      title: "Authenticate Yourself",
      description: "Log in with your Web3 wallet for secure authentication.",
      link: "",
    },
    {
      title: "Upload Your Data",
      description: "Create, update, or view your health record information.",
      link: "https://google.com",
    },
    {
      title: "Immutable Medical Records",
      description: "Store your medical records on a blockchain to ensure they cannot be tampered with.",
      feature: "Immutability",
      link: "https://example.com/immutable-records",
    },
    {
      title: "Secure Data Sharing",
      description: "Share your medical records with healthcare professionals securely using blockchain-based encryption.",
      feature: "Data Encryption",
      link: "https://example.com/secure-data-sharing",
    },
    {
      title: "Transparent Recordkeeping",
      description: "Track all changes to your medical records with a transparent and auditable blockchain ledger.",
      feature: "Transparency",
      link: "https://example.com/transparent-recordkeeping",
    },
  ];
  
