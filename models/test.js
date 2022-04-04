const { Model, Sequelize } = require('sequelize').Sequelize;
const sequelize = require('../utils/bd');

class City extends Model { } 
City.init({ 
    countryCode: Sequelize.STRING 
}, 

{ sequelize, modelName: 'city' }); 

class Country extends Model { } 
Country.init({ isoCode: Sequelize.STRING 

}, 
{ sequelize, modelName: 'country' });

Country.hasMany(City, {foreignKey: 'countryCode', sourceKey: 'isoCode'}); 

City.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});



// City.sync()
// Country.sync()


