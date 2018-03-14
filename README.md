Ethereum Web3.js Demo
=====================

Use `web3` to interact with ethereum.

There are 3 ways in this demo:

1. Connect to ethereum simulator with rpc
2. Connect to ethereum testnet with rpc
3. Connect to ethereum testnet with ipc

Connect to ethereum simulator with rpc
--------------------------------------

Install and start ethereum simulator:

```
npm install -g ethereumjs-testrpc
testrpc
```

Run demo code:

```
npm install
node src/test-rpc.js
```

It will get balance from eth simulator.

Connect to ethereum testnet with rpc
------------------------------------

```
brew tap ethereum/ethereum
brew install ethereum
geth --testnet account new
geth --testnet --rpc
```

```
npm install
node src/test-rpc.js
```


Connect to ethereum testnet with ipc
-------------------------------------

```
geth --testnet
```


How to install ethereum
-----------------------

Which is not used in this demo.

```
brew tap ethereum/ethereum
brew install ethereum
geth account new
geth --rpc
```

- <https://github.com/ethereum/wiki/wiki/JSON-RPC>
