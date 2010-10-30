function extend(target, source) {
    Object.keys(source).forEach(function(property) {
        target[property] = source[property];
    });

    return target;
}

function tfail(condition, value, type, message, comp, fn) {
    if (condition) assert.fail(value, type, message, comp, type, fn);
}

function fail(condition, value, message, comp, fn) {
    tfail(condition, value, null, message, comp, fn);
}

function typeOf(value, type, message, stackStart) {
    tfail(typeof value != type, value, type, message, 'typeof', stackStart);
}

function notTypeOf(value, type, message, stackStart) {
    tfail(typeof value == type, value, type, message, '!typeof', stackStart);
}

var assert = extend(exports, require('assert'));

assert.isNull = function(value, message) {
    fail(value !== null, value, message, '===', this);
};

assert.isNotNull = function(value, message) {
    fail(value === null, value, message, '!==', this);
};

assert.isTypeOf = function(value, type, message) {
    typeOf(value, type, message, this);
};

assert.isNotTypeOf = function(value, type, message) {
    notTypeOf(value, type, message, this);
};

assert.isObject = function(value, message) {
    typeOf(value, 'object', message, this);
};

assert.isFunction = function(value, message) {
    typeOf(value, 'function', message, this);
};

assert.isString = function(value, message) {
    typeOf(value, 'string', message, this);
};

assert.isBoolean = function(value, message) {
    typeOf(value, 'boolean', message, this);
};

assert.isNumber = function(value, message) {
    typeOf(value, 'number', message, this);
};

assert.isUndefined = function(value, message) {
    typeOf(value, 'undefined', message, this);
};

assert.isNotUndefined = function(value, message) {
    notTypeOf(value, 'undefined', message, this);
};

assert.isArray = function(value, message) {
    tfail(Object.prototype.toString.call(value) != '[object Array]',
            value, 'Array', message, '[[Class]]', this);
};

assert.isNaN = function(value, message) {
    tfail(!isNaN(value), value, 'NaN', message, '==', this);
};

assert.isNotNaN = function(value, message) {
    tfail(!isNaN(value), value, 'NaN', message, '!=', this);
};

assert.match = function(value, pattern, message) {
    tfail(!pattern.test(value), value, pattern, message, 'test', this);
};

assert.noMatch = function (value, pattern, message) {
    tfail(pattern.test(value), value, pattern, message, '!test', this);
};

assert.isPrototypeOf = function(proto, object, message) {
    tfail(!proto.isPrototypeOf(object), proto, object, message, 'isPrototypeOf',
            this);
};

assert.isNotPrototypeOf = function(proto, object, message) {
    tfail(proto.isPrototypeOf(object), proto, object, message, '!isPrototypeOf',
            this);
};

assert.isWritable = function(object, property, message) {
    tfail(!Object.getOwnPropertyDescriptor(object, property).writable,
            object, property, message, 'isWritable', this);
};

assert.isNotWritable = function(object, property, message) {
    tfail(Object.getOwnPropertyDescriptor(object, property).writable,
            object, property, message, 'isNotWritable', this);
};

assert.isConfigurable = function(object, property, message) {
    tfail(!Object.getOwnPropertyDescriptor(object, property).configurable,
            object, property, message, 'isConfigurable', this);
};

assert.isNotConfigurable =function (object, property, message) {
    tfail(Object.getOwnPropertyDescriptor(object, property).configurable,
            object, property, message, 'isNotConfigurable', this);
};

assert.isEnumerable = function (object, property, message) {
    tfail(!Object.getOwnPropertyDescriptor(object, property).enumerable,
            object, property, message, 'isEnumerable', this);
};

assert.isNotEnumerable = function (object, property, message) {
    tfail(Object.getOwnPropertyDescriptor(object, property).enumerable,
            object, property, message, 'isNotEnumerable', this);
};
