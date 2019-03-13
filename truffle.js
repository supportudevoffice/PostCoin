var HDWalletProvider = require("truffle-hdwallet-provider");

/// For dev environment only
var mnemonic = "<//todo input own mnemonic here for the owner and publisher of contracts>";

module.exports = {
  networks: {
    testnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/<//todo input infura key here>")
      },
      network_id: "3",
      test_timeout: 900000
    },
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};