import { useWeb3 } from "@3rdweb/hooks";
import { NextComponentType } from "next";
import toast, { Toaster } from "react-hot-toast";

const Mint: NextComponentType = () => {
  const { address } = useWeb3();

  const confirm = () =>
    toast.success("Minting Successful", {
      style: {
        background: "#04111d",
        color: "#fff",
      },
    });

  const mint = async () =>
    await fetch("/api/mint", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ address }),
    }).then(() => confirm());

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <a
        className="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition-colors bg-[#3b5998] border-2 border-[#3b5998] rounded hover:bg-transparent hover:text-[#3b5998] focus:outline-none focus:ring active:opacity-75 cursor-pointer"
        onClick={() => mint()}
      >
        Mint a Pixel Art 
      </a>
    </div>
  );
};

export default Mint;
