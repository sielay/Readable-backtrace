
var BackTrace = require('backtrace');

var print = function(trace, indent, fullpath)
{
	console.log(new Array( indent + 1 ).join('  ') + trace.name);
	if(fullpath) {
		console.log(new Array( indent + 1 ).join('  ') + trace.filename + ':' + trace.line + ':' + trace.column);
	} else {
		console.log(new Array( indent + 1 ).join('  ') + trace.filename.replace(/^.*[\\\/]/, '') + ':' + trace.line + ':' + trace.column);
	}
	
};

module.exports = function(fullpath){
	
	var trace = new BackTrace();
	
	var elem;
	var indent = 0;
	while(elem = trace.traces.pop())
	{
		print(elem, indent, fullpath);
		indent++;
	}
	
};


		