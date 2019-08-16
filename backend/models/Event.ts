export default function (sequelize, DataTypes) {

    const Event = sequelize.define('Event', {
        title: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        mail_id: {
            type: DataTypes.INTEGER
        },
        date: {
            type: DataTypes.DATE
        }
    });

    return Event;
};
