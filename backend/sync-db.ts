import { db } from './models';

export default function syncDb(removeSeeder) {
  db.sequelize.sync().then(function () {
    console.log('sync db completed');
  });
};