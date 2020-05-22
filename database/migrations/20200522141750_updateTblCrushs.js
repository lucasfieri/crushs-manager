exports.up = knex => 
    knex.schema.hasTable('tbl_crushs').then((exists) => {
        if(exists) {
            knex.schema.alterTable('tbl_crushs', table => {
                table.renameColumn('relationship_status', 'description');
            })
                .then(() => console.log('tbl_crushs table updated!'))
                .catch((error) => console.error(error));
        }
        return null
    })

exports.down = knex =>
    knex.schema.alterTable('tbl_crushs', table => {
        table.renameColumn('description', 'relationship_status');
    })
        .then(() => console.log('tbl_crushs table updated!'))
        .catch((error) => console.error(error));
