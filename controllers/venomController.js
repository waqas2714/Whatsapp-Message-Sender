const { getClientInstance } = require('../utils/venomClient');


const sendMessage = async (req, res) => {
    const {
        number, 
        message
    } = req.body;

    const clientInstance = getClientInstance();
    if (!clientInstance) {
      throw new Error('Venom client not initialized');
    }

  try {
    // Send basic text
    await clientInstance
      .sendText(`92${number}@c.us`, message)
      .then((result) => {
        console.log("Result: ", result); //return object success
        res.json({success : true, result});
      })
      .catch((erro) => {
        throw new Error(erro)
      });

  } catch (e) {
    res.json({error : e.message})
  }
};

module.exports = {
  sendMessage,
};
