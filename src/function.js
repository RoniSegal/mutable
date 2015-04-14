import {generateWithDefaultForSysImmutable} from "./defineTypeUtils"
function noop() {};

export default class _Function {

    static defaults() { return 0; }

    static test(v) { return typeof v === 'function'; }

    static validateType(value) {
        return this.test(value);
    }

    constructor(value){
    	return _Function.test(value) ? value : noop;
    }

}

_Function.type = _Function;

_Function.create = Object;

_Function.withDefault = generateWithDefaultForSysImmutable(_Function.create);
