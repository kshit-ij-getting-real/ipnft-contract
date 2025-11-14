import { expect } from "chai";
import { ethers } from "hardhat";

describe("IPNFT", () => {
  it("mints a token and sets correct URI", async () => {
    const [owner, other] = await ethers.getSigners();

    const IPNFT = await ethers.getContractFactory("IPNFT");
    const ipnft = await IPNFT.deploy("IPNFT", "IPNFT");
    await ipnft.deployed();

    const uri = "ipfs://test-cid/metadata.json";

    const tx = await ipnft.connect(owner).mint(other.address, uri);
    await tx.wait();

    const newId = (await ipnft.callStatic.mint(other.address, uri)).toString();

    expect(await ipnft.ownerOf(1)).to.equal(other.address);

    const tokenUri = await ipnft.tokenURI(1);
    expect(tokenUri).to.equal(uri);

    const uri2 = "ipfs://another-cid/metadata.json";
    await ipnft.connect(owner).mint(other.address, uri2);
    expect(await ipnft.ownerOf(2)).to.equal(other.address);
  });

  it("reverts if non-owner tries to mint", async () => {
    const [owner, other] = await ethers.getSigners();

    const IPNFT = await ethers.getContractFactory("IPNFT");
    const ipnft = await IPNFT.deploy("IPNFT", "IPNFT");
    await ipnft.deployed();

    await expect(
      ipnft.connect(other).mint(other.address, "ipfs://whatever")
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });
});
