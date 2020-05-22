const connectToDb = require('../index');

connectToDb().seed.run().then(() => {
    console.log('Db Updated!');
    process.exit();
}).catch((error) => console.error(error));