const sequelizeConfig = require('./database');


const mysql = sequelizeConfig[process.env.NODE_ENV || 'development'];

const config = {
  jwt: {
    secret: 'EF5A90CD2DFE082D6D2615BDE8F046B896DDD0278CD9EC718C99DFCA3B66E755',
  },
  postcoder: {
    apiKey: 'PCWZQ-L97KB-NS6QH-NJNL6'
  },
  mysql,
  social: {
    facebook: {
      clientID: '958506767651588',
      clientSecret: '0fa9be225a71e72f68ede6579eee6691'
    },
    instagram: {
      clientID: '66b76c1618e143188805bec7db307a38',
      clientSecret: '2ed5ea571be74e5a8fffea21e29526b8'
    }
  }
};

export default config;