export function cleanString(str, space=false) {
    let ret = str.replace(/[^\w\s]|_/g, '');
    ret = space ? ret : ret.replace(/ /g, '_');

    return ret.toLowerCase();
}

export function defer(func) {
    setTimeout(func, 0);
}