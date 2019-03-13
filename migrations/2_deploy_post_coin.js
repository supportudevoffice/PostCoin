var PostCoin = artifacts.require("./PostCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(PostCoin, '<//todo input own minter address here>');
};
