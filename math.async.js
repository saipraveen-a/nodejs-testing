const asyncmath = {};

asyncmath.add = async (num1, num2) => {
    try {
        if(num1 && num2) {
            const result = await num1 + num2;
            return result;
        } else {
            throw 'missing arg';
        }
    } catch (err) {
        throw err;
    }
};

asyncmath.multiply = (num1, num2) => new Promise((resolve, reject) => {
    resolve(num1 * num2);
});
module.exports = asyncmath;