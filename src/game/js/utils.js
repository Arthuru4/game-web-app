/**
 * template string
 * @returns {string}
 */
String.prototype.toValue = function (...args) {
    let str = this.valueOf();

    if (arguments.length === 1 && typeof args[0] === 'object') {
        const obj = args[0];

        Object.keys(obj).forEach((key) => {
            str = str.replace(`{${key}}`, obj[key]);
        });
    } else {
        for (let i = 0; i < arguments.length; i++) {
            const key = `{${i}}`,
                value = args[i];

            str = str.replace(key, value);
        }
    }

    return str;
};
