let dbConfig = {
  synchronize: false,
};

console.log(process.env.NODE_ENV);

switch (process.env.NODE_ENV) {
  case 'dev':
    console.log('mydev');
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['**/*.entity.js'],
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
    });
    break;
  case 'prod':
    break;
  default:
    throw new Error('unknown environment');
}

module.exports = dbConfig;
