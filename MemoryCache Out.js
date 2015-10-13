module.exports = function(RED) {

    if (false) { // Test for nodes compatibilities
        throw "Info : not compatible";
    }

    function NodeConstructor(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) {
            context.global.memoryCache = context.global.memoryCache || {};
            msg.payload = context.global.memoryCache[msg.cacheKey || config.cacheKey];
            node.send(msg);
        });
        node.on("close", function() {
        });
    };
    RED.nodes.registerType("MemoryCache Out", NodeConstructor);
}