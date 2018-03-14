const net = require('net');
const Web3 = require('web3');

const web3 = new Web3();
// You need to modify the path to your path
const ipcPath = '/Users/freewind/Library/Ethereum/testnet/geth.ipc';
web3.setProvider(new Web3.providers.IpcProvider(ipcPath, net))

// in web3 1.0, there is no sync `web3.eth.coinbase`
web3.eth.getCoinbase()
  .then(function(coinbase) {
    console.log("coinbase:" + coinbase);
    return web3.eth.getBalance(coinbase);
  })
  .then(function(balance) {
    console.log("balance: " + balance);
  });
