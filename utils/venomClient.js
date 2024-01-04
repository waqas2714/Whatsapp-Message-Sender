const venom = require('venom-bot');

let clientInstance; // Declare a variable to hold the client instance

const setupVenom = async () => {
  try {
        const client = await venom
            .create({
                session: 'first-messages' // Name of the session
            });
        clientInstance = client;
    } catch (error) {
        console.log(error);
    }
};

const getClientInstance = () => {
  return clientInstance;
};

module.exports = { setupVenom, getClientInstance };