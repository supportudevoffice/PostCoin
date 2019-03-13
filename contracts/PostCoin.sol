pragma solidity 0.4.24; 

import "../node_modules/zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";


/// @title Post Coin
/// @author Under Development Office
/// @notice Simple ERC20 with modified minting behaviour for demo purpose. 
contract PostCoin is MintableToken {
    
    /// @notice Part of ERC20 Standard.
    string public name = "PostCOIN";
    /// @notice Part of ERC20 Standard.
    string public symbol = "PCX";
    /// @notice Part of ERC20 Standard.
    uint8 public decimals = 18;

    /// @notice Special grant permission for address to mint.
    address public minter;

    /// @notice Creates ERC20 token that is mintable.
    /// @param _minter Address set that can mint funds alongside the owner.
    constructor(address _minter) public {
        minter = _minter;
    }

    /// @dev Override of the Open Zeppelin library modifier hasMintPermission.
    /// @dev Adds the mint permission to the minter also.
    modifier hasMintPermission() {
        require(msg.sender == owner || msg.sender == minter);
        _;
    }

}