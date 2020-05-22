const connectToDb = require('../index');

connectToDb().migrate.latest().then(() => {
    console.log('success migrate!');
    process.exit();
})