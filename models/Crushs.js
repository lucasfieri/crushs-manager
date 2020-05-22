const { Model } = require('objection');

class Crush extends Model {
    static get tableName() {
        return 'tbl_crushs';
    }
}

module.exports = Crush
