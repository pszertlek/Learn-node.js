//引入events模块
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected() {
 console.log('link success');
 //触发data_received事件 
eventEmitter.emit('data_receviced');
}
// 绑定connection 时间处理程序
eventEmitter.on('connection', connectHandler);
//使用匿名函数绑定data_received时间
eventEmitter.on('data_received', function(){
 console.log('Data receive success');
});
//触发connection 时间
eventEmitter.emit('connection');
console.log("Execute success");
