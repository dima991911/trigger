export default function (sequelize, DataTypes) {

    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    });

    User.associate = (models) => {
        User.hasMany(models.Event, {as: ''})
    };

    return User;
};
