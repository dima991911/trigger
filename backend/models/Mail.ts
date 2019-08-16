export default function (sequelize, DataTypes) {

    const Mail = sequelize.define('Mail', {
        name: {
            type: DataTypes.STRING
        },
        subject: {
            type: DataTypes.STRING
        },
        message: {
            type: DataTypes.STRING
        },
        mails: {
            type: DataTypes.JSON
        }
    });

    return Mail;
};
