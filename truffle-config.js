const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "frontend/src/contracts"),

  networks: {

      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*" // Match any network id
      },
    },

    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  };
