Ethereum Web3.js Demo
=====================

Use `web3` to interact with ethereum.

Install and start ethereum simulator:

```
npm install -g ethereumjs-testrpc
testrpc
```

Run demo code:

```
npm install
node index.js
```

It will get balance from eth simulator.

The code can't run with real ethereum node (I don't know what else should do for now).

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
