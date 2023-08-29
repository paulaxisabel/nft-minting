import { useWeb3 } from "@3rdweb/hooks";
import { NextComponentType } from "next";

const Connect: NextComponentType = () => {
  const { connectWallet } = useWeb3();

  return (
    <div className="flex justify-center items-center h-screen">
      <a
        className="inline-block px-8 py-3 text-sm text-black font-medium bg-white rounded-full hover:bg-opacity-80 hover:backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
        onClick={() => connectWallet("injected")}
      >
        Connect Wallet
      </a>
    </div>
  );
};

export default Connect;
