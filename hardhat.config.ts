import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/types";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const BASE_SEPOLIA_RPC_URL = process.env.BASE_SEPOLIA_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: { enabled: true, runs: 200 },
    },
  },
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    baseSepolia: BASE_SEPOLIA_RPC_URL
      ? {
          url: BASE_SEPOLIA_RPC_URL,
          accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        }
      : undefined,
  },
};

export default config;
