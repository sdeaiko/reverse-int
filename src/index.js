module.exports = function reverse (n) {
    let res = '';
    let strNum = String(n);
    for (let index = strNum.length - 1; index >= 0; index--) {
        if (strNum[index] != '-') {
            res += strNum[index];
        }
    }
    return Number(res);
}
