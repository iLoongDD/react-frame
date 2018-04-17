const config = require('../config');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('数据库链接成功'); });

module.exports = mongoose;

