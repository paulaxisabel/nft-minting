import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.body;

  const nftModule = new ThirdwebSDK(
    new ethers.Wallet(
      process.env.PRIVATE_KEY as string,
      ethers.getDefaultProvider("Put Alchemy URL here")
    )
  ).getNFTModule("Put NFT Contract Address Here");

  await nftModule
    .mintTo(address, {
      name: `#${Math.floor(1000 + Math.random() * 9000)}`,
      description: "Pixel Art",
      image: `https://api.dicebear.com/7.x/pixel-art/${uuidv4()}.svg`,
    })
    .then((metadata) => res.status(200).json(metadata))
    .catch((error) =>
      res.status(404).json({ msg: "Error minting NFT", error })
    );
}
