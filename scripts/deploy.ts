import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const IPNFT = await ethers.getContractFactory("IPNFT");
  const ipnft = await IPNFT.deploy("IPNFT", "IPNFT");

  await ipnft.deployed();
  console.log("IPNFT deployed to:", ipnft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
