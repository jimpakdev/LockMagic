exports.up = function(knex) {
  return knex.schema.createTable("rooms", rooms => {
    rooms.increments();

    rooms
      .string("ical_url", 128)
      .notNullable()
      .unique();
    rooms
      .integer("lock_id")
      .notNullable()
      .unique();
    rooms.string("property", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("rooms");
};
