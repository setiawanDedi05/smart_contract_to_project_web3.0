// https://eth-goerli.g.alchemy.com/v2/AfpvXMCGRAsZSSnXmsjJ4bDakGjfROmX

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/AfpvXMCGRAsZSSnXmsjJ4bDakGjfROmX',
      accounts: ['ba98a9654999e8b7c3f2ec17cc6792cc32be1960fa34414d25fcbbb757683fd0']
    }
  }
}