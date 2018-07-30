export const lenLimit = function lenLimit(value: string, len: number) {
    if (typeof value !== 'number' && typeof value !== 'string') { return value };
    if (value.length > len) {
        return String(value).substr(0, len) + '...';
    } else {
        return value;
    }
}

export const toJson = function toJson(obj: Object) {
    if (typeof obj !== "object") {
        return obj;
    }
    return JSON.stringify(obj);
}

export const toPrice = function toPrice(price: any | number | string) {
    if (isNaN(parseFloat(price)) || !price) {
        return price;
    }

    let temporaryPrice = Math.ceil(price * 100);
    let priceStr = temporaryPrice >= 100
        ? temporaryPrice + ""
        : temporaryPrice >= 10
            ? "0" + temporaryPrice
            : "00" + temporaryPrice;
    if (!!(~priceStr.indexOf('.'))) {
        return priceStr;
    } else {
        priceStr = priceStr.slice(0, priceStr.length - 2) + '.' + priceStr.slice(-2);
        return priceStr;
    }
}

export const dateTime = function dateTime(time: number, type: string) {
    if (typeof time !== 'number' && typeof time !== 'string') {
        return time;
    }

    let currentDate = new Date(time),
        y = currentDate.getFullYear(),
        m = currentDate.getMonth() + 1,
        d = currentDate.getDate(),
        h = currentDate.getHours(),
        minute = currentDate.getMinutes(),
        s = currentDate.getSeconds();

    let dateFormat = [
        y,
        m >= 10 ? m : '0' + m,
        d >= 10 ? d : '0' + d
    ].join("-"),
        timeFormat = [
            h >= 10 ? h : '0' + h,
            minute >= 10 ? minute : '0' + minute,
            s >= 10 ? s : '0' + s
        ].join(":");

    switch (type) {
        default:
            return dateFormat + " " + timeFormat;
        case "date":
            return dateFormat;
        case "dateTime":
            return dateFormat + " " + timeFormat;
    }
}
