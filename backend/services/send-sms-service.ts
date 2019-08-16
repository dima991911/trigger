const SMSAPI = require('smsapicom'),
      smsapi = new SMSAPI({
        oauth: {
            accessToken: '0pd0WV1SxlxkRLJp0SesVJZuzG75337IBapSOZ4x'
        }
      });

class SendSmsServiceClass {
    generateSmsCode() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    sendMessage(message, phone) {
        return smsapi.message
            .sms()
            .from('Info')
            .to(phone)
            .message(message)
            .execute();
    };
}

const SendSmsService = new SendSmsServiceClass();
module.exports = SendSmsService;