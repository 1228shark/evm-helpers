require('@matterlabs/hardhat-zksync-deploy');
require('@matterlabs/hardhat-zksync-solc');
require('@matterlabs/hardhat-zksync-verify');
require('@nomicfoundation/hardhat-verify');
require('@nomicfoundation/hardhat-ethers');
require('dotenv').config();
require('hardhat-deploy');
require('hardhat-gas-reporter');
require('solidity-coverage');
require('hardhat-tracer');

const { networks, etherscan } = require('./hardhat.networks');

module.exports = {
    etherscan,
    solidity: {
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000000,
            },
            viaIR: true,
        },
        version: '0.8.23',
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    networks,
    zksolc: {
        version: '1.3.17',
        compilerSource: 'binary',
        settings: {},
    },
};
