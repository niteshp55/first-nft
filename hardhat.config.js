/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: "https://eth-ropsten.alchemyapi.io/v2/CFyIStmE4X2G7xg6Jn-F4igb23FORgwd",
         accounts: [`00088f2bca81ac0108808926515884bcdb54f34c4ea385ac2dd1cd9ddd1b4793`]
      }
   },
}
