
exports.up = function(knex) {
    return knex.schema.createTable("lock_users", lockUsers => {
        lockUsers.increments();
    
        lockUsers.string("name", 128)
          .notNullable()

        lockUsers.string("start_date", 128)
          .notNullable()

          lockUsers.string("start_time", 128)
          .notNullable()

          lockUsers.string("exp_date", 128)
          .notNullable()

          lockUsers.string("exp_time", 128)
          .notNullable()

          lockUsers.string("lock_id", 128)
          .notNullable()

          lockUsers.integer("pass_code")
          .notNullable()
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("lockusers");
};


// {
//     "name": "Test1",
//     "type": "Expire on",
//     "user": "",
//     "expDate": "2019-08-02",
//     "expTime": "23:04",
//     "startDate": "2019-06-01",
//     "startTime": "03:05",
//     "code": "1566",
//     "notify": true,
//     "notifyCount": 0,
//     "notifyModes": [
//       "Home",
//       "Away",
//       "Night"
//     ],
//     "userLocks": [
//       "Front Door Lock",
//       "Back Door Lock"
//     ]
//   }