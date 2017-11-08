var MessageList = [

  { "Message": "React" },

  { "Message": "Webpack" },

  { "Message": "Nodejs" },

  { "Message": "Express" }

];

exports.getMessageList = function (callback) {
    callback(MessageList);
};
