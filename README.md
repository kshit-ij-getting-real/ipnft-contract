# IPNFT - ERC721 Hardhat Project (Base Sepolia)

Minimal Hardhat + TypeScript repo with an OpenZeppelin ERC721 contract named IPNFT.

## Setup
npm install  
cp .env.example .env  
edit .env with Base Sepolia RPC + private key

## Commands
npm run compile  
npm run node  
npm run deploy:localhost  
npm run deploy:base  

## Contract
- contracts/IPNFT.sol
- ERC721URIStorage + Ownable
- mint(address, uri)
