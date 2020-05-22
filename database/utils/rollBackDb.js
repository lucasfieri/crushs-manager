const connectToDb = require('../index');

connectToDb().migrate.rollback([], true).then(() => {
    console.log('success rollback!');
    process.exit();
})