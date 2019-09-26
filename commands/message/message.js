//require Other js file
// const random = require('../../common/random.js');
// const tenor = require('../../common/tenor_api.js');

//request JSON form URL
// const request = require("request");
// const axios = require("axios");

// var messageRecsive;

module.exports = {
    resMsg: function (message) {
        var messageRecsive = message.content;
        var messageReply = '';

        if (messageRecsive.match(/ให้ข้าดูซิ$/) || messageRecsive.match(/ให้ข้าดูสิ$/)) {
            messageReply = 'ข้าบอกแล้วไง ว่าข้าทำไม่เป็น~';
            message.reply(messageReply);
        } else if (messageRecsive.match(/ซักทีเถอะน่า$/) || messageRecsive.match(/สักทีเถอะน่า$/)) {
            messageReply = 'ก็ได้ๆๆ เซ้าซี้จัง!';
            message.reply(messageReply);
        } else if (messageRecsive.match(/ได้เวลา/)) {
            // message.delete();
            messageReply = 'ได้เวลา ชงนมแล้ว!';
            message.channel.send('@everyone ' + messageReply);
        } else if (messageRecsive.match(/ฝนขิง/)) {
            messageReply = 'ครับ ฝนขิง';
            message.channel.send(messageReply);
        } else if (messageRecsive.match(/ได้รึยัง/) || messageRecsive.match(/ได้หรือยัง/)) {
            messageReply = 'เริ่มได้ทันทีเลย!!';
            message.channel.send(messageReply);
        } else if (messageRecsive.match(/เคล็ดลับ/)) {
            messageReply = 'ที่แท้เคล็ดลับคือใช้เหล้าจุดไฟให้ติด';
            message.channel.send(messageReply);
        } else if (messageRecsive.match(/เหล้า/)) {
            messageReply = 'หวานเปรี้ยว แถมยังมีกลิ่นหอมของเหล้า';
            message.channel.send(messageReply);
        } else if (messageRecsive.match(/หอมจริง/) || messageRecsive.match(/คืออะ/)) {
            messageReply = 'มันคือ เปา ปลา เค็ม !!';
            message.reply(messageReply);
        } else if (messageRecsive.match(/โออิชิ/) || messageRecsive.match(/โออิชี่/) || messageRecsive.match(/โออีชิ/) || messageRecsive.match(/โออีชี่/)) {
            messageReply = 'เพิ่งได้เข้าปากก็บอกว่าจะ `ขี้` ซะแล้ว';
            message.reply(messageReply);
        }

        // console message
        // if (message.author.bot == true) {
        //   console.log('Bot : ' + messageReply);
        // }
    }
}