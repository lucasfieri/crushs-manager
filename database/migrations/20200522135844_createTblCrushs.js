exports.up = knex => 
    knex.schema.hasTable('tbl_crushs').then((exists) => {
        if(!exists) {
            knex.schema.createTable('tbl_crushs', table => {
                table.uuid('id').primary().unique();
                table.string('name').notNullable();
                table.integer('age').notNullable();
                table.string('gender');
                table.string('relationship_status');
                table.datetime('deleted_at');
                table.timestamps(true, true);
            })
                .then(() => console.log('tbl_crushs table created!'))
                .catch((error) => console.error(error));
        }
        return null
    })

exports.down = knex => knex.schema.dropTable('tbl_crushs')
    .then(() => console.log('tbl_crushs table was deleted!'));