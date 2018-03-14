var Web3 = require('web3');

var web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"))

// in web3 1.0, there is no sync `web3.eth.coinbase`
web3.eth.getCoinbase()
  .then(function(coinbase) {
    console.log("coinbase:" + coinbase);
    return web3.eth.getBalance(coinbase);
  })
  .then(function(balance) {
    console.log("balance: " + balance);
  });
