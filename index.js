// console.log('Loading function');
var globalcontext;

var parseFeed = function(event, context) {
  var feedurl = event.feedurl;
  console.log('Feedurl: ' + feedurl);
  var parser = require('rssparser2');
  var options = {};
  parser.parseURL(feedurl, options, context.done);
}

exports.parseFeed = parseFeed;