// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract IPNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {}

    function mint(address to, string memory uri) external onlyOwner returns (uint256) {
        _tokenIdCounter.increment();
        uint256 newId = _tokenIdCounter.current();
        _safeMint(to, newId);
        _setTokenURI(newId, uri);
        return newId;
    }
}
