var i = {
        0: 8203,
        1: 8204,
        2: 8205,
        3: 8290,
        4: 8291,
        5: 8288,
        6: 65279,
        7: 8289,
        8: 119155,
        9: 119156,
        a: 119157,
        b: 119158,
        c: 119159,
        d: 119160,
        e: 119161,
        f: 119162
    },
    o = {
        0: 8203,
        1: 8204,
        2: 8205,
        3: 65279
    },
    u = new Array(4).fill(String.fromCodePoint(o[0])).join("");

function d(e) {
    let r = JSON.stringify(e);
    return `${u}${Array.from(r).map(n=>{let t=n.charCodeAt(0);if(t>255)throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${r} on character ${n} (${t})`);return Array.from(t.toString(4).padStart(4,"0")).map(c=>String.fromCodePoint(o[c])).join("")}).join("")}`
}

function f(e) {
    return !Number.isNaN(Number(e)) || /[a-z]/i.test(e) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(e) ? !1 : !!Date.parse(e)
}

function s(e) {
    try {
        new URL(e, e.startsWith("/") ? "https://acme.com" : void 0)
    } catch {
        return !1
    }
    return !0
}

function g(e, r, n = "auto") {
    return n === !0 || n === "auto" && (f(e) || s(e)) ? e : `${e}${d(r)}`
}
Object.fromEntries(Object.entries(o).map(e => e.reverse()));
Object.fromEntries(Object.entries(i).map(e => e.reverse()));
var m = `${Object.values(i).map(e=>`\\u{${e.toString(16)}}`).join("")}`,
    a = new RegExp(`[${m}]{4,}`, "gu");

function l(e) {
    var r;
    return {
        cleaned: e.replace(a, ""),
        encoded: ((r = e.match(a)) == null ? void 0 : r[0]) || ""
    }
}

function p(e) {
    return e && JSON.parse(l(JSON.stringify(e)).cleaned)
}

function S(e) {
    return p(e)
}
export {
    g as a, S as b
};