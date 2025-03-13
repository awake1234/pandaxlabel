var ps = Object.defineProperty;
var fs = (e, t, o) => t in e ? ps(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
}) : e[t] = o;
var ct = (e, t, o) => (fs(e, typeof t != "symbol" ? t + "" : t, o), o);

function Kn(e, t) {
    const o = new Set(e.split(","));
    return n => o.has(n)
}
const xe = {},
    Qt = [],
    Qe = () => {},
    gs = () => !1,
    rn = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    $n = e => e.startsWith("onUpdate:"),
    je = Object.assign,
    Jn = (e, t) => {
        const o = e.indexOf(t);
        o > -1 && e.splice(o, 1)
    },
    hs = Object.prototype.hasOwnProperty,
    ge = (e, t) => hs.call(e, t),
    ne = Array.isArray,
    qt = e => ko(e) === "[object Map]",
    io = e => ko(e) === "[object Set]",
    Sr = e => ko(e) === "[object Date]",
    ae = e => typeof e == "function",
    Ie = e => typeof e == "string",
    ft = e => typeof e == "symbol",
    me = e => e !== null && typeof e == "object",
    Li = e => (me(e) || ae(e)) && ae(e.then) && ae(e.catch),
    Oi = Object.prototype.toString,
    ko = e => Oi.call(e),
    bs = e => ko(e).slice(8, -1),
    Gi = e => ko(e) === "[object Object]",
    Xn = e => Ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    uo = Kn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    an = e => {
        const t = Object.create(null);
        return o => t[o] || (t[o] = e(o))
    },
    ms = /-(\w)/g,
    oo = an(e => e.replace(ms, (t, o) => o ? o.toUpperCase() : "")),
    vs = /\B([A-Z])/g,
    Yt = an(e => e.replace(vs, "-$1").toLowerCase()),
    Pi = an(e => e.charAt(0).toUpperCase() + e.slice(1)),
    xn = an(e => e ? `on${Pi(e)}` : ""),
    At = (e, t) => !Object.is(e, t),
    Bo = (e, t) => {
        for (let o = 0; o < e.length; o++) e[o](t)
    },
    zi = (e, t, o, n = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: n,
            value: o
        })
    },
    Zo = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    xs = e => {
        const t = Ie(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let Ir;
const Ui = () => Ir || (Ir = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function ao(e) {
    if (ne(e)) {
        const t = {};
        for (let o = 0; o < e.length; o++) {
            const n = e[o],
                r = Ie(n) ? js(n) : ao(n);
            if (r)
                for (const i in r) t[i] = r[i]
        }
        return t
    }
    if (Ie(e) || me(e)) return e
}
const ys = /;(?![^(]*\))/g,
    ws = /:([^]+)/,
    Ts = /\/\*[^]*?\*\//g;

function js(e) {
    const t = {};
    return e.replace(Ts, "").split(ys).forEach(o => {
        if (o) {
            const n = o.split(ws);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
    }), t
}

function We(e) {
    let t = "";
    if (Ie(e)) t = e;
    else if (ne(e))
        for (let o = 0; o < e.length; o++) {
            const n = We(e[o]);
            n && (t += n + " ")
        } else if (me(e))
            for (const o in e) e[o] && (t += o + " ");
    return t.trim()
}
const Ss = Kn("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");

function kr(e) {
    return !!e || e === ""
}

function mo(e, t) {
    if (e === t) return !0;
    let o = Sr(e),
        n = Sr(t);
    if (o || n) return !(!o || !n) && e.getTime() === t.getTime();
    if (o = ft(e), n = ft(t), o || n) return e === t;
    if (o = ne(e), n = ne(t), o || n) return !(!o || !n) && function(r, i) {
        if (r.length !== i.length) return !1;
        let a = !0;
        for (let s = 0; a && s < r.length; s++) a = mo(r[s], i[s]);
        return a
    }(e, t);
    if (o = me(e), n = me(t), o || n) {
        if (!o || !n || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (const r in e) {
            const i = e.hasOwnProperty(r),
                a = t.hasOwnProperty(r);
            if (i && !a || !i && a || !mo(e[r], t[r])) return !1
        }
    }
    return String(e) === String(t)
}

function Qn(e, t) {
    return e.findIndex(o => mo(o, t))
}
const F = e => Ie(e) ? e : e == null ? "" : ne(e) || me(e) && (e.toString === Oi || !ae(e.toString)) ? JSON.stringify(e, Bi, 2) : String(e),
    Bi = (e, t) => t && t.__v_isRef ? Bi(e, t.value) : qt(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((o, [n, r], i) => (o[yn(n, i) + " =>"] = r, o), {})
    } : io(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(o => yn(o))
    } : ft(t) ? yn(t) : !me(t) || ne(t) || Gi(t) ? t : String(t),
    yn = (e, t = "") => {
        var o;
        return ft(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
    };
let Ze, Ht;
class Ri {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ze, !t && Ze && (this.index = (Ze.scopes || (Ze.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const o = Ze;
            try {
                return Ze = this, t()
            } finally {
                Ze = o
            }
        }
    }
    on() {
        Ze = this
    }
    off() {
        Ze = this.parent
    }
    stop(t) {
        if (this._active) {
            let o, n;
            for (o = 0, n = this.effects.length; o < n; o++) this.effects[o].stop();
            for (o = 0, n = this.cleanups.length; o < n; o++) this.cleanups[o]();
            if (this.scopes)
                for (o = 0, n = this.scopes.length; o < n; o++) this.scopes[o].stop(!0);
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function Wi(e) {
    return new Ri(e)
}

function Hi() {
    return Ze
}
class qn {
    constructor(t, o, n, r) {
        this.fn = t, this.trigger = o, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0,
            function(i, a = Ze) {
                a && a.active && a.effects.push(i)
            }(this, r)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1, _t();
            for (let t = 0; t < this._depsLength; t++) {
                const o = this.deps[t];
                if (o.computed && (o.computed.value, this._dirtyLevel >= 4)) break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0), Mt()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0, !this.active) return this.fn();
        let t = Dt,
            o = Ht;
        try {
            return Dt = !0, Ht = this, this._runnings++, Dr(this), this.fn()
        } finally {
            Nr(this), this._runnings--, Ht = o, Dt = t
        }
    }
    stop() {
        this.active && (Dr(this), Nr(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function Dr(e) {
    e._trackId++, e._depsLength = 0
}

function Nr(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++) Fi(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}

function Fi(e, t) {
    const o = e.get(t);
    o !== void 0 && t._trackId !== o && (e.delete(t), e.size === 0 && e.cleanup())
}
let Dt = !0,
    Vn = 0;
const Zi = [];

function _t() {
    Zi.push(Dt), Dt = !1
}

function Mt() {
    const e = Zi.pop();
    Dt = e === void 0 || e
}

function er() {
    Vn++
}

function tr() {
    for (Vn--; !Vn && En.length;) En.shift()()
}

function Yi(e, t, o) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const n = e.deps[e._depsLength];
        n !== t ? (n && Fi(n, e), e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const En = [];

function Ki(e, t, o) {
    er();
    for (const n of e.keys()) {
        let r;
        n._dirtyLevel < t && (r ?? (r = e.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = t), n._shouldSchedule && (r ?? (r = e.get(n) === n._trackId)) && (n.trigger(), n._runnings && !n.allowRecurse || n._dirtyLevel === 2 || (n._shouldSchedule = !1, n.scheduler && En.push(n.scheduler)))
    }
    tr()
}
const $i = (e, t) => {
        const o = new Map;
        return o.cleanup = e, o.computed = t, o
    },
    Yo = new WeakMap,
    Ft = Symbol(""),
    Ln = Symbol("");

function He(e, t, o) {
    if (Dt && Ht) {
        let n = Yo.get(e);
        n || Yo.set(e, n = new Map);
        let r = n.get(o);
        r || n.set(o, r = $i(() => n.delete(o))), Yi(Ht, r)
    }
}

function dt(e, t, o, n, r, i) {
    const a = Yo.get(e);
    if (!a) return;
    let s = [];
    if (t === "clear") s = [...a.values()];
    else if (o === "length" && ne(e)) {
        const l = Number(n);
        a.forEach((u, c) => {
            (c === "length" || !ft(c) && c >= l) && s.push(u)
        })
    } else switch (o !== void 0 && s.push(a.get(o)), t) {
        case "add":
            ne(e) ? Xn(o) && s.push(a.get("length")) : (s.push(a.get(Ft)), qt(e) && s.push(a.get(Ln)));
            break;
        case "delete":
            ne(e) || (s.push(a.get(Ft)), qt(e) && s.push(a.get(Ln)));
            break;
        case "set":
            qt(e) && s.push(a.get(Ft))
    }
    er();
    for (const l of s) l && Ki(l, 4);
    tr()
}
const Is = Kn("__proto__,__v_isRef,__isVue"),
    Ji = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(ft)),
    Cr = ks();

function ks() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...o) {
            const n = pe(this);
            for (let i = 0, a = this.length; i < a; i++) He(n, 0, i + "");
            const r = n[t](...o);
            return r === -1 || r === !1 ? n[t](...o.map(pe)) : r
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...o) {
            _t(), er();
            const n = pe(this)[t].apply(this, o);
            return tr(), Mt(), n
        }
    }), e
}

function Ds(e) {
    ft(e) || (e = String(e));
    const t = pe(this);
    return He(t, 0, e), t.hasOwnProperty(e)
}
class Xi {
    constructor(t = !1, o = !1) {
        this._isReadonly = t, this._isShallow = o
    }
    get(t, o, n) {
        const r = this._isReadonly,
            i = this._isShallow;
        if (o === "__v_isReactive") return !r;
        if (o === "__v_isReadonly") return r;
        if (o === "__v_isShallow") return i;
        if (o === "__v_raw") return n === (r ? i ? Us : ta : i ? ea : qi).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
        const a = ne(t);
        if (!r) {
            if (a && ge(Cr, o)) return Reflect.get(Cr, o, n);
            if (o === "hasOwnProperty") return Ds
        }
        const s = Reflect.get(t, o, n);
        return (ft(o) ? Ji.has(o) : Is(o)) ? s : (r || He(t, 0, o), i ? s : Te(s) ? a && Xn(o) ? s : s.value : me(s) ? r ? oa(s) : Kt(s) : s)
    }
}
class Qi extends Xi {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, o, n, r) {
        let i = t[o];
        if (!this._isShallow) {
            const l = vo(i);
            if (Ko(n) || vo(n) || (i = pe(i), n = pe(n)), !ne(t) && Te(i) && !Te(n)) return !l && (i.value = n, !0)
        }
        const a = ne(t) && Xn(o) ? Number(o) < t.length : ge(t, o),
            s = Reflect.set(t, o, n, r);
        return t === pe(r) && (a ? At(n, i) && dt(t, "set", o, n) : dt(t, "add", o, n)), s
    }
    deleteProperty(t, o) {
        const n = ge(t, o);
        t[o];
        const r = Reflect.deleteProperty(t, o);
        return r && n && dt(t, "delete", o, void 0), r
    }
    has(t, o) {
        const n = Reflect.has(t, o);
        return ft(o) && Ji.has(o) || He(t, 0, o), n
    }
    ownKeys(t) {
        return He(t, 0, ne(t) ? "length" : Ft), Reflect.ownKeys(t)
    }
}
class Ns extends Xi {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, o) {
        return !0
    }
    deleteProperty(t, o) {
        return !0
    }
}
const Cs = new Qi,
    As = new Ns,
    _s = new Qi(!0),
    or = e => e,
    sn = e => Reflect.getPrototypeOf(e);

function Vo(e, t, o = !1, n = !1) {
    const r = pe(e = e.__v_raw),
        i = pe(t);
    o || (At(t, i) && He(r, 0, t), He(r, 0, i));
    const {
        has: a
    } = sn(r), s = n ? or : o ? ar : xo;
    return a.call(r, t) ? s(e.get(t)) : a.call(r, i) ? s(e.get(i)) : void(e !== r && e.get(t))
}

function Eo(e, t = !1) {
    const o = this.__v_raw,
        n = pe(o),
        r = pe(e);
    return t || (At(e, r) && He(n, 0, e), He(n, 0, r)), e === r ? o.has(e) : o.has(e) || o.has(r)
}

function Lo(e, t = !1) {
    return e = e.__v_raw, !t && He(pe(e), 0, Ft), Reflect.get(e, "size", e)
}

function Ar(e) {
    e = pe(e);
    const t = pe(this);
    return sn(t).has.call(t, e) || (t.add(e), dt(t, "add", e, e)), this
}

function _r(e, t) {
    t = pe(t);
    const o = pe(this),
        {
            has: n,
            get: r
        } = sn(o);
    let i = n.call(o, e);
    i || (e = pe(e), i = n.call(o, e));
    const a = r.call(o, e);
    return o.set(e, t), i ? At(t, a) && dt(o, "set", e, t) : dt(o, "add", e, t), this
}

function Mr(e) {
    const t = pe(this),
        {
            has: o,
            get: n
        } = sn(t);
    let r = o.call(t, e);
    r || (e = pe(e), r = o.call(t, e)), n && n.call(t, e);
    const i = t.delete(e);
    return r && dt(t, "delete", e, void 0), i
}

function Vr() {
    const e = pe(this),
        t = e.size !== 0,
        o = e.clear();
    return t && dt(e, "clear", void 0, void 0), o
}

function Oo(e, t) {
    return function(o, n) {
        const r = this,
            i = r.__v_raw,
            a = pe(i),
            s = t ? or : e ? ar : xo;
        return !e && He(a, 0, Ft), i.forEach((l, u) => o.call(n, s(l), s(u), r))
    }
}

function Go(e, t, o) {
    return function(...n) {
        const r = this.__v_raw,
            i = pe(r),
            a = qt(i),
            s = e === "entries" || e === Symbol.iterator && a,
            l = e === "keys" && a,
            u = r[e](...n),
            c = o ? or : t ? ar : xo;
        return !t && He(i, 0, l ? Ln : Ft), {
            next() {
                const {
                    value: p,
                    done: b
                } = u.next();
                return b ? {
                    value: p,
                    done: b
                } : {
                    value: s ? [c(p[0]), c(p[1])] : c(p),
                    done: b
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function mt(e) {
    return function(...t) {
        return e !== "delete" && (e === "clear" ? void 0 : this)
    }
}

function Ms() {
    const e = {
            get(r) {
                return Vo(this, r)
            },
            get size() {
                return Lo(this)
            },
            has: Eo,
            add: Ar,
            set: _r,
            delete: Mr,
            clear: Vr,
            forEach: Oo(!1, !1)
        },
        t = {
            get(r) {
                return Vo(this, r, !1, !0)
            },
            get size() {
                return Lo(this)
            },
            has: Eo,
            add: Ar,
            set: _r,
            delete: Mr,
            clear: Vr,
            forEach: Oo(!1, !0)
        },
        o = {
            get(r) {
                return Vo(this, r, !0)
            },
            get size() {
                return Lo(this, !0)
            },
            has(r) {
                return Eo.call(this, r, !0)
            },
            add: mt("add"),
            set: mt("set"),
            delete: mt("delete"),
            clear: mt("clear"),
            forEach: Oo(!0, !1)
        },
        n = {
            get(r) {
                return Vo(this, r, !0, !0)
            },
            get size() {
                return Lo(this, !0)
            },
            has(r) {
                return Eo.call(this, r, !0)
            },
            add: mt("add"),
            set: mt("set"),
            delete: mt("delete"),
            clear: mt("clear"),
            forEach: Oo(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        e[r] = Go(r, !1, !1), o[r] = Go(r, !0, !1), t[r] = Go(r, !1, !0), n[r] = Go(r, !0, !0)
    }), [e, o, t, n]
}
const [Vs, Es, Ls, Os] = Ms();

function nr(e, t) {
    const o = t ? e ? Os : Ls : e ? Es : Vs;
    return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(ge(o, r) && r in n ? o : n, r, i)
}
const Gs = {
        get: nr(!1, !1)
    },
    Ps = {
        get: nr(!1, !0)
    },
    zs = {
        get: nr(!0, !1)
    },
    qi = new WeakMap,
    ea = new WeakMap,
    ta = new WeakMap,
    Us = new WeakMap;

function Kt(e) {
    return vo(e) ? e : rr(e, !1, Cs, Gs, qi)
}

function oa(e) {
    return rr(e, !0, As, zs, ta)
}

function rr(e, t, o, n, r) {
    if (!me(e) || e.__v_raw && (!t || !e.__v_isReactive)) return e;
    const i = r.get(e);
    if (i) return i;
    const a = (s = e).__v_skip || !Object.isExtensible(s) ? 0 : function(u) {
        switch (u) {
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0
        }
    }(bs(s));
    var s;
    if (a === 0) return e;
    const l = new Proxy(e, a === 2 ? n : o);
    return r.set(e, l), l
}

function Nt(e) {
    return vo(e) ? Nt(e.__v_raw) : !(!e || !e.__v_isReactive)
}

function vo(e) {
    return !(!e || !e.__v_isReadonly)
}

function Ko(e) {
    return !(!e || !e.__v_isShallow)
}

function Er(e) {
    return !!e && !!e.__v_raw
}

function pe(e) {
    const t = e && e.__v_raw;
    return t ? pe(t) : e
}

function ir(e) {
    return Object.isExtensible(e) && zi(e, "__v_skip", !0), e
}
const xo = e => me(e) ? Kt(e) : e,
    ar = e => me(e) ? oa(e) : e;
class na {
    constructor(t, o, n, r) {
        this.getter = t, this._setter = o, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new qn(() => t(this._value), () => Ro(this, this.effect._dirtyLevel === 2 ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = n
    }
    get value() {
        const t = pe(this);
        return t._cacheable && !t.effect.dirty || !At(t._value, t._value = t.effect.run()) || Ro(t, 4), ra(t), t.effect._dirtyLevel >= 2 && Ro(t, 2), t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}

function ra(e) {
    var t;
    Dt && Ht && (e = pe(e), Yi(Ht, (t = e.dep) != null ? t : e.dep = $i(() => e.dep = void 0, e instanceof na ? e : void 0)))
}

function Ro(e, t = 4, o) {
    const n = (e = pe(e)).dep;
    n && Ki(n, t)
}

function Te(e) {
    return !(!e || e.__v_isRef !== !0)
}

function ye(e) {
    return function(t, o) {
        return Te(t) ? t : new Bs(t, o)
    }(e, !1)
}
class Bs {
    constructor(t, o) {
        this.__v_isShallow = o, this.dep = void 0, this.__v_isRef = !0, this._rawValue = o ? t : pe(t), this._value = o ? t : xo(t)
    }
    get value() {
        return ra(this), this._value
    }
    set value(t) {
        const o = this.__v_isShallow || Ko(t) || vo(t);
        t = o ? t : pe(t), At(t, this._rawValue) && (this._rawValue = t, this._value = o ? t : xo(t), Ro(this, 4))
    }
}

function S(e) {
    return Te(e) ? e.value : e
}
const Rs = {
    get: (e, t, o) => S(Reflect.get(e, t, o)),
    set: (e, t, o, n) => {
        const r = e[t];
        return Te(r) && !Te(o) ? (r.value = o, !0) : Reflect.set(e, t, o, n)
    }
};

function ia(e) {
    return Nt(e) ? e : new Proxy(e, Rs)
}
class Ws {
    constructor(t, o, n) {
        this._object = t, this._key = o, this._defaultValue = n, this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return function(t, o) {
            const n = Yo.get(t);
            return n && n.get(o)
        }(pe(this._object), this._key)
    }
}
class Hs {
    constructor(t) {
        this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}

function Fs(e, t, o) {
    return Te(e) ? e : ae(e) ? new Hs(e) : me(e) && arguments.length > 1 ? aa(e, t, o) : ye(e)
}

function aa(e, t, o) {
    const n = e[t];
    return Te(n) ? n : new Ws(e, t, o)
}

function Ct(e, t, o, n) {
    try {
        return n ? e(...n) : e()
    } catch (r) {
        ln(r, t, o)
    }
}

function qe(e, t, o, n) {
    if (ae(e)) {
        const r = Ct(e, t, o, n);
        return r && Li(r) && r.catch(i => {
            ln(i, t, o)
        }), r
    }
    if (ne(e)) {
        const r = [];
        for (let i = 0; i < e.length; i++) r.push(qe(e[i], t, o, n));
        return r
    }
}

function ln(e, t, o, n = !0) {
    if (t && t.vnode, t) {
        let r = t.parent;
        const i = t.proxy,
            a = `https://vuejs.org/error-reference/#runtime-${o}`;
        for (; r;) {
            const l = r.ec;
            if (l) {
                for (let u = 0; u < l.length; u++)
                    if (l[u](e, i, a) === !1) return
            }
            r = r.parent
        }
        const s = t.appContext.config.errorHandler;
        if (s) return _t(), Ct(s, null, 10, [e, i, a]), void Mt()
    }(function(r, i, a, s = !0) {
        console.error(r)
    })(e, 0, 0, n)
}
let yo = !1,
    On = !1;
const Ee = [];
let st = 0;
const eo = [];
let wt = null,
    Bt = 0;
const sa = Promise.resolve();
let sr = null;

function Do(e) {
    const t = sr || sa;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function lr(e) {
    Ee.length && Ee.includes(e, yo && e.allowRecurse ? st + 1 : st) || (e.id == null ? Ee.push(e) : Ee.splice(function(t) {
        let o = st + 1,
            n = Ee.length;
        for (; o < n;) {
            const r = o + n >>> 1,
                i = Ee[r],
                a = wo(i);
            a < t || a === t && i.pre ? o = r + 1 : n = r
        }
        return o
    }(e.id), 0, e), la())
}

function la() {
    yo || On || (On = !0, sr = sa.then(ua))
}

function Lr(e, t, o = yo ? st + 1 : 0) {
    for (; o < Ee.length; o++) {
        const n = Ee[o];
        if (n && n.pre) {
            if (e && n.id !== e.uid) continue;
            Ee.splice(o, 1), o--, n()
        }
    }
}

function ca(e) {
    if (eo.length) {
        const t = [...new Set(eo)].sort((o, n) => wo(o) - wo(n));
        if (eo.length = 0, wt) return void wt.push(...t);
        for (wt = t, Bt = 0; Bt < wt.length; Bt++) wt[Bt]();
        wt = null, Bt = 0
    }
}
const wo = e => e.id == null ? 1 / 0 : e.id,
    Zs = (e, t) => {
        const o = wo(e) - wo(t);
        if (o === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1
        }
        return o
    };

function ua(e) {
    On = !1, yo = !0, Ee.sort(Zs);
    try {
        for (st = 0; st < Ee.length; st++) {
            const t = Ee[st];
            t && t.active !== !1 && Ct(t, null, 14)
        }
    } finally {
        st = 0, Ee.length = 0, ca(), yo = !1, sr = null, (Ee.length || eo.length) && ua()
    }
}

function Ys(e, t, ...o) {
    if (e.isUnmounted) return;
    const n = e.vnode.props || xe;
    let r = o;
    const i = t.startsWith("update:"),
        a = i && t.slice(7);
    if (a && a in n) {
        const c = `${a === "modelValue" ? "model" : a}Modifiers`,
            {
                number: p,
                trim: b
            } = n[c] || xe;
        b && (r = o.map(h => Ie(h) ? h.trim() : h)), p && (r = o.map(Zo))
    }
    let s, l = n[s = xn(t)] || n[s = xn(oo(t))];
    !l && i && (l = n[s = xn(Yt(t))]), l && qe(l, e, 6, r);
    const u = n[s + "Once"];
    if (u) {
        if (e.emitted) {
            if (e.emitted[s]) return
        } else e.emitted = {};
        e.emitted[s] = !0, qe(u, e, 6, r)
    }
}

function da(e, t, o = !1) {
    const n = t.emitsCache,
        r = n.get(e);
    if (r !== void 0) return r;
    const i = e.emits;
    let a = {},
        s = !1;
    if (!ae(e)) {
        const l = u => {
            const c = da(u, t, !0);
            c && (s = !0, je(a, c))
        };
        !o && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return i || s ? (ne(i) ? i.forEach(l => a[l] = null) : je(a, i), me(e) && n.set(e, a), a) : (me(e) && n.set(e, null), null)
}

function $o(e, t) {
    return !(!e || !rn(t)) && (t = t.slice(2).replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, Yt(t)) || ge(e, t))
}
let ke = null,
    Jo = null;

function Xo(e) {
    const t = ke;
    return ke = e, Jo = e && e.type.__scopeId || null, t
}

function Ne(e, t = ke, o) {
    if (!t || e._n) return e;
    const n = (...r) => {
        n._d && Zr(-1);
        const i = Xo(t);
        let a;
        try {
            a = e(...r)
        } finally {
            Xo(i), n._d && Zr(1)
        }
        return a
    };
    return n._n = !0, n._c = !0, n._d = !0, n
}

function wn(e) {
    const {
        type: t,
        vnode: o,
        proxy: n,
        withProxy: r,
        propsOptions: [i],
        slots: a,
        attrs: s,
        emit: l,
        render: u,
        renderCache: c,
        props: p,
        data: b,
        setupState: h,
        ctx: x,
        inheritAttrs: k
    } = e, f = Xo(e);
    let m, T;
    try {
        if (4 & o.shapeFlag) {
            const d = r || n,
                y = d;
            m = at(u.call(y, d, c, p, h, b, x)), T = s
        } else {
            const d = t;
            m = at(d.length > 1 ? d(p, {
                attrs: s,
                slots: a,
                emit: l
            }) : d(p, null)), T = t.props ? s : Ks(s)
        }
    } catch (d) {
        ho.length = 0, ln(d, e, 1), m = X(Ye)
    }
    let g = m;
    if (T && k !== !1) {
        const d = Object.keys(T),
            {
                shapeFlag: y
            } = g;
        d.length && 7 & y && (i && d.some($n) && (T = $s(T, i)), g = Vt(g, T, !1, !0))
    }
    return o.dirs && (g = Vt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(o.dirs) : o.dirs), o.transition && (g.transition = o.transition), m = g, Xo(f), m
}
const Ks = e => {
        let t;
        for (const o in e)(o === "class" || o === "style" || rn(o)) && ((t || (t = {}))[o] = e[o]);
        return t
    },
    $s = (e, t) => {
        const o = {};
        for (const n in e) $n(n) && n.slice(9) in t || (o[n] = e[n]);
        return o
    };

function Or(e, t, o) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return !0;
    for (let r = 0; r < n.length; r++) {
        const i = n[r];
        if (t[i] !== e[i] && !$o(o, i)) return !0
    }
    return !1
}
const Js = Symbol.for("v-ndc"),
    Xs = Symbol.for("v-scx"),
    Qs = () => go(Xs),
    Po = {};

function Ae(e, t, o) {
    return pa(e, t, o)
}

function pa(e, t, {
    immediate: o,
    deep: n,
    flush: r,
    once: i,
    onTrack: a,
    onTrigger: s
} = xe) {
    if (t && i) {
        const j = t;
        t = (...N) => {
            j(...N), y()
        }
    }
    const l = Me,
        u = j => n === !0 ? j : Wt(j, n === !1 ? 1 : void 0);
    let c, p, b = !1,
        h = !1;
    if (Te(e) ? (c = () => e.value, b = Ko(e)) : Nt(e) ? (c = () => u(e), b = !0) : ne(e) ? (h = !0, b = e.some(j => Nt(j) || Ko(j)), c = () => e.map(j => Te(j) ? j.value : Nt(j) ? u(j) : ae(j) ? Ct(j, l, 2) : void 0)) : c = ae(e) ? t ? () => Ct(e, l, 2) : () => (p && p(), qe(e, l, 3, [k])) : Qe, t && n) {
        const j = c;
        c = () => Wt(j())
    }
    let x, k = j => {
        p = g.onStop = () => {
            Ct(j, l, 4), p = g.onStop = void 0
        }
    };
    if (pn) {
        if (k = Qe, t ? o && qe(t, l, 3, [c(), h ? [] : void 0, k]) : c(), r !== "sync") return Qe;
        {
            const j = Qs();
            x = j.__watcherHandles || (j.__watcherHandles = [])
        }
    }
    let f = h ? new Array(e.length).fill(Po) : Po;
    const m = () => {
        if (g.active && g.dirty)
            if (t) {
                const j = g.run();
                (n || b || (h ? j.some((N, D) => At(N, f[D])) : At(j, f))) && (p && p(), qe(t, l, 3, [j, f === Po ? void 0 : h && f[0] === Po ? [] : f, k]), f = j)
            } else g.run()
    };
    let T;
    m.allowRecurse = !!t, r === "sync" ? T = m : r === "post" ? T = () => Ue(m, l && l.suspense) : (m.pre = !0, l && (m.id = l.uid), T = () => lr(m));
    const g = new qn(c, Qe, T),
        d = Hi(),
        y = () => {
            g.stop(), d && Jn(d.effects, g)
        };
    return t ? o ? m() : f = g.run() : r === "post" ? Ue(g.run.bind(g), l && l.suspense) : g.run(), x && x.push(y), y
}

function qs(e, t, o) {
    const n = this.proxy,
        r = Ie(e) ? e.includes(".") ? fa(n, e) : () => n[e] : e.bind(n, n);
    let i;
    ae(t) ? i = t : (i = t.handler, o = t);
    const a = No(this),
        s = pa(r, i.bind(n), o);
    return a(), s
}

function fa(e, t) {
    const o = t.split(".");
    return () => {
        let n = e;
        for (let r = 0; r < o.length && n; r++) n = n[o[r]];
        return n
    }
}

function Wt(e, t = 1 / 0, o) {
    if (t <= 0 || !me(e) || e.__v_skip || (o = o || new Set).has(e)) return e;
    if (o.add(e), t--, Te(e)) Wt(e.value, t, o);
    else if (ne(e))
        for (let n = 0; n < e.length; n++) Wt(e[n], t, o);
    else if (io(e) || qt(e)) e.forEach(n => {
        Wt(n, t, o)
    });
    else if (Gi(e))
        for (const n in e) Wt(e[n], t, o);
    return e
}

function le(e, t) {
    if (ke === null) return e;
    const o = fn(ke) || ke.proxy,
        n = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let [i, a, s, l = xe] = t[r];
        i && (ae(i) && (i = {
            mounted: i,
            updated: i
        }), i.deep && Wt(a), n.push({
            dir: i,
            instance: o,
            value: a,
            oldValue: void 0,
            arg: s,
            modifiers: l
        }))
    }
    return e
}

function Gt(e, t, o, n) {
    const r = e.dirs,
        i = t && t.dirs;
    for (let a = 0; a < r.length; a++) {
        const s = r[a];
        i && (s.oldValue = i[a].value);
        let l = s.dir[n];
        l && (_t(), qe(l, o, 8, [e.el, s, e, t]), Mt())
    }
}
const Tt = Symbol("_leaveCb"),
    zo = Symbol("_enterCb");

function ga() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return ur(() => {
        e.isMounted = !0
    }), xa(() => {
        e.isUnmounting = !0
    }), e
}
const $e = [Function, Array],
    ha = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: $e,
        onEnter: $e,
        onAfterEnter: $e,
        onEnterCancelled: $e,
        onBeforeLeave: $e,
        onLeave: $e,
        onAfterLeave: $e,
        onLeaveCancelled: $e,
        onBeforeAppear: $e,
        onAppear: $e,
        onAfterAppear: $e,
        onAppearCancelled: $e
    },
    el = {
        name: "BaseTransition",
        props: ha,
        setup(e, {
            slots: t
        }) {
            const o = gr(),
                n = ga();
            return () => {
                const r = t.default && cr(t.default(), !0);
                if (!r || !r.length) return;
                let i = r[0];
                if (r.length > 1) {
                    for (const b of r)
                        if (b.type !== Ye) {
                            i = b;
                            break
                        }
                }
                const a = pe(e),
                    {
                        mode: s
                    } = a;
                if (n.isLeaving) return Tn(i);
                const l = Gr(i);
                if (!l) return Tn(i);
                const u = To(l, a, n, o);
                jo(l, u);
                const c = o.subTree,
                    p = c && Gr(c);
                if (p && p.type !== Ye && !Rt(l, p)) {
                    const b = To(p, a, n, o);
                    if (jo(p, b), s === "out-in" && l.type !== Ye) return n.isLeaving = !0, b.afterLeave = () => {
                        n.isLeaving = !1, o.update.active !== !1 && (o.effect.dirty = !0, o.update())
                    }, Tn(i);
                    s === "in-out" && l.type !== Ye && (b.delayLeave = (h, x, k) => {
                        ba(n, p)[String(p.key)] = p, h[Tt] = () => {
                            x(), h[Tt] = void 0, delete u.delayedLeave
                        }, u.delayedLeave = k
                    })
                }
                return i
            }
        }
    };

function ba(e, t) {
    const {
        leavingVNodes: o
    } = e;
    let n = o.get(t.type);
    return n || (n = Object.create(null), o.set(t.type, n)), n
}

function To(e, t, o, n) {
    const {
        appear: r,
        mode: i,
        persisted: a = !1,
        onBeforeEnter: s,
        onEnter: l,
        onAfterEnter: u,
        onEnterCancelled: c,
        onBeforeLeave: p,
        onLeave: b,
        onAfterLeave: h,
        onLeaveCancelled: x,
        onBeforeAppear: k,
        onAppear: f,
        onAfterAppear: m,
        onAppearCancelled: T
    } = t, g = String(e.key), d = ba(o, e), y = (D, C) => {
        D && qe(D, n, 9, C)
    }, j = (D, C) => {
        const M = C[1];
        y(D, C), ne(D) ? D.every(W => W.length <= 1) && M() : D.length <= 1 && M()
    }, N = {
        mode: i,
        persisted: a,
        beforeEnter(D) {
            let C = s;
            if (!o.isMounted) {
                if (!r) return;
                C = k || s
            }
            D[Tt] && D[Tt](!0);
            const M = d[g];
            M && Rt(e, M) && M.el[Tt] && M.el[Tt](), y(C, [D])
        },
        enter(D) {
            let C = l,
                M = u,
                W = c;
            if (!o.isMounted) {
                if (!r) return;
                C = f || l, M = m || u, W = T || c
            }
            let E = !1;
            const q = D[zo] = de => {
                E || (E = !0, y(de ? W : M, [D]), N.delayedLeave && N.delayedLeave(), D[zo] = void 0)
            };
            C ? j(C, [D, q]) : q()
        },
        leave(D, C) {
            const M = String(e.key);
            if (D[zo] && D[zo](!0), o.isUnmounting) return C();
            y(p, [D]);
            let W = !1;
            const E = D[Tt] = q => {
                W || (W = !0, C(), y(q ? x : h, [D]), D[Tt] = void 0, d[M] === e && delete d[M])
            };
            d[M] = e, b ? j(b, [D, E]) : E()
        },
        clone: D => To(D, t, o, n)
    };
    return N
}

function Tn(e) {
    if (cn(e)) return (e = Vt(e)).children = null, e
}

function Gr(e) {
    if (!cn(e)) return e;
    const {
        shapeFlag: t,
        children: o
    } = e;
    if (o) {
        if (16 & t) return o[0];
        if (32 & t && ae(o.default)) return o.default()
    }
}

function jo(e, t) {
    6 & e.shapeFlag && e.component ? jo(e.component.subTree, t) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function cr(e, t = !1, o) {
    let n = [],
        r = 0;
    for (let i = 0; i < e.length; i++) {
        let a = e[i];
        const s = o == null ? a.key : String(o) + String(a.key != null ? a.key : i);
        a.type === he ? (128 & a.patchFlag && r++, n = n.concat(cr(a.children, t, s))) : (t || a.type !== Ye) && n.push(s != null ? Vt(a, {
            key: s
        }) : a)
    }
    if (r > 1)
        for (let i = 0; i < n.length; i++) n[i].patchFlag = -2;
    return n
}

function ve(e, t) {
    return ae(e) ? je({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const po = e => !!e.type.__asyncLoader,
    cn = e => e.type.__isKeepAlive;

function tl(e, t) {
    ma(e, "a", t)
}

function ol(e, t) {
    ma(e, "da", t)
}

function ma(e, t, o = Me) {
    const n = e.__wdc || (e.__wdc = () => {
        let r = o;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return e()
    });
    if (un(t, n, o), o) {
        let r = o.parent;
        for (; r && r.parent;) cn(r.parent.vnode) && nl(n, t, o, r), r = r.parent
    }
}

function nl(e, t, o, n) {
    const r = un(t, e, n, !0);
    ya(() => {
        Jn(n[t], r)
    }, o)
}

function un(e, t, o = Me, n = !1) {
    if (o) {
        const r = o[e] || (o[e] = []),
            i = t.__weh || (t.__weh = (...a) => {
                if (o.isUnmounted) return;
                _t();
                const s = No(o),
                    l = qe(t, o, e, a);
                return s(), Mt(), l
            });
        return n ? r.unshift(i) : r.push(i), i
    }
}
const gt = e => (t, o = Me) => (!pn || e === "sp") && un(e, (...n) => t(...n), o),
    rl = gt("bm"),
    ur = gt("m"),
    il = gt("bu"),
    va = gt("u"),
    xa = gt("bum"),
    ya = gt("um"),
    al = gt("sp"),
    sl = gt("rtg"),
    ll = gt("rtc");

function cl(e, t = Me) {
    un("ec", e, t)
}

function Ce(e, t, o, n) {
    let r;
    const i = o;
    if (ne(e) || Ie(e)) {
        r = new Array(e.length);
        for (let a = 0, s = e.length; a < s; a++) r[a] = t(e[a], a, void 0, i)
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let a = 0; a < e; a++) r[a] = t(a + 1, a, void 0, i)
    } else if (me(e))
        if (e[Symbol.iterator]) r = Array.from(e, (a, s) => t(a, s, void 0, i));
        else {
            const a = Object.keys(e);
            r = new Array(a.length);
            for (let s = 0, l = a.length; s < l; s++) {
                const u = a[s];
                r[s] = t(e[u], u, s, i)
            }
        }
    else r = [];
    return r
}

function Qo(e, t, o = {}, n, r) {
    if (ke.isCE || ke.parent && po(ke.parent) && ke.parent.isCE) return X("slot", o, n);
    let i = e[t];
    i && i._c && (i._d = !1), Z();
    const a = i && wa(i(o)),
        s = _e(he, {
            key: o.key || a && a.key || `_${t}`
        }, a || [], a && e._ === 1 ? 64 : -2);
    return s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), i && i._c && (i._d = !0), s
}

function wa(e) {
    return e.some(t => !en(t) || t.type !== Ye && !(t.type === he && !wa(t.children))) ? e : null
}
const Gn = e => e ? Oa(e) ? fn(e) || e.proxy : Gn(e.parent) : null,
    fo = je(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Gn(e.parent),
        $root: e => Gn(e.root),
        $emit: e => e.emit,
        $options: e => dr(e),
        $forceUpdate: e => e.f || (e.f = () => {
            e.effect.dirty = !0, lr(e.update)
        }),
        $nextTick: e => e.n || (e.n = Do.bind(e.proxy)),
        $watch: e => qs.bind(e)
    }),
    jn = (e, t) => e !== xe && !e.__isScriptSetup && ge(e, t),
    ul = {
        get({
            _: e
        }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: o,
                setupState: n,
                data: r,
                props: i,
                accessCache: a,
                type: s,
                appContext: l
            } = e;
            let u;
            if (t[0] !== "$") {
                const h = a[t];
                if (h !== void 0) switch (h) {
                    case 1:
                        return n[t];
                    case 2:
                        return r[t];
                    case 4:
                        return o[t];
                    case 3:
                        return i[t]
                } else {
                    if (jn(n, t)) return a[t] = 1, n[t];
                    if (r !== xe && ge(r, t)) return a[t] = 2, r[t];
                    if ((u = e.propsOptions[0]) && ge(u, t)) return a[t] = 3, i[t];
                    if (o !== xe && ge(o, t)) return a[t] = 4, o[t];
                    Pn && (a[t] = 0)
                }
            }
            const c = fo[t];
            let p, b;
            return c ? (t === "$attrs" && He(e.attrs, 0, ""), c(e)) : (p = s.__cssModules) && (p = p[t]) ? p : o !== xe && ge(o, t) ? (a[t] = 4, o[t]) : (b = l.config.globalProperties, ge(b, t) ? b[t] : void 0)
        },
        set({
            _: e
        }, t, o) {
            const {
                data: n,
                setupState: r,
                ctx: i
            } = e;
            return jn(r, t) ? (r[t] = o, !0) : n !== xe && ge(n, t) ? (n[t] = o, !0) : !ge(e.props, t) && (t[0] !== "$" || !(t.slice(1) in e)) && (i[t] = o, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: o,
                ctx: n,
                appContext: r,
                propsOptions: i
            }
        }, a) {
            let s;
            return !!o[a] || e !== xe && ge(e, a) || jn(t, a) || (s = i[0]) && ge(s, a) || ge(n, a) || ge(fo, a) || ge(r.config.globalProperties, a)
        },
        defineProperty(e, t, o) {
            return o.get != null ? e._.accessCache[t] = 0 : ge(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o)
        }
    };

function dl() {
    return function() {
        const e = gr();
        return e.setupContext || (e.setupContext = Pa(e))
    }().slots
}

function Pr(e) {
    return ne(e) ? e.reduce((t, o) => (t[o] = null, t), {}) : e
}
let Pn = !0;

function pl(e) {
    const t = dr(e),
        o = e.proxy,
        n = e.ctx;
    Pn = !1, t.beforeCreate && zr(t.beforeCreate, e, "bc");
    const {
        data: r,
        computed: i,
        methods: a,
        watch: s,
        provide: l,
        inject: u,
        created: c,
        beforeMount: p,
        mounted: b,
        beforeUpdate: h,
        updated: x,
        activated: k,
        deactivated: f,
        beforeDestroy: m,
        beforeUnmount: T,
        destroyed: g,
        unmounted: d,
        render: y,
        renderTracked: j,
        renderTriggered: N,
        errorCaptured: D,
        serverPrefetch: C,
        expose: M,
        inheritAttrs: W,
        components: E,
        directives: q,
        filters: de
    } = t;
    if (u && function(oe, re, se = Qe) {
            ne(oe) && (oe = zn(oe));
            for (const z in oe) {
                const L = oe[z];
                let P;
                P = me(L) ? "default" in L ? go(L.from || z, L.default, !0) : go(L.from || z) : go(L), Te(P) ? Object.defineProperty(re, z, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => P.value,
                    set: R => P.value = R
                }) : re[z] = P
            }
        }(u, n, null), a)
        for (const oe in a) {
            const re = a[oe];
            ae(re) && (n[oe] = re.bind(o))
        }
    if (r) {
        const oe = r.call(o, o);
        me(oe) && (e.data = Kt(oe))
    }
    if (Pn = !0, i)
        for (const oe in i) {
            const re = i[oe],
                se = ae(re) ? re.bind(o, o) : ae(re.get) ? re.get.bind(o, o) : Qe,
                z = !ae(re) && ae(re.set) ? re.set.bind(o) : Qe,
                L = De({
                    get: se,
                    set: z
                });
            Object.defineProperty(n, oe, {
                enumerable: !0,
                configurable: !0,
                get: () => L.value,
                set: P => L.value = P
            })
        }
    if (s)
        for (const oe in s) Ta(s[oe], n, o, oe);
    if (l) {
        const oe = ae(l) ? l.call(o) : l;
        Reflect.ownKeys(oe).forEach(re => {
            (function(se, z) {
                if (Me) {
                    let L = Me.provides;
                    const P = Me.parent && Me.parent.provides;
                    P === L && (L = Me.provides = Object.create(P)), L[se] = z
                }
            })(re, oe[re])
        })
    }

    function ce(oe, re) {
        ne(re) ? re.forEach(se => oe(se.bind(o))) : re && oe(re.bind(o))
    }
    if (c && zr(c, e, "c"), ce(rl, p), ce(ur, b), ce(il, h), ce(va, x), ce(tl, k), ce(ol, f), ce(cl, D), ce(ll, j), ce(sl, N), ce(xa, T), ce(ya, d), ce(al, C), ne(M))
        if (M.length) {
            const oe = e.exposed || (e.exposed = {});
            M.forEach(re => {
                Object.defineProperty(oe, re, {
                    get: () => o[re],
                    set: se => o[re] = se
                })
            })
        } else e.exposed || (e.exposed = {});
    y && e.render === Qe && (e.render = y), W != null && (e.inheritAttrs = W), E && (e.components = E), q && (e.directives = q)
}

function zr(e, t, o) {
    qe(ne(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, o)
}

function Ta(e, t, o, n) {
    const r = n.includes(".") ? fa(o, n) : () => o[n];
    if (Ie(e)) {
        const i = t[e];
        ae(i) && Ae(r, i)
    } else if (ae(e)) Ae(r, e.bind(o));
    else if (me(e))
        if (ne(e)) e.forEach(i => Ta(i, t, o, n));
        else {
            const i = ae(e.handler) ? e.handler.bind(o) : t[e.handler];
            ae(i) && Ae(r, i, e)
        }
}

function dr(e) {
    const t = e.type,
        {
            mixins: o,
            extends: n
        } = t,
        {
            mixins: r,
            optionsCache: i,
            config: {
                optionMergeStrategies: a
            }
        } = e.appContext,
        s = i.get(t);
    let l;
    return s ? l = s : r.length || o || n ? (l = {}, r.length && r.forEach(u => qo(l, u, a, !0)), qo(l, t, a)) : l = t, me(t) && i.set(t, l), l
}

function qo(e, t, o, n = !1) {
    const {
        mixins: r,
        extends: i
    } = t;
    i && qo(e, i, o, !0), r && r.forEach(a => qo(e, a, o, !0));
    for (const a in t)
        if (!(n && a === "expose")) {
            const s = fl[a] || o && o[a];
            e[a] = s ? s(e[a], t[a]) : t[a]
        } return e
}
const fl = {
    data: Ur,
    props: Br,
    emits: Br,
    methods: so,
    computed: so,
    beforeCreate: Oe,
    created: Oe,
    beforeMount: Oe,
    mounted: Oe,
    beforeUpdate: Oe,
    updated: Oe,
    beforeDestroy: Oe,
    beforeUnmount: Oe,
    destroyed: Oe,
    unmounted: Oe,
    activated: Oe,
    deactivated: Oe,
    errorCaptured: Oe,
    serverPrefetch: Oe,
    components: so,
    directives: so,
    watch: function(e, t) {
        if (!e) return t;
        if (!t) return e;
        const o = je(Object.create(null), e);
        for (const n in t) o[n] = Oe(e[n], t[n]);
        return o
    },
    provide: Ur,
    inject: function(e, t) {
        return so(zn(e), zn(t))
    }
};

function Ur(e, t) {
    return t ? e ? function() {
        return je(ae(e) ? e.call(this, this) : e, ae(t) ? t.call(this, this) : t)
    } : t : e
}

function zn(e) {
    if (ne(e)) {
        const t = {};
        for (let o = 0; o < e.length; o++) t[e[o]] = e[o];
        return t
    }
    return e
}

function Oe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function so(e, t) {
    return e ? je(Object.create(null), e, t) : t
}

function Br(e, t) {
    return e ? ne(e) && ne(t) ? [...new Set([...e, ...t])] : je(Object.create(null), Pr(e), Pr(t ?? {})) : t
}

function ja() {
    return {
        app: null,
        config: {
            isNativeTag: gs,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let gl = 0;

function hl(e, t) {
    return function(o, n = null) {
        ae(o) || (o = je({}, o)), n == null || me(n) || (n = null);
        const r = ja(),
            i = new WeakSet;
        let a = !1;
        const s = r.app = {
            _uid: gl++,
            _component: o,
            _props: n,
            _container: null,
            _context: r,
            _instance: null,
            version: Sl,
            get config() {
                return r.config
            },
            set config(l) {},
            use: (l, ...u) => (i.has(l) || (l && ae(l.install) ? (i.add(l), l.install(s, ...u)) : ae(l) && (i.add(l), l(s, ...u))), s),
            mixin: l => (r.mixins.includes(l) || r.mixins.push(l), s),
            component: (l, u) => u ? (r.components[l] = u, s) : r.components[l],
            directive: (l, u) => u ? (r.directives[l] = u, s) : r.directives[l],
            mount(l, u, c) {
                if (!a) {
                    const p = X(o, n);
                    return p.appContext = r, c === !0 ? c = "svg" : c === !1 && (c = void 0), u && t ? t(p, l) : e(p, l, c), a = !0, s._container = l, l.__vue_app__ = s, fn(p.component) || p.component.proxy
                }
            },
            unmount() {
                a && (e(null, s._container), delete s._container.__vue_app__)
            },
            provide: (l, u) => (r.provides[l] = u, s),
            runWithContext(l) {
                const u = to;
                to = s;
                try {
                    return l()
                } finally {
                    to = u
                }
            }
        };
        return s
    }
}
let to = null;

function go(e, t, o = !1) {
    const n = Me || ke;
    if (n || to) {
        const r = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : to._context.provides;
        if (r && e in r) return r[e];
        if (arguments.length > 1) return o && ae(t) ? t.call(n && n.proxy) : t
    }
}
const Sa = {},
    Ia = () => Object.create(Sa),
    ka = e => Object.getPrototypeOf(e) === Sa;

function bl(e, t, o, n = !1) {
    const r = {},
        i = Ia();
    e.propsDefaults = Object.create(null), Da(e, t, r, i);
    for (const a in e.propsOptions[0]) a in r || (r[a] = void 0);
    o ? e.props = n ? r : rr(r, !1, _s, Ps, ea) : e.type.props ? e.props = r : e.props = i, e.attrs = i
}

function Da(e, t, o, n) {
    const [r, i] = e.propsOptions;
    let a, s = !1;
    if (t)
        for (let l in t) {
            if (uo(l)) continue;
            const u = t[l];
            let c;
            r && ge(r, c = oo(l)) ? i && i.includes(c) ? (a || (a = {}))[c] = u : o[c] = u : $o(e.emitsOptions, l) || l in n && u === n[l] || (n[l] = u, s = !0)
        }
    if (i) {
        const l = pe(o),
            u = a || xe;
        for (let c = 0; c < i.length; c++) {
            const p = i[c];
            o[p] = Un(r, l, p, u[p], e, !ge(u, p))
        }
    }
    return s
}

function Un(e, t, o, n, r, i) {
    const a = e[o];
    if (a != null) {
        const s = ge(a, "default");
        if (s && n === void 0) {
            const l = a.default;
            if (a.type !== Function && !a.skipFactory && ae(l)) {
                const {
                    propsDefaults: u
                } = r;
                if (o in u) n = u[o];
                else {
                    const c = No(r);
                    n = u[o] = l.call(null, t), c()
                }
            } else n = l
        }
        a[0] && (i && !s ? n = !1 : !a[1] || n !== "" && n !== Yt(o) || (n = !0))
    }
    return n
}

function Na(e, t, o = !1) {
    const n = t.propsCache,
        r = n.get(e);
    if (r) return r;
    const i = e.props,
        a = {},
        s = [];
    let l = !1;
    if (!ae(e)) {
        const c = p => {
            l = !0;
            const [b, h] = Na(p, t, !0);
            je(a, b), h && s.push(...h)
        };
        !o && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    if (!i && !l) return me(e) && n.set(e, Qt), Qt;
    if (ne(i))
        for (let c = 0; c < i.length; c++) {
            const p = oo(i[c]);
            Rr(p) && (a[p] = xe)
        } else if (i)
            for (const c in i) {
                const p = oo(c);
                if (Rr(p)) {
                    const b = i[c],
                        h = a[p] = ne(b) || ae(b) ? {
                            type: b
                        } : je({}, b);
                    if (h) {
                        const x = Fr(Boolean, h.type),
                            k = Fr(String, h.type);
                        h[0] = x > -1, h[1] = k < 0 || x < k, (x > -1 || ge(h, "default")) && s.push(p)
                    }
                }
            }
    const u = [a, s];
    return me(e) && n.set(e, u), u
}

function Rr(e) {
    return e[0] !== "$" && !uo(e)
}

function Wr(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}

function Hr(e, t) {
    return Wr(e) === Wr(t)
}

function Fr(e, t) {
    return ne(t) ? t.findIndex(o => Hr(o, e)) : ae(t) && Hr(t, e) ? 0 : -1
}
const Ca = e => e[0] === "_" || e === "$stable",
    pr = e => ne(e) ? e.map(at) : [at(e)],
    ml = (e, t, o) => {
        if (t._n) return t;
        const n = Ne((...r) => pr(t(...r)), o);
        return n._c = !1, n
    },
    Aa = (e, t, o) => {
        const n = e._ctx;
        for (const r in e) {
            if (Ca(r)) continue;
            const i = e[r];
            if (ae(i)) t[r] = ml(0, i, n);
            else if (i != null) {
                const a = pr(i);
                t[r] = () => a
            }
        }
    },
    _a = (e, t) => {
        const o = pr(t);
        e.slots.default = () => o
    },
    vl = (e, t) => {
        const o = e.slots = Ia();
        if (32 & e.vnode.shapeFlag) {
            const n = t._;
            n ? (je(o, t), zi(o, "_", n, !0)) : Aa(t, o)
        } else t && _a(e, t)
    },
    xl = (e, t, o) => {
        const {
            vnode: n,
            slots: r
        } = e;
        let i = !0,
            a = xe;
        if (32 & n.shapeFlag) {
            const s = t._;
            s ? o && s === 1 ? i = !1 : (je(r, t), o || s !== 1 || delete r._) : (i = !t.$stable, Aa(t, r)), a = t
        } else t && (_a(e, t), a = {
            default: 1
        });
        if (i)
            for (const s in r) Ca(s) || a[s] != null || delete r[s]
    };

function Bn(e, t, o, n, r = !1) {
    if (ne(e)) return void e.forEach((b, h) => Bn(b, t && (ne(t) ? t[h] : t), o, n, r));
    if (po(n) && !r) return;
    const i = 4 & n.shapeFlag ? fn(n.component) || n.component.proxy : n.el,
        a = r ? null : i,
        {
            i: s,
            r: l
        } = e,
        u = t && t.r,
        c = s.refs === xe ? s.refs = {} : s.refs,
        p = s.setupState;
    if (u != null && u !== l && (Ie(u) ? (c[u] = null, ge(p, u) && (p[u] = null)) : Te(u) && (u.value = null)), ae(l)) Ct(l, s, 12, [a, c]);
    else {
        const b = Ie(l),
            h = Te(l);
        if (b || h) {
            const x = () => {
                if (e.f) {
                    const k = b ? ge(p, l) ? p[l] : c[l] : l.value;
                    r ? ne(k) && Jn(k, i) : ne(k) ? k.includes(i) || k.push(i) : b ? (c[l] = [i], ge(p, l) && (p[l] = c[l])) : (l.value = [i], e.k && (c[e.k] = l.value))
                } else b ? (c[l] = a, ge(p, l) && (p[l] = a)) : h && (l.value = a, e.k && (c[e.k] = a))
            };
            a ? (x.id = -1, Ue(x, o)) : x()
        }
    }
}
const Ue = function(e, t) {
    var o;
    t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : (ne(o = e) ? eo.push(...o) : wt && wt.includes(o, o.allowRecurse ? Bt + 1 : Bt) || eo.push(o), la())
};

function yl(e) {
    return function(t, o) {
        Ui().__VUE__ = !0;
        const {
            insert: n,
            remove: r,
            patchProp: i,
            createElement: a,
            createText: s,
            createComment: l,
            setText: u,
            setElementText: c,
            parentNode: p,
            nextSibling: b,
            setScopeId: h = Qe,
            insertStaticContent: x
        } = t, k = (v, I, A, O = null, V = null, G = null, Y = void 0, B = null, U = !!I.dynamicChildren) => {
            if (v === I) return;
            v && !Rt(v, I) && (O = Co(v), R(v, V, G, !0), v = null), I.patchFlag === -2 && (U = !1, I.dynamicChildren = null);
            const {
                type: _,
                ref: H,
                shapeFlag: $
            } = I;
            switch (_) {
                case dn:
                    f(v, I, A, O);
                    break;
                case Ye:
                    m(v, I, A, O);
                    break;
                case In:
                    v == null && T(I, A, O, Y);
                    break;
                case he:
                    E(v, I, A, O, V, G, Y, B, U);
                    break;
                default:
                    1 & $ ? y(v, I, A, O, V, G, Y, B, U) : 6 & $ ? q(v, I, A, O, V, G, Y, B, U) : (64 & $ || 128 & $) && _.process(v, I, A, O, V, G, Y, B, U, Ao)
            }
            H != null && V && Bn(H, v && v.ref, G, I || v, !I)
        }, f = (v, I, A, O) => {
            if (v == null) n(I.el = s(I.children), A, O);
            else {
                const V = I.el = v.el;
                I.children !== v.children && u(V, I.children)
            }
        }, m = (v, I, A, O) => {
            v == null ? n(I.el = l(I.children || ""), A, O) : I.el = v.el
        }, T = (v, I, A, O) => {
            [v.el, v.anchor] = x(v.children, I, A, O, v.el, v.anchor)
        }, g = ({
            el: v,
            anchor: I
        }, A, O) => {
            let V;
            for (; v && v !== I;) V = b(v), n(v, A, O), v = V;
            n(I, A, O)
        }, d = ({
            el: v,
            anchor: I
        }) => {
            let A;
            for (; v && v !== I;) A = b(v), r(v), v = A;
            r(I)
        }, y = (v, I, A, O, V, G, Y, B, U) => {
            I.type === "svg" ? Y = "svg" : I.type === "math" && (Y = "mathml"), v == null ? j(I, A, O, V, G, Y, B, U) : C(v, I, V, G, Y, B, U)
        }, j = (v, I, A, O, V, G, Y, B) => {
            let U, _;
            const {
                props: H,
                shapeFlag: $,
                transition: K,
                dirs: J
            } = v;
            if (U = v.el = a(v.type, G, H && H.is, H), 8 & $ ? c(U, v.children) : 16 & $ && D(v.children, U, null, O, V, Sn(v, G), Y, B), J && Gt(v, null, O, "created"), N(U, v, v.scopeId, Y, O), H) {
                for (const te in H) te === "value" || uo(te) || i(U, te, null, H[te], G, v.children, O, V, lt);
                "value" in H && i(U, "value", null, H.value, G), (_ = H.onVnodeBeforeMount) && rt(_, O, v)
            }
            J && Gt(v, null, O, "beforeMount");
            const Q = function(te, ue) {
                return (!te || te && !te.pendingBranch) && ue && !ue.persisted
            }(V, K);
            Q && K.beforeEnter(U), n(U, I, A), ((_ = H && H.onVnodeMounted) || Q || J) && Ue(() => {
                _ && rt(_, O, v), Q && K.enter(U), J && Gt(v, null, O, "mounted")
            }, V)
        }, N = (v, I, A, O, V) => {
            if (A && h(v, A), O)
                for (let G = 0; G < O.length; G++) h(v, O[G]);
            if (V && I === V.subTree) {
                const G = V.vnode;
                N(v, G, G.scopeId, G.slotScopeIds, V.parent)
            }
        }, D = (v, I, A, O, V, G, Y, B, U = 0) => {
            for (let _ = U; _ < v.length; _++) {
                const H = v[_] = B ? jt(v[_]) : at(v[_]);
                k(null, H, I, A, O, V, G, Y, B)
            }
        }, C = (v, I, A, O, V, G, Y) => {
            const B = I.el = v.el;
            let {
                patchFlag: U,
                dynamicChildren: _,
                dirs: H
            } = I;
            U |= 16 & v.patchFlag;
            const $ = v.props || xe,
                K = I.props || xe;
            let J;
            if (A && Pt(A, !1), (J = K.onVnodeBeforeUpdate) && rt(J, A, I, v), H && Gt(I, v, A, "beforeUpdate"), A && Pt(A, !0), _ ? M(v.dynamicChildren, _, B, A, O, Sn(I, V), G) : Y || se(v, I, B, null, A, O, Sn(I, V), G, !1), U > 0) {
                if (16 & U) W(B, I, $, K, A, O, V);
                else if (2 & U && $.class !== K.class && i(B, "class", null, K.class, V), 4 & U && i(B, "style", $.style, K.style, V), 8 & U) {
                    const Q = I.dynamicProps;
                    for (let te = 0; te < Q.length; te++) {
                        const ue = Q[te],
                            be = $[ue],
                            Ve = K[ue];
                        Ve === be && ue !== "value" || i(B, ue, be, Ve, V, v.children, A, O, lt)
                    }
                }
                1 & U && v.children !== I.children && c(B, I.children)
            } else Y || _ != null || W(B, I, $, K, A, O, V);
            ((J = K.onVnodeUpdated) || H) && Ue(() => {
                J && rt(J, A, I, v), H && Gt(I, v, A, "updated")
            }, O)
        }, M = (v, I, A, O, V, G, Y) => {
            for (let B = 0; B < I.length; B++) {
                const U = v[B],
                    _ = I[B],
                    H = U.el && (U.type === he || !Rt(U, _) || 70 & U.shapeFlag) ? p(U.el) : A;
                k(U, _, H, null, O, V, G, Y, !0)
            }
        }, W = (v, I, A, O, V, G, Y) => {
            if (A !== O) {
                if (A !== xe)
                    for (const B in A) uo(B) || B in O || i(v, B, A[B], null, Y, I.children, V, G, lt);
                for (const B in O) {
                    if (uo(B)) continue;
                    const U = O[B],
                        _ = A[B];
                    U !== _ && B !== "value" && i(v, B, _, U, Y, I.children, V, G, lt)
                }
                "value" in O && i(v, "value", A.value, O.value, Y)
            }
        }, E = (v, I, A, O, V, G, Y, B, U) => {
            const _ = I.el = v ? v.el : s(""),
                H = I.anchor = v ? v.anchor : s("");
            let {
                patchFlag: $,
                dynamicChildren: K,
                slotScopeIds: J
            } = I;
            J && (B = B ? B.concat(J) : J), v == null ? (n(_, A, O), n(H, A, O), D(I.children || [], A, H, V, G, Y, B, U)) : $ > 0 && 64 & $ && K && v.dynamicChildren ? (M(v.dynamicChildren, K, A, V, G, Y, B), (I.key != null || V && I === V.subTree) && Ma(v, I, !0)) : se(v, I, A, H, V, G, Y, B, U)
        }, q = (v, I, A, O, V, G, Y, B, U) => {
            I.slotScopeIds = B, v == null ? 512 & I.shapeFlag ? V.ctx.activate(I, A, O, Y, U) : de(I, A, O, V, G, Y, U) : ce(v, I, U)
        }, de = (v, I, A, O, V, G, Y) => {
            const B = v.component = function(U, _, H) {
                const $ = U.type,
                    K = (_ ? _.appContext : U.appContext) || wl,
                    J = {
                        uid: Tl++,
                        vnode: U,
                        type: $,
                        parent: _,
                        appContext: K,
                        root: null,
                        next: null,
                        subTree: null,
                        effect: null,
                        update: null,
                        scope: new Ri(!0),
                        render: null,
                        proxy: null,
                        exposed: null,
                        exposeProxy: null,
                        withProxy: null,
                        provides: _ ? _.provides : Object.create(K.provides),
                        accessCache: null,
                        renderCache: [],
                        components: null,
                        directives: null,
                        propsOptions: Na($, K),
                        emitsOptions: da($, K),
                        emit: null,
                        emitted: null,
                        propsDefaults: xe,
                        inheritAttrs: $.inheritAttrs,
                        ctx: xe,
                        data: xe,
                        props: xe,
                        attrs: xe,
                        slots: xe,
                        refs: xe,
                        setupState: xe,
                        setupContext: null,
                        attrsProxy: null,
                        slotsProxy: null,
                        suspense: H,
                        suspenseId: H ? H.pendingId : 0,
                        asyncDep: null,
                        asyncResolved: !1,
                        isMounted: !1,
                        isUnmounted: !1,
                        isDeactivated: !1,
                        bc: null,
                        c: null,
                        bm: null,
                        m: null,
                        bu: null,
                        u: null,
                        um: null,
                        bum: null,
                        da: null,
                        a: null,
                        rtg: null,
                        rtc: null,
                        ec: null,
                        sp: null
                    };
                return J.ctx = {
                    _: J
                }, J.root = _ ? _.root : J, J.emit = Ys.bind(null, J), U.ce && U.ce(J), J
            }(v, O, V);
            if (cn(v) && (B.ctx.renderer = Ao), function(U, _ = !1) {
                    _ && Rn(_);
                    const {
                        props: H,
                        children: $
                    } = U.vnode, K = Oa(U);
                    bl(U, H, K, _), vl(U, $);
                    const J = K ? function(Q, te) {
                        const ue = Q.type;
                        Q.accessCache = Object.create(null), Q.proxy = new Proxy(Q.ctx, ul);
                        const {
                            setup: be
                        } = ue;
                        if (be) {
                            const Ve = Q.setupContext = be.length > 1 ? Pa(Q) : null,
                                Fe = No(Q);
                            _t();
                            const Pe = Ct(be, Q, 0, [Q.props, Ve]);
                            if (Mt(), Fe(), Li(Pe)) {
                                if (Pe.then(Yr, Yr), te) return Pe.then(tt => {
                                    $r(Q, tt, te)
                                }).catch(tt => {
                                    ln(tt, Q, 0)
                                });
                                Q.asyncDep = Pe
                            } else $r(Q, Pe, te)
                        } else Ga(Q, te)
                    }(U, _) : void 0;
                    _ && Rn(!1)
                }(B), B.asyncDep) {
                if (V && V.registerDep(B, oe), !v.el) {
                    const U = B.subTree = X(Ye);
                    m(null, U, I, A)
                }
            } else oe(B, v, I, A, V, G, Y)
        }, ce = (v, I, A) => {
            const O = I.component = v.component;
            if (function(V, G, Y) {
                    const {
                        props: B,
                        children: U,
                        component: _
                    } = V, {
                        props: H,
                        children: $,
                        patchFlag: K
                    } = G, J = _.emitsOptions;
                    if (G.dirs || G.transition) return !0;
                    if (!(Y && K >= 0)) return !(!U && !$ || $ && $.$stable) || B !== H && (B ? !H || Or(B, H, J) : !!H);
                    if (1024 & K) return !0;
                    if (16 & K) return B ? Or(B, H, J) : !!H;
                    if (8 & K) {
                        const Q = G.dynamicProps;
                        for (let te = 0; te < Q.length; te++) {
                            const ue = Q[te];
                            if (H[ue] !== B[ue] && !$o(J, ue)) return !0
                        }
                    }
                    return !1
                }(v, I, A)) {
                if (O.asyncDep && !O.asyncResolved) return void re(O, I, A);
                O.next = I,
                    function(V) {
                        const G = Ee.indexOf(V);
                        G > st && Ee.splice(G, 1)
                    }(O.update), O.effect.dirty = !0, O.update()
            } else I.el = v.el, O.vnode = I
        }, oe = (v, I, A, O, V, G, Y) => {
            const B = () => {
                    if (v.isMounted) {
                        let {
                            next: H,
                            bu: $,
                            u: K,
                            parent: J,
                            vnode: Q
                        } = v;
                        {
                            const Fe = Va(v);
                            if (Fe) return H && (H.el = Q.el, re(v, H, Y)), void Fe.asyncDep.then(() => {
                                v.isUnmounted || B()
                            })
                        }
                        let te, ue = H;
                        Pt(v, !1), H ? (H.el = Q.el, re(v, H, Y)) : H = Q, $ && Bo($), (te = H.props && H.props.onVnodeBeforeUpdate) && rt(te, J, H, Q), Pt(v, !0);
                        const be = wn(v),
                            Ve = v.subTree;
                        v.subTree = be, k(Ve, be, p(Ve.el), Co(Ve), v, V, G), H.el = be.el, ue === null && function({
                            vnode: Fe,
                            parent: Pe
                        }, tt) {
                            for (; Pe;) {
                                const Ot = Pe.subTree;
                                if (Ot.suspense && Ot.suspense.activeBranch === Fe && (Ot.el = Fe.el), Ot !== Fe) break;
                                (Fe = Pe.vnode).el = tt, Pe = Pe.parent
                            }
                        }(v, be.el), K && Ue(K, V), (te = H.props && H.props.onVnodeUpdated) && Ue(() => rt(te, J, H, Q), V)
                    } else {
                        let H;
                        const {
                            el: $,
                            props: K
                        } = I, {
                            bm: J,
                            m: Q,
                            parent: te
                        } = v, ue = po(I);
                        if (Pt(v, !1), J && Bo(J), !ue && (H = K && K.onVnodeBeforeMount) && rt(H, te, I), Pt(v, !0), $ && jr) {
                            const be = () => {
                                v.subTree = wn(v), jr($, v.subTree, v, V, null)
                            };
                            ue ? I.type.__asyncLoader().then(() => !v.isUnmounted && be()) : be()
                        } else {
                            const be = v.subTree = wn(v);
                            k(null, be, A, O, v, V, G), I.el = be.el
                        }
                        if (Q && Ue(Q, V), !ue && (H = K && K.onVnodeMounted)) {
                            const be = I;
                            Ue(() => rt(H, te, be), V)
                        }(256 & I.shapeFlag || te && po(te.vnode) && 256 & te.vnode.shapeFlag) && v.a && Ue(v.a, V), v.isMounted = !0, I = A = O = null
                    }
                },
                U = v.effect = new qn(B, Qe, () => lr(_), v.scope),
                _ = v.update = () => {
                    U.dirty && U.run()
                };
            _.id = v.uid, Pt(v, !0), _()
        }, re = (v, I, A) => {
            I.component = v;
            const O = v.vnode.props;
            v.vnode = I, v.next = null,
                function(V, G, Y, B) {
                    const {
                        props: U,
                        attrs: _,
                        vnode: {
                            patchFlag: H
                        }
                    } = V, $ = pe(U), [K] = V.propsOptions;
                    let J = !1;
                    if (!(B || H > 0) || 16 & H) {
                        let Q;
                        Da(V, G, U, _) && (J = !0);
                        for (const te in $) G && (ge(G, te) || (Q = Yt(te)) !== te && ge(G, Q)) || (K ? !Y || Y[te] === void 0 && Y[Q] === void 0 || (U[te] = Un(K, $, te, void 0, V, !0)) : delete U[te]);
                        if (_ !== $)
                            for (const te in _) G && ge(G, te) || (delete _[te], J = !0)
                    } else if (8 & H) {
                        const Q = V.vnode.dynamicProps;
                        for (let te = 0; te < Q.length; te++) {
                            let ue = Q[te];
                            if ($o(V.emitsOptions, ue)) continue;
                            const be = G[ue];
                            if (K)
                                if (ge(_, ue)) be !== _[ue] && (_[ue] = be, J = !0);
                                else {
                                    const Ve = oo(ue);
                                    U[Ve] = Un(K, $, Ve, be, V, !1)
                                }
                            else be !== _[ue] && (_[ue] = be, J = !0)
                        }
                    }
                    J && dt(V.attrs, "set", "")
                }(v, I.props, O, A), xl(v, I.children, A), _t(), Lr(v), Mt()
        }, se = (v, I, A, O, V, G, Y, B, U = !1) => {
            const _ = v && v.children,
                H = v ? v.shapeFlag : 0,
                $ = I.children,
                {
                    patchFlag: K,
                    shapeFlag: J
                } = I;
            if (K > 0) {
                if (128 & K) return void L(_, $, A, O, V, G, Y, B, U);
                if (256 & K) return void z(_, $, A, O, V, G, Y, B, U)
            }
            8 & J ? (16 & H && lt(_, V, G), $ !== _ && c(A, $)) : 16 & H ? 16 & J ? L(_, $, A, O, V, G, Y, B, U) : lt(_, V, G, !0) : (8 & H && c(A, ""), 16 & J && D($, A, O, V, G, Y, B, U))
        }, z = (v, I, A, O, V, G, Y, B, U) => {
            I = I || Qt;
            const _ = (v = v || Qt).length,
                H = I.length,
                $ = Math.min(_, H);
            let K;
            for (K = 0; K < $; K++) {
                const J = I[K] = U ? jt(I[K]) : at(I[K]);
                k(v[K], J, A, null, V, G, Y, B, U)
            }
            _ > H ? lt(v, V, G, !0, !1, $) : D(I, A, O, V, G, Y, B, U, $)
        }, L = (v, I, A, O, V, G, Y, B, U) => {
            let _ = 0;
            const H = I.length;
            let $ = v.length - 1,
                K = H - 1;
            for (; _ <= $ && _ <= K;) {
                const J = v[_],
                    Q = I[_] = U ? jt(I[_]) : at(I[_]);
                if (!Rt(J, Q)) break;
                k(J, Q, A, null, V, G, Y, B, U), _++
            }
            for (; _ <= $ && _ <= K;) {
                const J = v[$],
                    Q = I[K] = U ? jt(I[K]) : at(I[K]);
                if (!Rt(J, Q)) break;
                k(J, Q, A, null, V, G, Y, B, U), $--, K--
            }
            if (_ > $) {
                if (_ <= K) {
                    const J = K + 1,
                        Q = J < H ? I[J].el : O;
                    for (; _ <= K;) k(null, I[_] = U ? jt(I[_]) : at(I[_]), A, Q, V, G, Y, B, U), _++
                }
            } else if (_ > K)
                for (; _ <= $;) R(v[_], V, G, !0), _++;
            else {
                const J = _,
                    Q = _,
                    te = new Map;
                for (_ = Q; _ <= K; _++) {
                    const Se = I[_] = U ? jt(I[_]) : at(I[_]);
                    Se.key != null && te.set(Se.key, _)
                }
                let ue, be = 0;
                const Ve = K - Q + 1;
                let Fe = !1,
                    Pe = 0;
                const tt = new Array(Ve);
                for (_ = 0; _ < Ve; _++) tt[_] = 0;
                for (_ = J; _ <= $; _++) {
                    const Se = v[_];
                    if (be >= Ve) {
                        R(Se, V, G, !0);
                        continue
                    }
                    let ze;
                    if (Se.key != null) ze = te.get(Se.key);
                    else
                        for (ue = Q; ue <= K; ue++)
                            if (tt[ue - Q] === 0 && Rt(Se, I[ue])) {
                                ze = ue;
                                break
                            } ze === void 0 ? R(Se, V, G, !0) : (tt[ze - Q] = _ + 1, ze >= Pe ? Pe = ze : Fe = !0, k(Se, I[ze], A, null, V, G, Y, B, U), be++)
                }
                const Ot = Fe ? function(Se) {
                    const ze = Se.slice(),
                        Le = [0];
                    let ht, vn, Ke, bt, _o;
                    const ds = Se.length;
                    for (ht = 0; ht < ds; ht++) {
                        const Mo = Se[ht];
                        if (Mo !== 0) {
                            if (vn = Le[Le.length - 1], Se[vn] < Mo) {
                                ze[ht] = vn, Le.push(ht);
                                continue
                            }
                            for (Ke = 0, bt = Le.length - 1; Ke < bt;) _o = Ke + bt >> 1, Se[Le[_o]] < Mo ? Ke = _o + 1 : bt = _o;
                            Mo < Se[Le[Ke]] && (Ke > 0 && (ze[ht] = Le[Ke - 1]), Le[Ke] = ht)
                        }
                    }
                    for (Ke = Le.length, bt = Le[Ke - 1]; Ke-- > 0;) Le[Ke] = bt, bt = ze[bt];
                    return Le
                }(tt) : Qt;
                for (ue = Ot.length - 1, _ = Ve - 1; _ >= 0; _--) {
                    const Se = Q + _,
                        ze = I[Se],
                        Le = Se + 1 < H ? I[Se + 1].el : O;
                    tt[_] === 0 ? k(null, ze, A, Le, V, G, Y, B, U) : Fe && (ue < 0 || _ !== Ot[ue] ? P(ze, A, Le, 2) : ue--)
                }
            }
        }, P = (v, I, A, O, V = null) => {
            const {
                el: G,
                type: Y,
                transition: B,
                children: U,
                shapeFlag: _
            } = v;
            if (6 & _) return void P(v.component.subTree, I, A, O);
            if (128 & _) return void v.suspense.move(I, A, O);
            if (64 & _) return void Y.move(v, I, A, Ao);
            if (Y === he) {
                n(G, I, A);
                for (let H = 0; H < U.length; H++) P(U[H], I, A, O);
                return void n(v.anchor, I, A)
            }
            if (Y === In) return void g(v, I, A);
            if (O !== 2 && 1 & _ && B)
                if (O === 0) B.beforeEnter(G), n(G, I, A), Ue(() => B.enter(G), V);
                else {
                    const {
                        leave: H,
                        delayLeave: $,
                        afterLeave: K
                    } = B, J = () => n(G, I, A), Q = () => {
                        H(G, () => {
                            J(), K && K()
                        })
                    };
                    $ ? $(G, J, Q) : Q()
                }
            else n(G, I, A)
        }, R = (v, I, A, O = !1, V = !1) => {
            const {
                type: G,
                props: Y,
                ref: B,
                children: U,
                dynamicChildren: _,
                shapeFlag: H,
                patchFlag: $,
                dirs: K
            } = v;
            if (B != null && Bn(B, null, A, v, !0), 256 & H) return void I.ctx.deactivate(v);
            const J = 1 & H && K,
                Q = !po(v);
            let te;
            if (Q && (te = Y && Y.onVnodeBeforeUnmount) && rt(te, I, v), 6 & H) us(v.component, A, O);
            else {
                if (128 & H) return void v.suspense.unmount(A, O);
                J && Gt(v, null, I, "beforeUnmount"), 64 & H ? v.type.remove(v, I, A, V, Ao, O) : _ && (G !== he || $ > 0 && 64 & $) ? lt(_, I, A, !1, !0) : (G === he && 384 & $ || !V && 16 & H) && lt(U, I, A), O && yr(v)
            }(Q && (te = Y && Y.onVnodeUnmounted) || J) && Ue(() => {
                te && rt(te, I, v), J && Gt(v, null, I, "unmounted")
            }, A)
        }, yr = v => {
            const {
                type: I,
                el: A,
                anchor: O,
                transition: V
            } = v;
            if (I === he) return void cs(A, O);
            if (I === In) return void d(v);
            const G = () => {
                r(A), V && !V.persisted && V.afterLeave && V.afterLeave()
            };
            if (1 & v.shapeFlag && V && !V.persisted) {
                const {
                    leave: Y,
                    delayLeave: B
                } = V, U = () => Y(A, G);
                B ? B(v.el, G, U) : U()
            } else G()
        }, cs = (v, I) => {
            let A;
            for (; v !== I;) A = b(v), r(v), v = A;
            r(I)
        }, us = (v, I, A) => {
            const {
                bum: O,
                scope: V,
                update: G,
                subTree: Y,
                um: B
            } = v;
            O && Bo(O), V.stop(), G && (G.active = !1, R(Y, v, I, A)), B && Ue(B, I), Ue(() => {
                v.isUnmounted = !0
            }, I), I && I.pendingBranch && !I.isUnmounted && v.asyncDep && !v.asyncResolved && v.suspenseId === I.pendingId && (I.deps--, I.deps === 0 && I.resolve())
        }, lt = (v, I, A, O = !1, V = !1, G = 0) => {
            for (let Y = G; Y < v.length; Y++) R(v[Y], I, A, O, V)
        }, Co = v => 6 & v.shapeFlag ? Co(v.component.subTree) : 128 & v.shapeFlag ? v.suspense.next() : b(v.anchor || v.el);
        let mn = !1;
        const wr = (v, I, A) => {
                v == null ? I._vnode && R(I._vnode, null, null, !0) : k(I._vnode || null, v, I, null, null, null, A), mn || (mn = !0, Lr(), ca(), mn = !1), I._vnode = v
            },
            Ao = {
                p: k,
                um: R,
                m: P,
                r: yr,
                mt: de,
                mc: D,
                pc: se,
                pbc: M,
                n: Co,
                o: t
            };
        let Tr, jr;
        return {
            render: wr,
            hydrate: Tr,
            createApp: hl(wr, Tr)
        }
    }(e)
}

function Sn({
    type: e,
    props: t
}, o) {
    return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o
}

function Pt({
    effect: e,
    update: t
}, o) {
    e.allowRecurse = t.allowRecurse = o
}

function Ma(e, t, o = !1) {
    const n = e.children,
        r = t.children;
    if (ne(n) && ne(r))
        for (let i = 0; i < n.length; i++) {
            const a = n[i];
            let s = r[i];
            1 & s.shapeFlag && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = r[i] = jt(r[i]), s.el = a.el), o || Ma(a, s)), s.type === dn && (s.el = a.el)
        }
}

function Va(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Va(t)
}
const he = Symbol.for("v-fgt"),
    dn = Symbol.for("v-txt"),
    Ye = Symbol.for("v-cmt"),
    In = Symbol.for("v-stc"),
    ho = [];
let ot = null;

function Z(e = !1) {
    ho.push(ot = e ? null : [])
}
let So = 1;

function Zr(e) {
    So += e
}

function Ea(e) {
    return e.dynamicChildren = So > 0 ? ot || Qt : null, ho.pop(), ot = ho[ho.length - 1] || null, So > 0 && ot && ot.push(e), e
}

function ee(e, t, o, n, r, i) {
    return Ea(w(e, t, o, n, r, i, !0))
}

function _e(e, t, o, n, r) {
    return Ea(X(e, t, o, n, r, !0))
}

function en(e) {
    return !!e && e.__v_isVNode === !0
}

function Rt(e, t) {
    return e.type === t.type && e.key === t.key
}
const La = ({
        key: e
    }) => e ?? null,
    Wo = ({
        ref: e,
        ref_key: t,
        ref_for: o
    }) => (typeof e == "number" && (e = "" + e), e != null ? Ie(e) || Te(e) || ae(e) ? {
        i: ke,
        r: e,
        k: t,
        f: !!o
    } : e : null);

function w(e, t = null, o = null, n = 0, r = null, i = e === he ? 0 : 1, a = !1, s = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && La(t),
        ref: t && Wo(t),
        scopeId: Jo,
        slotScopeIds: null,
        children: o,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: n,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: ke
    };
    return s ? (fr(l, o), 128 & i && e.normalize(l)) : o && (l.shapeFlag |= Ie(o) ? 8 : 16), So > 0 && !a && ot && (l.patchFlag > 0 || 6 & i) && l.patchFlag !== 32 && ot.push(l), l
}
const X = function(e, t = null, o = null, n = 0, r = null, i = !1) {
    if (e && e !== Js || (e = Ye), en(e)) {
        const l = Vt(e, t, !0);
        return o && fr(l, o), So > 0 && !i && ot && (6 & l.shapeFlag ? ot[ot.indexOf(e)] = l : ot.push(l)), l.patchFlag |= -2, l
    }
    a = e, ae(a) && "__vccOpts" in a && (e = e.__vccOpts);
    var a;
    if (t) {
        t = function(c) {
            return c ? Er(c) || ka(c) ? je({}, c) : c : null
        }(t);
        let {
            class: l,
            style: u
        } = t;
        l && !Ie(l) && (t.class = We(l)), me(u) && (Er(u) && !ne(u) && (u = je({}, u)), t.style = ao(u))
    }
    const s = Ie(e) ? 1 : (l => l.__isSuspense)(e) ? 128 : (l => l.__isTeleport)(e) ? 64 : me(e) ? 4 : ae(e) ? 2 : 0;
    return w(e, t, o, n, r, s, i, !0)
};

function Vt(e, t, o = !1, n = !1) {
    const {
        props: r,
        ref: i,
        patchFlag: a,
        children: s,
        transition: l
    } = e, u = t ? function(...p) {
        const b = {};
        for (let h = 0; h < p.length; h++) {
            const x = p[h];
            for (const k in x)
                if (k === "class") b.class !== x.class && (b.class = We([b.class, x.class]));
                else if (k === "style") b.style = ao([b.style, x.style]);
            else if (rn(k)) {
                const f = b[k],
                    m = x[k];
                !m || f === m || ne(f) && f.includes(m) || (b[k] = f ? [].concat(f, m) : m)
            } else k !== "" && (b[k] = x[k])
        }
        return b
    }(r || {}, t) : r, c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && La(u),
        ref: t && t.ref ? o && i ? ne(i) ? i.concat(Wo(t)) : [i, Wo(t)] : Wo(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== he ? a === -1 ? 16 : 16 | a : a,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Vt(e.ssContent),
        ssFallback: e.ssFallback && Vt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return l && n && (c.transition = l.clone(c)), c
}

function Je(e = " ", t = 0) {
    return X(dn, null, e, t)
}

function et(e = "", t = !1) {
    return t ? (Z(), _e(Ye, null, e)) : X(Ye, null, e)
}

function at(e) {
    return e == null || typeof e == "boolean" ? X(Ye) : ne(e) ? X(he, null, e.slice()) : typeof e == "object" ? jt(e) : X(dn, null, String(e))
}

function jt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vt(e)
}

function fr(e, t) {
    let o = 0;
    const {
        shapeFlag: n
    } = e;
    if (t == null) t = null;
    else if (ne(t)) o = 16;
    else if (typeof t == "object") {
        if (65 & n) {
            const r = t.default;
            return void(r && (r._c && (r._d = !1), fr(e, r()), r._c && (r._d = !0)))
        } {
            o = 32;
            const r = t._;
            r || ka(t) ? r === 3 && ke && (ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = ke
        }
    } else ae(t) ? (t = {
        default: t,
        _ctx: ke
    }, o = 32) : (t = String(t), 64 & n ? (o = 16, t = [Je(t)]) : o = 8);
    e.children = t, e.shapeFlag |= o
}

function rt(e, t, o, n = null) {
    qe(e, t, 7, [o, n])
}
const wl = ja();
let Tl = 0,
    Me = null;
const gr = () => Me || ke;
let tn, Rn;
{
    const e = Ui(),
        t = (o, n) => {
            let r;
            return (r = e[o]) || (r = e[o] = []), r.push(n), i => {
                r.length > 1 ? r.forEach(a => a(i)) : r[0](i)
            }
        };
    tn = t("__VUE_INSTANCE_SETTERS__", o => Me = o), Rn = t("__VUE_SSR_SETTERS__", o => pn = o)
}
const No = e => {
        const t = Me;
        return tn(e), e.scope.on(), () => {
            e.scope.off(), tn(t)
        }
    },
    Yr = () => {
        Me && Me.scope.off(), tn(null)
    };

function Oa(e) {
    return 4 & e.vnode.shapeFlag
}
let Kr, pn = !1;

function $r(e, t, o) {
    ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) && (e.setupState = ia(t)), Ga(e, o)
}

function Ga(e, t, o) {
    const n = e.type;
    if (!e.render) {
        if (!t && Kr && !n.render) {
            const r = n.template || dr(e).template;
            if (r) {
                const {
                    isCustomElement: i,
                    compilerOptions: a
                } = e.appContext.config, {
                    delimiters: s,
                    compilerOptions: l
                } = n, u = je(je({
                    isCustomElement: i,
                    delimiters: s
                }, a), l);
                n.render = Kr(r, u)
            }
        }
        e.render = n.render || Qe
    } {
        const r = No(e);
        _t();
        try {
            pl(e)
        } finally {
            Mt(), r()
        }
    }
}
const jl = {
    get: (e, t) => (He(e, 0, ""), e[t])
};

function Pa(e) {
    const t = o => {
        e.exposed = o || {}
    };
    return {
        attrs: new Proxy(e.attrs, jl),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function fn(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(ia(ir(e.exposed)), {
        get: (t, o) => o in t ? t[o] : o in fo ? fo[o](e) : void 0,
        has: (t, o) => o in t || o in fo
    }))
}
const De = (e, t) => function(n, r, i = !1) {
        let a, s;
        const l = ae(n);
        return l ? (a = n, s = Qe) : (a = n.get, s = n.set), new na(a, s, l || !s, i)
    }(e, 0, pn),
    Sl = "3.4.27",
    St = typeof document < "u" ? document : null,
    Jr = St && St.createElement("template"),
    Il = {
        insert: (e, t, o) => {
            t.insertBefore(e, o || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, o, n) => {
            const r = t === "svg" ? St.createElementNS("http://www.w3.org/2000/svg", e) : t === "mathml" ? St.createElementNS("http://www.w3.org/1998/Math/MathML", e) : St.createElement(e, o ? {
                is: o
            } : void 0);
            return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r
        },
        createText: e => St.createTextNode(e),
        createComment: e => St.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => St.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, o, n, r, i) {
            const a = o ? o.previousSibling : t.lastChild;
            if (r && (r === i || r.nextSibling))
                for (; t.insertBefore(r.cloneNode(!0), o), r !== i && (r = r.nextSibling););
            else {
                Jr.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
                const s = Jr.content;
                if (n === "svg" || n === "mathml") {
                    const l = s.firstChild;
                    for (; l.firstChild;) s.appendChild(l.firstChild);
                    s.removeChild(l)
                }
                t.insertBefore(s, o)
            }
            return [a ? a.nextSibling : t.firstChild, o ? o.previousSibling : t.lastChild]
        }
    },
    vt = "transition",
    lo = "animation",
    no = Symbol("_vtc"),
    hr = (e, {
        slots: t
    }) => function(o, n, r) {
        const i = arguments.length;
        return i === 2 ? me(n) && !ne(n) ? en(n) ? X(o, null, [n]) : X(o, n) : X(o, null, n) : (i > 3 ? r = Array.prototype.slice.call(arguments, 2) : i === 3 && en(r) && (r = [r]), X(o, n, r))
    }(el, Ua(e), t);
hr.displayName = "Transition";
const za = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    kl = hr.props = je({}, ha, za),
    zt = (e, t = []) => {
        ne(e) ? e.forEach(o => o(...t)) : e && e(...t)
    },
    Xr = e => !!e && (ne(e) ? e.some(t => t.length > 1) : e.length > 1);

function Ua(e) {
    const t = {};
    for (const E in e) E in za || (t[E] = e[E]);
    if (e.css === !1) return t;
    const {
        name: o = "v",
        type: n,
        duration: r,
        enterFromClass: i = `${o}-enter-from`,
        enterActiveClass: a = `${o}-enter-active`,
        enterToClass: s = `${o}-enter-to`,
        appearFromClass: l = i,
        appearActiveClass: u = a,
        appearToClass: c = s,
        leaveFromClass: p = `${o}-leave-from`,
        leaveActiveClass: b = `${o}-leave-active`,
        leaveToClass: h = `${o}-leave-to`
    } = e, x = function(E) {
        if (E == null) return null;
        if (me(E)) return [kn(E.enter), kn(E.leave)];
        {
            const q = kn(E);
            return [q, q]
        }
    }(r), k = x && x[0], f = x && x[1], {
        onBeforeEnter: m,
        onEnter: T,
        onEnterCancelled: g,
        onLeave: d,
        onLeaveCancelled: y,
        onBeforeAppear: j = m,
        onAppear: N = T,
        onAppearCancelled: D = g
    } = t, C = (E, q, de) => {
        xt(E, q ? c : s), xt(E, q ? u : a), de && de()
    }, M = (E, q) => {
        E._isLeaving = !1, xt(E, p), xt(E, h), xt(E, b), q && q()
    }, W = E => (q, de) => {
        const ce = E ? N : T,
            oe = () => C(q, E, de);
        zt(ce, [q, oe]), Qr(() => {
            xt(q, E ? l : i), ut(q, E ? c : s), Xr(ce) || qr(q, n, k, oe)
        })
    };
    return je(t, {
        onBeforeEnter(E) {
            zt(m, [E]), ut(E, i), ut(E, a)
        },
        onBeforeAppear(E) {
            zt(j, [E]), ut(E, l), ut(E, u)
        },
        onEnter: W(!1),
        onAppear: W(!0),
        onLeave(E, q) {
            E._isLeaving = !0;
            const de = () => M(E, q);
            ut(E, p), ut(E, b), Ra(), Qr(() => {
                E._isLeaving && (xt(E, p), ut(E, h), Xr(d) || qr(E, n, f, de))
            }), zt(d, [E, de])
        },
        onEnterCancelled(E) {
            C(E, !1), zt(g, [E])
        },
        onAppearCancelled(E) {
            C(E, !0), zt(D, [E])
        },
        onLeaveCancelled(E) {
            M(E), zt(y, [E])
        }
    })
}

function kn(e) {
    return xs(e)
}

function ut(e, t) {
    t.split(/\s+/).forEach(o => o && e.classList.add(o)), (e[no] || (e[no] = new Set)).add(t)
}

function xt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.remove(n));
    const o = e[no];
    o && (o.delete(t), o.size || (e[no] = void 0))
}

function Qr(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let Dl = 0;

function qr(e, t, o, n) {
    const r = e._endId = ++Dl,
        i = () => {
            r === e._endId && n()
        };
    if (o) return setTimeout(i, o);
    const {
        type: a,
        timeout: s,
        propCount: l
    } = Ba(e, t);
    if (!a) return n();
    const u = a + "end";
    let c = 0;
    const p = () => {
            e.removeEventListener(u, b), i()
        },
        b = h => {
            h.target === e && ++c >= l && p()
        };
    setTimeout(() => {
        c < l && p()
    }, s + 1), e.addEventListener(u, b)
}

function Ba(e, t) {
    const o = window.getComputedStyle(e),
        n = h => (o[h] || "").split(", "),
        r = n(`${vt}Delay`),
        i = n(`${vt}Duration`),
        a = ei(r, i),
        s = n(`${lo}Delay`),
        l = n(`${lo}Duration`),
        u = ei(s, l);
    let c = null,
        p = 0,
        b = 0;
    return t === vt ? a > 0 && (c = vt, p = a, b = i.length) : t === lo ? u > 0 && (c = lo, p = u, b = l.length) : (p = Math.max(a, u), c = p > 0 ? a > u ? vt : lo : null, b = c ? c === vt ? i.length : l.length : 0), {
        type: c,
        timeout: p,
        propCount: b,
        hasTransform: c === vt && /\b(transform|all)(,|$)/.test(n(`${vt}Property`).toString())
    }
}

function ei(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((o, n) => ti(o) + ti(e[n])))
}

function ti(e) {
    return e === "auto" ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."))
}

function Ra() {
    return document.body.offsetHeight
}
const on = Symbol("_vod"),
    Wa = Symbol("_vsh"),
    we = {
        beforeMount(e, {
            value: t
        }, {
            transition: o
        }) {
            e[on] = e.style.display === "none" ? "" : e.style.display, o && t ? o.beforeEnter(e) : co(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: o
        }) {
            o && t && o.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: o
        }, {
            transition: n
        }) {
            !t != !o && (n ? t ? (n.beforeEnter(e), co(e, !0), n.enter(e)) : n.leave(e, () => {
                co(e, !1)
            }) : co(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            co(e, t)
        }
    };

function co(e, t) {
    e.style.display = t ? e[on] : "none", e[Wa] = !t
}
const Nl = Symbol(""),
    Cl = /(^|;)\s*display\s*:/,
    oi = /\s*!important$/;

function Ho(e, t, o) {
    if (ne(o)) o.forEach(n => Ho(e, t, n));
    else if (o == null && (o = ""), t.startsWith("--")) e.setProperty(t, o);
    else {
        const n = function(r, i) {
            const a = Dn[i];
            if (a) return a;
            let s = oo(i);
            if (s !== "filter" && s in r) return Dn[i] = s;
            s = Pi(s);
            for (let l = 0; l < ni.length; l++) {
                const u = ni[l] + s;
                if (u in r) return Dn[i] = u
            }
            return i
        }(e, t);
        oi.test(o) ? e.setProperty(Yt(n), o.replace(oi, ""), "important") : e[n] = o
    }
}
const ni = ["Webkit", "Moz", "ms"],
    Dn = {},
    ri = "http://www.w3.org/1999/xlink";

function kt(e, t, o, n) {
    e.addEventListener(t, o, n)
}
const ii = Symbol("_vei");

function Al(e, t, o, n, r = null) {
    const i = e[ii] || (e[ii] = {}),
        a = i[t];
    if (n && a) a.value = n;
    else {
        const [s, l] = function(u) {
            let c;
            if (ai.test(u)) {
                let b;
                for (c = {}; b = u.match(ai);) u = u.slice(0, u.length - b[0].length), c[b[0].toLowerCase()] = !0
            }
            return [u[2] === ":" ? u.slice(3) : Yt(u.slice(2)), c]
        }(t);
        if (n) {
            const u = i[t] = function(c, p) {
                const b = h => {
                    if (h._vts) {
                        if (h._vts <= b.attached) return
                    } else h._vts = Date.now();
                    qe(function(x, k) {
                        if (ne(k)) {
                            const f = x.stopImmediatePropagation;
                            return x.stopImmediatePropagation = () => {
                                f.call(x), x._stopped = !0
                            }, k.map(m => T => !T._stopped && m && m(T))
                        }
                        return k
                    }(h, b.value), p, 5, [h])
                };
                return b.value = c, b.attached = Ml(), b
            }(n, r);
            kt(e, s, u, l)
        } else a && (function(u, c, p, b) {
            u.removeEventListener(c, p, b)
        }(e, s, a, l), i[t] = void 0)
    }
}
const ai = /(?:Once|Passive|Capture)$/;
let Nn = 0;
const _l = Promise.resolve(),
    Ml = () => Nn || (_l.then(() => Nn = 0), Nn = Date.now()),
    si = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    Ha = new WeakMap,
    Fa = new WeakMap,
    nn = Symbol("_moveCb"),
    li = Symbol("_enterCb"),
    Vl = {
        name: "TransitionGroup",
        props: je({}, kl, {
            tag: String,
            moveClass: String
        }),
        setup(e, {
            slots: t
        }) {
            const o = gr(),
                n = ga();
            let r, i;
            return va(() => {
                if (!r.length) return;
                const a = e.moveClass || `${e.name || "v"}-move`;
                if (! function(l, u, c) {
                        const p = l.cloneNode(),
                            b = l[no];
                        b && b.forEach(k => {
                            k.split(/\s+/).forEach(f => f && p.classList.remove(f))
                        }), c.split(/\s+/).forEach(k => k && p.classList.add(k)), p.style.display = "none";
                        const h = u.nodeType === 1 ? u : u.parentNode;
                        h.appendChild(p);
                        const {
                            hasTransform: x
                        } = Ba(p);
                        return h.removeChild(p), x
                    }(r[0].el, o.vnode.el, a)) return;
                r.forEach(Ll), r.forEach(Ol);
                const s = r.filter(Gl);
                Ra(), s.forEach(l => {
                    const u = l.el,
                        c = u.style;
                    ut(u, a), c.transform = c.webkitTransform = c.transitionDuration = "";
                    const p = u[nn] = b => {
                        b && b.target !== u || b && !/transform$/.test(b.propertyName) || (u.removeEventListener("transitionend", p), u[nn] = null, xt(u, a))
                    };
                    u.addEventListener("transitionend", p)
                })
            }), () => {
                const a = pe(e),
                    s = Ua(a);
                let l = a.tag || he;
                if (r = [], i)
                    for (let u = 0; u < i.length; u++) {
                        const c = i[u];
                        c.el && c.el instanceof Element && (r.push(c), jo(c, To(c, s, n, o)), Ha.set(c, c.el.getBoundingClientRect()))
                    }
                i = t.default ? cr(t.default()) : [];
                for (let u = 0; u < i.length; u++) {
                    const c = i[u];
                    c.key != null && jo(c, To(c, s, n, o))
                }
                return X(l, null, i)
            }
        }
    },
    El = Vl;

function Ll(e) {
    const t = e.el;
    t[nn] && t[nn](), t[li] && t[li]()
}

function Ol(e) {
    Fa.set(e, e.el.getBoundingClientRect())
}

function Gl(e) {
    const t = Ha.get(e),
        o = Fa.get(e),
        n = t.left - o.left,
        r = t.top - o.top;
    if (n || r) {
        const i = e.el.style;
        return i.transform = i.webkitTransform = `translate(${n}px,${r}px)`, i.transitionDuration = "0s", e
    }
}
const ro = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return ne(t) ? o => Bo(t, o) : t
};

function Pl(e) {
    e.target.composing = !0
}

function ci(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const pt = Symbol("_assign"),
    Be = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: o,
                number: n
            }
        }, r) {
            e[pt] = ro(r);
            const i = n || r.props && r.props.type === "number";
            kt(e, t ? "change" : "input", a => {
                if (a.target.composing) return;
                let s = e.value;
                o && (s = s.trim()), i && (s = Zo(s)), e[pt](s)
            }), o && kt(e, "change", () => {
                e.value = e.value.trim()
            }), t || (kt(e, "compositionstart", Pl), kt(e, "compositionend", ci), kt(e, "change", ci))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ?? ""
        },
        beforeUpdate(e, {
            value: t,
            modifiers: {
                lazy: o,
                trim: n,
                number: r
            }
        }, i) {
            if (e[pt] = ro(i), e.composing) return;
            const a = t ?? "";
            if ((!r && e.type !== "number" || /^0\d/.test(e.value) ? e.value : Zo(e.value)) !== a) {
                if (document.activeElement === e && e.type !== "range" && (o || n && e.value.trim() === a)) return;
                e.value = a
            }
        }
    },
    Za = {
        deep: !0,
        created(e, t, o) {
            e[pt] = ro(o), kt(e, "change", () => {
                const n = e._modelValue,
                    r = Io(e),
                    i = e.checked,
                    a = e[pt];
                if (ne(n)) {
                    const s = Qn(n, r),
                        l = s !== -1;
                    if (i && !l) a(n.concat(r));
                    else if (!i && l) {
                        const u = [...n];
                        u.splice(s, 1), a(u)
                    }
                } else if (io(n)) {
                    const s = new Set(n);
                    i ? s.add(r) : s.delete(r), a(s)
                } else a(Ya(e, i))
            })
        },
        mounted: ui,
        beforeUpdate(e, t, o) {
            e[pt] = ro(o), ui(e, t, o)
        }
    };

function ui(e, {
    value: t,
    oldValue: o
}, n) {
    e._modelValue = t, ne(t) ? e.checked = Qn(t, n.props.value) > -1 : io(t) ? e.checked = t.has(n.props.value) : t !== o && (e.checked = mo(t, Ya(e, !0)))
}
const Wn = {
    deep: !0,
    created(e, {
        value: t,
        modifiers: {
            number: o
        }
    }, n) {
        const r = io(t);
        kt(e, "change", () => {
            const i = Array.prototype.filter.call(e.options, a => a.selected).map(a => o ? Zo(Io(a)) : Io(a));
            e[pt](e.multiple ? r ? new Set(i) : i : i[0]), e._assigning = !0, Do(() => {
                e._assigning = !1
            })
        }), e[pt] = ro(n)
    },
    mounted(e, {
        value: t,
        modifiers: {
            number: o
        }
    }) {
        di(e, t)
    },
    beforeUpdate(e, t, o) {
        e[pt] = ro(o)
    },
    updated(e, {
        value: t,
        modifiers: {
            number: o
        }
    }) {
        e._assigning || di(e, t)
    }
};

function di(e, t, o) {
    const n = e.multiple,
        r = ne(t);
    if (!n || r || io(t)) {
        for (let i = 0, a = e.options.length; i < a; i++) {
            const s = e.options[i],
                l = Io(s);
            if (n)
                if (r) {
                    const u = typeof l;
                    s.selected = u === "string" || u === "number" ? t.some(c => String(c) === String(l)) : Qn(t, l) > -1
                } else s.selected = t.has(l);
            else if (mo(Io(s), t)) return void(e.selectedIndex !== i && (e.selectedIndex = i))
        }
        n || e.selectedIndex === -1 || (e.selectedIndex = -1)
    }
}

function Io(e) {
    return "_value" in e ? e._value : e.value
}

function Ya(e, t) {
    const o = t ? "_trueValue" : "_falseValue";
    return o in e ? e[o] : t
}
const zl = ["ctrl", "shift", "alt", "meta"],
    Ul = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => zl.some(o => e[`${o}Key`] && !t.includes(o))
    },
    ie = (e, t) => {
        const o = e._withMods || (e._withMods = {}),
            n = t.join(".");
        return o[n] || (o[n] = (r, ...i) => {
            for (let a = 0; a < t.length; a++) {
                const s = Ul[t[a]];
                if (s && s(r, t)) return
            }
            return e(r, ...i)
        })
    },
    Bl = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    Zt = (e, t) => {
        const o = e._withKeys || (e._withKeys = {}),
            n = t.join(".");
        return o[n] || (o[n] = r => {
            if (!("key" in r)) return;
            const i = Yt(r.key);
            return t.some(a => a === i || Bl[a] === i) ? e(r) : void 0
        })
    },
    Rl = je({
        patchProp: (e, t, o, n, r, i, a, s, l) => {
            const u = r === "svg";
            t === "class" ? function(c, p, b) {
                const h = c[no];
                h && (p = (p ? [p, ...h] : [...h]).join(" ")), p == null ? c.removeAttribute("class") : b ? c.setAttribute("class", p) : c.className = p
            }(e, n, u) : t === "style" ? function(c, p, b) {
                const h = c.style,
                    x = Ie(b);
                let k = !1;
                if (b && !x) {
                    if (p)
                        if (Ie(p))
                            for (const f of p.split(";")) {
                                const m = f.slice(0, f.indexOf(":")).trim();
                                b[m] == null && Ho(h, m, "")
                            } else
                                for (const f in p) b[f] == null && Ho(h, f, "");
                    for (const f in b) f === "display" && (k = !0), Ho(h, f, b[f])
                } else if (x) {
                    if (p !== b) {
                        const f = h[Nl];
                        f && (b += ";" + f), h.cssText = b, k = Cl.test(b)
                    }
                } else p && c.removeAttribute("style");
                on in c && (c[on] = k ? h.display : "", c[Wa] && (h.display = "none"))
            }(e, o, n) : rn(t) ? $n(t) || Al(e, t, 0, n, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : function(c, p, b, h) {
                if (h) return p === "innerHTML" || p === "textContent" || !!(p in c && si(p) && ae(b));
                if (p === "spellcheck" || p === "draggable" || p === "translate" || p === "form" || p === "list" && c.tagName === "INPUT" || p === "type" && c.tagName === "TEXTAREA") return !1;
                if (p === "width" || p === "height") {
                    const x = c.tagName;
                    if (x === "IMG" || x === "VIDEO" || x === "CANVAS" || x === "SOURCE") return !1
                }
                return si(p) && Ie(b) ? !1 : p in c
            }(e, t, n, u)) ? function(c, p, b, h, x, k, f) {
                if (p === "innerHTML" || p === "textContent") return h && f(h, x, k), void(c[p] = b ?? "");
                const m = c.tagName;
                if (p === "value" && m !== "PROGRESS" && !m.includes("-")) {
                    const g = b ?? "";
                    return (m === "OPTION" ? c.getAttribute("value") || "" : c.value) === g && "_value" in c || (c.value = g), b == null && c.removeAttribute(p), void(c._value = b)
                }
                let T = !1;
                if (b === "" || b == null) {
                    const g = typeof c[p];
                    g === "boolean" ? b = kr(b) : b == null && g === "string" ? (b = "", T = !0) : g === "number" && (b = 0, T = !0)
                }
                try {
                    c[p] = b
                } catch {}
                T && c.removeAttribute(p)
            }(e, t, n, i, a, s, l) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), function(c, p, b, h, x) {
                if (h && p.startsWith("xlink:")) b == null ? c.removeAttributeNS(ri, p.slice(6, p.length)) : c.setAttributeNS(ri, p, b);
                else {
                    const k = Ss(p);
                    b == null || k && !kr(b) ? c.removeAttribute(p) : c.setAttribute(p, k ? "" : b)
                }
            }(e, t, n, u))
        }
    }, Il);
let pi;
const Wl = (...e) => {
    const t = (pi || (pi = yl(Rl))).createApp(...e),
        {
            mount: o
        } = t;
    return t.mount = n => {
        const r = function(s) {
            return Ie(s) ? document.querySelector(s) : s
        }(n);
        if (!r) return;
        const i = t._component;
        ae(i) || i.render || i.template || (i.template = r.innerHTML), r.innerHTML = "";
        const a = o(r, !1, function(s) {
            if (s instanceof SVGElement) return "svg";
            if (typeof MathMLElement == "function" && s instanceof MathMLElement) return "mathml"
        }(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a
    }, t
};
let Ka;
const gn = e => Ka = e,
    $a = Symbol();

function Hn(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var bo, Cn;
(Cn = bo || (bo = {})).direct = "direct", Cn.patchObject = "patch object", Cn.patchFunction = "patch function";
const Ja = () => {};

function fi(e, t, o, n = Ja) {
    e.push(t);
    const r = () => {
        const a = e.indexOf(t);
        a > -1 && (e.splice(a, 1), n())
    };
    var i;
    return !o && Hi() && (i = r, Ze && Ze.cleanups.push(i)), r
}

function $t(e, ...t) {
    e.slice().forEach(o => {
        o(...t)
    })
}
const Hl = e => e();

function Fn(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((o, n) => e.set(n, o)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const o in t) {
        if (!t.hasOwnProperty(o)) continue;
        const n = t[o],
            r = e[o];
        Hn(r) && Hn(n) && e.hasOwnProperty(o) && !Te(n) && !Nt(n) ? e[o] = Fn(r, n) : e[o] = n
    }
    return e
}
const Fl = Symbol(),
    {
        assign: yt
    } = Object;

function Zl(e, t, o, n) {
    const {
        state: r,
        actions: i,
        getters: a
    } = t, s = o.state.value[e];
    let l;
    return l = Xa(e, function() {
        s || (o.state.value[e] = r ? r() : {});
        const u = function(c) {
            const p = ne(c) ? new Array(c.length) : {};
            for (const b in c) p[b] = aa(c, b);
            return p
        }(o.state.value[e]);
        return yt(u, i, Object.keys(a || {}).reduce((c, p) => (c[p] = ir(De(() => {
            gn(o);
            const b = o._s.get(e);
            return a[p].call(b, b)
        })), c), {}))
    }, t, o, n, !0), l
}

function Xa(e, t, o = {}, n, r, i) {
    let a;
    const s = yt({
            actions: {}
        }, o),
        l = {
            deep: !0
        };
    let u, c, p, b = [],
        h = [];
    const x = n.state.value[e];
    let k;

    function f(N) {
        let D;
        u = c = !1, typeof N == "function" ? (N(n.state.value[e]), D = {
            type: bo.patchFunction,
            storeId: e,
            events: p
        }) : (Fn(n.state.value[e], N), D = {
            type: bo.patchObject,
            payload: N,
            storeId: e,
            events: p
        });
        const C = k = Symbol();
        Do().then(() => {
            k === C && (u = !0)
        }), c = !0, $t(b, D, n.state.value[e])
    }
    i || x || (n.state.value[e] = {}), ye({});
    const m = i ? function() {
        const {
            state: N
        } = o, D = N ? N() : {};
        this.$patch(C => {
            yt(C, D)
        })
    } : Ja;

    function T(N, D) {
        return function() {
            gn(n);
            const C = Array.from(arguments),
                M = [],
                W = [];
            let E;
            $t(h, {
                args: C,
                name: N,
                store: g,
                after: function(q) {
                    M.push(q)
                },
                onError: function(q) {
                    W.push(q)
                }
            });
            try {
                E = D.apply(this && this.$id === e ? this : g, C)
            } catch (q) {
                throw $t(W, q), q
            }
            return E instanceof Promise ? E.then(q => ($t(M, q), q)).catch(q => ($t(W, q), Promise.reject(q))) : ($t(M, E), E)
        }
    }
    const g = Kt({
        _p: n,
        $id: e,
        $onAction: fi.bind(null, h),
        $patch: f,
        $reset: m,
        $subscribe(N, D = {}) {
            const C = fi(b, N, D.detached, () => M()),
                M = a.run(() => Ae(() => n.state.value[e], W => {
                    (D.flush === "sync" ? c : u) && N({
                        storeId: e,
                        type: bo.direct,
                        events: p
                    }, W)
                }, yt({}, l, D)));
            return C
        },
        $dispose: function() {
            a.stop(), b = [], h = [], n._s.delete(e)
        }
    });
    n._s.set(e, g);
    const d = (n._a && n._a.runWithContext || Hl)(() => n._e.run(() => (a = Wi()).run(t)));
    for (const N in d) {
        const D = d[N];
        if (Te(D) && (!Te(j = D) || !j.effect) || Nt(D)) i || (!x || Hn(y = D) && y.hasOwnProperty(Fl) || (Te(D) ? D.value = x[N] : Fn(D, x[N])), n.state.value[e][N] = D);
        else if (typeof D == "function") {
            const C = T(N, D);
            d[N] = C, s.actions[N] = D
        }
    }
    var y, j;
    return yt(g, d), yt(pe(g), d), Object.defineProperty(g, "$state", {
        get: () => n.state.value[e],
        set: N => {
            f(D => {
                yt(D, N)
            })
        }
    }), n._p.forEach(N => {
        yt(g, a.run(() => N({
            store: g,
            app: n._a,
            pinia: n,
            options: s
        })))
    }), x && i && o.hydrate && o.hydrate(g.$state, x), u = !0, c = !0, g
}

function nt(e, t, o) {
    let n, r;
    const i = typeof t == "function";

    function a(s, l) {
        return (s = s || (Me || ke || to ? go($a, null) : null)) && gn(s), (s = Ka)._s.has(n) || (i ? Xa(n, t, r, s) : Zl(n, r, s)), s._s.get(n)
    }
    return typeof e == "string" ? (n = e, r = i ? o : t) : (r = e, n = e.id), a.$id = n, a
}

function Lt(e) {
    {
        e = pe(e);
        const t = {};
        for (const o in e) {
            const n = e[o];
            (Te(n) || Nt(n)) && (t[o] = Fs(e, o))
        }
        return t
    }
}
const Yl = {
        addPlaceholder: "Please Enter a new note, press Enter to save",
        groupPlaceholder: "Please enter a new group value, press Enter to save",
        saveTagText: "Save",
        saveTagTitle: "Save content",
        clearTagText: "Clear",
        clearTagTitle: "Clear note",
        cancelTagText: "Cancel",
        cancelTagTitle: "Exit",
        searchTagTitle: "Search for notes",
        searchTagPlaceholder: "Search for notes and press Enter to open the result item",
        searchCloseTitle: "Close the search box",
        userIdText: "User ID",
        userNameText: "User name",
        userTagTableText: "Note value",
        groupText: "Group",
        groupTitle: "Switch group",
        searchContentText: "Search: ",
        searchContentPlaceholder: "Enter search content",
        rangeText: "Range: ",
        rangeAllText: "All",
        selectAllTitle: "Select all",
        deleteSelectedText: "Delete",
        deleteSelectedTitle: "Delete the selected item",
        moveSelectedText: "Move",
        moveSelectedTitle: "Moves the selected item to the specified group",
        manageGroupsText: "Manage groups",
        manageGroupsTitle: "Open the group management panel",
        modifyText: "(Content has been modified)",
        waitText: "(Waiting for data to load)",
        closeCotentText: "Close",
        closeContentTitle: "Close panel",
        saveContentText: "Save",
        saveContentTitle: "Save the modification of the content",
        saveCompletedNotifactionText: "Saved data!",
        saveErrorNotifactionText: "Failed to save data!!!",
        backUpNotifactionText: "Data backup completed",
        restoreNotifactionText: "Data recovery complete",
        syncConfigNotifactionText: "Successfully synchronized configuration from other tabs",
        syncGroupNotifactionText: "Successfully synchronized group values from other tabs",
        syncNoteNotifactionText: "Successfully synchronized notes from other tabs",
        editText: "Edit",
        deleteText: "Delete",
        editTitle: "Edit content",
        deleteTitle: "Delete content",
        settingsHeadlineText: "Settings",
        settingsCloseTitle: "Close the settings panel",
        settingsAboutSearchBoxText: "Search box",
        settingsSearchBoxShowIndexText: "Show index value at the top",
        settingsSearchBoxCanHideSearchFrameText: "Hide the search box when clicking outside the search box",
        settingsSearchBoxShowGroupNameText: "Result items display their grouped values (Only the non-default group, will not be used to search)",
        settingsSearchBoxOpenNewTabText: "Open the result item in a new tab (When not enabled, you can press Ctrl + Enter to open the results in a background tab; press Ctrl+Shift+Enter to open the results in a new tab)",
        settingsSearchBoxEnableShortcutKeysText: "Allow shortcut keys to open the search box (Ctrl+Shift+F)",
        settingsAboutSearchValueText: "Search content",
        settingsSearchValueCaseSensitiveText: "Case-sensitive",
        settingsSearchValueSplitText: 'Split search method ("ab cd" ==> "ab" && "cd")',
        settingsSearchValueRegularText: 'Support the use of regular expression (Format: "/pattern/gim")',
        settingsAddNoteShowNoteGroupNameText: "Allow notes on the web page to display their group value (Only the non-default group; When the note value is empty, it can also be used as a tag)",
        settingsAddNoteHideNoteText: "Hide detailed notes and display only group values (Turn on the options above to take effect)",
        settingsAddNoteShowNoteGroupColorText: "Allow group colors to be applied to notes on webpages",
        settingsAddNoteShowPopoverFrameText: "Allow other notes under the same group to be displayed when hovering over the notes (Only the non-default group)",
        settingsAddNoteOpenNoteNewTabText: "Open other notes in a new tab (When not enabled, you can hold down Ctrl and click to open in the background tab; hold down Ctrl+Shift and click to open in a new tab)",
        settingsAddNoteCanHideAddFrameText: "Hide the add box when clicking outside the add box",
        settingsAboutAddNoteText: "Notes",
        settingsAboutInterfaceText: "Appearance",
        settingsInterfaceInsertSearchButtonText: "Display floating search button in the lower right corner of the page",
        settingsInterfaceConfigText: "Appearance mode: ",
        settingsInterfaceBrightText: "Bright",
        settingsInterfaceDarkText: "Dark",
        settingsInterfaceLanguageText: "Display language: ",
        settingsAboutOtherText: "Other Settings",
        settingsAboutStoredDataText: "Stored data",
        settingsWebDAVConfigText: "Configure WebDAV",
        settingsWebDAVSyncText: "Sync",
        settingsWebDAVSyncTitle: "Upload or download notes data",
        settingsWebDAVUploadText: "Upload",
        settingsWebDAVUploadTitle: "Upload local notes data to the cloud",
        settingsWebDAVDownloadText: "Download",
        settingsWebDAVDownloadTitle: "Download cloud notes data to local",
        settingsWebDAVEnableText: "Enable the WebDAV sync data",
        settingsFrameInterfaceAutoSyncText: "Synchronize data changes from other tabs",
        settingsStoredDataLastTimeText: "Last modified time: ",
        settingsWebDAVSyncTimeText: "Last WebDAV sync time: ",
        settingsLocalDataText: "Local data:",
        settingsNotesCountText: "Notes count:",
        settingsGroupCountText: "Group count:",
        settingsStoredDataExportTitle: "Back up all stored data to a file",
        settingsStoredDataImportIitle: "Restore all stored data from a file",
        settingsStoredDataClearTitle:"Clear all stored data",
        settingsAboutScriptText: "About the script",
        settingsScriptAuthorText: "Script author: ",
        settingsScriptVersionText: "Script version: ",
        settingsScriptCoreText: "Core version: ",
        settingsScriptLibraryText: "Library: ",
        settingsScriptIconText: "Icon: ",
        settingsScriptHandlerText: "Script manager: ",
        settingsIconText: "Icon: ",
        gmSettingsText: "Open the settings panel",
        gmManagementText: "Open the notes management panel",
        gmGroupText: "Open the group management panel",
        gmExportText: "Backup data",
        gmImportText: "Restore data",
        gmClearText: "Clear data",
        defaultGroupText: "Default",
        groupNewValueText: "New group",
        groupCreateValueText: "New group",
        groupCreateValueTitle: "Create a new group",
        groupValueText: "Group name",
        groupPrimaryColorText: "Primary color",
        groupSecondaryColorText: "Secondary color",
        groupWeightText: "Weight",
        selectGroupHeaderText: "Select group",
        optionsImportNoFileText: "No file selected!",
        optionsImportNotATextFile: "This is not a text file!",
        optionsImportValidText: "This is an invalid file!",
        optionsImportCannotFindFile: "Cannot find file!",
        optionsImportEmptyText: "File content is empty!",
        optionsImportErrorObjectText: "Error parsing object!",
        cancelText: "Cancel",
        webDAVHeaderText: "WebDAV configuration",
        webDAVURLText: "WebDAV URL(e.g. https://example.com/):",
        webDAVFileText: "File path(Relative WebDAV root, e.g. notes/data.txt):",
        webDAVUserText: "WebDAV User name:",
        webDAVPasswordText: "WebDAV password:",
        webDAVPassphraseText: "passphrase(Optional, used to encrypt file):",
        webDAVIntervalText: "Auto sync interval(min, 0 disables auto sync):",
        webDAVSyncModeText: "Sync mode:",
        webDAVSyncModeTwoWayText: "Two-way",
        webDAVSyncModeUploadText: "Upload only",
        webDAVSyncModeDownloadText: "Download only",
        webDAVConfigInvalidText: "Invalid configuration for WebDAV!",
        webDAVInternalErrorText: "Internal error!",
        webDAVResponseContentErrorText: "The content of the network response is incorrect!",
        webDAVVerifyErrorText: "Server validation error! Please check the user and password configuration",
        webDAVPermissionErrorText: "No access permission for the specified path!",
        webDAVFileLostErrorText: "File not found!",
        webDAVContentDecodeErrorText: "Data decryption error!",
        webDAVUnknownErrorText: "Unknown error!",
        webDAVUploadSuccessText: "WebDAV: Upload successful",
        webDAVDownloadSuccessText: "WebDAV: Download successful",
        webDAVNoChangeText: "WebDAV: No data changes",
        webDAVNoFileText: "WebDAV: Cloud file does not exist",
        webDAVLocalNewText: "WebDAV: Local data is updated more than cloud data",
        webDAVCloudNewText: "WebDAV: Cloud data is updated more than local data"
    },
    Kl = {
        addPlaceholder: "请输入新的备注，按下Enter键可保存",
        groupPlaceholder: "请输入新的分组值，按下Enter键可保存",
        saveTagText: "保存",
        saveTagTitle: "保存内容",
        clearTagText: "清除",
        clearTagTitle: "清除备注",
        cancelTagText: "取消",
        cancelTagTitle: "退出",
        searchTagTitle: "搜索备注",
        searchTagPlaceholder: "搜索备注，按下Enter键打开结果项",
        searchCloseTitle: "关闭搜索框",
        userIdText: "用户 ID",
        userNameText: "用户名",
        userTagTableText: "备注值",
        groupText: "分组",
        groupTitle: "切换分组",
        searchContentText: "搜索: ",
        searchContentPlaceholder: "请输入搜索内容",
        rangeText: "范围: ",
        rangeAllText: "全部",
        selectAllTitle: "全选",
        deleteSelectedText: "删除选中项",
        deleteSelectedTitle: "将选中的项删除",
        moveSelectedText: "移动选中项",
        moveSelectedTitle: "将选中的项移动至指定分组中",
        manageGroupsText: "分组管理",
        manageGroupsTitle: "打开分组管理面板",
        modifyText: "(内容已被修改)",
        waitText: "(等待数据加载中)",
        closeCotentText: "关闭",
        closeContentTitle: "关闭面板",
        saveContentText: "保存",
        saveContentTitle: "保存对内容的修改",
        saveCompletedNotifactionText: "已保存数据！",
        saveErrorNotifactionText: "保存数据失败！！！",
        backUpNotifactionText: "数据备份完成",
        restoreNotifactionText: "数据恢复完成",
        syncConfigNotifactionText: "已成功同步来自其它标签页的配置",
        syncGroupNotifactionText: "已成功同步来自其它标签页的分组值",
        syncNoteNotifactionText: "已成功同步来自其它标签页的备注信息",
        editText: "编辑",
        deleteText: "删除",
        editTitle: "编辑内容",
        deleteTitle: "删除内容",
        settingsHeadlineText: "设置",
        settingsCloseTitle: "关闭设置面板",
        settingsAboutSearchBoxText: "搜索框",
        settingsSearchBoxShowIndexText: "在顶部显示索引值",
        settingsSearchBoxCanHideSearchFrameText: "点击搜索框外部时隐藏搜索框",
        settingsSearchBoxShowGroupNameText: "结果项显示其分组值 (仅非默认分组时，不会被用于搜索)",
        settingsSearchBoxOpenNewTabText: "在新标签页中打开结果项 (未启用时，可以按下 Ctrl+Enter 在后台标签中打开结果；按下 Ctrl+Shift+Enter 在新标签页中打开结果)",
        settingsSearchBoxEnableShortcutKeysText: "允许使用快捷键打开搜索框 (Ctrl+Shift+F)",
        settingsAboutSearchValueText: "搜索内容",
        settingsSearchValueCaseSensitiveText: "区分字母大小写",
        settingsSearchValueSplitText: '拆分式搜索方法 ("ab cd" ==> "ab" && "cd")',
        settingsSearchValueRegularText: '支持使用正则表达式 (格式: "/pattern/gim")',
        settingsAddNoteShowNoteGroupNameText: "允许网页上的备注显示其分组值 (仅非默认分组时；备注值为空时也可以当作标签来使用)",
        settingsAddNoteHideNoteText: "隐藏详细的备注内容，仅显示分组值 (开启上面的选项才生效)",
        settingsAddNoteShowNoteGroupColorText: "允许将分组颜色应用到网页上的备注",
        settingsAddNoteShowPopoverFrameText: "允许悬停在备注上时显示同分组下的其他备注 (仅非默认分组时)",
        settingsAddNoteOpenNoteNewTabText: "在新标签页中打开其他备注 (未启用时，可以按住 Ctrl 并点击在后台标签中打开；按住 Ctrl+Shift 并点击在新标签页中打开)",
        settingsAddNoteCanHideAddFrameText: "点击添加框外部时隐藏添加框",
        settingsAboutAddNoteText: "备注",
        settingsAboutInterfaceText: "外观",
        settingsInterfaceInsertSearchButtonText: "在网页的右下角显示浮动搜索按钮",
        settingsInterfaceConfigText: "外观模式: ",
        settingsInterfaceBrightText: "明亮",
        settingsInterfaceDarkText: "暗黑",
        settingsInterfaceLanguageText: "显示语言: ",
        settingsAboutOtherText: "其他设置",
        settingsAboutStoredDataText: "存储数据",
        settingsWebDAVConfigText: "配置 WebDAV",
        settingsWebDAVSyncText: "同步数据",
        settingsWebDAVSyncTitle: "上传或下载备注数据",
        settingsWebDAVUploadText: "上传数据",
        settingsWebDAVUploadTitle: "上传本地备注数据至云端",
        settingsWebDAVDownloadText: "下载数据",
        settingsWebDAVDownloadTitle: "下载云端备注数据至本地",
        settingsWebDAVEnableText: "启用 WebDAV 同步数据功能",
        settingsFrameInterfaceAutoSyncText: "同步来自其他标签页的数据变动",
        settingsStoredDataLastTimeText: "上次修改时间: ",
        settingsWebDAVSyncTimeText: "上次 WebDAV 同步时间: ",
        settingsLocalDataText: "本地数据:",
        settingsNotesCountText: "备注数量:",
        settingsGroupCountText: "分组数量:",
        settingsStoredDataExportTitle: "备份所有存储数据到文件中",
        settingsStoredDataImportIitle: "从文件中恢复所有存储数据",
        settingsStoredDataClearTitle:"清除所有备注数据",
        settingsAboutScriptText: "关于脚本",
        settingsScriptAuthorText: "脚本作者: ",
        settingsScriptVersionText: "脚本版本: ",
        settingsScriptCoreText: "核心版本: ",
        settingsScriptLibraryText: "依赖库: ",
        settingsScriptIconText: "图标: ",
        settingsScriptHandlerText: "脚本管理器: ",
        settingsIconText: "图标: ",
        gmSettingsText: "打开设置面板",
        gmManagementText: "打开备注管理面板",
        gmGroupText: "打开分组管理面板",
        gmExportText: "备份数据",
        gmImportText: "恢复数据",
        gmClearText:"清除数据",
        defaultGroupText: "默认分组",
        groupNewValueText: "新的分组",
        groupCreateValueText: "新建分组",
        groupCreateValueTitle: "创建新的分组",
        groupValueText: "分组名",
        groupPrimaryColorText: "主要颜色",
        groupSecondaryColorText: "次要颜色",
        groupWeightText: "权重",
        selectGroupHeaderText: "选择分组",
        optionsImportNoFileText: "没有选择文件！",
        optionsImportNotATextFile: "这不是一个文本文件！",
        optionsImportValidText: "这是一个无效的文件！",
        optionsImportCannotFindFile: "无法找到文件！",
        optionsImportEmptyText: "文件内容为空！",
        optionsImportErrorObjectText: "解析对象时出错！",
        cancelText: "取消",
        webDAVHeaderText: "WebDAV 配置",
        webDAVURLText: "WebDAV URL(例如: https://example.com/):",
        webDAVFileText: "数据文件路径(相对 WebDAV 根目录，例如: notes/data.txt):",
        webDAVUserText: "WebDAV 用户名:",
        webDAVPasswordText: "WebDAV 密码:",
        webDAVPassphraseText: "密码短语(可选，用于加密数据文件):",
        webDAVIntervalText: "自动同步间隔(分钟，为 0 时表示禁用自动同步):",
        webDAVSyncModeText: "同步模式:",
        webDAVSyncModeTwoWayText: "双向的",
        webDAVSyncModeUploadText: "仅上传",
        webDAVSyncModeDownloadText: "仅下载",
        webDAVConfigInvalidText: "WebDAV 的配置无效！",
        webDAVInternalErrorText: "内部错误！",
        webDAVResponseContentErrorText: "网络响应的内容不正确！",
        webDAVVerifyErrorText: "服务端验证出错！请检查用户名及密码配置",
        webDAVPermissionErrorText: "没有指定路径的访问权限！",
        webDAVFileLostErrorText: "没有找到文件！",
        webDAVContentDecodeErrorText: "数据解码错误！",
        webDAVUnknownErrorText: "未知错误！",
        webDAVUploadSuccessText: "WebDAV: 上传数据完成",
        webDAVDownloadSuccessText: "WebDAV: 下载数据完成",
        webDAVNoChangeText: "WebDAV: 无数据变化",
        webDAVNoFileText: "WebDAV: 云端文件不存在",
        webDAVLocalNewText: "WebDAV: 本地数据比云端数据更新",
        webDAVCloudNewText: "WebDAV: 云端数据比本地数据更新"
    },
    $l = {
        addPlaceholder: "請輸入新的備註，按下Enter鍵可儲存",
        groupPlaceholder: "請輸入新的分組值，按下Enter鍵可儲存",
        saveTagText: "儲存",
        saveTagTitle: "儲存內容",
        clearTagText: "清除",
        clearTagTitle: "清除備註",
        cancelTagText: "取消",
        cancelTagTitle: "退出",
        searchTagTitle: "搜尋備註",
        searchTagPlaceholder: "搜尋備註，按下Enter鍵開啟結果項",
        searchCloseTitle: "關閉搜尋框",
        userIdText: "使用者 ID",
        userNameText: "使用者名稱",
        userTagTableText: "備註值",
        groupText: "分組",
        groupTitle: "切換分组",
        searchContentText: "搜尋: ",
        searchContentPlaceholder: "請輸入搜尋內容",
        rangeText: "範圍: ",
        rangeAllText: "全部",
        selectAllTitle: "全選",
        deleteSelectedText: "刪除選中項",
        deleteSelectedTitle: "將選中的項刪除",
        moveSelectedText: "移動選中項",
        moveSelectedTitle: "將選中的項移動至指定分組中",
        manageGroupsText: "分組管理",
        manageGroupsTitle: "開啟分組管理面板",
        modifyText: "(內容已被修改)",
        waitText: "(等待資料載入中)",
        closeCotentText: "關閉",
        closeContentTitle: "關閉面板",
        saveContentText: "儲存",
        saveContentTitle: "儲存對內容的修改",
        saveCompletedNotifactionText: "已儲存資料！",
        saveErrorNotifactionText: "儲存資料失敗！！！",
        backUpNotifactionText: "資料備份完成",
        restoreNotifactionText: "資料恢復完成",
        syncConfigNotifactionText: "已成功同步來自其它標籤頁的配置",
        syncGroupNotifactionText: "已成功同步來自其它標籤頁的分組值",
        syncNoteNotifactionText: "已成功同步來自其它標籤頁的備註資訊",
        editText: "編輯",
        deleteText: "刪除",
        editTitle: "編輯內容",
        deleteTitle: "刪除內容",
        settingsHeadlineText: "設定",
        settingsCloseTitle: "關閉設定面板",
        settingsAboutSearchBoxText: "搜尋框",
        settingsSearchBoxShowIndexText: "在頂部顯示索引值",
        settingsSearchBoxCanHideSearchFrameText: "點選搜尋框外部時隱藏搜尋框",
        settingsSearchBoxShowGroupNameText: "結果項顯示其分組值 (僅非預設分組時，不會被用於搜尋)",
        settingsSearchBoxOpenNewTabText: "在新標籤頁中開啟結果項 (未啟用時，可以按下 Ctrl+Enter 在後臺標籤中開啟結果；按下 Ctrl+Shift+Enter 在新標籤頁中開啟結果)",
        settingsSearchBoxEnableShortcutKeysText: "允許使用快捷鍵開啟搜尋框 (Ctrl+Shift+F)",
        settingsAboutSearchValueText: "搜尋內容",
        settingsSearchValueCaseSensitiveText: "區分字母大小寫",
        settingsSearchValueSplitText: '拆分式搜尋方法 ("ab cd" ==> "ab" && "cd")',
        settingsSearchValueRegularText: '支援使用正則表示式 (格式: "/pattern/gim")',
        settingsAddNoteShowNoteGroupNameText: "允許網頁上的備註顯示其分組值 (僅非預設分組時；備註值為空時也可以當作標籤來使用)",
        settingsAddNoteHideNoteText: "隱藏詳細的備註內容，僅顯示分組值 (開啟上面的選項才生效)",
        settingsAddNoteShowNoteGroupColorText: "允許將分組顏色應用到網頁上的備註",
        settingsAddNoteShowPopoverFrameText: "允許懸停在備註上時顯示同分組下的其他備註 (僅非預設分組時)",
        settingsAddNoteOpenNoteNewTabText: "在新標籤頁中開啟其他備註 (未啟用時，可以按住 Ctrl 並點選在後臺標籤中開啟；按住 Ctrl+Shift 並點選在新標籤頁中開啟)",
        settingsAddNoteCanHideAddFrameText: "點選新增框外部時隱藏新增框",
        settingsAboutAddNoteText: "備註",
        settingsAboutInterfaceText: "外觀",
        settingsInterfaceInsertSearchButtonText: "在網頁的右下角顯示浮動搜尋按鈕",
        settingsInterfaceConfigText: "外觀模式: ",
        settingsInterfaceBrightText: "明亮",
        settingsInterfaceDarkText: "暗黑",
        settingsInterfaceLanguageText: "顯示語言: ",
        settingsAboutOtherText: "其他設定",
        settingsAboutStoredDataText: "儲存資料",
        settingsWebDAVConfigText: "配置 WebDAV",
        settingsWebDAVSyncText: "同步資料",
        settingsWebDAVSyncTitle: "上傳或下載備註資料",
        settingsWebDAVUploadText: "上傳資料",
        settingsWebDAVUploadTitle: "上傳本地備註資料至雲端",
        settingsWebDAVDownloadText: "下載資料",
        settingsWebDAVDownloadTitle: "下載雲端備註資料至本地",
        settingsWebDAVEnableText: "啟用 WebDAV 同步資料功能",
        settingsFrameInterfaceAutoSyncText: "同步來自其他標籤頁的資料變動",
        settingsStoredDataLastTimeText: "上次修改時間: ",
        settingsWebDAVSyncTimeText: "上次 WebDAV 同步時間: ",
        settingsLocalDataText: "本地資料:",
        settingsNotesCountText: "備註數量:",
        settingsGroupCountText: "分組數量:",
        settingsStoredDataExportTitle: "備份所有儲存資料到檔案中",
        settingsStoredDataImportIitle: "從檔案中恢復所有儲存資料",
        settingsStoredDataClearTitle:"清除所有備註數據",
        settingsAboutScriptText: "關於指令碼",
        settingsScriptAuthorText: "指令碼作者: ",
        settingsScriptVersionText: "指令碼版本: ",
        settingsScriptCoreText: "核心版本: ",
        settingsScriptLibraryText: "依賴庫: ",
        settingsScriptIconText: "圖示: ",
        settingsScriptHandlerText: "指令碼管理器: ",
        settingsIconText: "圖示: ",
        gmSettingsText: "開啟設定面板",
        gmManagementText: "開啟備註管理面板",
        gmGroupText: "開啟分組管理面板",
        gmExportText: "備份資料",
        gmImportText: "恢復資料",
        gmClearText:  "清除資料",
        defaultGroupText: "預設分組",
        groupNewValueText: "新的分組",
        groupCreateValueText: "新建分組",
        groupCreateValueTitle: "建立新的分組",
        groupValueText: "分組名",
        groupPrimaryColorText: "主要顏色",
        groupSecondaryColorText: "次要顏色",
        groupWeightText: "權重",
        selectGroupHeaderText: "選擇分組",
        optionsImportNoFileText: "沒有選擇檔案！",
        optionsImportNotATextFile: "這不是一個文字檔案！",
        optionsImportValidText: "這是一個無效的檔案！",
        optionsImportCannotFindFile: "無法找到檔案！",
        optionsImportEmptyText: "檔案內容為空！",
        optionsImportErrorObjectText: "解析物件時出錯！",
        cancelText: "取消",
        webDAVHeaderText: "WebDAV 配置",
        webDAVURLText: "WebDAV URL(例如: https://example.com/):",
        webDAVFileText: "資料檔案路徑(相對 WebDAV 根目錄，例如: notes/data.txt):",
        webDAVUserText: "WebDAV 使用者名稱:",
        webDAVPasswordText: "WebDAV 密碼:",
        webDAVPassphraseText: "密碼短語(可選，用於加密資料檔案):",
        webDAVIntervalText: "自動同步間隔(分鐘，為 0 時表示禁用自動同步):",
        webDAVSyncModeText: "同步模式:",
        webDAVSyncModeTwoWayText: "雙向的",
        webDAVSyncModeUploadText: "僅上傳",
        webDAVSyncModeDownloadText: "僅下載",
        webDAVConfigInvalidText: "WebDAV 的配置無效！",
        webDAVInternalErrorText: "內部錯誤！",
        webDAVResponseContentErrorText: "網路響應的內容不正確！",
        webDAVVerifyErrorText: "服務端驗證出錯！請檢查使用者名稱及密碼配置",
        webDAVPermissionErrorText: "沒有指定路徑的訪問許可權！",
        webDAVFileLostErrorText: "沒有找到檔案！",
        webDAVContentDecodeErrorText: "資料解碼錯誤！",
        webDAVUnknownErrorText: "未知錯誤！",
        webDAVUploadSuccessText: "WebDAV: 上傳資料完成",
        webDAVDownloadSuccessText: "WebDAV: 下载数据完成",
        webDAVNoChangeText: "WebDAV: 無資料變化",
        webDAVNoFileText: "WebDAV: 雲端檔案不存在",
        webDAVLocalNewText: "WebDAV: 本地資料比雲端資料更新",
        webDAVCloudNewText: "WebDAV: 雲端資料比本地資料更新"
    };
class Jl {
    constructor() {
        ct(this, "lang");
        ct(this, "type");
        this.lang = {
            en: Yl,
            zhHans: Kl,
            zhHant: $l
        }, this.type = "en"
    }
    get() {
        return this.lang[this.type]
    }
    query(t) {
        return this.lang[this.type][t] || ""
    }
    setLangDict(t) {
        const o = ["en", "zhHans", "zhHant"];
        for (const n in t) {
            const r = n;
            o.forEach(i => {
                const a = t[r];
                if (a) {
                    const s = a[i];
                    s && (this.lang[i][r] = s)
                }
            })
        }
    }
    getLangType() {
        return this.type
    }
    setLangType(t) {
        switch (t == null ? void 0 : t.toLowerCase().replaceAll("_", "").replaceAll("-", "")) {
            case "zh":
            case "zhcn":
            case "zhhans":
                this.type = "zhHans";
                break;
            case "zhhk":
            case "zhtw":
            case "zhhant":
                this.type = "zhHant";
                break;
            default:
                this.type = "en"
        }
    }
    getLangOptions() {
        return {
            en: "English (en)",
            zhHans: "简体中文 (zh-Hans)",
            zhHant: "繁體中文 (zh-Hant)"
        }
    }
}
const fe = {
    error(e) {
        const t = `The required ${e} method is incomplete!!!`;
        console.error(t)
    },
    warn(e) {
        console.warn(`The required ${e} method is incomplete!!!`)
    },
    tips(e) {
        console.info("Tips: " + e)
    },
    info() {
        return typeof GM_info == "object" ? GM_info : (this.warn("GM_info"), {
            scriptHandler: "Unknown",
            script: {
                version: "0.0.0"
            }
        })
    },
    getValue(e, t) {
        return typeof GM_getValue == "function" ? GM_getValue(e, t) : (this.error("GM_getValue"), t)
    },
    setValue(e, t) {
        typeof GM_setValue == "function" ? GM_setValue(e, t) : this.error("GM_setValue")
    },
    deleteValue(e) {
        typeof GM_deleteValue == "function" ? GM_deleteValue(e) : this.error("GM_deleteValue")
    },
    listValues() {
        return typeof GM_listValues == "function" ? GM_listValues() : (this.error("GM_listValues"), [])
    },
    openInTab(e, t) {
        typeof GM_openInTab == "function" ? GM_openInTab(e, t) : this.error("GM_openInTab")
    },
    registerMenuCommand(e, t) {
        if (typeof GM_registerMenuCommand == "function") {
            const {
                scriptHandler: o,
                version: n = "0"
            } = this.info();
            return o === "Violentmonkey" && gi("2.12.5", n, ".", !0) ? (this.tips("Maybe you should update Violentmonkey to 2.12.5 or higher."), null) : GM_registerMenuCommand(e, t)
        }
        return this.warn("GM_registerMenuCommand"), null
    },
    unregisterMenuCommand(e) {
        if (typeof GM_unregisterMenuCommand == "function") {
            const {
                scriptHandler: t,
                version: o = "0"
            } = this.info();
            if (t === "Violentmonkey" && gi("2.12.5", o, ".", !0)) return void this.tips("Maybe you should update Violentmonkey to 2.12.5 or higher.");
            GM_unregisterMenuCommand(e)
        } else this.warn("GM_unregisterMenuCommand")
    },
    addValueChangeListener(e, t) {
        return typeof GM_addValueChangeListener == "function" ? GM_addValueChangeListener(e, t) : (this.warn("GM_addValueChangeListener"), null)
    },
    removeValueChangeListener(e) {
        typeof GM_removeValueChangeListener == "function" ? GM_removeValueChangeListener(e) : this.warn("GM_removeValueChangeListener")
    },
    setClipboard(e) {
        typeof GM_setClipboard == "function" ? GM_setClipboard(e) : this.error("GM_setClipboard")
    },
    addStyle(e) {
        if (typeof GM_addStyle == "function") return GM_addStyle(e);
        {
            const t = document.createElement("style");
            return t.innerHTML = e, document.body.appendChild(t), t
        }
    },
    ajax(e, t) {
        const {
            method: o = "GET",
            headers: n,
            data: r,
            responseType: i
        } = t;
        return new Promise((a, s) => {
            typeof GM_xmlhttpRequest == "function" ? GM_xmlhttpRequest({
                method: o,
                url: e,
                headers: n,
                data: r,
                nocache: !0,
                responseType: i,
                onload: l => {
                    a(l)
                },
                onerror: l => {
                    console.error(l), s(l)
                }
            }) : (this.error("GM_xmlhttpRequest"), s(null))
        })
    }
};
var Xt = (e => (e[e.Self = 0] = "Self", e[e.Blank = 1] = "Blank", e[e.BgBlank = 2] = "BgBlank", e))(Xt || {});

function gi(e, t, o = ".", n = !1) {
    const r = e.split(o),
        i = t.split(o);
    let a = !1;
    const s = r.length,
        l = i.length;
    for (let u = (s < l ? s : l) - 1; u >= 0; u--) {
        const c = Number(r[u]),
            p = Number(i[u]);
        a = c > p || !(!n || c !== p)
    }
    return a
}

function Xl(e, t) {
    t === 1 ? fe.openInTab(e, {
        active: !0,
        insert: !0,
        setParent: !0
    }) : t === 2 ? fe.openInTab(e, {
        active: !1,
        insert: !0,
        setParent: !0
    }) : window.location.href = e
}

function hi(e) {
    return e.getBoundingClientRect().right + document.documentElement.scrollLeft
}

function bi(e) {
    return e.getBoundingClientRect().bottom + document.documentElement.scrollTop
}

function Qa(e, t = {}) {
    const {
        brackets: o,
        double: n,
        prefix: r
    } = t;
    if (e && (r && (e = r + e), n && (e = n + e + n), o)) switch (o) {
        case "angle":
            e = `<${e}>`;
            break;
        case "curly":
            e = `{${e}}`;
            break;
        case "square":
            e = `[${e}]`;
            break;
        case "parentheses":
            e = `(${e})`
    }
    return e
}

function An(e, t) {
    return e.toString().padStart(t, "0")
}
const Re = {
    timer: {},
    debounce(e, t, o, n) {
        return window.clearTimeout(this.timer[e]), n && this.timer[e] === void 0 && t(), this.timer[e] = window.setTimeout(() => {
            t(), this.timer[e] = void 0
        }, o), {
            cancel: () => {
                window.clearTimeout(this.timer[e]), this.timer[e] = void 0
            }
        }
    }
};
var _n = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function qa(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Ql(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var o = function n() {
            return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        o.prototype = t.prototype
    } else o = {};
    return Object.defineProperty(o, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(n) {
        var r = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(o, n, r.get ? r : {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    }), o
}
var es = {
        exports: {}
    },
    mi = {
        exports: {}
    };
const ql = Ql(Object.freeze(Object.defineProperty({
    __proto__: null,
    default: {}
}, Symbol.toStringTag, {
    value: "Module"
})));
var vi;

function Et() {
    return vi || (vi = 1, mi.exports = (e = e || function(t, o) {
        var n;
        if (typeof window < "u" && window.crypto && (n = window.crypto), typeof self < "u" && self.crypto && (n = self.crypto), typeof globalThis < "u" && globalThis.crypto && (n = globalThis.crypto), !n && typeof window < "u" && window.msCrypto && (n = window.msCrypto), !n && _n !== void 0 && _n.crypto && (n = _n.crypto), !n) try {
            n = ql
        } catch {}
        var r = function() {
                if (n) {
                    if (typeof n.getRandomValues == "function") try {
                        return n.getRandomValues(new Uint32Array(1))[0]
                    } catch {}
                    if (typeof n.randomBytes == "function") try {
                        return n.randomBytes(4).readInt32LE()
                    } catch {}
                }
                throw new Error("Native crypto module could not be used to get secure random number.")
            },
            i = Object.create || function() {
                function f() {}
                return function(m) {
                    var T;
                    return f.prototype = m, T = new f, f.prototype = null, T
                }
            }(),
            a = {},
            s = a.lib = {},
            l = s.Base = {
                extend: function(f) {
                    var m = i(this);
                    return f && m.mixIn(f), m.hasOwnProperty("init") && this.init !== m.init || (m.init = function() {
                        m.$super.init.apply(this, arguments)
                    }), m.init.prototype = m, m.$super = this, m
                },
                create: function() {
                    var f = this.extend();
                    return f.init.apply(f, arguments), f
                },
                init: function() {},
                mixIn: function(f) {
                    for (var m in f) f.hasOwnProperty(m) && (this[m] = f[m]);
                    f.hasOwnProperty("toString") && (this.toString = f.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            },
            u = s.WordArray = l.extend({
                init: function(f, m) {
                    f = this.words = f || [], this.sigBytes = m != o ? m : 4 * f.length
                },
                toString: function(f) {
                    return (f || p).stringify(this)
                },
                concat: function(f) {
                    var m = this.words,
                        T = f.words,
                        g = this.sigBytes,
                        d = f.sigBytes;
                    if (this.clamp(), g % 4)
                        for (var y = 0; y < d; y++) {
                            var j = T[y >>> 2] >>> 24 - y % 4 * 8 & 255;
                            m[g + y >>> 2] |= j << 24 - (g + y) % 4 * 8
                        } else
                            for (var N = 0; N < d; N += 4) m[g + N >>> 2] = T[N >>> 2];
                    return this.sigBytes += d, this
                },
                clamp: function() {
                    var f = this.words,
                        m = this.sigBytes;
                    f[m >>> 2] &= 4294967295 << 32 - m % 4 * 8, f.length = t.ceil(m / 4)
                },
                clone: function() {
                    var f = l.clone.call(this);
                    return f.words = this.words.slice(0), f
                },
                random: function(f) {
                    for (var m = [], T = 0; T < f; T += 4) m.push(r());
                    return new u.init(m, f)
                }
            }),
            c = a.enc = {},
            p = c.Hex = {
                stringify: function(f) {
                    for (var m = f.words, T = f.sigBytes, g = [], d = 0; d < T; d++) {
                        var y = m[d >>> 2] >>> 24 - d % 4 * 8 & 255;
                        g.push((y >>> 4).toString(16)), g.push((15 & y).toString(16))
                    }
                    return g.join("")
                },
                parse: function(f) {
                    for (var m = f.length, T = [], g = 0; g < m; g += 2) T[g >>> 3] |= parseInt(f.substr(g, 2), 16) << 24 - g % 8 * 4;
                    return new u.init(T, m / 2)
                }
            },
            b = c.Latin1 = {
                stringify: function(f) {
                    for (var m = f.words, T = f.sigBytes, g = [], d = 0; d < T; d++) {
                        var y = m[d >>> 2] >>> 24 - d % 4 * 8 & 255;
                        g.push(String.fromCharCode(y))
                    }
                    return g.join("")
                },
                parse: function(f) {
                    for (var m = f.length, T = [], g = 0; g < m; g++) T[g >>> 2] |= (255 & f.charCodeAt(g)) << 24 - g % 4 * 8;
                    return new u.init(T, m)
                }
            },
            h = c.Utf8 = {
                stringify: function(f) {
                    try {
                        return decodeURIComponent(escape(b.stringify(f)))
                    } catch {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(f) {
                    return b.parse(unescape(encodeURIComponent(f)))
                }
            },
            x = s.BufferedBlockAlgorithm = l.extend({
                reset: function() {
                    this._data = new u.init, this._nDataBytes = 0
                },
                _append: function(f) {
                    typeof f == "string" && (f = h.parse(f)), this._data.concat(f), this._nDataBytes += f.sigBytes
                },
                _process: function(f) {
                    var m, T = this._data,
                        g = T.words,
                        d = T.sigBytes,
                        y = this.blockSize,
                        j = d / (4 * y),
                        N = (j = f ? t.ceil(j) : t.max((0 | j) - this._minBufferSize, 0)) * y,
                        D = t.min(4 * N, d);
                    if (N) {
                        for (var C = 0; C < N; C += y) this._doProcessBlock(g, C);
                        m = g.splice(0, N), T.sigBytes -= D
                    }
                    return new u.init(m, D)
                },
                clone: function() {
                    var f = l.clone.call(this);
                    return f._data = this._data.clone(), f
                },
                _minBufferSize: 0
            });
        s.Hasher = x.extend({
            cfg: l.extend(),
            init: function(f) {
                this.cfg = this.cfg.extend(f), this.reset()
            },
            reset: function() {
                x.reset.call(this), this._doReset()
            },
            update: function(f) {
                return this._append(f), this._process(), this
            },
            finalize: function(f) {
                return f && this._append(f), this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(f) {
                return function(m, T) {
                    return new f.init(T).finalize(m)
                }
            },
            _createHmacHelper: function(f) {
                return function(m, T) {
                    return new k.HMAC.init(f, T).finalize(m)
                }
            }
        });
        var k = a.algo = {};
        return a
    }(Math), e)), mi.exports;
    var e
}
var xi, yi = {
    exports: {}
};

function ec() {
    return xi || (xi = 1, yi.exports = (e = Et(), function() {
        var t = e,
            o = t.lib.WordArray;

        function n(r, i, a) {
            for (var s = [], l = 0, u = 0; u < i; u++)
                if (u % 4) {
                    var c = a[r.charCodeAt(u - 1)] << u % 4 * 2 | a[r.charCodeAt(u)] >>> 6 - u % 4 * 2;
                    s[l >>> 2] |= c << 24 - l % 4 * 8, l++
                } return o.create(s, l)
        }
        t.enc.Base64 = {
            stringify: function(r) {
                var i = r.words,
                    a = r.sigBytes,
                    s = this._map;
                r.clamp();
                for (var l = [], u = 0; u < a; u += 3)
                    for (var c = (i[u >>> 2] >>> 24 - u % 4 * 8 & 255) << 16 | (i[u + 1 >>> 2] >>> 24 - (u + 1) % 4 * 8 & 255) << 8 | i[u + 2 >>> 2] >>> 24 - (u + 2) % 4 * 8 & 255, p = 0; p < 4 && u + .75 * p < a; p++) l.push(s.charAt(c >>> 6 * (3 - p) & 63));
                var b = s.charAt(64);
                if (b)
                    for (; l.length % 4;) l.push(b);
                return l.join("")
            },
            parse: function(r) {
                var i = r.length,
                    a = this._map,
                    s = this._reverseMap;
                if (!s) {
                    s = this._reverseMap = [];
                    for (var l = 0; l < a.length; l++) s[a.charCodeAt(l)] = l
                }
                var u = a.charAt(64);
                if (u) {
                    var c = r.indexOf(u);
                    c !== -1 && (i = c)
                }
                return n(r, i, s)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    }(), e.enc.Base64)), yi.exports;
    var e
}
var wi, Ti = {
    exports: {}
};

function tc() {
    return wi || (wi = 1, Ti.exports = (e = Et(), function(t) {
        var o = e,
            n = o.lib,
            r = n.WordArray,
            i = n.Hasher,
            a = o.algo,
            s = [];
        (function() {
            for (var h = 0; h < 64; h++) s[h] = 4294967296 * t.abs(t.sin(h + 1)) | 0
        })();
        var l = a.MD5 = i.extend({
            _doReset: function() {
                this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878])
            },
            _doProcessBlock: function(h, x) {
                for (var k = 0; k < 16; k++) {
                    var f = x + k,
                        m = h[f];
                    h[f] = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8)
                }
                var T = this._hash.words,
                    g = h[x + 0],
                    d = h[x + 1],
                    y = h[x + 2],
                    j = h[x + 3],
                    N = h[x + 4],
                    D = h[x + 5],
                    C = h[x + 6],
                    M = h[x + 7],
                    W = h[x + 8],
                    E = h[x + 9],
                    q = h[x + 10],
                    de = h[x + 11],
                    ce = h[x + 12],
                    oe = h[x + 13],
                    re = h[x + 14],
                    se = h[x + 15],
                    z = T[0],
                    L = T[1],
                    P = T[2],
                    R = T[3];
                z = u(z, L, P, R, g, 7, s[0]), R = u(R, z, L, P, d, 12, s[1]), P = u(P, R, z, L, y, 17, s[2]), L = u(L, P, R, z, j, 22, s[3]), z = u(z, L, P, R, N, 7, s[4]), R = u(R, z, L, P, D, 12, s[5]), P = u(P, R, z, L, C, 17, s[6]), L = u(L, P, R, z, M, 22, s[7]), z = u(z, L, P, R, W, 7, s[8]), R = u(R, z, L, P, E, 12, s[9]), P = u(P, R, z, L, q, 17, s[10]), L = u(L, P, R, z, de, 22, s[11]), z = u(z, L, P, R, ce, 7, s[12]), R = u(R, z, L, P, oe, 12, s[13]), P = u(P, R, z, L, re, 17, s[14]), z = c(z, L = u(L, P, R, z, se, 22, s[15]), P, R, d, 5, s[16]), R = c(R, z, L, P, C, 9, s[17]), P = c(P, R, z, L, de, 14, s[18]), L = c(L, P, R, z, g, 20, s[19]), z = c(z, L, P, R, D, 5, s[20]), R = c(R, z, L, P, q, 9, s[21]), P = c(P, R, z, L, se, 14, s[22]), L = c(L, P, R, z, N, 20, s[23]), z = c(z, L, P, R, E, 5, s[24]), R = c(R, z, L, P, re, 9, s[25]), P = c(P, R, z, L, j, 14, s[26]), L = c(L, P, R, z, W, 20, s[27]), z = c(z, L, P, R, oe, 5, s[28]), R = c(R, z, L, P, y, 9, s[29]), P = c(P, R, z, L, M, 14, s[30]), z = p(z, L = c(L, P, R, z, ce, 20, s[31]), P, R, D, 4, s[32]), R = p(R, z, L, P, W, 11, s[33]), P = p(P, R, z, L, de, 16, s[34]), L = p(L, P, R, z, re, 23, s[35]), z = p(z, L, P, R, d, 4, s[36]), R = p(R, z, L, P, N, 11, s[37]), P = p(P, R, z, L, M, 16, s[38]), L = p(L, P, R, z, q, 23, s[39]), z = p(z, L, P, R, oe, 4, s[40]), R = p(R, z, L, P, g, 11, s[41]), P = p(P, R, z, L, j, 16, s[42]), L = p(L, P, R, z, C, 23, s[43]), z = p(z, L, P, R, E, 4, s[44]), R = p(R, z, L, P, ce, 11, s[45]), P = p(P, R, z, L, se, 16, s[46]), z = b(z, L = p(L, P, R, z, y, 23, s[47]), P, R, g, 6, s[48]), R = b(R, z, L, P, M, 10, s[49]), P = b(P, R, z, L, re, 15, s[50]), L = b(L, P, R, z, D, 21, s[51]), z = b(z, L, P, R, ce, 6, s[52]), R = b(R, z, L, P, j, 10, s[53]), P = b(P, R, z, L, q, 15, s[54]), L = b(L, P, R, z, d, 21, s[55]), z = b(z, L, P, R, W, 6, s[56]), R = b(R, z, L, P, se, 10, s[57]), P = b(P, R, z, L, C, 15, s[58]), L = b(L, P, R, z, oe, 21, s[59]), z = b(z, L, P, R, N, 6, s[60]), R = b(R, z, L, P, de, 10, s[61]), P = b(P, R, z, L, y, 15, s[62]), L = b(L, P, R, z, E, 21, s[63]), T[0] = T[0] + z | 0, T[1] = T[1] + L | 0, T[2] = T[2] + P | 0, T[3] = T[3] + R | 0
            },
            _doFinalize: function() {
                var h = this._data,
                    x = h.words,
                    k = 8 * this._nDataBytes,
                    f = 8 * h.sigBytes;
                x[f >>> 5] |= 128 << 24 - f % 32;
                var m = t.floor(k / 4294967296),
                    T = k;
                x[15 + (f + 64 >>> 9 << 4)] = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8), x[14 + (f + 64 >>> 9 << 4)] = 16711935 & (T << 8 | T >>> 24) | 4278255360 & (T << 24 | T >>> 8), h.sigBytes = 4 * (x.length + 1), this._process();
                for (var g = this._hash, d = g.words, y = 0; y < 4; y++) {
                    var j = d[y];
                    d[y] = 16711935 & (j << 8 | j >>> 24) | 4278255360 & (j << 24 | j >>> 8)
                }
                return g
            },
            clone: function() {
                var h = i.clone.call(this);
                return h._hash = this._hash.clone(), h
            }
        });

        function u(h, x, k, f, m, T, g) {
            var d = h + (x & k | ~x & f) + m + g;
            return (d << T | d >>> 32 - T) + x
        }

        function c(h, x, k, f, m, T, g) {
            var d = h + (x & f | k & ~f) + m + g;
            return (d << T | d >>> 32 - T) + x
        }

        function p(h, x, k, f, m, T, g) {
            var d = h + (x ^ k ^ f) + m + g;
            return (d << T | d >>> 32 - T) + x
        }

        function b(h, x, k, f, m, T, g) {
            var d = h + (k ^ (x | ~f)) + m + g;
            return (d << T | d >>> 32 - T) + x
        }
        o.MD5 = i._createHelper(l), o.HmacMD5 = i._createHmacHelper(l)
    }(Math), e.MD5)), Ti.exports;
    var e
}
var ji, Si = {
        exports: {}
    },
    Ii = {
        exports: {}
    };

function oc() {
    return ji || (ji = 1, Ii.exports = (s = Et(), t = (e = s).lib, o = t.WordArray, n = t.Hasher, r = e.algo, i = [], a = r.SHA1 = n.extend({
        _doReset: function() {
            this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        },
        _doProcessBlock: function(l, u) {
            for (var c = this._hash.words, p = c[0], b = c[1], h = c[2], x = c[3], k = c[4], f = 0; f < 80; f++) {
                if (f < 16) i[f] = 0 | l[u + f];
                else {
                    var m = i[f - 3] ^ i[f - 8] ^ i[f - 14] ^ i[f - 16];
                    i[f] = m << 1 | m >>> 31
                }
                var T = (p << 5 | p >>> 27) + k + i[f];
                T += f < 20 ? 1518500249 + (b & h | ~b & x) : f < 40 ? 1859775393 + (b ^ h ^ x) : f < 60 ? (b & h | b & x | h & x) - 1894007588 : (b ^ h ^ x) - 899497514, k = x, x = h, h = b << 30 | b >>> 2, b = p, p = T
            }
            c[0] = c[0] + p | 0, c[1] = c[1] + b | 0, c[2] = c[2] + h | 0, c[3] = c[3] + x | 0, c[4] = c[4] + k | 0
        },
        _doFinalize: function() {
            var l = this._data,
                u = l.words,
                c = 8 * this._nDataBytes,
                p = 8 * l.sigBytes;
            return u[p >>> 5] |= 128 << 24 - p % 32, u[14 + (p + 64 >>> 9 << 4)] = Math.floor(c / 4294967296), u[15 + (p + 64 >>> 9 << 4)] = c, l.sigBytes = 4 * u.length, this._process(), this._hash
        },
        clone: function() {
            var l = n.clone.call(this);
            return l._hash = this._hash.clone(), l
        }
    }), e.SHA1 = n._createHelper(a), e.HmacSHA1 = n._createHmacHelper(a), s.SHA1)), Ii.exports;
    var e, t, o, n, r, i, a, s
}
var ki, Di, Ni = {
    exports: {}
};

function Ci() {
    return Di || (Di = 1, Si.exports = function(r) {
        return function() {
            var i = r,
                a = i.lib,
                s = a.Base,
                l = a.WordArray,
                u = i.algo,
                c = u.MD5,
                p = u.EvpKDF = s.extend({
                    cfg: s.extend({
                        keySize: 4,
                        hasher: c,
                        iterations: 1
                    }),
                    init: function(b) {
                        this.cfg = this.cfg.extend(b)
                    },
                    compute: function(b, h) {
                        for (var x, k = this.cfg, f = k.hasher.create(), m = l.create(), T = m.words, g = k.keySize, d = k.iterations; T.length < g;) {
                            x && f.update(x), x = f.update(b).finalize(h), f.reset();
                            for (var y = 1; y < d; y++) x = f.finalize(x), f.reset();
                            m.concat(x)
                        }
                        return m.sigBytes = 4 * g, m
                    }
                });
            i.EvpKDF = function(b, h, x) {
                return p.create(x).compute(b, h)
            }
        }(), r.EvpKDF
    }(Et(), oc(), (ki || (ki = 1, Ni.exports = (e = Et(), o = (t = e).lib.Base, n = t.enc.Utf8, void(t.algo.HMAC = o.extend({
        init: function(r, i) {
            r = this._hasher = new r.init, typeof i == "string" && (i = n.parse(i));
            var a = r.blockSize,
                s = 4 * a;
            i.sigBytes > s && (i = r.finalize(i)), i.clamp();
            for (var l = this._oKey = i.clone(), u = this._iKey = i.clone(), c = l.words, p = u.words, b = 0; b < a; b++) c[b] ^= 1549556828, p[b] ^= 909522486;
            l.sigBytes = u.sigBytes = s, this.reset()
        },
        reset: function() {
            var r = this._hasher;
            r.reset(), r.update(this._iKey)
        },
        update: function(r) {
            return this._hasher.update(r), this
        },
        finalize: function(r) {
            var i = this._hasher,
                a = i.finalize(r);
            return i.reset(), i.finalize(this._oKey.clone().concat(a))
        }
    })))), Ni.exports))), Si.exports;
    var e, t, o, n
}
var Ai, Mn, nc = {
    exports: {}
};
es.exports = function(e) {
    return function() {
        var t = e,
            o = t.lib.BlockCipher,
            n = t.algo,
            r = [],
            i = [],
            a = [],
            s = [],
            l = [],
            u = [],
            c = [],
            p = [],
            b = [],
            h = [];
        (function() {
            for (var f = [], m = 0; m < 256; m++) f[m] = m < 128 ? m << 1 : m << 1 ^ 283;
            var T = 0,
                g = 0;
            for (m = 0; m < 256; m++) {
                var d = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                d = d >>> 8 ^ 255 & d ^ 99, r[T] = d, i[d] = T;
                var y = f[T],
                    j = f[y],
                    N = f[j],
                    D = 257 * f[d] ^ 16843008 * d;
                a[T] = D << 24 | D >>> 8, s[T] = D << 16 | D >>> 16, l[T] = D << 8 | D >>> 24, u[T] = D, D = 16843009 * N ^ 65537 * j ^ 257 * y ^ 16843008 * T, c[d] = D << 24 | D >>> 8, p[d] = D << 16 | D >>> 16, b[d] = D << 8 | D >>> 24, h[d] = D, T ? (T = y ^ f[f[f[N ^ y]]], g ^= f[f[g]]) : T = g = 1
            }
        })();
        var x = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
            k = n.AES = o.extend({
                _doReset: function() {
                    if (!this._nRounds || this._keyPriorReset !== this._key) {
                        for (var f = this._keyPriorReset = this._key, m = f.words, T = f.sigBytes / 4, g = 4 * ((this._nRounds = T + 6) + 1), d = this._keySchedule = [], y = 0; y < g; y++) y < T ? d[y] = m[y] : (D = d[y - 1], y % T ? T > 6 && y % T == 4 && (D = r[D >>> 24] << 24 | r[D >>> 16 & 255] << 16 | r[D >>> 8 & 255] << 8 | r[255 & D]) : (D = r[(D = D << 8 | D >>> 24) >>> 24] << 24 | r[D >>> 16 & 255] << 16 | r[D >>> 8 & 255] << 8 | r[255 & D], D ^= x[y / T | 0] << 24), d[y] = d[y - T] ^ D);
                        for (var j = this._invKeySchedule = [], N = 0; N < g; N++) {
                            if (y = g - N, N % 4) var D = d[y];
                            else D = d[y - 4];
                            j[N] = N < 4 || y <= 4 ? D : c[r[D >>> 24]] ^ p[r[D >>> 16 & 255]] ^ b[r[D >>> 8 & 255]] ^ h[r[255 & D]]
                        }
                    }
                },
                encryptBlock: function(f, m) {
                    this._doCryptBlock(f, m, this._keySchedule, a, s, l, u, r)
                },
                decryptBlock: function(f, m) {
                    var T = f[m + 1];
                    f[m + 1] = f[m + 3], f[m + 3] = T, this._doCryptBlock(f, m, this._invKeySchedule, c, p, b, h, i), T = f[m + 1], f[m + 1] = f[m + 3], f[m + 3] = T
                },
                _doCryptBlock: function(f, m, T, g, d, y, j, N) {
                    for (var D = this._nRounds, C = f[m] ^ T[0], M = f[m + 1] ^ T[1], W = f[m + 2] ^ T[2], E = f[m + 3] ^ T[3], q = 4, de = 1; de < D; de++) {
                        var ce = g[C >>> 24] ^ d[M >>> 16 & 255] ^ y[W >>> 8 & 255] ^ j[255 & E] ^ T[q++],
                            oe = g[M >>> 24] ^ d[W >>> 16 & 255] ^ y[E >>> 8 & 255] ^ j[255 & C] ^ T[q++],
                            re = g[W >>> 24] ^ d[E >>> 16 & 255] ^ y[C >>> 8 & 255] ^ j[255 & M] ^ T[q++],
                            se = g[E >>> 24] ^ d[C >>> 16 & 255] ^ y[M >>> 8 & 255] ^ j[255 & W] ^ T[q++];
                        C = ce, M = oe, W = re, E = se
                    }
                    ce = (N[C >>> 24] << 24 | N[M >>> 16 & 255] << 16 | N[W >>> 8 & 255] << 8 | N[255 & E]) ^ T[q++], oe = (N[M >>> 24] << 24 | N[W >>> 16 & 255] << 16 | N[E >>> 8 & 255] << 8 | N[255 & C]) ^ T[q++], re = (N[W >>> 24] << 24 | N[E >>> 16 & 255] << 16 | N[C >>> 8 & 255] << 8 | N[255 & M]) ^ T[q++], se = (N[E >>> 24] << 24 | N[C >>> 16 & 255] << 16 | N[M >>> 8 & 255] << 8 | N[255 & W]) ^ T[q++], f[m] = ce, f[m + 1] = oe, f[m + 2] = re, f[m + 3] = se
                },
                keySize: 8
            });
        t.AES = o._createHelper(k)
    }(), e.AES
}(Et(), ec(), tc(), Ci(), Ai || (Ai = 1, nc.exports = (Mn = Et(), Ci(), void(Mn.lib.Cipher || function(e) {
    var t = Mn,
        o = t.lib,
        n = o.Base,
        r = o.WordArray,
        i = o.BufferedBlockAlgorithm,
        a = t.enc;
    a.Utf8;
    var s = a.Base64,
        l = t.algo.EvpKDF,
        u = o.Cipher = i.extend({
            cfg: n.extend(),
            createEncryptor: function(g, d) {
                return this.create(this._ENC_XFORM_MODE, g, d)
            },
            createDecryptor: function(g, d) {
                return this.create(this._DEC_XFORM_MODE, g, d)
            },
            init: function(g, d, y) {
                this.cfg = this.cfg.extend(y), this._xformMode = g, this._key = d, this.reset()
            },
            reset: function() {
                i.reset.call(this), this._doReset()
            },
            process: function(g) {
                return this._append(g), this._process()
            },
            finalize: function(g) {
                return g && this._append(g), this._doFinalize()
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function() {
                function g(d) {
                    return typeof d == "string" ? T : f
                }
                return function(d) {
                    return {
                        encrypt: function(y, j, N) {
                            return g(j).encrypt(d, y, j, N)
                        },
                        decrypt: function(y, j, N) {
                            return g(j).decrypt(d, y, j, N)
                        }
                    }
                }
            }()
        });
    o.StreamCipher = u.extend({
        _doFinalize: function() {
            return this._process(!0)
        },
        blockSize: 1
    });
    var c = t.mode = {},
        p = o.BlockCipherMode = n.extend({
            createEncryptor: function(g, d) {
                return this.Encryptor.create(g, d)
            },
            createDecryptor: function(g, d) {
                return this.Decryptor.create(g, d)
            },
            init: function(g, d) {
                this._cipher = g, this._iv = d
            }
        }),
        b = c.CBC = function() {
            var g = p.extend();

            function d(y, j, N) {
                var D, C = this._iv;
                C ? (D = C, this._iv = e) : D = this._prevBlock;
                for (var M = 0; M < N; M++) y[j + M] ^= D[M]
            }
            return g.Encryptor = g.extend({
                processBlock: function(y, j) {
                    var N = this._cipher,
                        D = N.blockSize;
                    d.call(this, y, j, D), N.encryptBlock(y, j), this._prevBlock = y.slice(j, j + D)
                }
            }), g.Decryptor = g.extend({
                processBlock: function(y, j) {
                    var N = this._cipher,
                        D = N.blockSize,
                        C = y.slice(j, j + D);
                    N.decryptBlock(y, j), d.call(this, y, j, D), this._prevBlock = C
                }
            }), g
        }(),
        h = (t.pad = {}).Pkcs7 = {
            pad: function(g, d) {
                for (var y = 4 * d, j = y - g.sigBytes % y, N = j << 24 | j << 16 | j << 8 | j, D = [], C = 0; C < j; C += 4) D.push(N);
                var M = r.create(D, j);
                g.concat(M)
            },
            unpad: function(g) {
                var d = 255 & g.words[g.sigBytes - 1 >>> 2];
                g.sigBytes -= d
            }
        };
    o.BlockCipher = u.extend({
        cfg: u.cfg.extend({
            mode: b,
            padding: h
        }),
        reset: function() {
            var g;
            u.reset.call(this);
            var d = this.cfg,
                y = d.iv,
                j = d.mode;
            this._xformMode == this._ENC_XFORM_MODE ? g = j.createEncryptor : (g = j.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == g ? this._mode.init(this, y && y.words) : (this._mode = g.call(j, this, y && y.words), this._mode.__creator = g)
        },
        _doProcessBlock: function(g, d) {
            this._mode.processBlock(g, d)
        },
        _doFinalize: function() {
            var g, d = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (d.pad(this._data, this.blockSize), g = this._process(!0)) : (g = this._process(!0), d.unpad(g)), g
        },
        blockSize: 4
    });
    var x = o.CipherParams = n.extend({
            init: function(g) {
                this.mixIn(g)
            },
            toString: function(g) {
                return (g || this.formatter).stringify(this)
            }
        }),
        k = (t.format = {}).OpenSSL = {
            stringify: function(g) {
                var d = g.ciphertext,
                    y = g.salt;
                return (y ? r.create([1398893684, 1701076831]).concat(y).concat(d) : d).toString(s)
            },
            parse: function(g) {
                var d, y = s.parse(g),
                    j = y.words;
                return j[0] == 1398893684 && j[1] == 1701076831 && (d = r.create(j.slice(2, 4)), j.splice(0, 4), y.sigBytes -= 16), x.create({
                    ciphertext: y,
                    salt: d
                })
            }
        },
        f = o.SerializableCipher = n.extend({
            cfg: n.extend({
                format: k
            }),
            encrypt: function(g, d, y, j) {
                j = this.cfg.extend(j);
                var N = g.createEncryptor(y, j),
                    D = N.finalize(d),
                    C = N.cfg;
                return x.create({
                    ciphertext: D,
                    key: y,
                    iv: C.iv,
                    algorithm: g,
                    mode: C.mode,
                    padding: C.padding,
                    blockSize: g.blockSize,
                    formatter: j.format
                })
            },
            decrypt: function(g, d, y, j) {
                return j = this.cfg.extend(j), d = this._parse(d, j.format), g.createDecryptor(y, j).finalize(d.ciphertext)
            },
            _parse: function(g, d) {
                return typeof g == "string" ? d.parse(g, this) : g
            }
        }),
        m = (t.kdf = {}).OpenSSL = {
            execute: function(g, d, y, j, N) {
                if (j || (j = r.random(8)), N) D = l.create({
                    keySize: d + y,
                    hasher: N
                }).compute(g, j);
                else var D = l.create({
                    keySize: d + y
                }).compute(g, j);
                var C = r.create(D.words.slice(d), 4 * y);
                return D.sigBytes = 4 * d, x.create({
                    key: D,
                    iv: C,
                    salt: j
                })
            }
        },
        T = o.PasswordBasedCipher = f.extend({
            cfg: f.cfg.extend({
                kdf: m
            }),
            encrypt: function(g, d, y, j) {
                var N = (j = this.cfg.extend(j)).kdf.execute(y, g.keySize, g.ivSize, j.salt, j.hasher);
                j.iv = N.iv;
                var D = f.encrypt.call(this, g, d, N.key, j);
                return D.mixIn(N), D
            },
            decrypt: function(g, d, y, j) {
                j = this.cfg.extend(j), d = this._parse(d, j.format);
                var N = j.kdf.execute(y, g.keySize, g.ivSize, d.salt, j.hasher);
                return j.iv = N.iv, f.decrypt.call(this, g, d, N.key, j)
            }
        })
}()))));
const _i = qa(es.exports);
var ts = {
    exports: {}
};
ts.exports = function(e) {
    return e.enc.Utf8
}(Et());
const rc = qa(ts.exports),
    Mi = {
        error(e) {
            const t = `The required ${e} method is incomplete!!!`;
            console.error(t)
        },
        ajax(e, t) {
            const {
                method: o = "GET",
                headers: n,
                data: r,
                responseType: i
            } = t;
            return new Promise((a, s) => {
                typeof GM_xmlhttpRequest == "function" ? GM_xmlhttpRequest({
                    method: o,
                    url: e,
                    headers: n,
                    data: r,
                    nocache: !0,
                    responseType: i,
                    onload: l => {
                        a(l)
                    },
                    onerror: l => {
                        console.error(l), s(null)
                    }
                }) : (this.error("GM_xmlhttpRequest"), s(null))
            })
        }
    };
class ic {
    constructor(t = "", o = "", n = "") {
        this.domainURL = t, this.user = o, this.password = n, this.domainURL.endsWith("/") || (this.domainURL += "/")
    }
    generateHeaders() {
        return {
            Authorization: "Basic " + window.btoa(this.user + ":" + this.password)
        }
    }
    generateFullURL(t) {
        return t.startsWith("/") && (t = t.slice(1)), this.domainURL + t
    }
    updateConfig(t, o, n) {
        this.domainURL = t, this.user = o, this.password = n
    }
    async download(t) {
        const o = this.generateHeaders();
        try {
            const n = await Mi.ajax(this.generateFullURL(t), {
                method: "GET",
                headers: o
            });
            return {
                status: n.status,
                data: n.responseText
            }
        } catch {
            return {
                status: -1,
                data: ""
            }
        }
    }
    async upload(t, o) {
        const n = this.generateHeaders();
        try {
            const r = await Mi.ajax(this.generateFullURL(t), {
                method: "PUT",
                headers: n,
                data: o
            });
            return {
                status: r.status,
                data: r.response
            }
        } catch {
            return {
                status: -1,
                data: null
            }
        }
    }
}
const os = "7.4.4",
    ns = "2024-05-14",
    ac = [{
        name: "Vue",
        version: "3.4.27",
        url: "https://vuejs.org/"
    }, {
        name: "Pinia",
        version: "2.1.7",
        url: "https://pinia.vuejs.org/"
    }, {
        name: "CryptoJS",
        version: "4.2.0",
        url: "https://cryptojs.gitbook.io/"
    }, {
        name: "arrive.js",
        version: "2.4.1",
        url: "https://github.com/uzairfarooq/arrive"
    }, {
        name: "userscript-with-webdav",
        version: "0.2.1",
        url: "https://github.com/LightAPIs/userscript-with-webdav"
    }, {
        name: "vue-simple-message",
        version: "0.1.5",
        url: "https://github.com/LightAPIs/vue-simple-message"
    }],
    Ge = nt("note", {
        state: () => {
            const e = new Jl;
            return {
                id: "",
                items: {},
                config: {
                    searchBox: {
                        showIndex: !1,
                        canHideSearchFrame: !0,
                        showGroupName: !1,
                        openNewTab: !1,
                        enableShortcutKeys: !1
                    },
                    searchValue: {
                        caseSensitive: !0,
                        split: !1,
                        regular: !1
                    },
                    addNote: {
                        showNoteGroupName: !1,
                        hideNoteText: !1,
                        showNoteGroupColor: !1,
                        showPopoverFrame: !1,
                        openNoteNewTab: !1,
                        canHideAddFrame: !0
                    },
                    interface: {
                        insertSearchButton: !0,
                        mode: "dark",
                        language: ""
                    },
                    storeData: {
                        autoSync: !0,
                        enableWebDAV: !1,
                        webDAVURL: "",
                        webDAVFile: "",
                        webDAVUser: "",
                        webDAVPassword: "",
                        webDAVPassphrase: "",
                        webDAVSyncMode: "two-way",
                        webDAVAutoSyncInterval: 0
                    },
                    other: {}
                },
                group: {
                    default: {
                        value: "default",
                        primaryColor: "",
                        secondaryColor: "",
                        weight: 0
                    }
                },
                storeModificationTime: 0,
                webDAVSyncTime: 0,
                i18n: e,
                lang: e.get(),
                menuCommand: {
                    settings: null,
                    management: null,
                    group: null
                },
                listener: {
                    items: null,
                    config: null,
                    group: null
                },
                webDAVTimer: null,
                webDAVSyncLoading: !1,
                webDAVHandler: new ic,
                changeEvent: null,
                itemClick: null,
                defaultColor: {
                    primaryColor: "#3c81df",
                    secondaryColor: "#ffffff"
                },
                scriptInfo: {
                    author: {
                        name: "",
                        homepage: ""
                    },
                    updated: "",
                    url: "",
                    library: ac,
                    icons: [{
                        name: "Ikonate",
                        url: "https://ikonate.com/"
                    }]
                },
                otherConfigInfo: {},
                searchBtnClassName: "",
                searchBtnBoxClassName: ""
            }
        },
        getters: {
            configKeyName: e => "$" + e.id + "Config",
            groupKeyName: e => "$" + e.id + "Group",
            modificationTimeKeyName: e => "$" + e.id + "Time",
            webDAVSyncTimeKeyName: e => "$" + e.id + "WebDAV",
            itemsKeyName: e => "$" + e.id + "Items",
            itemsCount: e => Object.keys(e.items).length,
            groupCount: e => Object.keys(e.group).length
        },
        actions: {
            init(e) {
                this.readValuesFromStorage(), this.findMaxWeightGroupKey(), e && this.i18n.setLangDict(e), this.i18n.setLangType(this.config.interface.language || window.navigator.language || document.documentElement.lang), this.config.interface.language = this.i18n.getLangType(), this.lang = this.i18n.get(), this.registerMenuCommand(), this.valueChangeListener(), this.updateWebDAVConfig(), this.webDAVSyncTimer("immediate")
            },
            readValuesFromStorage() {
                const e = fe.listValues();
                let t = !1;
                for (const o of e) {
                    const n = fe.getValue(o, null);
                    if (n) switch (o) {
                        case this.configKeyName:
                            for (const r in this.config) n[r] && Object.assign(this.config[r], n[r]);
                            break;
                        case this.groupKeyName:
                            Object.assign(this.group, n);
                            break;
                        case this.modificationTimeKeyName:
                            this.storeModificationTime = n;
                            break;
                        case this.webDAVSyncTimeKeyName:
                            this.webDAVSyncTime = n;
                            break;
                        case this.itemsKeyName:
                            Object.assign(this.items, n);
                            break;
                        default:
                            n.tag && (this.items[o] || (n.name || (n.name = o), this.items[o] = n, t = !0)), fe.deleteValue(o)
                    }
                }
                t && fe.setValue(this.itemsKeyName, this.items)
            },
            updateWebDAVConfig() {
                const {
                    webDAVURL: e,
                    webDAVUser: t,
                    webDAVPassword: o
                } = this.config.storeData;
                this.webDAVHandler.updateConfig(e, t, o)
            },
            findMaxWeightGroupKey() {
                const e = Fo();
                e.groupKey = "default";
                for (const t in this.group) {
                    const o = Number(this.group[t].weight) || 0,
                        n = Number(this.group[e.groupKey].weight) || 0;
                    o > n ? e.groupKey = t : o === n && [t, e.groupKey].includes("default") && (e.groupKey = "default")
                }
            },
            initOtherConfigInfo(e) {
                this.otherConfigInfo = e;
                for (const t in this.otherConfigInfo) this.config.other[t] === void 0 && (this.config.other[t] = this.otherConfigInfo[t].default)
            },
            writeModificationTime(e) {
                this.storeModificationTime = e || Date.now(), fe.setValue(this.modificationTimeKeyName, this.storeModificationTime)
            },
            writeWebDAVSyncTime() {
                this.webDAVSyncTime = Date.now(), fe.setValue(this.webDAVSyncTimeKeyName, this.webDAVSyncTime)
            },
            readModificationTime() {
                return fe.getValue(this.modificationTimeKeyName, this.storeModificationTime)
            },
            executeChangeEvent(e) {
                typeof this.changeEvent == "function" && this.changeEvent(e)
            },
            judgeUsers(e) {
                return e ? Object.keys(this.items).includes(e) : !1
            },
            writeUser(e, t, o, n) {
                return this.storageEvent(() => {
                    let r = !1;
                    if (this.judgeUsers(e)) {
                        const i = this.items[e];
                        o || n && n !== "default" ? (i.tag !== o && (this.items[e].tag = o, r = !0), i.name !== t && (this.items[e].name = t, r = !0), i.name !== n && (this.items[e].group = n, r = !0)) : (delete this.items[e], r = !0)
                    } else(o || n && n !== "default") && (this.items[e] = {
                        tag: o,
                        name: t,
                        group: n
                    }, r = !0);
                    return !!r && (fe.setValue(this.itemsKeyName, this.items), this.writeModificationTime(), !0)
                }, e)
            },
            updateUserName(e, t) {
                t && this.judgeUsers(e) && (this.items[e].name = t)
            },
            setUsers(e, t = !0, o = !0) {
                return this.storageEvent(() => (this.items = e, o && (fe.setValue(this.itemsKeyName, this.items), this.writeModificationTime()), t))
            },
            writeNewGroupValue(e, t) {
                return this.storageEvent(() => (this.group[e] = t, fe.setValue(this.groupKeyName, this.group), this.writeModificationTime(), !0))
            },
            setGroups(e, t = !0, o = !0) {
                return this.storageEvent(() => (this.group = e, o && (fe.setValue(this.groupKeyName, this.group), this.writeModificationTime()), t))
            },
            saveConfig(e, t = !0, o = !0) {
                return this.storageEvent(() => {
                    if (e) {
                        const {
                            addNote: n,
                            searchBox: r,
                            searchValue: i,
                            interface: a,
                            other: s,
                            storeData: l
                        } = e;
                        n && Object.assign(this.config.addNote, n), r && Object.assign(this.config.searchBox, r), i && Object.assign(this.config.searchValue, i), a && Object.assign(this.config.interface, a), s && Object.assign(this.config.other, s), l && Object.assign(this.config.storeData, l)
                    }
                    return this.updateWebDAVConfig(), o && fe.setValue(this.configKeyName, this.config), t
                })
            },
            storageEvent(e, t) {
                try {
                    return e() && (this.executeChangeEvent(t), this.addNotification(this.lang.saveCompletedNotifactionText)), !0
                } catch (o) {
                    return console.error("Error in storage operation.", o), this.addNotification(this.lang.saveErrorNotifactionText, "error"), !1
                }
            },
            setInterfaceMode(e) {
                this.config.interface.mode = e === "dark" ? "dark" : "bright", this.saveConfig()
            },
            setInterfaceLanguage(e) {
                this.i18n.setLangType(e), this.lang = this.i18n.get(), this.config.interface.language = this.i18n.getLangType(), this.saveConfig(), this.registerMenuCommand()
            },
            getUrl(e) {
                return this.itemClick ? this.itemClick(e) : `${location.origin}/${e}`
            },
            getUserGroupKey(e) {
                if (this.judgeUsers(e)) {
                    const t = this.items[e].group;
                    if (t && Object.keys(this.group).includes(t)) return t
                }
                return "default"
            },
            getUserGroupName(e) {
                let t = "";
                const o = this.getUserGroupKey(e);
                return o !== "default" && this.group[o] && (t = this.group[o].value), t
            },

            // 读取 analyticsdata 的功能，添加参数 e 表示查询的用户 ID
            readAnalyticsData(e) {
                console.log(`readAnalyticsData called with user ID: ${e}`);
                const items = this.items;

                if (e && this.judgeUsers(e)) {
                    const userItem = items[e];
                    if (userItem.tag && this.isTagValid(userItem.tag)) {
                        console.log(`User ${e} has valid tag, processing all data.`);
                        for (const key in items) {
                            const item = items[key];
                            if (item.tag && this.isTagValid(item.tag)) {
                                this.splitTagIntoFields(item);
                            }
                        }
                    } else {
                        console.log(`User ${e} tag is invalid or already processed, no action taken.`);
                    }
                }
            },

            isTagValid(tag) {
                if (typeof tag !== "string") {
                    return false;
                }
                const regex = /^头衔\d+_改名\d+_发盘\d+_删推\d+_聪明钱\d+$/;
                return regex.test(tag);
            },
            

            // 分割 tag 字段，仅保留头衔部分，并覆盖原始 tag 字段
            splitTagIntoFields(item) {
                console.log(`Processing item: ${item.name}`);
                if (!item.tag || !this.isTagValid(item.tag)) {
                    console.log(`Item ${item.name} has invalid tag: ${item.tag}, skipping.`);
                    return;
                }

                const tagParts = item.tag.split("_");
                let newTag = "";
                const fields = {};

                tagParts.forEach(part => {
                    if (part.startsWith("头衔")) {
                        newTag = part.replace("头衔", "");
                    } else if (part.startsWith("改名")) {
                        fields.nameChanges = parseInt(part.replace("改名", ""), 10) || 0;
                    } else if (part.startsWith("发盘")) {
                        fields.pumpCount = parseInt(part.replace("发盘", ""), 10) || 0;
                    } else if (part.startsWith("删推")) {
                        fields.deletedTweets = parseInt(part.replace("删推", ""), 10) || 0;
                    } else if (part.startsWith("聪明钱")) {
                        fields.smartMoney = parseInt(part.replace("聪明钱", ""), 10) || 0;
                    }
                });

                if (newTag) {
                    item.tag = newTag;
                } else {
                    console.log(`No "头衔" found in tag for item ${item.name}, tag remains unchanged.`);
                }
                Object.assign(item, fields);

                this.storageEvent(() => {
                    fe.setValue(this.itemsKeyName, this.items);
                    this.writeModificationTime();
                    return true;
                }, item.name);
            },

            // 获取某个用户的 analyticsdata
            getAnalyticsData(e) {
                // 确保已经执行过 readAnalyticsData
                this.readAnalyticsData(e);

                // 检查用户是否存在
                if (this.judgeUsers(e)) {
                    const item = this.items[e];
                    return {
                        nameChanges: item.nameChanges || 0,
                        pumpCount: item.pumpCount || 0,
                        deletedTweets: item.deletedTweets || 0,
                        smartMoney: item.smartMoney || 0
                    };
                }

                // 如果用户不存在，返回空值
                return null;
            },

            getUserTag(e, t = {}) {
                const {
                    maskGroup: o
                } = t;
                let n = "";
                if (this.judgeUsers(e)) {
                    if (n = this.items[e].tag, this.config.addNote.showNoteGroupName && !o) {
                        const r = this.getUserGroupName(e);
                        this.config.addNote.hideNoteText ? n = r : r && (n ? n += ` [${r}]` : n = r)
                    }
                    n = Qa(n, t)
                }
                return n
            },
            getUserName(e) {
                return this.judgeUsers(e) && this.items[e].name || ""
            },
            getPrimaryColor(e) {
                const t = this.getUserGroupKey(e);
                return this.group[t].primaryColor
            },
            getSecondaryColor(e) {
                const t = this.getUserGroupKey(e);
                return this.group[t].secondaryColor
            },
            openLink(e, t, o, n) {
                const r = this.getUrl(e);
                let i = Xt.Self;
                n === "popover" ? i = this.config.addNote.openNoteNewTab ? Xt.Blank : Xt.Self : n === "search" && (i = this.config.searchBox.openNewTab ? Xt.Blank : Xt.Self),
                    function(a, s, l, u) {
                        a && Xl(a, s && l ? 1 : s ? 2 : u)
                    }(r, t, o, i)
            },
            determineSearchString(e, t, o = !1) {
                if (e) {
                    let n = null,
                        r = [];
                    if (this.config.searchValue.regular && /^\/.+\/[gim]{0,3}$/.test(e)) try {
                        n = new RegExp(e.replace(/^\/|\/[gim]{0,3}$/g, ""), e.replace(/^\/.+\/[^gim]*/i, ""))
                    } catch (a) {
                        console.log(a), n = null
                    }
                    n === null && this.config.searchValue.split && (r = e.split(/\s+/));
                    let i = !0;
                    if (n) i = n.test(t);
                    else if (r.length > 0)
                        for (const a of r) this.config.searchValue.caseSensitive ? t.includes(a) || (i = !1) : t.toLocaleLowerCase().includes(a.toLocaleLowerCase()) || (i = !1);
                    else i = this.config.searchValue.caseSensitive ? t.includes(e) : t.toLocaleLowerCase().includes(e.toLocaleLowerCase());
                    return i
                }
                return o
            },
            addNotification(e, t = "info", o, n = 4e3) {
                const r = as(),
                    i = new Date,
                    a = o || `id-${i.getTime()}_${r.total}`;
                r.total++, r.notifications.splice(0, 0, {
                    id: a,
                    type: t,
                    content: e
                }), console.info(`[${An(i.getHours(), 2)}:${An(i.getMinutes(), 2)}:${An(i.getSeconds(), 2)}] >>> ${e}`), window.setTimeout(() => {
                    r.removeNotifaction(a)
                }, n)
            },
            // 生成UUID
            generateUUID() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    const r = Math.random() * 16 | 0;
                    const v = c === 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            },
            // 生成随机密钥
            generateRandomKey(length) {
                let result = '';
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                const charactersLength = characters.length;
                for (let i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            },
            // 生成设备指纹（替代用户ID）
            generateDeviceFingerprint() {
                // 读取本地存储，避免重复计算
                if (localStorage.device_fingerprint) return localStorage.device_fingerprint;

                // 获取屏幕、系统和浏览器信息
                const screenInfo = `${screen.width}x${screen.height}x${screen.colorDepth}`;
                const osInfo = navigator.platform || navigator.userAgentData?.platform || "Unknown";
                const browserInfo = navigator.userAgent.match(/(Firefox|Chrome|Safari|Edge)\/\d+/)?.[0] || "Unknown";

                // 获取 WebGL 指纹
                function getWebGL() {
                    const gl = document.createElement('canvas').getContext('webgl');
                    if (!gl) return "No WebGL";
                    const ext = gl.getExtension('WEBGL_debug_renderer_info');
                    return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "Unknown";
                }

                // 获取 Canvas 指纹
                function getCanvas() {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    ctx.fillText('Fingerprint', 10, 50);
                    return canvas.toDataURL();
                }

                // 计算指纹（移除音频指纹）
                const fingerprint = CryptoJS.SHA256(
                    screenInfo + osInfo + browserInfo + getCanvas() + getWebGL()
                ).toString();

                // 存储并返回
                return (localStorage.device_fingerprint = fingerprint);
            },
            // 保存密钥到本地存储
            saveKeyLocally(fileId, key) {
                const keyData = {
                    fileId,
                    key,
                    createdAt: Date.now()
                };

                // 使用GM_setValue保存（油猴特有API）
                GM_setValue('encryptionKey_' + fileId, keyData);
            },
            getLocalDateString() {
                const now = new Date();
                const year = now.getFullYear();
                const month = String(now.getMonth() + 1).padStart(2, '0');
                const day = String(now.getDate()).padStart(2, '0');
                return `${year}${month}${day}`;
            },

            // 专门用于触发下载操作的方法
            downloadExportFile(fileId,localDate,isBatch=false) {
                if (!this.generatedZipBlob) {
                    alert("还没有生成导出文件，请先点击备份按钮。");
                    return;
                }
                try {
                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(this.generatedZipBlob);
                    a.download = `x_export_${localDate}_${fileId}.zip`; // 文件名包含时间戳和唯一ID
                    a.click();
                    URL.revokeObjectURL(a.href);
                    // 弹窗提示用户保存密钥的重要性

                    if (!isBatch) {
                        alert(
                            `⚠️ 重要提示 ⚠️\n\n` +
                            `你已成功导出数据并下载压缩文件。\n\n` +
                            `压缩文件中包含：\n` +
                            `1. 加密数据文件 (x_data_${localDate}.enc)\n` +
                            `2. 解密密钥文件 (x_key_${localDate}.key)\n\n` +
                            `请务必：\n` +
                            `- 安全保存密钥文件\n` +
                            `- 不要与他人分享密钥\n` +
                            `- 将密钥文件与加密文件分开存储\n\n` +
                            `密钥文件丢失将无法恢复数据！`
                        );
                        if (typeof this.addNotification === 'function') {
                            this.addNotification(this.lang?.backUpNotifactionText || '导出成功！');
                        }
                    }
                } catch (error) {
                    console.error("下载触发失败", error);
                }
            },

            clear(){
                // 弹窗提示用户是否确认删除所有备注数据
                if (confirm("是否确认删除所有备注数据？")) {
                    // 获取所有存储的键
                    const keys = GM_listValues();
                    // 遍历并删除每个键
                    keys.forEach(key => {
                        const value = GM_getValue(key);
                        console.log(`键: ${key}, 值: ${value}`);
                        GM_deleteValue(key);
                    });
                    // 提示用户数据已清除
                    alert("所有备注数据已清除！");
                } else {
                    // 用户取消删除
                    alert("操作已取消，未删除任何数据。");
                }
            },

           
            batchExport() {
                // 弹出提示框，让用户输入导出次数
                const exportCount = parseInt(window.prompt("请输入导出次数："), 10);

                // 验证输入是否有效
                if (isNaN(exportCount) || exportCount <= 0) {
                    alert("请输入一个有效的正整数。");
                    return;
                }

                // 根据导出次数循环执行
                for (let i = 0; i < exportCount; i++) {
                    // 获取数据
                    const e = fe.listValues(),
                        t = {};
                    for (const o of e) t[o] = fe.getValue(o, {});

                    // 生成唯一标识和时间戳
                    const fileId = this.generateUUID(); // 假设存在生成UUID的方法
                    const localDate = this.getLocalDateString(); // 假设存在获取日期字符串的方法
                    const timestamp = Date.now();

                    // 生成随机密钥
                    const encryptionKey = this.generateRandomKey(32); // 假设存在生成密钥的方法

                    // 设置元数据，authorizedDevices为空
                    const metadata = {
                        fileId,
                        deviceFingerprint: "", // 无设备指纹
                        timestamp,
                        authorizedDevices: [], // 授权设备为空数组
                        maxDevices: 3, // 可根据需求调整
                    };

                    // 打包数据
                    const packagedData = {
                        metadata,
                        content: t
                    };

                    // 转换为JSON并加密
                    const jsonString = JSON.stringify(packagedData);
                    const encrypted = CryptoJS.AES.encrypt(jsonString, encryptionKey).toString();

                    // 生成验证哈希
                    const verificationHash = CryptoJS.SHA256("" + fileId + encryptionKey).toString();

                    // 构造导出数据
                    const exportData = {
                        version: "1.0",
                        encryptedData: encrypted,
                        verificationHash: verificationHash,
                    };

                    // 创建zip文件
                    const zip = new JSZip();
                    const encryptedBlob = new Blob([JSON.stringify(exportData)], { type: 'application/json' });
                    zip.file(`x_data_${localDate}.enc`, encryptedBlob);

                    // 添加密钥文件
                    const keyData = JSON.stringify({
                        FileId: fileId,
                        key: encryptionKey,
                        createdAt: timestamp
                    });
                    const keyBlob = new Blob([keyData], { type: 'application/json' });
                    zip.file(`x_key_${localDate}.key`, keyBlob);

                    // 生成zip并下载
                    zip.generateAsync({ type: "blob" })
                        .then((content) => {
                            console.log("压缩文件已生成，文件大小:", content.size);
                            // 将生成的 Blob 保存到组件或对象的一个属性中，供后续下载使用
                            this.generatedZipBlob = content;
                            // 直接调用下载方法，不弹出确认框
                            this.downloadExportFile(fileId,localDate,true);
                            console.log("已自动开始下载导出文件");
                        })
                        .catch((error) => {
                            console.error("压缩过程错误：", error);
                        });
                }
            },

            export() {
                const e = fe.listValues(),
                    t = {};
                for (const o of e) t[o] = fe.getValue(o, {});

                // 生成唯一的文件ID和设备指纹
                const fileId = this.generateUUID();
                const localDate = this.getLocalDateString();
                const deviceFingerprint = this.generateDeviceFingerprint();
                const timestamp = Date.now();

                // 调试信息输出
                console.log("=== 导出信息调试 ===");
                console.log("文件ID:", fileId);
                console.log("本地日期:", localDate);
                console.log("设备指纹:", deviceFingerprint);
                console.log("时间戳:", timestamp);

                // 生成或使用用户提供的加密密钥
                const encryptionKey = this.generateRandomKey(32);
                console.log("生成的加密密钥:", encryptionKey);

                // 从现有的持久化存储中检索使用数据
                // 先检查是否有现有的使用记录
                let existingUsageData = null;

                // 如果用户正在重新导出之前导入过的文件，我们应该尝试获取旧数据
                // 遍历本地存储查找以"encryptedFileUsage_"开头的所有键
                const allKeys = GM_listValues ? GM_listValues() : [];
                console.log("本地存储的所有键:", allKeys);

                for (const key of allKeys) {
                    if (key.startsWith('encryptedFileUsage_')) {
                        const possibleUsageData = GM_getValue(key);
                        if (possibleUsageData) {
                            existingUsageData = possibleUsageData;
                            console.log("找到现有使用数据:", key, possibleUsageData);
                            // 默认使用旧数据，不询问用户
                            break;
                        }
                    }
                }

                // 准备元数据，使用现有数据或初始化新数据
                const metadata = {
                    fileId,
                    deviceFingerprint,
                    timestamp,
                    authorizedDevices: existingUsageData ? existingUsageData.authorizedDevices : [deviceFingerprint], // 授权设备列表
                    maxDevices: existingUsageData ? existingUsageData.maxDevices : 3, // 最多允许3台设备
                };

                console.log("最终使用的元数据:", metadata);

                // 同时在本地保存最新的使用数据
                GM_setValue('encryptedFileUsage_' + fileId, {
                    authorizedDevices: metadata.authorizedDevices,
                    maxDevices: metadata.maxDevices
                });
                console.log("已保存本地使用数据: encryptedFileUsage_" + fileId);

                // 将原始数据和元数据合并
                const packagedData = {
                    metadata,
                    content: t
                };

                // 使用CryptoJS进行加密
                const jsonString = JSON.stringify(packagedData);
                console.log("打包数据大小(字节):", new Blob([jsonString]).size);
                const encrypted = CryptoJS.AES.encrypt(jsonString, encryptionKey).toString();
                console.log("加密后数据大小(字节):", new Blob([encrypted]).size);

                // 生成验证哈希
                const verificationHash = CryptoJS.SHA256(deviceFingerprint + fileId + encryptionKey).toString();
                console.log("验证哈希:", verificationHash);

                // 将加密数据封装到导出文件中
                const exportData = {
                    version: "1.0",
                    encryptedData: encrypted,
                    verificationHash: verificationHash,
                };

                // // 保存密钥到本地存储
                // this.saveKeyLocally(fileId, encryptionKey);
                // console.log("已保存密钥到本地:", fileId, encryptionKey);

                // 使用JSZip创建压缩文件
                const zip = new JSZip();

                // 创建加密文件
                const encryptedBlob = new Blob([JSON.stringify(exportData)], { type: 'application/json' });
                zip.file(`x_data_${localDate}.enc`, encryptedBlob);
                console.log("已添加加密文件到压缩包:", `x_data_${localDate}.enc`, encryptedBlob.size);

                // 创建密钥文件
                const keyData = JSON.stringify({
                    FileId: fileId,
                    key: encryptionKey,
                    createdAt: timestamp
                });
                const keyBlob = new Blob([keyData], { type: 'application/json' });
                zip.file(`x_key_${localDate}.key`, keyBlob);
                console.log("已添加密钥文件到压缩包:", `x_key_${localDate}.key`, keyBlob.size);

                // 异步生成压缩文件Blob
                zip.generateAsync({ type: "blob" })
                    .then((content) => {
                        console.log("压缩文件已生成，文件大小:", content.size);
                        // 将生成的 Blob 保存到组件或对象的一个属性中，供后续下载使用
                        this.generatedZipBlob = content;
                        // 直接调用下载方法，不弹出确认框
                        this.downloadExportFile(fileId,localDate);
                        console.log("已自动开始下载导出文件");
                    })
                    .catch((error) => {
                        console.error("压缩过程错误：", error);
                    });
            },
            // 添加导入功能
            import() {
                // 创建文件选择器
                const fileInput = document.createElementNS("http://www.w3.org/1999/xhtml", "input");
                fileInput.type = "file";
                fileInput.accept = ".enc";  // 只接受.enc扩展名的文件
                fileInput.style.display = "none";

                fileInput.addEventListener("change", () => {
                    if (!fileInput.value) {
                        console.warn("未选择文件。");
                        if (typeof this.addNotification === 'function') {
                            this.addNotification(this.lang?.optionsImportNoFileText || "未选择文件");
                        } else {
                            alert("未选择文件");
                        }
                        return;
                    }

                    const file = fileInput.files[0];
                    if (!file) {
                        console.warn("找不到文件。");
                        if (typeof this.addNotification === 'function') {
                            this.addNotification(this.lang?.optionsImportCannotFindFile || "找不到文件");
                        } else {
                            alert("找不到文件");
                        }
                        return;
                    }

                    const fileReader = new FileReader();

                    fileReader.onload = (event) => {
                        const { target } = event;
                        if (target) {
                            const fileContent = target.result;
                            if (typeof fileContent === "string") {
                                // 检测是否为加密文件
                                let isEncrypted = false;
                                try {
                                    const parsedData = JSON.parse(fileContent);
                                    isEncrypted = parsedData.encryptedData && parsedData.verificationHash;
                                } catch (error) {
                                    isEncrypted = false;
                                }

                                if (isEncrypted) {
                                    // 处理加密文件
                                    const exportData = JSON.parse(fileContent);
                                    const encryptedData = exportData.encryptedData;

                                    // 弹出输入框让用户输入解密密钥
                                    const encryptionKey = prompt('请输入解密密钥：');
                                    if (!encryptionKey) {
                                        alert('密钥不能为空');
                                        return;
                                    }

                                    // 解密并导入
                                    this.decryptAndImport(encryptedData, encryptionKey);
                                } else {
                                    // 如果不是加密文件，提示用户导入正确的文件
                                    alert("请导入正确的加密文件。当前文件不是加密格式。");
                                    if (typeof this.addNotification === 'function') {
                                        this.addNotification("请导入正确的加密文件", "error");
                                    }
                                }
                            } else {
                                console.warn("不是文本文件。");
                                if (typeof this.addNotification === 'function') {
                                    this.addNotification(this.lang?.optionsImportNotATextFile || "不是文本文件");
                                } else {
                                    alert("不是文本文件");
                                }
                            }
                        }
                    };

                    fileReader.readAsText(file);
                });

                document.body.appendChild(fileInput);
                fileInput.click();
                setTimeout(() => {
                    document.body.removeChild(fileInput);
                }, 1000);
            },

            // 修改后的decryptAndImport函数
            decryptAndImport(encryptedData, encryptionKey) {
                try {
                    console.log("=== 导入信息调试 ===");
                    console.log("开始解密，加密数据大小:", new Blob([encryptedData]).size);
                    console.log("使用的密钥:", encryptionKey);

                    // 解密数据
                    const decrypted = CryptoJS.AES.decrypt(encryptedData, encryptionKey).toString(CryptoJS.enc.Utf8);
                    if (!decrypted) {
                        console.error("解密失败：密码错误或文件损坏");
                        alert('解密失败：密码错误或文件损坏');
                        return;
                    }
                    console.log("解密成功，解密后数据大小:", new Blob([decrypted]).size);

                    const packagedData = JSON.parse(decrypted);
                    console.log("解析JSON成功，数据结构:", Object.keys(packagedData));

                    // 验证数据格式
                    if (!packagedData.metadata || !packagedData.content) {
                        console.error("文件格式错误：无法找到元数据或内容部分");
                        alert('文件格式错误：无法找到元数据或内容部分');
                        return;
                    }

                    // 获取当前设备指纹
                    const currentDeviceFingerprint = this.generateDeviceFingerprint();
                    console.log("当前设备指纹:", currentDeviceFingerprint);

                    const fileId = packagedData.metadata.fileId;
                    console.log("文件ID:", fileId);

                    // 首先尝试从本地存储获取使用数据
                    let usageData = GM_getValue('encryptedFileUsage_' + fileId, null);
                    console.log("本地存储的使用数据:", usageData);

                    // 如果本地没有使用记录，使用解密数据中的元数据
                    if (!usageData) {
                        console.log("使用文件中的元数据信息初始化使用记录");
                        usageData = {
                            authorizedDevices: packagedData.metadata.authorizedDevices || [packagedData.metadata.deviceFingerprint],
                            maxDevices: packagedData.metadata.maxDevices || 3
                        };
                    } else {
                        console.log("使用本地存储的使用记录");
                    }
                    console.log("当前使用数据:", usageData);

                    // 删除访问次数检查，保留设备数检查

                    // 检查设备授权
                    const isAuthorizedDevice = usageData.authorizedDevices.includes(currentDeviceFingerprint);
                    console.log("是否为授权设备:", isAuthorizedDevice);

                    if (!isAuthorizedDevice) {
                        // 如果不是已授权设备，但还未达到最大设备数，则添加新设备
                        if (usageData.authorizedDevices.length >= usageData.maxDevices) {
                            console.error(`导入失败: 已达到最大设备数量限制(${usageData.authorizedDevices.length}/${usageData.maxDevices}台)`);
                            alert(`导入失败: 已达到最大设备数量限制(${usageData.authorizedDevices.length}/${usageData.maxDevices}台)`);
                            return;
                        }

                        // 添加新设备到授权列表
                        usageData.authorizedDevices.push(currentDeviceFingerprint);
                        console.log("已将当前设备添加到授权设备列表:", usageData.authorizedDevices);
                        alert("已将当前设备添加到授权设备列表");
                    }

                    // 非常重要：更新本地存储中的使用记录
                    GM_setValue('encryptedFileUsage_' + fileId, usageData);
                    console.log("已更新本地存储中的使用记录");

                    // 导入数据到系统中
                    const content = packagedData.content;
                    console.log("准备导入数据到系统，数据键数量:", Object.keys(content).length);
                    this.importDataToSystem(content);
                    console.log("数据已成功导入到系统");

                    // 显示使用信息 - 移除次数显示
                    alert(`导入成功！\n` +
                        `当前已授权 ${usageData.authorizedDevices.length} 台设备，最多允许 ${usageData.maxDevices} 台设备。`);

                } catch (error) {
                    console.error("解密或导入数据时出错:", error);
                    alert("解密或导入数据失败: " + error.message);
                }
            },

            // 导入数据到系统
            importDataToSystem(data) {
                console.log("数据导入:", data);

                // 使用原始代码的导入逻辑
                if (typeof window.storageEvent === 'function') {
                    window.storageEvent(() => {
                        for (const key in data) {
                            if (key === window.configKeyName) {
                                window.saveConfig(data[key], false);
                            } else if (key === window.groupKeyName) {
                                window.setGroups(data[key], false);
                            } else if (key === window.itemsKeyName) {
                                window.setUsers(data[key], false);
                            } else if (typeof fe !== 'undefined' && typeof fe.setValue === 'function') {
                                fe.setValue(key, data[key]);
                            }
                        }
                        return true;
                    });
                } else {
                    // 备选逻辑，如果storageEvent不可用
                    for (const key in data) {
                        if (data.hasOwnProperty(key)) {
                            if (typeof fe !== 'undefined' && typeof fe.setValue === 'function') {
                                fe.setValue(key, data[key]);
                            }
                        }
                    }

                    // 如果需要，触发系统的刷新或更新功能
                    if (typeof fe !== 'undefined' && typeof fe.refresh === 'function') {
                        fe.refresh();
                    }
                }
            },
            showFrame(e, t = !1, o = !0) {
                const n = rs(),
                    r = mr(),
                    i = vr(),
                    a = Fo(),
                    s = hn(),
                    l = xr(),
                    u = br();
                if (n.isInsert || r.isInsert || i.isInsert || a.isShow || s.isShow || l.isShow || !t && u.isShow) return !0;
                switch (e) {
                    case "settings":
                        n.isInsert = o;
                        break;
                    case "management":
                        r.isInsert = o;
                        break;
                    case "group":
                        i.isInsert = o;
                        break;
                    case "search":
                        u.isShow = o;
                        break;
                    default:
                        return !0
                }
                return !1
            },
            showPopover(e, t, o) {
                this.config.addNote.showPopoverFrame && Zn().show(e, t, o)
            },
            showAdd(e, t) {
                const o = Fo();
                let n = "",
                    r = "",
                    i = o.groupKey;
                this.judgeUsers(e) ? (n = this.items[e].tag || "", r = t || this.items[e].name || "", i = this.items[e].group || "default") : t && (n = t, r = t), o.show(e, n, i, r)
            },
            hidePopover() {
                this.config.addNote.showPopoverFrame && Zn().hide()
            },
            registerMenuCommand() {
                for (const e in this.menuCommand) {
                    const t = this.menuCommand[e];
                    t !== null && (fe.unregisterMenuCommand(t), this.menuCommand[e] = null)
                }
                this.menuCommand.settings = fe.registerMenuCommand(this.lang.gmSettingsText, () => {
                    this.showFrame("settings")
                }), this.menuCommand.management = fe.registerMenuCommand(this.lang.gmManagementText, () => {
                    this.showFrame("management")
                }), this.menuCommand.group = fe.registerMenuCommand(this.lang.gmGroupText, () => {
                    this.showFrame("group")
                })
            },
            valueChangeListener() {
                const e = this.config.storeData.autoSync;
                for (const t in this.listener) {
                    const o = this.listener[t];
                    o !== null && (fe.removeValueChangeListener(o), this.listener[t] = null)
                }
                e && (this.listener.items = fe.addValueChangeListener(this.itemsKeyName, (t, o, n, r) => {
                    r && Re.debounce("itemsListener", () => {
                        n && (this.setUsers(n, !0, !1), this.addNotification(this.lang.syncNoteNotifactionText))
                    }, 1e3)
                }), this.listener.group = fe.addValueChangeListener(this.groupKeyName, (t, o, n, r) => {
                    r && Re.debounce("groupListener", () => {
                        n && (this.setGroups(n, !0, !1), this.addNotification(this.lang.syncGroupNotifactionText))
                    }, 1e3)
                }), this.listener.config = fe.addValueChangeListener(this.configKeyName, (t, o, n, r) => {
                    r && Re.debounce("configListener", () => {
                        n && this.saveConfig(n, !0, !1)
                    }, 1e3)
                }))
            },
            webDAVSyncTimer(e) {
                const t = this.config.storeData.enableWebDAV;
                if (this.webDAVTimer != null && (window.clearInterval(this.webDAVTimer), this.webDAVTimer = null), t) {
                    e === "two-way" ? (this.writeWebDAVSyncTime(), this.webDAVSyncHandler()) : e === "upload" ? (this.writeWebDAVSyncTime(), this.webDAVSyncHandler("upload")) : e === "download" && (this.writeWebDAVSyncTime(), this.webDAVSyncHandler("download"));
                    const o = this.config.storeData.webDAVAutoSyncInterval;
                    o > 0 && (e === "immediate" && this.webDAVSyncDecider(o), this.webDAVTimer = window.setInterval(() => {
                        this.webDAVSyncDecider(o)
                    }, 60 * o * 1e3))
                }
            },
            webDAVSyncDecider(e) {
                Date.now() - fe.getValue(this.webDAVSyncTimeKeyName, 0) < 1e3 * (60 * e - 5) || (this.writeWebDAVSyncTime(), this.webDAVSyncHandler())
            },
            async webDAVSyncHandler(e) {
                if (this.config.storeData.enableWebDAV) {
                    if (this.webDAVSyncLoading = !0, !this.webDAVValidator()) return this.addNotification(this.lang.webDAVConfigInvalidText), void(this.webDAVSyncLoading = !1);
                    const {
                        webDAVFile: t,
                        webDAVSyncMode: o
                    } = this.config.storeData;
                    if (e) e === "upload" ? o !== "download" && (this.writeModificationTime(), await this.webDAVUploadData()) : e === "download" && o !== "upload" && await this.webDAVDownloadData();
                    else {
                        const n = await this.webDAVHandler.download(t + ".lock");
                        if (n.status === 404) o === "download" ? this.addNotification(this.lang.webDAVNoFileText) : await this.webDAVUploadData();
                        else if (n.status === 200) try {
                            const {
                                unix: r
                            } = JSON.parse(n.data);
                            if (typeof r != "number") return console.error(r), this.addNotification(this.lang.webDAVResponseContentErrorText, "error"), void(this.webDAVSyncLoading = !1);
                            const i = this.readModificationTime();
                            i > r ? o === "download" ? this.addNotification(this.lang.webDAVLocalNewText) : await this.webDAVUploadData() : i < r ? o === "upload" ? this.addNotification(this.lang.webDAVCloudNewText) : await this.webDAVDownloadData(r) : this.addNotification(this.lang.webDAVNoChangeText)
                        } catch (r) {
                            console.error(r), this.addNotification(this.lang.webDAVResponseContentErrorText, "error")
                        } else n.status === -1 ? this.addNotification(this.lang.webDAVInternalErrorText, "error") : n.status === 401 ? this.addNotification(this.lang.webDAVVerifyErrorText, "error") : (this.addNotification(`${this.lang.webDAVUnknownErrorText} (Code: ${n.status})`, "error"), console.warn(n.status), console.error(n.data))
                    }
                    this.webDAVSyncLoading = !1
                }
            },
            async webDAVUploadData() {
                const {
                    webDAVFile: e,
                    webDAVPassphrase: t
                } = this.config.storeData, o = fe.listValues(), n = {};
                for (const a of o) a === this.itemsKeyName && (n[this.itemsKeyName] = fe.getValue(this.itemsKeyName, {})), a === this.groupKeyName && (n[this.groupKeyName] = fe.getValue(this.groupKeyName, {}));
                let r = "";
                r = t ? _i.encrypt(JSON.stringify(n), t).toString() : JSON.stringify(n);
                const i = await this.webDAVHandler.upload(e, r);
                if (i.status >= 200 && i.status < 300) {
                    const a = {
                            unix: this.storeModificationTime
                        },
                        s = await this.webDAVHandler.upload(e + ".lock", JSON.stringify(a));
                    s.status >= 200 && s.status < 300 ? this.addNotification(this.lang.webDAVUploadSuccessText) : s.status === -1 ? this.addNotification(this.lang.webDAVInternalErrorText, "error") : s.status === 403 ? this.addNotification(`${this.lang.webDAVPermissionErrorText} (Path: ${e}.lock)`, "error") : (this.addNotification(`${this.lang.webDAVUnknownErrorText} (Code: ${s.status})`, "error"), console.warn(s.status), console.error(s.data))
                } else i.status === -1 ? this.addNotification(this.lang.webDAVInternalErrorText, "error") : i.status === 403 ? this.addNotification(`${this.lang.webDAVPermissionErrorText} (Path: ${e})`, "error") : (this.addNotification(`${this.lang.webDAVUnknownErrorText} (Code: ${i.status})`, "error"), console.warn(i.status), console.error(i.data))
            },
            async webDAVDownloadData(e) {
                const {
                    webDAVFile: t,
                    webDAVPassphrase: o
                } = this.config.storeData, n = await this.webDAVHandler.download(t);
                if (n.status === 200) try {
                    let r = "";
                    o ? r = _i.decrypt(n.data, o).toString(rc) : r = n.data;
                    const i = JSON.parse(r);
                    if (typeof i == "object" && i) {
                        if (this.storageEvent(() => {
                                for (const a in i) a === this.itemsKeyName ? this.setUsers(i[a], !1, !1) : a === this.groupKeyName && this.setGroups(i[a], !1, !1);
                                return !0
                            }), e === void 0) {
                            const a = await this.webDAVHandler.download(t + ".lock");
                            if (a.status === 200) try {
                                const {
                                    unix: s
                                } = JSON.parse(a.data);
                                typeof s != "number" ? (console.error(s), this.addNotification(this.lang.webDAVResponseContentErrorText, "error")) : e = s
                            } catch (s) {
                                console.error(s), this.addNotification(this.lang.webDAVResponseContentErrorText, "error")
                            } else a.status === -1 ? this.addNotification(this.lang.webDAVInternalErrorText, "error") : a.status === 401 ? this.addNotification(this.lang.webDAVVerifyErrorText, "error") : a.status === 404 ? this.addNotification(`${this.lang.webDAVFileLostErrorText} (File: ${t}.lock)`) : (this.addNotification(`${this.lang.webDAVUnknownErrorText} (Code: ${a.status})`, "error"), console.warn(a.status), console.error(a.data))
                        }
                        e && (fe.setValue(this.itemsKeyName, this.items), fe.setValue(this.groupKeyName, this.group), this.writeModificationTime(e), this.addNotification(this.lang.webDAVDownloadSuccessText))
                    } else console.warn("Content is not an object."), this.addNotification(this.lang.optionsImportErrorObjectText, "error")
                } catch (r) {
                    console.error(r), this.addNotification(this.lang.webDAVContentDecodeErrorText, "error")
                } else n.status === -1 ? this.addNotification(this.lang.webDAVInternalErrorText, "error") : n.status === 401 ? this.addNotification(this.lang.webDAVVerifyErrorText, "error") : n.status === 404 ? this.addNotification(`${this.lang.webDAVFileLostErrorText} (File: ${t})`, "error") : (this.addNotification(`${this.lang.webDAVUnknownErrorText} (Code: ${n.status})`, "error"), console.warn(n.status), console.error(n.data))
            },
            webDAVValidator() {
                const {
                    webDAVURL: e,
                    webDAVFile: t,
                    webDAVUser: o,
                    webDAVPassword: n
                } = this.config.storeData;
                return !!(e && t && o && n)
            }
        }
    }),
    br = nt("searchFrame", {
        state: () => ({
            isShow: !1
        })
    }),
    Fo = nt("addFrame", {
        state: () => ({
            isShow: !1,
            userId: "",
            userName: "",
            initialValue: "",
            groupKey: "default"
        }),
        actions: {
            selecteGroup(e) {
                const t = hn();
                t.selected = e, t.isShow = !0
            },
            addGroup(e) {
                const t = xr();
                t.created = e, t.isShow = !0
            },
            show(e, t, o, n) {
                this.userId = e, this.userName = n || "", this.initialValue = t, this.groupKey = o || "default", this.isShow = !0
            }
        }
    }),
    mr = nt("managementFrame", {
        state: () => ({
            isInsert: !1,
            isEcho: !1
        }),
        actions: {
            selecteGroup(e) {
                const t = hn();
                t.selected = e, t.isShow = !0
            }
        }
    }),
    vr = nt("groupFrame", {
        state: () => ({
            isInsert: !1
        })
    }),
    hn = nt("selectGroupFrame", {
        state: () => ({
            isShow: !1,
            selected: null
        })
    }),
    xr = nt("newGroupFrame", {
        state: () => ({
            isShow: !1,
            created: null
        })
    }),
    rs = nt("settingsFrame", {
        state: () => ({
            isInsert: !1
        })
    }),
    is = nt("webDAVFrame", {
        state: () => ({
            isInsert: !1
        })
    }),
    as = nt("messageFrame", {
        state: () => ({
            notifications: [],
            total: 0
        }),
        actions: {
            removeNotifaction(e) {
                for (let t = 0; t < this.notifications.length; t++)
                    if (this.notifications[t].id === e) return this.notifications.splice(t, 1), !0;
                return !1
            }
        }
    }),
    Zn = nt("popoverFrame", {
        state: () => ({
            isShow: !1,
            currentUserId: "",
            x: 0,
            y: 0,
            isPopHover: !1,
            isTagHover: !1,
            showDebounced: null
        }),
        actions: {
            show(e, t, o) {
                this.showDebounced = Re.debounce("popoverShow", () => {
                    this.currentUserId = e, this.x = t, this.y = o, this.isShow = !0, this.isTagHover = !0
                }, 1e3)
            },
            hide() {
                this.showDebounced && (this.showDebounced.cancel(), this.showDebounced = null), this.isTagHover = !1, Re.debounce("popoverHide", () => {
                    this.isPopHover || this.isTagHover || (this.isShow = !1)
                }, 1e3)
            }
        }
    }),
    sc = ["title"],
    lc = ve({
        __name: "NoteObjFloatButton",
        props: {
            isInsert: {
                type: Boolean
            },
            title: {},
            buttonClass: {},
            boxClass: {}
        },
        emits: ["click"],
        setup(e, {
            emit: t
        }) {
            const o = t;
            return (n, r) => n.isInsert ? (Z(), ee("div", {
                key: 0,
                class: We(n.boxClass)
            }, [w("span", {
                title: n.title,
                class: We(n.buttonClass),
                onClick: r[0] || (r[0] = i => o("click", i))
            }, null, 10, sc)], 2)) : et("", !0)
        }
    });

function Vi(e, t) {
    t.value && t.value !== t.oldValue && setTimeout(() => {
        try {
            e.focus(), e.select()
        } catch (o) {
            console.log(o)
        }
    }, 100)
}
const bn = {
        mounted: Vi,
        updated: Vi
    },
    cc = {
        class: "note-obj-add-frame-dialog"
    },
    uc = {
        class: "note-obj-add-frame-user-info"
    },
    dc = {
        class: "note-obj-add-frame-user-id"
    },
    pc = {
        key: 0,
        class: "note-obj-add-frame-user-name"
    },
    fc = ["placeholder", "onKeyup"],
    gc = ["title"],
    hc = ["title"],
    bc = ["title"],
    mc = ["title"],
    vc = ["title"],
    xc = ve({
        __name: "NoteObjAddFrame",
        setup(e) {
            const t = Ge(),
                o = Fo(),
                n = ye(""),
                {
                    isShow: r
                } = Lt(o),
                i = De(() => o.groupKey && o.groupKey !== "default" && t.group[o.groupKey] ? t.group[o.groupKey].value : t.lang.defaultGroupText);

            function a(x) {
                x.key === "Enter" ? c() : x.key === "Escape" && h()
            }

            function s() {
                o.selecteGroup(x => {
                    x && (o.groupKey = x)
                })
            }

            function l() {
                o.addGroup(x => {
                    x && (o.groupKey = x)
                })
            }

            function u(x, k, f, m) {
                t.writeUser(x, k, f, m) && h()
            }

            function c() {
                u(o.userId, o.userName, n.value, o.groupKey)
            }

            function p() {
                u(o.userId, "", "", "")
            }

            function b() {
                t.config.addNote.canHideAddFrame && h()
            }

            function h() {
                o.isShow = !1
            }
            return Ae(r, x => {
                x && (n.value = o.initialValue)
            }), (x, k) => le((Z(), ee("div", {
                class: "note-obj-add-frame-presentation",
                onClick: ie(b, ["self"])
            }, [w("div", cc, [w("div", uc, [w("span", dc, F(S(t).lang.userIdText + ": " + S(o).userId), 1), S(o).userName ? (Z(), ee("span", pc, F(S(t).lang.userNameText + ": " + S(o).userName), 1)) : et("", !0)]), le(w("input", {
                "onUpdate:modelValue": k[0] || (k[0] = f => n.value = f),
                type: "text",
                placeholder: S(t).lang.addPlaceholder,
                class: "note-obj-add-frame-input",
                onKeyup: Zt(ie(a, ["prevent"]), ["enter", "esc"])
            }, null, 40, fc), [
                [Be, n.value, void 0, {
                    trim: !0
                }],
                [S(bn), S(r)]
            ]), w("button", {
                type: "button",
                title: S(t).lang.groupTitle,
                class: "note-obj-add-frame-group-button",
                onClick: ie(s, ["stop"])
            }, F(i.value), 9, gc), w("button", {
                type: "button",
                title: S(t).lang.groupCreateValueTitle,
                class: "note-obj-add-frame-group-button",
                onClick: ie(l, ["stop"])
            }, F(S(t).lang.groupCreateValueText), 9, hc), w("button", {
                type: "button",
                title: S(t).lang.saveTagTitle,
                onClick: ie(c, ["stop"])
            }, F(S(t).lang.saveTagText), 9, bc), w("button", {
                type: "button",
                title: S(t).lang.clearTagTitle,
                onClick: ie(p, ["stop"])
            }, F(S(t).lang.clearTagText), 9, mc), w("button", {
                type: "button",
                title: S(t).lang.cancelTagTitle,
                class: "note-obj-add-frame-button-bottom",
                onClick: ie(h, ["stop"])
            }, F(S(t).lang.cancelTagText), 9, vc)])], 512)), [
                [we, S(r)]
            ])
        }
    }),
    yc = {
        previous: {},
        timer: {},
        throttle(e, t, o, n = {}) {
            const r = Date.now(),
                {
                    leading: i,
                    trailing: a
                } = n;
            this.previous[e] === void 0 && i === !1 && (this.previous[e] = r);
            const s = o - (r - (this.previous[e] === void 0 ? 0 : this.previous[e]));
            return s <= 0 || s > o ? (window.clearTimeout(this.timer[e]), this.previous[e] = r, t()) : this.timer[e] === void 0 && a !== !1 && (this.timer[e] = window.setTimeout(() => {
                this.previous[e] = i === !1 ? void 0 : Date.now(), this.timer[e] = void 0, t()
            }, s)), {
                cancel: () => {
                    window.clearTimeout(this.timer[e]), this.previous[e] = void 0, this.timer[e] = void 0
                }
            }
        }
    },
    wc = ["title", "data-index"],
    Tc = {
        class: "note-obj-search-frame-tags-item-text"
    },
    jc = ve({
        __name: "NoteObjSearchItem",
        props: {
            itemKey: {},
            index: {},
            isShow: {
                type: Boolean
            },
            highlight: {
                type: Boolean
            },
            name: {},
            tag: {},
            groupKey: {}
        },
        emits: ["mouseenter"],
        setup(e, {
            emit: t
        }) {
            const o = e,
                n = t,
                r = Ge(),
                i = De(() => {
                    let l = o.itemKey + (o.name && o.name !== o.itemKey ? `
${o.name}` : "") + (o.tag ? `
${o.tag}` : "");
                    if (r.config.searchBox.showGroupName && o.groupKey && o.groupKey !== "default") {
                        const u = r.group[o.groupKey];
                        u && (l += `
${u.value}`)
                    }
                    return l
                }),
                a = De(() => {
                    let l = o.tag || o.name || o.itemKey;
                    if (r.config.searchBox.showGroupName && o.groupKey && o.groupKey !== "default") {
                        const u = r.group[o.groupKey];
                        u && (l += ` [${u.value}]`)
                    }
                    return l
                });

            function s() {
                n("mouseenter", o.index)
            }
            return (l, u) => le((Z(), ee("li", {
                class: We({
                    "note-obj-search-frame-tags-list-item-highlight": l.highlight
                }),
                title: i.value,
                "data-index": l.index,
                onMouseenter: s,
                onClick: u[0] || (u[0] = ie(c => {
                    return p = c, b = l.itemKey, void r.openLink(b, p.ctrlKey || p.metaKey, p.shiftKey, "search");
                    var p, b
                }, ["stop"]))
            }, [w("span", Tc, F(a.value), 1)], 42, wc)), [
                [we, l.isShow]
            ])
        }
    }),
    Sc = {
        class: "note-obj-search-frame-dialog"
    },
    Ic = ["placeholder", "onKeydown", "onKeyup"],
    kc = ["title"],
    Dc = {
        key: 0,
        class: "note-obj-search-frame-index-trapezoid"
    },
    Nc = {
        class: "note-obj-search-frame-index-value"
    },
    Cc = ve({
        __name: "NoteObjSearchFrame",
        setup(e) {
            const t = Ge(),
                o = br(),
                n = ye(""),
                r = ye({}),
                i = ye(0),
                a = ye(""),
                s = t.id + "_searchFrameTagsList",
                {
                    isShow: l
                } = Lt(o),
                u = De(() => {
                    let m = 0;
                    for (const T in r.value) r.value[T].isShow && m++;
                    return m
                });

            function c(m) {
                if (m !== 0) {
                    for (const T in r.value)
                        if (r.value[T].index === m) return T
                }
                return ""
            }

            function p(m) {
                yc.throttle("searchKeydown", () => {
                    u.value === 0 ? i.value = 0 : m.key === "ArrowUp" ? i.value > 1 ? i.value-- : i.value = u.value : m.key === "ArrowDown" ? i.value < u.value ? i.value++ : i.value = 1 : m.key === "PageUp" ? i.value > 10 ? i.value -= 10 : i.value <= 1 ? i.value = u.value : i.value = 1 : m.key === "PageDown" && (i.value < u.value - 9 ? i.value += 10 : i.value === u.value ? i.value = 1 : i.value = u.value), a.value = c(i.value)
                }, 100)
            }

            function b(m) {
                m.key === "Enter" ? a.value && t.openLink(a.value, m.ctrlKey || m.metaKey, m.shiftKey, "search") : m.key === "Escape" && f()
            }

            function h() {
                let m = 1,
                    T = !1,
                    g = "",
                    d = 0;
                for (const y in r.value) t.determineSearchString(n.value, r.value[y].tag || r.value[y].name || y) ? (Object.assign(r.value[y], {
                    isShow: !0,
                    index: m,
                    highlight: y === a.value
                }), y === a.value && (d = m, T = !0), m === 1 && (g = y), m++) : Object.assign(r.value[y], {
                    isShow: !1,
                    index: -1,
                    highlight: !1
                });
                T || (a.value = g, d = u.value > 0 ? 1 : 0, g && (r.value[g].highlight = !0)), Do(() => {
                    i.value = d
                })
            }

            function x(m) {
                i.value !== m && (i.value = m, a.value = c(m))
            }

            function k() {
                t.config.searchBox.canHideSearchFrame && f()
            }

            function f() {
                o.isShow = !1
            }
            return Ae(l, m => {
                m && function() {
                    let T = 1;
                    const g = Object.assign({}, t.items);
                    for (const d in g) Object.assign(g[d], {
                        isShow: !1,
                        index: T++,
                        highlight: !1
                    });
                    r.value = g
                }()
            }), Ae(n, () => {
                Re.debounce("searchValue", () => {
                    h()
                }, 250)
            }), Ae(i, m => {
                for (const T in r.value) {
                    const g = r.value[T];
                    g.highlight = g.index === m
                }(function(T) {
                    const g = document.getElementById(s),
                        d = document.querySelector(`#${s} [data-index="${T}"]`);
                    g && d && (d.offsetTop - g.scrollTop > 225 ? g.scrollTop = d.offsetTop - 225 : d.offsetTop - g.scrollTop < 0 && (g.scrollTop = d.offsetTop))
                })(m)
            }), (m, T) => le((Z(), ee("div", {
                class: "note-obj-search-frame-presentation",
                onClick: ie(k, ["self"])
            }, [w("div", Sc, [le(w("input", {
                type: "text",
                placeholder: S(t).lang.searchTagPlaceholder,
                class: "note-obj-search-frame-input",
                "onUpdate:modelValue": T[0] || (T[0] = g => n.value = g),
                onKeydown: Zt(ie(p, ["prevent"]), ["arrow-up", "arrow-down", "page-down", "page-up"]),
                onKeyup: Zt(ie(b, ["stop", "prevent"]), ["enter", "esc"]),
                onFocusin: h
            }, null, 40, Ic), [
                [S(bn), S(l)],
                [Be, n.value, void 0, {
                    trim: !0
                }]
            ]), w("span", {
                title: S(t).lang.searchCloseTitle,
                class: "note-obj-search-frame-close-btn",
                onClick: ie(f, ["stop"])
            }, null, 8, kc), S(t).config.searchBox.showIndex ? (Z(), ee("div", Dc, [w("span", Nc, F(i.value + "/" + u.value), 1)])) : et("", !0), w("ul", {
                id: s,
                class: "note-obj-search-frame-tags-list"
            }, [(Z(!0), ee(he, null, Ce(r.value, ({
                index: g,
                isShow: d,
                name: y,
                tag: j,
                group: N,
                highlight: D
            }, C) => (Z(), _e(jc, {
                key: C,
                "is-show": d,
                "item-key": C.toString(),
                index: g,
                name: y,
                tag: j,
                "group-key": N,
                highlight: D,
                onMouseenter: x
            }, null, 8, ["is-show", "item-key", "index", "name", "tag", "group-key", "highlight"]))), 128))])])], 512)), [
                [we, S(l)]
            ])
        }
    }),
    Ac = ["data-key", "readonly", "value", "onKeyup"],
    ss = ve({
        __name: "NoteObjManagementInput",
        props: {
            value: {},
            dataKey: {},
            editable: {
                type: Boolean
            },
            className: {}
        },
        emits: ["value-change"],
        setup(e, {
            emit: t
        }) {
            const o = e,
                n = t;

            function r(i) {
                o.editable && (i.key === "Enter" ? n("value-change", i.target.value.trim()) : i.key === "Escape" && n("value-change", o.value))
            }
            return (i, a) => le((Z(), ee("input", {
                "data-key": i.dataKey,
                type: "text",
                readonly: !i.editable,
                class: We(i.className + (i.editable ? " note-obj-management-frame-item-input-edit" : "")),
                value: i.value,
                onKeyup: Zt(ie(r, ["stop", "prevent"]), ["enter", "esc"])
            }, null, 42, Ac)), [
                [S(bn), i.editable]
            ])
        }
    }),
    _c = ["title"],
    Mc = ve({
        __name: "NoteObjGroupItem",
        props: {
            dataKey: {},
            groupValue: {}
        },
        emits: ["click"],
        setup(e, {
            emit: t
        }) {
            const o = Ge(),
                n = e,
                r = t,
                i = De(() => n.groupValue && n.groupValue !== "default" && o.group[n.groupValue] && o.group[n.groupValue].value || o.lang.defaultGroupText),
                a = De(() => n.groupValue && o.group[n.groupValue] && o.group[n.groupValue].secondaryColor || o.defaultColor.secondaryColor),
                s = De(() => n.groupValue && o.group[n.groupValue] && o.group[n.groupValue].primaryColor || o.defaultColor.primaryColor);
            return (l, u) => (Z(), ee("span", {
                class: "note-obj-management-frame-group-item",
                title: S(o).lang.groupTitle,
                style: ao({
                    color: a.value,
                    backgroundColor: s.value
                }),
                onClick: u[0] || (u[0] = ie(c => r("click", l.dataKey), ["stop"]))
            }, F(i.value), 13, _c))
        }
    }),
    Vc = ["title"],
    Xe = ve({
        __name: "NoteObjTh",
        props: {
            text: {}
        },
        setup: e => (t, o) => (Z(), ee("th", {
            title: t.text
        }, F(t.text), 9, Vc))
    }),
    Ec = {
        key: 0,
        class: "note-obj-management-frame-presentation"
    },
    Lc = {
        class: "note-obj-management-frame-dialog"
    },
    Oc = {
        class: "note-obj-management-frame-header"
    },
    Gc = {
        for: "noteObjManagementFrameSearchInputBox"
    },
    Pc = ["placeholder", "onKeydown"],
    zc = {
        for: "noteObjManagementFrameRangeSelect"
    },
    Uc = {
        value: "all"
    },
    Bc = {
        value: "id"
    },
    Rc = {
        value: "name"
    },
    Wc = {
        value: "tag"
    },
    Hc = {
        for: "noteObjManagementFrameGroupSelect"
    },
    Fc = {
        value: ""
    },
    Zc = ["value"],
    Yc = {
        class: "note-obj-management-frame-show-number"
    },
    Kc = {
        class: "note-obj-management-frame-content"
    },
    $c = {
        class: "note-obj-management-frame-thead"
    },
    Jc = ["title"],
    Xc = {
        class: "note-obj-management-frame-tbody"
    },
    Qc = ["checked", "onChange"],
    qc = ["title", "href"],
    eu = ["title"],
    tu = ["title", "onClick"],
    ou = ["title", "onClick"],
    nu = {
        class: "note-obj-management-frame-tool"
    },
    ru = ["disabled", "title"],
    iu = ["disabled", "title"],
    au = ["title"],
    su = {
        class: "note-obj-management-frame-footer"
    },
    lu = ["title", "disabled"],
    cu = ["title"],
    uu = ve({
        __name: "NoteObjManagementFrame",
        setup(e) {
            const t = Ge(),
                o = mr(),
                n = vr(),
                {
                    isInsert: r
                } = Lt(o),
                i = ye(""),
                a = ye("all"),
                s = ye(""),
                l = ye(!1),
                u = ye(!1),
                c = ye({}),
                p = De(() => {
                    let C = 0;
                    for (const M in c.value) c.value[M].isExists && C++;
                    return C
                }),
                b = De(() => {
                    let C = 0;
                    for (const M in c.value) {
                        const W = c.value[M];
                        W.isExists && W.isShow && W.isSelected && C++
                    }
                    return C
                }),
                h = De({
                    get() {
                        for (const C in c.value) {
                            const M = c.value[C];
                            if (M.isExists && M.isShow && !M.isSelected) return !1
                        }
                        return !0
                    },
                    set(C) {
                        for (const M in c.value) {
                            const W = c.value[M];
                            W.isExists && W.isShow && (C && !W.isSelected ? W.isSelected = !0 : !C && W.isSelected && (W.isSelected = !1))
                        }
                    }
                });

            function x() {
                i.value = "", a.value = "all", s.value = "", l.value = !1;
                const C = Object.assign({}, t.items);
                for (const M in C) Object.assign(C[M], {
                    isExists: !0,
                    isShow: !0,
                    isSelected: !1,
                    editable: !1
                });
                c.value = C
            }

            function k() {
                const C = Object.keys(t.group);
                for (const M in c.value) {
                    const W = c.value[M];
                    if (W.isExists) {
                        let E = !1;
                        s.value && s.value !== W.group && (s.value !== "default" || C.includes(W.group)) || (a.value === "all" ? E = t.determineSearchString(i.value, M, !0) || t.determineSearchString(i.value, W.name, !0) || t.determineSearchString(i.value, W.tag, !0) : a.value === "id" ? E = t.determineSearchString(i.value, M, !0) : a.value === "name" ? E = t.determineSearchString(i.value, W.name, !0) : a.value === "tag" && (E = t.determineSearchString(i.value, W.tag, !0))), W.isShow = E
                    }
                }
            }

            function f() {
                console.info("Just to intercept the carriage return event.")
            }

            function m(C) {
                o.selecteGroup(M => {
                    c.value[C].group = M, N()
                })
            }

            function T(C) {
                c.value[C].editable ? function(M) {
                    const W = document.querySelector(`.note-obj-management-frame-item-input-tag[data-key="${M}"]`),
                        E = (W == null ? void 0 : W.value.trim()) || "";
                    c.value[M].tag = E, N(), c.value[M].editable = !1
                }(C) : c.value[C].editable = !0
            }

            function g() {
                for (const C in c.value) {
                    const M = c.value[C];
                    M.isExists && M.isShow && M.isSelected && (M.isExists = !1, N())
                }
            }

            function d() {
                const C = [];
                for (const M in c.value) {
                    const W = c.value[M];
                    W.isExists && W.isShow && W.isSelected && C.push(M)
                }
                C.length > 0 && (o.selecteGroup(M => {
                    C.forEach(W => {
                        c.value[W].group = M
                    })
                }), N())
            }

            function y() {
                o.isEcho = !0, o.isInsert = !1, n.isInsert = !0
            }

            function j() {
                if (l.value) {
                    const C = {};
                    for (const M in c.value) {
                        const {
                            isExists: W,
                            tag: E,
                            name: q,
                            group: de
                        } = c.value[M];
                        W && (C[M] = {
                            tag: E,
                            name: q,
                            group: de
                        })
                    }
                    t.setUsers(C) && (l.value = !1)
                }
            }

            function N() {
                l.value = !0
            }

            function D() {
                l.value = !1, i.value = "", a.value = "all", s.value = "", r.value = !1
            }
            return Ae(r, C => {
                C && (Object.keys(t.items).length > 50 ? (u.value = !0, c.value = {}, Re.debounce("initNotesManagement", () => {
                    x(), u.value = !1
                }, 50)) : x())
            }), Ae(i, () => {
                Re.debounce("notesManagementSearch", k, 250)
            }), Ae(a, () => {
                Re.debounce("notesManagementRange", k, 50)
            }), Ae(s, () => {
                Re.debounce("notesManagementGroup", k, 50)
            }), (C, M) => S(r) ? (Z(), ee("div", Ec, [w("div", Lc, [w("div", Oc, [w("form", null, [w("label", Gc, F(S(t).lang.searchContentText), 1), le(w("input", {
                id: "noteObjManagementFrameSearchInputBox",
                type: "text",
                "onUpdate:modelValue": M[0] || (M[0] = W => i.value = W),
                placeholder: S(t).lang.searchContentPlaceholder,
                class: "note-obj-management-frame-search-input",
                onKeydown: Zt(ie(f, ["stop", "prevent"]), ["enter"])
            }, null, 40, Pc), [
                [Be, i.value, void 0, {
                    trim: !0
                }]
            ]), w("label", zc, F(S(t).lang.rangeText), 1), le(w("select", {
                "onUpdate:modelValue": M[1] || (M[1] = W => a.value = W),
                id: "noteObjManagementFrameRangeSelect",
                name: "managementFrameRangeSelect"
            }, [w("option", Uc, F(S(t).lang.rangeAllText), 1), w("option", Bc, F(S(t).lang.userIdText), 1), w("option", Rc, F(S(t).lang.userNameText), 1), w("option", Wc, F(S(t).lang.userTagTableText), 1)], 512), [
                [Wn, a.value]
            ]), w("label", Hc, F(S(t).lang.groupText + ": "), 1), le(w("select", {
                "onUpdate:modelValue": M[2] || (M[2] = W => s.value = W),
                id: "noteObjManagementFrameGroupSelect",
                name: "managementFrameGroupSelect"
            }, [w("option", Fc, F(S(t).lang.rangeAllText), 1), (Z(!0), ee(he, null, Ce(S(t).group, ({
                value: W
            }, E) => (Z(), ee("option", {
                key: E,
                value: E
            }, F(E === "default" ? S(t).lang.defaultGroupText : W), 9, Zc))), 128))], 512), [
                [Wn, s.value]
            ]), w("span", Yc, F(b.value + "/" + p.value), 1)])]), w("div", Kc, [w("div", $c, [w("table", null, [w("thead", null, [w("tr", null, [w("th", null, [le(w("input", {
                "onUpdate:modelValue": M[3] || (M[3] = W => h.value = W),
                type: "checkbox",
                title: S(t).lang.selectAllTitle
            }, null, 8, Jc), [
                [Za, h.value]
            ])]), X(Xe, {
                text: S(t).lang.userIdText
            }, null, 8, ["text"]), X(Xe, {
                text: S(t).lang.userNameText
            }, null, 8, ["text"]), X(Xe, {
                text: S(t).lang.userTagTableText
            }, null, 8, ["text"]), X(Xe, {
                text: S(t).lang.groupText
            }, null, 8, ["text"]), X(Xe, {
                text: S(t).lang.editText
            }, null, 8, ["text"]), X(Xe, {
                text: S(t).lang.deleteText
            }, null, 8, ["text"])])])])]), w("div", Xc, [w("table", null, [w("tbody", null, [(Z(!0), ee(he, null, Ce(c.value, ({
                isShow: W,
                isExists: E,
                isSelected: q,
                name: de,
                tag: ce,
                editable: oe,
                group: re
            }, se) => le((Z(), ee("tr", {
                key: se
            }, [w("td", null, [w("input", {
                type: "checkbox",
                checked: q,
                onChange: z => c.value[se].isSelected = !q
            }, null, 40, Qc)]), w("td", null, [w("a", {
                title: se.toString(),
                target: "_blank",
                href: S(t).getUrl(se.toString()),
                class: "note-obj-management-frame-item-a"
            }, F(se), 9, qc)]), w("td", {
                title: de
            }, F(de), 9, eu), w("td", null, [X(ss, {
                value: ce,
                "data-key": se.toString(),
                editable: oe,
                "class-name": "note-obj-management-frame-item-input-tag",
                onValueChange: z => function(L, P) {
                    c.value[L].tag = P, N(), c.value[L].editable = !1
                }(se.toString(), z)
            }, null, 8, ["value", "data-key", "editable", "onValueChange"])]), w("td", null, [X(Mc, {
                "group-value": re,
                "data-key": se.toString(),
                onClick: m
            }, null, 8, ["group-value", "data-key"])]), w("td", null, [w("span", {
                title: S(t).lang.editTitle,
                class: We(["note-obj-management-frame-item-btn note-obj-management-frame-item-edit", {
                    "note-obj-management-frame-item-ok": oe
                }]),
                onClick: ie(z => T(se.toString()), ["stop"])
            }, null, 10, tu)]), w("td", null, [w("span", {
                title: S(t).lang.deleteTitle,
                class: "note-obj-management-frame-item-btn note-obj-management-frame-item-delete",
                onClick: ie(z => function(L) {
                    c.value[L].isExists = !1, N()
                }(se.toString()), ["stop"])
            }, null, 8, ou)])], 512)), [
                [we, E && W]
            ])), 128))])])])]), w("div", nu, [w("button", {
                type: "button",
                disabled: b.value === 0,
                title: S(t).lang.deleteSelectedTitle,
                class: "note-obj-management-frame-delete-selected",
                onClick: ie(g, ["stop"])
            }, F(S(t).lang.deleteSelectedText), 9, ru), w("button", {
                type: "button",
                disabled: b.value === 0,
                title: S(t).lang.moveSelectedTitle,
                class: "note-obj-management-frame-move-selected",
                onClick: ie(d, ["stop"])
            }, F(S(t).lang.moveSelectedText), 9, iu), w("button", {
                type: "button",
                title: S(t).lang.manageGroupsTitle,
                class: "note-obj-management-frame-manage-groups",
                onClick: ie(y, ["stop"])
            }, F(S(t).lang.manageGroupsText), 9, au)]), w("div", su, [le(w("span", {
                class: "note-obj-management-frame-show-modify-text"
            }, F(S(t).lang.modifyText), 513), [
                [we, l.value]
            ]), le(w("span", {
                class: "note-obj-management-frame-show-wait-text"
            }, F(S(t).lang.waitText), 513), [
                [we, u.value]
            ]), w("button", {
                title: S(t).lang.saveContentTitle,
                class: "note-obj-management-frame-save-content",
                disabled: !l.value,
                onClick: ie(j, ["stop"])
            }, F(S(t).lang.saveContentText), 9, lu), w("button", {
                title: S(t).lang.closeContentTitle,
                class: "note-obj-management-frame-cancel-content",
                onClick: ie(D, ["stop"])
            }, F(S(t).lang.closeCotentText), 9, cu)])])])) : et("", !0)
        }
    }),
    du = {
        key: 0,
        class: "note-obj-group-frame-presentation"
    },
    pu = {
        class: "note-obj-group-frame-dialog"
    },
    fu = {
        class: "note-obj-group-frame-header"
    },
    gu = {
        for: "noteObjGroupFrameSearchInputBox"
    },
    hu = ["placeholder", "onKeydown"],
    bu = {
        class: "note-obj-group-frame-show-number"
    },
    mu = {
        class: "note-obj-group-frame-content"
    },
    vu = {
        class: "note-obj-group-frame-thead"
    },
    xu = ["title"],
    yu = {
        class: "note-obj-group-frame-tbody"
    },
    wu = ["checked", "onChange"],
    Tu = ["value", "onChange"],
    ju = ["value", "onChange"],
    Su = ["value", "onChange"],
    Iu = ["title", "onClick"],
    ku = ["title", "onClick"],
    Du = {
        class: "note-obj-group-frame-tool"
    },
    Nu = ["disabled", "title"],
    Cu = ["title"],
    Au = {
        class: "note-obj-management-frame-footer"
    },
    _u = ["title", "disabled"],
    Mu = ["title"],
    Vu = ve({
        __name: "NoteObjGroupFrame",
        setup(e) {
            const t = Ge(),
                o = vr(),
                n = mr(),
                {
                    isInsert: r
                } = Lt(o),
                i = ye(""),
                a = ye(!1),
                s = ye(!1),
                l = ye({
                    default: {
                        value: "",
                        primaryColor: t.defaultColor.primaryColor,
                        secondaryColor: t.defaultColor.secondaryColor,
                        weight: 0,
                        isExists: !0,
                        isShow: !0,
                        isSelected: !1,
                        editable: !1
                    }
                }),
                u = De(() => {
                    let d = 0;
                    for (const y in l.value) l.value[y].isExists && d++;
                    return d
                }),
                c = De(() => {
                    let d = 0;
                    for (const y in l.value) {
                        const j = l.value[y];
                        j.isExists && j.isShow && j.isSelected && d++
                    }
                    return d
                }),
                p = De({
                    get() {
                        for (const d in l.value) {
                            const y = l.value[d];
                            if (y.isExists && y.isShow && !y.isSelected) return !1
                        }
                        return !0
                    },
                    set(d) {
                        for (const y in l.value) {
                            const j = l.value[y];
                            j.isExists && j.isShow && (d && !j.isSelected ? j.isSelected = !0 : !d && j.isSelected && (j.isSelected = !1))
                        }
                    }
                });

            function b() {
                console.info("Just to intercept the carriage return event.")
            }

            function h() {
                i.value = "", a.value = !1;
                const d = Object.assign({}, t.group);
                for (const y in d) Object.assign(d[y], {
                    isExists: !0,
                    isShow: !0,
                    isSelected: !1,
                    editable: !1
                });
                l.value = d
            }

            function x(d) {
                d !== "default" && (l.value[d].editable ? function(y) {
                    const j = document.querySelector(`.note-obj-group-frame-item-input-value[data-key="${y}"]`),
                        N = (j == null ? void 0 : j.value.trim()) || "";
                    l.value[y].value = N, T(), l.value[y].editable = !1
                }(d) : l.value[d].editable = !0)
            }

            function k() {
                for (const d in l.value)
                    if (d !== "default") {
                        const y = l.value[d];
                        y.isExists && y.isShow && y.isSelected && (y.isExists = !1, T())
                    }
            }

            function f() {
                const d = "g_" + Date.now();
                l.value[d] = {
                    value: t.lang.groupNewValueText,
                    primaryColor: t.defaultColor.primaryColor,
                    secondaryColor: t.defaultColor.secondaryColor,
                    weight: 0,
                    isExists: !0,
                    isShow: !0,
                    isSelected: !1,
                    editable: !1
                }, T(), Do(() => {
                    const y = document.querySelector(".note-obj-group-frame-tbody");
                    y && (y.scrollTop = y.scrollHeight)
                })
            }

            function m() {
                if (a.value) {
                    const d = {
                        default: {
                            value: "",
                            primaryColor: t.defaultColor.primaryColor,
                            secondaryColor: t.defaultColor.secondaryColor,
                            weight: 0
                        }
                    };
                    for (const y in l.value) {
                        const {
                            isExists: j,
                            value: N,
                            primaryColor: D,
                            secondaryColor: C,
                            weight: M
                        } = l.value[y];
                        j && N && (d[y] = {
                            value: N,
                            primaryColor: D || t.defaultColor.primaryColor,
                            secondaryColor: C || t.defaultColor.secondaryColor,
                            weight: M || 0
                        })
                    }
                    t.setGroups(d) && (a.value = !1)
                }
            }

            function T() {
                a.value = !0
            }

            function g() {
                a.value = !1, i.value = "", r.value = !1, n.isEcho && (n.isEcho = !1, n.isInsert = !0)
            }
            return Ae(i, d => {
                Re.debounce("groupSearchValue", () => {
                    (function(y) {
                        for (const j in l.value) {
                            const N = l.value[j];
                            N.isShow = t.determineSearchString(y, N.value, !0)
                        }
                    })(d)
                }, 250)
            }), Ae(r, d => {
                d && (Object.keys(t.group).length > 50 ? (s.value = !0, l.value = {
                    default: {
                        value: "",
                        primaryColor: t.defaultColor.primaryColor,
                        secondaryColor: t.defaultColor.secondaryColor,
                        weight: 0,
                        isExists: !0,
                        isShow: !0,
                        isSelected: !1,
                        editable: !1
                    }
                }, Re.debounce("initGroupsManagement", () => {
                    h(), s.value = !1
                }, 50)) : h())
            }), (d, y) => S(r) ? (Z(), ee("div", du, [w("div", pu, [w("div", fu, [w("form", null, [w("label", gu, F(S(t).lang.searchContentText), 1), le(w("input", {
                "onUpdate:modelValue": y[0] || (y[0] = j => i.value = j),
                type: "text",
                id: "noteObjGroupFrameSearchInputBox",
                placeholder: S(t).lang.searchContentPlaceholder,
                onKeydown: Zt(ie(b, ["stop", "prevent"]), ["enter"])
            }, null, 40, hu), [
                [Be, i.value, void 0, {
                    trim: !0
                }]
            ]), w("span", bu, F(c.value + "/" + u.value), 1)])]), w("div", mu, [w("div", vu, [w("table", null, [w("thead", null, [w("tr", null, [w("th", null, [le(w("input", {
                "onUpdate:modelValue": y[1] || (y[1] = j => p.value = j),
                type: "checkbox",
                title: S(t).lang.selectAllTitle
            }, null, 8, xu), [
                [Za, p.value]
            ])]), X(Xe, {
                text: S(t).lang.groupValueText
            }, null, 8, ["text"]), X(Xe, {
                text: S(t).lang.groupPrimaryColorText
            }, null, 8, ["text"]), X(Xe, {
                text: S(t).lang.groupSecondaryColorText
            }, null, 8, ["text"]), X(Xe, {
                text: S(t).lang.groupWeightText
            }, null, 8, ["text"]), X(Xe, {
                text: S(t).lang.editText
            }, null, 8, ["text"]), X(Xe, {
                text: S(t).lang.deleteText
            }, null, 8, ["text"])])])])]), w("div", yu, [w("table", null, [w("tbody", null, [(Z(!0), ee(he, null, Ce(l.value, ({
                isExists: j,
                isShow: N,
                isSelected: D,
                value: C,
                editable: M,
                primaryColor: W,
                secondaryColor: E,
                weight: q
            }, de) => le((Z(), ee("tr", {
                key: de
            }, [w("td", null, [w("input", {
                type: "checkbox",
                checked: D,
                onChange: ce => l.value[de].isSelected = !D
            }, null, 40, wu)]), w("td", null, [X(ss, {
                value: C,
                "data-key": de.toString(),
                editable: M,
                "class-name": "note-obj-group-frame-item-input-value",
                onValueChange: ce => function(oe, re) {
                    l.value[oe].value = re, T(), l.value[oe].editable = !1
                }(de.toString(), ce)
            }, null, 8, ["value", "data-key", "editable", "onValueChange"])]), w("td", null, [w("input", {
                type: "color",
                value: W,
                onChange: ce => function(oe, re) {
                    let se = "";
                    re.target && (se = re.target.value), l.value[oe].primaryColor = se || t.defaultColor.primaryColor, T()
                }(de.toString(), ce)
            }, null, 40, Tu)]), w("td", null, [w("input", {
                type: "color",
                value: E,
                onChange: ce => function(oe, re) {
                    let se = "";
                    re.target && (se = re.target.value), l.value[oe].secondaryColor = se || t.defaultColor.secondaryColor, T()
                }(de.toString(), ce)
            }, null, 40, ju)]), w("td", null, [w("input", {
                type: "number",
                step: 1,
                min: -100,
                max: 100,
                value: q,
                onChange: ce => function(oe, re) {
                    let se = 0;
                    re.target && (se = +re.target.value), l.value[oe].weight = se || 0, T()
                }(de.toString(), ce)
            }, null, 40, Su)]), w("td", null, [le(w("span", {
                title: S(t).lang.editTitle,
                class: We(["note-obj-group-frame-item-btn note-obj-group-frame-item-edit", {
                    "note-obj-group-frame-item-ok": M
                }]),
                onClick: ie(ce => x(de.toString()), ["stop"])
            }, null, 10, Iu), [
                [we, de !== "default"]
            ])]), w("td", null, [le(w("span", {
                title: S(t).lang.deleteTitle,
                class: "note-obj-group-frame-item-btn note-obj-group-frame-item-delete",
                onClick: ie(ce => function(oe) {
                    oe !== "default" && (l.value[oe].isExists = !1, T())
                }(de.toString()), ["stop"])
            }, null, 8, ku), [
                [we, de !== "default"]
            ])])], 512)), [
                [we, j && N]
            ])), 128))])])])]), w("div", Du, [w("button", {
                type: "button",
                disabled: c.value === 0,
                title: S(t).lang.deleteSelectedTitle,
                class: "note-obj-group-frame-delete-selected",
                onClick: ie(k, ["stop"])
            }, F(S(t).lang.deleteSelectedText), 9, Nu), w("button", {
                type: "button",
                title: S(t).lang.groupCreateValueTitle,
                class: "note-obj-group-frame-create-value",
                onClick: ie(f, ["stop"])
            }, F(S(t).lang.groupCreateValueText), 9, Cu)]), w("div", Au, [le(w("span", {
                class: "note-obj-group-frame-show-modify-text"
            }, F(S(t).lang.modifyText), 513), [
                [we, a.value]
            ]), le(w("span", {
                class: "note-obj-group-frame-show-wait-text"
            }, F(S(t).lang.waitText), 513), [
                [we, s.value]
            ]), w("button", {
                title: S(t).lang.saveContentTitle,
                class: "note-obj-group-frame-save-content",
                disabled: !a.value,
                onClick: ie(m, ["stop"])
            }, F(S(t).lang.saveContentText), 9, _u), w("button", {
                title: S(t).lang.closeContentTitle,
                class: "note-obj-group-frame-cancel-content",
                onClick: ie(g, ["stop"])
            }, F(S(t).lang.closeCotentText), 9, Mu)])])])) : et("", !0)
        }
    }),
    Eu = {
        class: "note-obj-select-group-frame-dialog"
    },
    Lu = {
        class: "note-obj-select-group-frame-header"
    },
    Ou = {
        class: "note-obj-select-group-frame-header-text"
    },
    Gu = {
        class: "note-obj-select-group-frame-content"
    },
    Pu = ["title", "onClick"],
    zu = {
        class: "note-obj-select-group-frame-footer"
    },
    Uu = ve({
        __name: "NoteObjSelectGroupFrame",
        setup(e) {
            const t = Ge(),
                o = hn(),
                n = ye([]),
                {
                    isShow: r
                } = Lt(o);

            function i() {
                a()
            }

            function a() {
                o.isShow = !1
            }
            return Ae(r, s => {
                s && (n.value = Object.keys(t.group).sort((l, u) => {
                    const c = Number(t.group[l].weight) || 0,
                        p = Number(t.group[u].weight) || 0;
                    return c - p < 0 ? 1 : c - p > 0 ? -1 : 0
                }).map(l => ({
                    key: l,
                    ...t.group[l]
                })))
            }), (s, l) => le((Z(), ee("div", {
                class: "note-obj-select-group-frame-presentation",
                onClick: ie(i, ["self"])
            }, [w("div", Eu, [w("div", Lu, [w("div", Ou, F(S(t).lang.selectGroupHeaderText), 1)]), w("div", Gu, [(Z(!0), ee(he, null, Ce(n.value, ({
                key: u,
                value: c,
                primaryColor: p,
                secondaryColor: b
            }) => (Z(), ee("div", {
                key: u,
                class: "note-obj-select-group-frame-group-item",
                title: u === "default" ? S(t).lang.defaultGroupText : c,
                style: ao({
                    color: b,
                    backgroundColor: p
                }),
                onClick: ie(h => function(x) {
                    typeof o.selected == "function" && (o.selected(x), o.selected = null), a()
                }(u), ["stop"])
            }, F(u === "default" ? S(t).lang.defaultGroupText : c), 13, Pu))), 128))]), w("div", zu, [w("span", {
                class: "note-obj-select-group-frame-btn",
                onClick: ie(a, ["stop"])
            }, F(S(t).lang.cancelText), 1)])])], 512)), [
                [we, S(o).isShow]
            ])
        }
    }),
    Bu = {
        class: "note-obj-new-group-frame-dialog"
    },
    Ru = {
        class: "note-obj-new-group-frame-header"
    },
    Wu = {
        class: "note-obj-new-group-frame-title-text"
    },
    Hu = ["placeholder", "onKeyup"],
    Fu = {
        class: "note-obj-new-group-frame-color-label"
    },
    Zu = {
        class: "note-obj-new-group-frame-color-label-text"
    },
    Yu = {
        class: "note-obj-new-group-frame-color-label"
    },
    Ku = {
        class: "note-obj-new-group-frame-color-label-text"
    },
    $u = {
        class: "note-obj-new-group-frame-color-label"
    },
    Ju = {
        class: "note-obj-new-group-frame-color-label-text"
    },
    Xu = ["title"],
    Qu = ["ttile"],
    qu = ve({
        __name: "NoteObjNewGroupFrame",
        setup(e) {
            const t = Ge(),
                o = xr(),
                n = ye(""),
                r = ye(""),
                i = ye(""),
                a = ye(0),
                {
                    isShow: s
                } = Lt(o);

            function l(b) {
                b.key === "Enter" ? u() : b.key === "Escape" && p()
            }

            function u() {
                if (n.value) {
                    const b = "g_" + Date.now();
                    t.writeNewGroupValue(b, {
                        value: n.value,
                        primaryColor: r.value,
                        secondaryColor: i.value,
                        weight: a.value
                    }) && (typeof o.created == "function" && (o.created(b), o.created = null), p())
                }
            }

            function c() {
                p()
            }

            function p() {
                o.isShow = !1
            }
            return Ae(s, b => {
                b && (n.value = t.lang.groupNewValueText, r.value = t.defaultColor.primaryColor, i.value = t.defaultColor.secondaryColor, a.value = 0)
            }), (b, h) => le((Z(), ee("div", {
                class: "note-obj-new-group-frame-presentation",
                onClick: ie(c, ["self"])
            }, [w("div", Bu, [w("div", Ru, [w("span", Wu, F(S(t).lang.groupCreateValueText), 1)]), le(w("input", {
                "onUpdate:modelValue": h[0] || (h[0] = x => n.value = x),
                type: "text",
                placeholder: S(t).lang.groupPlaceholder,
                class: "note-obj-new-group-frame-input",
                onKeyup: Zt(ie(l, ["prevent"]), ["enter", "esc"])
            }, null, 40, Hu), [
                [Be, n.value, void 0, {
                    trim: !0
                }],
                [S(bn), S(s)]
            ]), w("div", Fu, [w("span", Zu, F(S(t).lang.groupPrimaryColorText + ": "), 1), le(w("input", {
                "onUpdate:modelValue": h[1] || (h[1] = x => r.value = x),
                type: "color"
            }, null, 512), [
                [Be, r.value]
            ])]), w("div", Yu, [w("span", Ku, F(S(t).lang.groupSecondaryColorText + ": "), 1), le(w("input", {
                "onUpdate:modelValue": h[2] || (h[2] = x => i.value = x),
                type: "color"
            }, null, 512), [
                [Be, i.value]
            ])]), w("div", $u, [w("span", Ju, F(S(t).lang.groupWeightText + ": "), 1), le(w("input", {
                "onUpdate:modelValue": h[3] || (h[3] = x => a.value = x),
                type: "number",
                step: 1,
                min: -100,
                max: 100
            }, null, 512), [
                [Be, a.value]
            ])]), w("button", {
                type: "button",
                title: S(t).lang.saveTagTitle,
                onClick: ie(u, ["stop"])
            }, F(S(t).lang.saveTagText), 9, Xu), w("button", {
                type: "button",
                ttile: S(t).lang.cancelTagTItle,
                onClick: ie(p, ["stop"])
            }, F(S(t).lang.cancelTagText), 9, Qu)])], 512)), [
                [we, S(s)]
            ])
        }
    }),
    ed = {
        class: "note-obj-popover-frame-header"
    },
    td = {
        class: "note-obj-popover-frame-title"
    },
    od = {
        class: "note-obj-popover-frame-title"
    },
    nd = {
        class: "note-obj-popover-frame-content"
    },
    rd = ["title", "onOnclick"],
    id = w("div", {
        class: "note-obj-popover-frame-arrow"
    }, null, -1),
    ad = ve({
        __name: "NoteObjPopoverFrame",
        setup(e) {
            const t = Ge(),
                o = Zn(),
                {
                    currentUserId: n
                } = Lt(o),
                r = Kt({
                    name: "",
                    tag: "",
                    group: ""
                }),
                i = ye({}),
                a = ye("");

            function s() {
                o.isPopHover = !0
            }

            function l() {
                o.isPopHover = !1, Re.debounce("popoverHide", () => {
                    o.isPopHover || o.isTagHover || (o.isShow = !1)
                }, 1e3)
            }
            return Ae(n, u => {
                if (u) {
                    Object.assign(r, t.items[u]);
                    const c = r.group,
                        p = Object.keys(t.group),
                        b = {};
                    if (c && c !== "default" && p.includes(c)) {
                        a.value = t.group[c].value;
                        const h = Object.assign({}, t.items);
                        for (const x in h) {
                            const k = h[x];
                            k.group === c && x !== u && (b[x] = k)
                        }
                    } else a.value = "";
                    i.value = b
                }
            }), (u, c) => le((Z(), ee("div", {
                class: "note-obj-popver-frame-dialog",
                style: ao({
                    left: S(o).x + 10 + "px",
                    top: S(o).y - 50 + "px"
                }),
                onMouseenter: s,
                onMouseleave: l
            }, [w("div", ed, [w("div", td, F(a.value), 1), w("div", od, F(r.tag || r.name || ""), 1)]), w("div", nd, [(Z(!0), ee(he, null, Ce(i.value, (p, b, h) => (Z(), ee("div", {
                key: b,
                class: We(h % 2 == 1 ? "note-obj-popover-frame-item-deepen" : "note-obj-popover-frame-item"),
                title: b + (p.name && p.name !== b ? `
${p.name}` : "") + (p.tag ? `
${p.tag}` : ""),
                onOnclick: ie(x => function(k, f) {
                    t.openLink(f.toString(), k.ctrlKey || k.metaKey, k.shiftKey, "popover")
                }(x, b), ["stop"])
            }, F(p.tag || p.name || b), 43, rd))), 128))]), id], 36)), [
                [we, S(o).isShow]
            ])
        }
    }),
    Ut = ve({
        __name: "NoteObjFlodHeader",
        props: {
            text: {},
            iconRomote: {
                type: Boolean
            }
        },
        emits: ["update:iconRomote"],
        setup(e, {
            emit: t
        }) {
            const o = t;
            return (n, r) => (Z(), ee("header", {
                onClick: r[0] || (r[0] = ie(i => o("update:iconRomote", !n.iconRomote), ["stop"]))
            }, [w("span", null, F(n.text), 1), w("i", {
                class: We(["note-obj-settings-frame-header-icon", {
                    "note-obj-settings-frame-header-icon-romote": n.iconRomote
                }])
            }, null, 2)]))
        }
    }),
    sd = {
        class: "note-obj-settings-frame-component-package"
    },
    ld = ["id", "checked"],
    cd = ["for"],
    ud = ve({
        __name: "NoteObjSettingsCheckbox",
        props: {
            id: {},
            isSelected: {
                type: Boolean
            },
            label: {}
        },
        emits: ["change"],
        setup(e, {
            emit: t
        }) {
            const o = t;
            return (n, r) => (Z(), ee("div", sd, [w("input", {
                type: "checkbox",
                id: n.id,
                checked: n.isSelected,
                onChange: r[0] || (r[0] = i => o("change", !n.isSelected))
            }, null, 40, ld), w("label", {
                for: n.id,
                class: "note-obj-settings-checkbox-label"
            }, F(n.label), 9, cd)]))
        }
    }),
    dd = {
        class: "note-obj-settings-frame-component-package-input-text"
    },
    pd = {
        class: "note-obj-setttings-frame-before-input-text"
    },
    fd = ["id", "value"],
    gd = ve({
        __name: "NoteObjSettingsInput",
        props: {
            id: {},
            value: {},
            label: {}
        },
        emits: ["change"],
        setup(e, {
            emit: t
        }) {
            const o = e,
                n = t;

            function r(i) {
                Re.debounce(o.id + "_settingsInput", () => {
                    let a = "";
                    i.target && (a = i.target.value), n("change", a)
                }, 500)
            }
            return (i, a) => (Z(), ee("div", dd, [w("span", pd, F(i.label), 1), w("input", {
                type: "text",
                id: i.id,
                value: i.value,
                onInput: r
            }, null, 40, fd)]))
        }
    }),
    hd = ["id"],
    bd = {
        class: "note-obj-settings-frame-radio-config-text"
    },
    md = ["id", "value", "checked"],
    vd = ["for"],
    xd = ve({
        __name: "NoteObjSettingsRadio",
        props: {
            id: {},
            label: {},
            value: {},
            options: {}
        },
        emits: ["change"],
        setup(e, {
            emit: t
        }) {
            const o = Ge(),
                n = t;

            function r(i) {
                let a = "";
                i.target && (a = i.target.value), n("change", a)
            }
            return (i, a) => (Z(), ee("div", {
                class: "note-obj-settings-frame-component-package",
                id: i.id
            }, [w("label", bd, F(i.label), 1), (Z(!0), ee(he, null, Ce(i.options, (s, l) => (Z(), ee("span", {
                key: l
            }, [w("input", {
                type: "radio",
                id: i.id + "_" + l,
                value: l,
                checked: i.value === l,
                onChange: r
            }, null, 40, md), w("label", {
                for: i.id + "_" + l,
                class: "note-obj-settings-radio-label"
            }, F(S(o).lang[s] || s), 9, vd)]))), 128))], 8, hd))
        }
    }),
    yd = {
        class: "note-obj-settings-frame-component-package"
    },
    wd = ["for"],
    Td = ["id", "name"],
    jd = ["value", "selected"],
    Sd = ve({
        __name: "NoteObjSettingsSelect",
        props: {
            id: {},
            selected: {},
            options: {},
            label: {}
        },
        emits: ["change"],
        setup(e, {
            emit: t
        }) {
            const o = Ge(),
                n = t;

            function r(i) {
                let a = "";
                i.target && (a = i.target.value), n("change", a)
            }
            return (i, a) => (Z(), ee("div", yd, [w("label", {
                class: "note-obj-settings-frame-before-select-text",
                for: i.id
            }, F(i.label), 9, wd), w("select", {
                id: i.id,
                name: i.id + "_select",
                onChange: r
            }, [(Z(!0), ee(he, null, Ce(i.options, (s, l) => (Z(), ee("option", {
                key: l,
                value: l,
                selected: l === i.selected
            }, F(S(o).lang[s] || s), 9, jd))), 128))], 40, Td)]))
        }
    }),
    Id = {
        class: "note-obj-settings-frame-content-section"
    },
    Jt = ve({
        __name: "NoteObjSettingsItem",
        props: {
            id: {},
            type: {},
            value: {
                type: [String, Boolean]
            },
            label: {},
            options: {}
        },
        emits: ["value-change"],
        setup(e, {
            emit: t
        }) {
            const o = t;
            return (n, r) => (Z(), ee("div", Id, [n.type === "checkbox" ? (Z(), _e(ud, {
                key: 0,
                id: n.id,
                label: n.label,
                "is-selected": !!n.value,
                onChange: r[0] || (r[0] = i => o("value-change", i))
            }, null, 8, ["id", "label", "is-selected"])) : n.type === "text" ? (Z(), _e(gd, {
                key: 1,
                id: n.id,
                label: n.label,
                value: n.value.toString(),
                onChange: r[1] || (r[1] = i => o("value-change", i))
            }, null, 8, ["id", "label", "value"])) : n.type === "radio" ? (Z(), _e(xd, {
                key: 2,
                id: n.id,
                label: n.label,
                value: n.value.toString(),
                options: n.options || {},
                onChange: r[2] || (r[2] = i => o("value-change", i))
            }, null, 8, ["id", "label", "value", "options"])) : n.type === "select" ? (Z(), _e(Sd, {
                key: 3,
                id: n.id,
                label: n.label,
                options: n.options || {},
                selected: n.value.toString(),
                onChange: r[3] || (r[3] = i => o("value-change", i))
            }, null, 8, ["id", "label", "options", "selected"])) : et("", !0)]))
        }
    }),
    kd = {
        class: "note-obj-settings-frame-content-section"
    },
    Dd = {
        key: 0
    },
    Nd = ["href"],
    Cd = {
        key: 2
    },
    it = ve({
        __name: "NoteObjScriptItem",
        props: {
            label: {},
            type: {},
            url: {}
        },
        setup: e => (t, o) => (Z(), ee("div", kd, [t.label ? (Z(), ee("span", Dd, F(t.label), 1)) : et("", !0), t.type === "a" ? (Z(), ee("a", {
            key: 1,
            href: t.url || "#",
            target: "_blank"
        }, [Qo(t.$slots, "default")], 8, Nd)) : t.type === "p" ? (Z(), ee("p", Cd, [Qo(t.$slots, "default")])) : et("", !0)]))
    }),
    Ad = {
        key: 0,
        class: "note-obj-settings-divider-label"
    },
    Ei = ve({
        __name: "NoteObjSettingsDivider",
        props: {
            type: {}
        },
        setup(e) {
            const t = !!dl().default;
            return (o, n) => (Z(), ee("div", {
                class: We(["note-obj-settings-frame-content-section note-obj-settings-divider", "note-obj-settings-divider-" + o.type + (t ? " note-obj-settings-divider-inner-text" : "")])
            }, [t ? (Z(), ee("span", Ad, [Qo(o.$slots, "default")])) : et("", !0)], 2))
        }
    }),
    Uo = ve({
        __name: "NoteObjSettingsDividerPackage",
        props: {
            label: {}
        },
        setup: e => (t, o) => (Z(), ee(he, null, [X(Ei, {
            type: "solid"
        }, {
            default: Ne(() => [Je(F(t.label), 1)]),
            _: 1
        }), Qo(t.$slots, "default"), X(Ei, {
            type: "dashed"
        })], 64))
    }),
    _d = {
        class: "note-obj-settings-frame-card"
    },
    Md = {
        class: "note-obj-settings-frame-header"
    },
    Vd = {
        class: "note-obj-settings-frame-headline"
    },
    Ed = ["title"],
    Ld = {
        class: "note-obj-settings-frame-body"
    },
    Od = {
        class: "note-obj-settings-frame-flod"
    },
    Gd = {
        class: "note-obj-settings-frame-content"
    },
    Pd = {
        class: "note-obj-settings-frame-flod"
    },
    zd = {
        class: "note-obj-settings-frame-content"
    },
    Ud = {
        class: "note-obj-settings-frame-flod"
    },
    Bd = {
        class: "note-obj-settings-frame-content"
    },
    Rd = {
        class: "note-obj-settings-frame-flod"
    },
    Wd = {
        class: "note-obj-settings-frame-content"
    },
    Hd = {
        key: 0,
        class: "note-obj-settings-frame-flod"
    },
    Fd = {
        class: "note-obj-settings-frame-content"
    },
    Zd = {
        class: "note-obj-settings-frame-flod"
    },
    Yd = {
        class: "note-obj-settings-frame-content"
    },
    Kd = {
        class: "note-obj-settings-frame-content-section note-obj-settings-frame-center-content"
    },
    $d = {
        class: "note-obj-settings-frame-content-section note-obj-settings-frame-center-content"
    },
    Jd = ["title", "disabled"],
    Xd = ["title", "disabled"],
    Qd = ["title", "disabled"],
    qd = {
        class: "note-obj-settings-frame-flod"
    },
    ep = {
        class: "note-obj-settings-frame-content"
    },
    tp = {
        class: "note-obj-settings-frame-footer"
    },
    op = ["title"],
    np = ["title"],
    rp = ve({
        __name: "NoteObjSettingsFrame",
        setup(e) {
            const t = Ge(),
                o = rs(),
                n = is(),
                r = fe.info(),
                i = Kt({
                    searchBox: !1,
                    searchValue: !1,
                    addNote: !1,
                    interface: !1,
                    other: !1,
                    storeData: !1,
                    script: !1
                }),
                a = {
                    searchBox: {
                        showIndex: {
                            id: "settingsSearchBoxShowIndexText",
                            type: "checkbox"
                        },
                        canHideSearchFrame: {
                            id: "settingsSearchBoxCanHideSearchFrameText",
                            type: "checkbox"
                        },
                        showGroupName: {
                            id: "settingsSearchBoxShowGroupNameText",
                            type: "checkbox"
                        },
                        openNewTab: {
                            id: "settingsSearchBoxOpenNewTabText",
                            type: "checkbox"
                        },
                        enableShortcutKeys: {
                            id: "settingsSearchBoxEnableShortcutKeysText",
                            type: "checkbox"
                        }
                    },
                    searchValue: {
                        caseSensitive: {
                            id: "settingsSearchValueCaseSensitiveText",
                            type: "checkbox"
                        },
                        split: {
                            id: "settingsSearchValueSplitText",
                            type: "checkbox"
                        },
                        regular: {
                            id: "settingsSearchValueRegularText",
                            type: "checkbox"
                        }
                    },
                    addNote: {
                        showNoteGroupName: {
                            id: "settingsAddNoteShowNoteGroupNameText",
                            type: "checkbox"
                        },
                        hideNoteText: {
                            id: "settingsAddNoteHideNoteText",
                            type: "checkbox"
                        },
                        showNoteGroupColor: {
                            id: "settingsAddNoteShowNoteGroupColorText",
                            type: "checkbox"
                        },
                        showPopoverFrame: {
                            id: "settingsAddNoteShowPopoverFrameText",
                            type: "checkbox"
                        },
                        openNoteNewTab: {
                            id: "settingsAddNoteOpenNoteNewTabText",
                            type: "checkbox"
                        },
                        canHideAddFrame: {
                            id: "settingsAddNoteCanHideAddFrameText",
                            type: "checkbox"
                        }
                    },
                    interface: {
                        insertSearchButton: {
                            id: "settingsInterfaceInsertSearchButtonText",
                            type: "checkbox"
                        },
                        mode: {
                            id: "settingsInterfaceConfigText",
                            type: "radio",
                            options: {
                                bright: "settingsInterfaceBrightText",
                                dark: "settingsInterfaceDarkText"
                            }
                        },
                        language: {
                            id: "settingsInterfaceLanguageText",
                            type: "select",
                            options: t.i18n.getLangOptions()
                        }
                    },
                    storeData: {
                        enableWebDAV: {
                            id: "settingsWebDAVEnableText",
                            type: "checkbox"
                        },
                        autoSync: {
                            id: "settingsFrameInterfaceAutoSyncText",
                            type: "checkbox"
                        }
                    }
                },
                s = De(() => Object.keys(t.config.other).length > 0),
                l = De(() => t.storeModificationTime ? new Date(t.storeModificationTime).toString() : "none."),
                u = De(() => t.webDAVSyncTime ? new Date(t.webDAVSyncTime).toString() : "none.");

            function c() {
                n.isInsert = !0
            }

            function p() {
                t.config.storeData.enableWebDAV && t.config.storeData.webDAVSyncMode === "two-way" && !t.webDAVSyncLoading && t.webDAVSyncTimer("two-way")
            }

            function b() {
                t.config.storeData.enableWebDAV && t.config.storeData.webDAVSyncMode !== "download" && !t.webDAVSyncLoading && t.webDAVSyncTimer("upload")
            }

            function h() {
                t.config.storeData.enableWebDAV && t.config.storeData.webDAVSyncMode !== "upload" && !t.webDAVSyncLoading && t.webDAVSyncTimer("download")
            }

            function x() {
                t.export()
            }

            function k() {
                t.import()
            }
             
            function clearData(){
                t.clear()
            }
            
            function batch(){
                t.batchExport()
            }

            function f() {
                m()
            }

            function m() {
                o.isInsert = !1
            }
            return (T, g) => (Z(), _e(hr, {
                name: "note-obj-settings-frame-card"
            }, {
                default: Ne(() => [S(o).isInsert ? (Z(), ee("div", {
                    key: 0,
                    class: "note-obj-settings-frame-presentation",
                    onClick: ie(f, ["self"])
                }, [w("div", _d, [w("header", Md, [w("span", Vd, F(S(t).lang.settingsHeadlineText), 1), w("span", {
                    title: S(t).lang.settingsCloseTitle,
                    class: "note-obj-settings-frame-close-btn",
                    onClick: ie(m, ["stop"])
                }, null, 8, Ed)]), w("div", Ld, [w("div", Od, [X(Ut, {
                    "icon-romote": i.searchBox,
                    "onUpdate:iconRomote": g[0] || (g[0] = d => i.searchBox = d),
                    text: S(t).lang.settingsAboutSearchBoxText
                }, null, 8, ["icon-romote", "text"]), le(w("div", Gd, [(Z(!0), ee(he, null, Ce(a.searchBox, ({
                    id: d,
                    type: y
                }, j) => (Z(), _e(Jt, {
                    key: j,
                    value: S(t).config.searchBox[j],
                    id: d,
                    label: S(t).lang[d],
                    type: y,
                    onValueChange: N => function(D, C) {
                        t.config.searchBox[D] = C, t.saveConfig()
                    }(j, !!N)
                }, null, 8, ["value", "id", "label", "type", "onValueChange"]))), 128))], 512), [
                    [we, i.searchBox]
                ])]), w("div", Pd, [X(Ut, {
                    "icon-romote": i.searchValue,
                    "onUpdate:iconRomote": g[1] || (g[1] = d => i.searchValue = d),
                    text: S(t).lang.settingsAboutSearchValueText
                }, null, 8, ["icon-romote", "text"]), le(w("div", zd, [(Z(!0), ee(he, null, Ce(a.searchValue, ({
                    id: d,
                    type: y
                }, j) => (Z(), _e(Jt, {
                    key: j,
                    value: S(t).config.searchValue[j],
                    id: d,
                    label: S(t).lang[d],
                    type: y,
                    onValueChange: N => function(D, C) {
                        t.config.searchValue[D] = C, t.saveConfig()
                    }(j, !!N)
                }, null, 8, ["value", "id", "label", "type", "onValueChange"]))), 128))], 512), [
                    [we, i.searchValue]
                ])]), w("div", Ud, [X(Ut, {
                    "icon-romote": i.addNote,
                    "onUpdate:iconRomote": g[2] || (g[2] = d => i.addNote = d),
                    text: S(t).lang.settingsAboutAddNoteText
                }, null, 8, ["icon-romote", "text"]), le(w("div", Bd, [(Z(!0), ee(he, null, Ce(a.addNote, ({
                    id: d,
                    type: y
                }, j) => (Z(), _e(Jt, {
                    key: j,
                    value: S(t).config.addNote[j],
                    id: d,
                    label: S(t).lang[d],
                    type: y,
                    onValueChange: N => function(D, C) {
                        t.config.addNote[D] = C, t.saveConfig()
                    }(j, !!N)
                }, null, 8, ["value", "id", "label", "type", "onValueChange"]))), 128))], 512), [
                    [we, i.addNote]
                ])]), w("div", Rd, [X(Ut, {
                    "icon-romote": i.interface,
                    "onUpdate:iconRomote": g[3] || (g[3] = d => i.interface = d),
                    text: S(t).lang.settingsAboutInterfaceText
                }, null, 8, ["icon-romote", "text"]), le(w("div", Wd, [(Z(!0), ee(he, null, Ce(a.interface, ({
                    id: d,
                    type: y,
                    options: j
                }, N) => (Z(), _e(Jt, {
                    key: N,
                    value: S(t).config.interface[N],
                    id: d,
                    label: S(t).lang[d],
                    type: y,
                    options: j,
                    onValueChange: D => function(C, M) {
                        C === "mode" ? t.setInterfaceMode(M.toString()) : C === "language" ? t.setInterfaceLanguage(M.toString()) : C === "insertSearchButton" && (t.config.interface.insertSearchButton = !!M, t.saveConfig())
                    }(N, D)
                }, null, 8, ["value", "id", "label", "type", "options", "onValueChange"]))), 128))], 512), [
                    [we, i.interface]
                ])]), s.value ? (Z(), ee("div", Hd, [X(Ut, {
                    "icon-romote": i.other,
                    "onUpdate:iconRomote": g[4] || (g[4] = d => i.other = d),
                    text: S(t).lang.settingsAboutOtherText
                }, null, 8, ["icon-romote", "text"]), le(w("div", Fd, [(Z(!0), ee(he, null, Ce(S(t).config.other, (d, y) => (Z(), _e(Jt, {
                    key: y,
                    value: d,
                    id: "otherSettings_" + y,
                    label: S(t).otherConfigInfo[y].lang[S(t).i18n.getLangType()],
                    type: S(t).otherConfigInfo[y].type,
                    options: S(t).otherConfigInfo[y].options,
                    onValueChange: j => function(N, D) {
                        const C = t.config.other[N];
                        if (C !== D && (t.config.other[N] = D, t.saveConfig(void 0, !1))) {
                            t.addNotification(t.lang.saveCompletedNotifactionText);
                            const M = t.otherConfigInfo[N];
                            M.type === "checkbox" ? M.event(!!D, !!C) : M.event(D.toString(), C.toString())
                        }
                    }(y.toString(), j)
                }, null, 8, ["value", "id", "label", "type", "options", "onValueChange"]))), 128))], 512), [
                    [we, i.other]
                ])])) : et("", !0), w("div", Zd, [X(Ut, {
                    "icon-romote": i.storeData,
                    "onUpdate:iconRomote": g[5] || (g[5] = d => i.storeData = d),
                    text: S(t).lang.settingsAboutStoredDataText
                }, null, 8, ["icon-romote", "text"]), le(w("div", Yd, [w("div", Kd, [w("button", {
                    type: "button",
                    onClick: ie(c, ["stop"])
                }, F(S(t).lang.settingsWebDAVConfigText), 1)]), w("div", $d, [w("button", {
                    type: "button",
                    title: S(t).lang.settingsWebDAVSyncTitle,
                    disabled: !S(t).config.storeData.enableWebDAV || S(t).config.storeData.webDAVSyncMode !== "two-way",
                    onClick: ie(p, ["stop"])
                }, F(S(t).lang.settingsWebDAVSyncText), 9, Jd), w("button", {
                    type: "button",
                    title: S(t).lang.settingsWebDAVUploadTitle,
                    disabled: !S(t).config.storeData.enableWebDAV || S(t).config.storeData.webDAVSyncMode === "download",
                    onClick: ie(b, ["stop"])
                }, F(S(t).lang.settingsWebDAVUploadText), 9, Xd), w("button", {
                    type: "button",
                    title: S(t).lang.settingsWebDAVDownloadTitle,
                    disabled: !S(t).config.storeData.enableWebDAV || S(t).config.storeData.webDAVSyncMode === "upload",
                    onClick: ie(h, ["stop"])
                }, F(S(t).lang.settingsWebDAVDownloadText), 9, Qd)]), (Z(!0), ee(he, null, Ce(a.storeData, ({
                    id: d,
                    type: y
                }, j) => (Z(), _e(Jt, {
                    key: j,
                    value: S(t).config.storeData[j],
                    id: d,
                    label: S(t).lang[d],
                    type: y,
                    onValueChange: N => function(D, C) {
                        t.config.storeData[D] = C, t.saveConfig(), D === "autoSync" ? t.valueChangeListener() : D === "enableWebDAV" && t.webDAVSyncTimer("immediate")
                    }(j, !!N)
                }, null, 8, ["value", "id", "label", "type", "onValueChange"]))), 128)), X(Uo, {
                    label: S(t).lang.settingsLocalDataText
                }, {
                    default: Ne(() => [X(it, {
                        type: "p",
                        label: "+ " + S(t).lang.settingsNotesCountText
                    }, {
                        default: Ne(() => [Je(F(S(t).itemsCount), 1)]),
                        _: 1
                    }, 8, ["label"]), X(it, {
                        type: "p",
                        label: "+ " + S(t).lang.settingsGroupCountText
                    }, {
                        default: Ne(() => [Je(F(S(t).groupCount), 1)]),
                        _: 1
                    }, 8, ["label"])]),
                    _: 1
                }, 8, ["label"]), X(Uo, {
                    label: S(t).lang.settingsStoredDataLastTimeText
                }, {
                    default: Ne(() => [X(it, {
                        type: "p"
                    }, {
                        default: Ne(() => [Je(F(l.value), 1)]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["label"]), X(Uo, {
                    label: S(t).lang.settingsWebDAVSyncTimeText
                }, {
                    default: Ne(() => [X(it, {
                        type: "p"
                    }, {
                        default: Ne(() => [Je(F(u.value), 1)]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["label"])], 512), [
                    [we, i.storeData]
                ])]), w("div", qd, [X(Ut, {
                    "icon-romote": i.script,
                    "onUpdate:iconRomote": g[6] || (g[6] = d => i.script = d),
                    text: S(t).lang.settingsAboutScriptText
                }, null, 8, ["icon-romote", "text"]), le(w("div", ep, [X(it, {
                    type: "a",
                    label: S(t).lang.settingsScriptAuthorText,
                    url: S(t).scriptInfo.author.homepage
                }, {
                    default: Ne(() => [Je(F(S(t).scriptInfo.author.name), 1)]),
                    _: 1
                }, 8, ["label", "url"]), X(it, {
                    type: "a",
                    label: S(t).lang.settingsScriptVersionText,
                    url: S(t).scriptInfo.url
                }, {
                    default: Ne(() => [Je(F((S(t).scriptInfo.version || S(r).script.version) + " (" + S(t).scriptInfo.updated + ")"), 1)]),
                    _: 1
                }, 8, ["label", "url"]), X(it, {
                    type: "a",
                    label: S(t).lang.settingsScriptCoreText,
                    url: "https://github.com/LightAPIs"
                }, {
                    default: Ne(() => [Je(F("Note_Obj v" + S(os) + " (" + S(ns) + ")"), 1)]),
                    _: 1
                }, 8, ["label"]), X(Uo, {
                    label: S(t).lang.settingsScriptLibraryText
                }, {
                    default: Ne(() => [(Z(!0), ee(he, null, Ce(S(t).scriptInfo.library, (d, y) => (Z(), _e(it, {
                        key: y,
                        type: "a",
                        label: "+ ",
                        url: d.url
                    }, {
                        default: Ne(() => [Je(F(d.name + " (v" + d.version + ")"), 1)]),
                        _: 2
                    }, 1032, ["url"]))), 128))]),
                    _: 1
                }, 8, ["label"]), (Z(!0), ee(he, null, Ce(S(t).scriptInfo.icons, (d, y) => (Z(), _e(it, {
                    key: y,
                    type: "a",
                    label: S(t).lang.settingsScriptIconText,
                    url: d.url
                }, {
                    default: Ne(() => [Je(F(d.name), 1)]),
                    _: 2
                }, 1032, ["label", "url"]))), 128)), X(it, {
                    type: "p",
                    label: S(t).lang.settingsScriptHandlerText
                }, {
                    default: Ne(() => [Je(F(S(r).scriptHandler + " (" + (S(r).version || "0.0.0") + ")"), 1)]),
                    _: 1
                }, 8, ["label"])], 512), [
                    [we, i.script]
                ])])]), w("div", tp, [
                    w("button", {
                    type: "button",
                    title: S(t).lang.settingsStoredDataExportTitle,
                    onClick: ie(x, ["stop"])
                }, F(S(t).lang.gmExportText), 9, op), 
                    w("button", {
                        type: "button",
                        title: S(t).lang.settingsStoredDataImportIitle,
                        onClick: ie(k, ["stop"])
                    }, F(S(t).lang.gmImportText), 9, np),
                    
                    w("button", { 
                        type: "button",
                        title: S(t).lang.settingsStoredDataClearIitle,
                        onClick: ie(clearData, ["stop"])
                    }, F(S(t).lang.gmClearText), 9, op),

                    w("button", { 
                        type: "button",
                        title: "批量导出",
                        onClick: ie(batch, ["stop"])
                    }, "批量导出", 9, op)
                
                ])])])) : et("", !0)]),
                _: 1
            }))
        }
    }),
    ip = {
        key: 0,
        class: "note-obj-webdav-frame-presentation"
    },
    ap = {
        class: "note-obj-webdav-frame-dialog"
    },
    sp = {
        class: "note-obj-webdav-frame-header"
    },
    lp = {
        class: "note-obj-webdav-frame-title"
    },
    cp = {
        class: "note-obj-webdav-frame-content"
    },
    up = {
        class: "note-obj-webdav-frame-form"
    },
    dp = {
        class: "note-obj-webdav-frame-form-item"
    },
    pp = {
        for: "note-obj-webdav-frame-url"
    },
    fp = w("br", null, null, -1),
    gp = {
        class: "note-obj-webdav-frame-form-item"
    },
    hp = {
        for: "note-obj-webdav-frame-file"
    },
    bp = w("br", null, null, -1),
    mp = {
        class: "note-obj-webdav-frame-form-item"
    },
    vp = {
        for: "note-obj-webdav-frame-user"
    },
    xp = w("br", null, null, -1),
    yp = {
        class: "note-obj-webdav-frame-form-item"
    },
    wp = {
        for: "note-obj-webdav-frame-password"
    },
    Tp = w("br", null, null, -1),
    jp = {
        class: "note-obj-webdav-frame-form-item"
    },
    Sp = {
        for: "note-obj-webdav-frame-passphrase"
    },
    Ip = w("br", null, null, -1),
    kp = {
        class: "note-obj-webdav-frame-form-item"
    },
    Dp = {
        fro: "note-obj-webdav-frame-interval"
    },
    Np = w("br", null, null, -1),
    Cp = {
        class: "note-obj-webdav-frame-form-item"
    },
    Ap = {
        for: "note-obj-webdav-frame-mode"
    },
    _p = ["value", "selected"],
    Mp = {
        class: "note-obj-webdav-frame-footer"
    },
    Vp = ["title"],
    Ep = ["title"],
    Lp = ve({
        __name: "NoteObjWebdavFrame",
        setup(e) {
            const t = {
                    "two-way": "webDAVSyncModeTwoWayText",
                    upload: "webDAVSyncModeUploadText",
                    download: "webDAVSyncModeDownloadText"
                },
                o = Ge(),
                {
                    isInsert: n
                } = Lt(is()),
                r = Kt({
                    url: "",
                    file: "",
                    user: "",
                    password: "",
                    passphrase: "",
                    interval: 0,
                    mode: "two-way"
                });

            function i() {
                const {
                    url: s,
                    file: l,
                    user: u,
                    password: c,
                    passphrase: p,
                    interval: b,
                    mode: h
                } = r;
                let x = Number(b) || 0;
                x <= 0 && (x = 0), Object.assign(o.config.storeData, {
                    webDAVURL: s.trim(),
                    webDAVFile: l.trim(),
                    webDAVUser: u.trim(),
                    webDAVPassword: c,
                    webDAVPassphrase: p,
                    webDAVAutoSyncInterval: Math.floor(x),
                    webDAVSyncMode: h
                }), o.saveConfig(), o.webDAVSyncTimer(), a()
            }

            function a() {
                n.value = !1
            }
            return Ae(n, s => {
                if (s) {
                    const {
                        webDAVURL: l,
                        webDAVFile: u,
                        webDAVUser: c,
                        webDAVPassword: p,
                        webDAVPassphrase: b,
                        webDAVAutoSyncInterval: h,
                        webDAVSyncMode: x
                    } = o.config.storeData;
                    Object.assign(r, {
                        url: l,
                        file: u,
                        user: c,
                        password: p,
                        passphrase: b,
                        interval: h,
                        mode: x
                    })
                }
            }), (s, l) => S(n) ? (Z(), ee("div", ip, [w("div", ap, [w("div", sp, [w("div", lp, F(S(o).lang.webDAVHeaderText), 1)]), w("div", cp, [w("div", up, [w("div", dp, [w("label", pp, F(S(o).lang.webDAVURLText), 1), fp, le(w("input", {
                "onUpdate:modelValue": l[0] || (l[0] = u => r.url = u),
                id: "note-obj-webdav-frame-url",
                type: "url"
            }, null, 512), [
                [Be, r.url]
            ])]), w("div", gp, [w("label", hp, F(S(o).lang.webDAVFileText), 1), bp, le(w("input", {
                "onUpdate:modelValue": l[1] || (l[1] = u => r.file = u),
                id: "note-obj-webdav-frame-file",
                type: "text"
            }, null, 512), [
                [Be, r.file]
            ])]), w("div", mp, [w("label", vp, F(S(o).lang.webDAVUserText), 1), xp, le(w("input", {
                "onUpdate:modelValue": l[2] || (l[2] = u => r.user = u),
                id: "note-obj-webdav-frame-user",
                type: "text"
            }, null, 512), [
                [Be, r.user]
            ])]), w("div", yp, [w("label", wp, F(S(o).lang.webDAVPasswordText), 1), Tp, le(w("input", {
                "onUpdate:modelValue": l[3] || (l[3] = u => r.password = u),
                id: "note-obj-webdav-frame-password",
                type: "password"
            }, null, 512), [
                [Be, r.password]
            ])]), w("div", jp, [w("label", Sp, F(S(o).lang.webDAVPassphraseText), 1), Ip, le(w("input", {
                "onUpdate:modelValue": l[4] || (l[4] = u => r.passphrase = u),
                id: "note-obj-webdav-frame-passphrase",
                type: "password"
            }, null, 512), [
                [Be, r.passphrase]
            ])]), w("div", kp, [w("label", Dp, F(S(o).lang.webDAVIntervalText), 1), Np, le(w("input", {
                "onUpdate:modelValue": l[5] || (l[5] = u => r.interval = u),
                id: "note-obj-webdav-frame-interval",
                type: "number",
                min: "0",
                step: "1"
            }, null, 512), [
                [Be, r.interval]
            ])]), w("div", Cp, [w("label", Ap, F(S(o).lang.webDAVSyncModeText), 1), le(w("select", {
                id: "note-obj-webdav-frame-mode",
                "onUpdate:modelValue": l[6] || (l[6] = u => r.mode = u)
            }, [(Z(), ee(he, null, Ce(t, (u, c) => w("option", {
                key: c,
                value: c,
                selected: c === r.mode
            }, F(S(o).lang[u]), 9, _p)), 64))], 512), [
                [Wn, r.mode]
            ])])])]), w("div", Mp, [w("button", {
                title: S(o).lang.saveContentTitle,
                class: "note-obj-webdav-frame-save-content",
                onClick: ie(i, ["stop"])
            }, F(S(o).lang.saveContentText), 9, Vp), w("button", {
                title: S(o).lang.closeContentTitle,
                class: "note-obj-webdav-frame-cancel-content",
                onClick: ie(a, ["stop"])
            }, F(S(o).lang.closeCotentText), 9, Ep)])])])) : et("", !0)
        }
    });
(function() {
    try {
        if (typeof document < "u") {
            var e = document.createElement("style");
            e.appendChild(document.createTextNode(".vue-simple-message-frame-presentation[data-v-2ae4fe17]{max-width:320px;position:fixed;top:20px;right:0;z-index:1000000;pointer-events:none}.vue-simple-message-frame-notification[data-v-2ae4fe17]{display:block;box-sizing:inherit;box-shadow:0 1px 4px #0003;background-color:#336;color:#fff;margin:10px;position:relative;min-width:240px;backface-visibility:hidden;pointer-events:all;border-radius:3px;padding:16px 20px}.vue-simple-message-frame-notification.vue-simple-message-frame-notification-error[data-v-2ae4fe17]{background-color:#f91717}.vue-simple-message-frame-notification.vue-simple-message-frame-notification-warn[data-v-2ae4fe17]{background-color:#b8b810}.vue-simple-message-frame-notification.vue-simple-message-frame-notification-debug[data-v-2ae4fe17]{background-color:#700270}.vue-simple-message-frame-notification-enter-active[data-v-2ae4fe17],.vue-simple-message-frame-notification-leave-active[data-v-2ae4fe17]{transition:all .5s ease}.vue-simple-message-frame-notification-enter-from[data-v-2ae4fe17]{transform:translate(100%);opacity:0}.vue-simple-message-frame-notification-leave-to[data-v-2ae4fe17]{opacity:0}.vue-simple-message-frame-close-btn[data-v-2ae4fe17]{position:absolute;right:4px;top:4px;width:18px;height:18px;box-shadow:0 1px 4px #00000080;cursor:pointer}.vue-simple-message-frame-close-btn svg[data-v-2ae4fe17]{width:18px;height:18px}.vue-simple-message-frame-content[data-v-2ae4fe17]{margin-top:5px;word-break:break-all}")), document.head.appendChild(e)
        }
    } catch (t) {
        console.error("vite-plugin-css-injected-by-js", t)
    }
})();
const ls = e => (Jo = "data-v-2ae4fe17", e = e(), Jo = null, e),
    Op = ls(() => w("div", {
        style: {
            display: "none"
        }
    }, [w("svg", {
        id: "simpleMessageCloseIcon",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        width: "18px",
        height: "18px",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        fill: "none",
        stroke: "rgba(0, 0, 0, 0.6)"
    }, [w("path", {
        d: "M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"
    })])], -1)),
    Gp = {
        class: "vue-simple-message-frame-presentation"
    },
    Pp = ["onClick"],
    zp = [ls(() => w("svg", null, [w("use", {
        "xlink:href": "#simpleMessageCloseIcon"
    })], -1))],
    Up = {
        class: "vue-simple-message-frame-content"
    },
    Bp = ve({
        name: "SimpleMessage"
    }),
    Rp = ve({
        ...Bp,
        props: {
            list: {}
        },
        emits: ["update:list", "close"],
        setup(e, {
            emit: t
        }) {
            const o = e,
                n = t;
            return (r, i) => (Z(), ee(he, null, [Op, w("div", Gp, [X(El, {
                tag: "div",
                name: "vue-simple-message-frame-notification"
            }, {
                default: Ne(() => [(Z(!0), ee(he, null, Ce(r.list, ({
                    id: a,
                    type: s,
                    content: l
                }) => (Z(), ee("div", {
                    key: a,
                    class: We(["vue-simple-message-frame-notification", "vue-simple-message-frame-notification-" + s])
                }, [w("i", {
                    class: "vue-simple-message-frame-close-btn",
                    title: "Close",
                    onClick: ie(u => function(c) {
                        n("update:list", o.list.filter(p => p.id !== c)), n("close", c)
                    }(a), ["stop"])
                }, zp, 8, Pp), w("div", Up, F(l), 1)], 2))), 128))]),
                _: 1
            })])], 64))
        }
    }),
    Wp = ((e, t) => {
        const o = e.__vccOpts || e;
        for (const [n, r] of t) o[n] = r;
        return o
    })(Rp, [
        ["__scopeId", "data-v-2ae4fe17"]
    ]),
    Hp = ve({
        __name: "NoteObjMessageFrame",
        setup(e) {
            const t = as();

            function o(n) {
                t.removeNotifaction(n)
            }
            return (n, r) => (Z(), _e(S(Wp), {
                list: S(t).notifications,
                onClose: o
            }, null, 8, ["list"]))
        }
    }),
    Fp = ve({
        __name: "App",
        setup(e) {
            const t = Ge(),
                o = br(),
                n = De(() => t.config.interface.mode === "dark" ? "note-obj-interface-dark" : "note-obj-interface-bright");

            function r() {
                t.showFrame("search", !0, !o.isShow)
            }
            return ur(() => {
                document.onkeydown = i => {
                    t.config.searchBox.enableShortcutKeys && (i.ctrlKey || i.metaKey) && i.shiftKey && i.key === "F" && r()
                }
            }), (i, a) => (Z(), ee("div", {
                class: We(n.value)
            }, [X(lc, {
                "is-insert": S(t).config.interface.insertSearchButton,
                title: S(t).lang.searchTagTitle,
                "button-class": "note-obj-search-expand-span " + S(t).searchBtnClassName,
                "box-class": "note-obj-search-expand-box " + S(t).searchBtnBoxClassName,
                onClick: r
            }, null, 8, ["is-insert", "title", "button-class", "box-class"]), X(xc), X(Cc), X(uu), X(Vu), X(Uu), X(qu), X(ad), X(rp), X(Lp), X(Hp)], 2))
        }
    });
class Zp {
    constructor(t = "info") {
        this.logLevel = t
    }
    queryLog(t, o, n, r) {
        let i = "";
        switch (i = r ? `fn: Unable to find ${t} in document. Selector: (${o})` : `fn: Unable to find ${t}. Selector: (${o})`, n) {
            case "error":
                console.error(i);
                break;
            case "warn":
                this.logLevel !== "error" && console.warn(i);
                break;
            case "info":
                this.logLevel !== "info" && this.logLevel !== "debug" || console.info(i);
                break;
            case "debug":
                this.logLevel === "debug" && console.debug(i)
        }
    }
    query(t, o, n = "error") {
        if (typeof t == "string") {
            const r = document.querySelector(t);
            return r instanceof HTMLElement ? r : (this.queryLog("HTMLElement", t, o || "error", !0), null)
        } {
            const r = t.querySelector(o);
            return r instanceof HTMLElement ? r : (this.queryLog("HTMLElement", o, n), null)
        }
    }
    queryAll(t, o, n = "error") {
        if (typeof t == "string") {
            const r = document.querySelectorAll(t);
            return r.length === 0 && this.queryLog("NodeListOf<HTMLElement>", t, o || "error", !0), r
        } {
            const r = t.querySelectorAll(o);
            return r.length === 0 && this.queryLog("NodeListOf<HTMLElement>", o, n), r
        }
    }
    queryAnchor(t, o, n = "error") {
        if (typeof t == "string") {
            const r = document.querySelector(t);
            if (r instanceof HTMLAnchorElement) return r;
            this.queryLog("HTMLAnchorElement", t, o || "error", !0)
        } else {
            const r = t.querySelector(o);
            if (r instanceof HTMLAnchorElement) return r;
            this.queryLog("HTMLAnchorElement", o, n)
        }
        return null
    }
    queryAllAnchor(t, o, n = "error") {
        if (typeof t == "string") {
            const r = document.querySelectorAll(t);
            return r.length === 0 && this.queryLog("NodeListOf<HTMLAnchorElement>", t, o || "error", !0), r
        } {
            const r = t.querySelectorAll(o);
            return r.length === 0 && this.queryLog("NodeListOf<HTMLAnchorElement>", o, n), r
        }
    }
    getText(t, o, n, r) {
        var i, a;
        if (typeof t == "string") {
            const s = this.query(t, o);
            if (s) {
                const l = ((i = s.textContent) == null ? void 0 : i.trim()) || "";
                return typeof n == "function" ? n(l) : l
            }
        } else {
            const s = this.query(t, o, n);
            if (s) {
                const l = ((a = s.textContent) == null ? void 0 : a.trim()) || "";
                return typeof r == "function" ? r(l) : l
            }
        }
        return ""
    }
    getUrlId(t, o, n, r) {
        if (typeof t == "string") {
            const i = this.queryAnchor(t, o);
            if (i) return this.getIdFromUrl(i.href, n)
        } else {
            const i = this.queryAnchor(t, o, n);
            if (i) return this.getIdFromUrl(i.href, r)
        }
        return ""
    }
    getIdFromUrl(t, o) {
        let n = t.replace(location.origin + "/", "").replace(/\/$/, "");
        return typeof o == "function" && (n = o(n)), n
    }
}(function(e, t, o) {
    if (e.MutationObserver && typeof HTMLElement < "u") {
        var n, r = 0,
            i = (n = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector, {
                matchesSelector: function(h, x) {
                    return h instanceof HTMLElement && n.call(h, x)
                },
                addMethod: function(h, x, k) {
                    var f = h[x];
                    h[x] = function() {
                        return k.length == arguments.length ? k.apply(this, arguments) : typeof f == "function" ? f.apply(this, arguments) : void 0
                    }
                },
                callCallbacks: function(h, x) {
                    x && x.options.onceOnly && x.firedElems.length == 1 && (h = [h[0]]);
                    for (var k, f = 0; k = h[f]; f++) k && k.callback && k.callback.call(k.elem, k.elem);
                    x && x.options.onceOnly && x.firedElems.length == 1 && x.me.unbindEventWithSelectorAndCallback.call(x.target, x.selector, x.callback)
                },
                checkChildNodesRecursively: function(h, x, k, f) {
                    for (var m, T = 0; m = h[T]; T++) k(m, x, f) && f.push({
                        callback: x.callback,
                        elem: m
                    }), m.childNodes.length > 0 && i.checkChildNodesRecursively(m.childNodes, x, k, f)
                },
                mergeArrays: function(h, x) {
                    var k, f = {};
                    for (k in h) h.hasOwnProperty(k) && (f[k] = h[k]);
                    for (k in x) x.hasOwnProperty(k) && (f[k] = x[k]);
                    return f
                },
                toElementsArray: function(h) {
                    return h === void 0 || typeof h.length == "number" && h !== e || (h = [h]), h
                }
            }),
            a = function() {
                var h = function() {
                    this._eventsBucket = [], this._beforeAdding = null, this._beforeRemoving = null
                };
                return h.prototype.addEvent = function(x, k, f, m) {
                    var T = {
                        target: x,
                        selector: k,
                        options: f,
                        callback: m,
                        firedElems: []
                    };
                    return this._beforeAdding && this._beforeAdding(T), this._eventsBucket.push(T), T
                }, h.prototype.removeEvent = function(x) {
                    for (var k, f = this._eventsBucket.length - 1; k = this._eventsBucket[f]; f--)
                        if (x(k)) {
                            this._beforeRemoving && this._beforeRemoving(k);
                            var m = this._eventsBucket.splice(f, 1);
                            m && m.length && (m[0].callback = null)
                        }
                }, h.prototype.beforeAdding = function(x) {
                    this._beforeAdding = x
                }, h.prototype.beforeRemoving = function(x) {
                    this._beforeRemoving = x
                }, h
            }(),
            s = function(h, x) {
                var k = new a,
                    f = this,
                    m = {
                        fireOnAttributesModification: !1
                    };
                return k.beforeAdding(function(T) {
                    var g, d = T.target;
                    d !== e.document && d !== e || (d = document.getElementsByTagName("html")[0]), g = new MutationObserver(function(j) {
                        x.call(this, j, T)
                    });
                    var y = h(T.options);
                    g.observe(d, y), T.observer = g, T.me = f
                }), k.beforeRemoving(function(T) {
                    T.observer.disconnect()
                }), this.bindEvent = function(T, g, d) {
                    g = i.mergeArrays(m, g);
                    for (var y = i.toElementsArray(this), j = 0; j < y.length; j++) k.addEvent(y[j], T, g, d)
                }, this.unbindEvent = function() {
                    var T = i.toElementsArray(this);
                    k.removeEvent(function(g) {
                        for (var d = 0; d < T.length; d++)
                            if (this === o || g.target === T[d]) return !0;
                        return !1
                    })
                }, this.unbindEventWithSelectorOrCallback = function(T) {
                    var g, d = i.toElementsArray(this),
                        y = T;
                    g = typeof T == "function" ? function(j) {
                        for (var N = 0; N < d.length; N++)
                            if ((this === o || j.target === d[N]) && j.callback === y) return !0;
                        return !1
                    } : function(j) {
                        for (var N = 0; N < d.length; N++)
                            if ((this === o || j.target === d[N]) && j.selector === T) return !0;
                        return !1
                    }, k.removeEvent(g)
                }, this.unbindEventWithSelectorAndCallback = function(T, g) {
                    var d = i.toElementsArray(this);
                    k.removeEvent(function(y) {
                        for (var j = 0; j < d.length; j++)
                            if ((this === o || y.target === d[j]) && y.selector === T && y.callback === g) return !0;
                        return !1
                    })
                }, this
            },
            l = new function() {
                var h = {
                    fireOnAttributesModification: !1,
                    onceOnly: !1,
                    existing: !1
                };

                function x(f, m, T) {
                    return !(!i.matchesSelector(f, m.selector) || (f._id === o && (f._id = r++), m.firedElems.indexOf(f._id) != -1)) && (m.firedElems.push(f._id), !0)
                }
                var k = (l = new s(function(f) {
                    var m = {
                        attributes: !1,
                        childList: !0,
                        subtree: !0
                    };
                    return f.fireOnAttributesModification && (m.attributes = !0), m
                }, function(f, m) {
                    f.forEach(function(T) {
                        var g = T.addedNodes,
                            d = T.target,
                            y = [];
                        g !== null && g.length > 0 ? i.checkChildNodesRecursively(g, m, x, y) : T.type === "attributes" && x(d, m) && y.push({
                            callback: m.callback,
                            elem: d
                        }), i.callCallbacks(y, m)
                    })
                })).bindEvent;
                return l.bindEvent = function(f, m, T) {
                    T === void 0 ? (T = m, m = h) : m = i.mergeArrays(h, m);
                    var g = i.toElementsArray(this);
                    if (m.existing) {
                        for (var d = [], y = 0; y < g.length; y++)
                            for (var j = g[y].querySelectorAll(f), N = 0; N < j.length; N++) d.push({
                                callback: T,
                                elem: j[N]
                            });
                        if (m.onceOnly && d.length) return T.call(d[0].elem, d[0].elem);
                        setTimeout(i.callCallbacks, 1, d)
                    }
                    k.call(this, f, m, T)
                }, l
            },
            u = new function() {
                var h = {};

                function x(f, m) {
                    return i.matchesSelector(f, m.selector)
                }
                var k = (u = new s(function() {
                    return {
                        childList: !0,
                        subtree: !0
                    }
                }, function(f, m) {
                    f.forEach(function(T) {
                        var g = T.removedNodes,
                            d = [];
                        g !== null && g.length > 0 && i.checkChildNodesRecursively(g, m, x, d), i.callCallbacks(d, m)
                    })
                })).bindEvent;
                return u.bindEvent = function(f, m, T) {
                    T === void 0 ? (T = m, m = h) : m = i.mergeArrays(h, m), k.call(this, f, m, T)
                }, u
            };
        t && b(t.fn), b(HTMLElement.prototype), b(NodeList.prototype), b(HTMLCollection.prototype), b(HTMLDocument.prototype), b(Window.prototype);
        var c = {};
        return p(l, c, "unbindAllArrive"), p(u, c, "unbindAllLeave"), c
    }

    function p(h, x, k) {
        i.addMethod(x, k, h.unbindEvent), i.addMethod(x, k, h.unbindEventWithSelectorOrCallback), i.addMethod(x, k, h.unbindEventWithSelectorAndCallback)
    }

    function b(h) {
        h.arrive = l.bindEvent, p(l, h, "unbindArrive"), h.leave = u.bindEvent, p(u, h, "unbindLeave")
    }
})(window, typeof jQuery > "u" ? null : jQuery, void 0);
const It = class It {
    constructor(t) {
        ct(this, "version", os);
        ct(this, "updated", ns);
        ct(this, "fn");
        ct(this, "store");
        const {
            id: o,
            style: n,
            searchBtnClassName: r = "",
            searchBtnBoxClassName: i = "",
            itemClick: a,
            changeEvent: s,
            script: {
                library: l,
                icons: u,
                author: c,
                url: p,
                version: b,
                updated: h
            },
            settings: x,
            primaryColor: k,
            secondaryColor: f,
            language: m,
            logLevel: T = "warn"
        } = t;
        this.fn = new Zp(T);
        const g = It.insertDom(o),
            d = Wl(Fp),
            y = function() {
                const j = Wi(!0),
                    N = j.run(() => ye({}));
                let D = [],
                    C = [];
                const M = ir({
                    install(W) {
                        gn(M), M._a = W, W.provide($a, M), W.config.globalProperties.$pinia = M, C.forEach(E => D.push(E)), C = []
                    },
                    use(W) {
                        return this._a ? D.push(W) : C.push(W), this
                    },
                    _p: D,
                    _a: null,
                    _e: j,
                    _s: new Map,
                    state: N
                });
                return M
            }();
        d.use(y), this.store = Ge(), this.store.id = o, this.store.init(m), fe.addStyle(':root{--note-icon-settings-blue: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9InNldHRpbmdzSWNvblRpdGxlIiBzdHJva2U9IiMzMzY2OTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9IiMzMzY2OTkiPiA8dGl0bGUgaWQ9InNldHRpbmdzSWNvblRpdGxlIj5TZXR0aW5nczwvdGl0bGU+IDxwYXRoIGQ9Ik01LjAzNTA2NDI5LDEyLjcwNTAzMzkgQzUuMDExODc0ODQsMTIuNDczMTY5NiA1LDEyLjIzNzk3MTYgNSwxMiBDNSwxMS43NjIwMjg0IDUuMDExODc0ODQsMTEuNTI2ODMwNCA1LjAzNTA2NDI5LDExLjI5NDk2NjEgTDMuMjA1NzcxMzcsOS4yMzIwNTA4MSBMNS4yMDU3NzEzNyw1Ljc2Nzk0OTE5IEw3LjkwNjk3MTMsNi4zMjA3MDkwNCBDOC4yODcyOTEyMyw2LjA0NjEzNDIgOC42OTYyOTI5OCw1LjgwODgyMjEyIDkuMTI4NjI1MzMsNS42MTQxMjQwMiBMMTAsMyBMMTQsMyBMMTQuODcxMzc0Nyw1LjYxNDEyNDAyIEMxNS4zMDM3MDcsNS44MDg4MjIxMiAxNS43MTI3MDg4LDYuMDQ2MTM0MiAxNi4wOTMwMjg3LDYuMzIwNzA5MDQgTDE4Ljc5NDIyODYsNS43Njc5NDkxOSBMMjAuNzk0MjI4Niw5LjIzMjA1MDgxIEwxOC45NjQ5MzU3LDExLjI5NDk2NjEgQzE4Ljk4ODEyNTIsMTEuNTI2ODMwNCAxOSwxMS43NjIwMjg0IDE5LDEyIEMxOSwxMi4yMzc5NzE2IDE4Ljk4ODEyNTIsMTIuNDczMTY5NiAxOC45NjQ5MzU3LDEyLjcwNTAzMzkgTDIwLjc5NDIyODYsMTQuNzY3OTQ5MiBMMTguNzk0MjI4NiwxOC4yMzIwNTA4IEwxNi4wOTMwMjg3LDE3LjY3OTI5MSBDMTUuNzEyNzA4OCwxNy45NTM4NjU4IDE1LjMwMzcwNywxOC4xOTExNzc5IDE0Ljg3MTM3NDcsMTguMzg1ODc2IEwxNCwyMSBMMTAsMjEgTDkuMTI4NjI1MzMsMTguMzg1ODc2IEM4LjY5NjI5Mjk4LDE4LjE5MTE3NzkgOC4yODcyOTEyMywxNy45NTM4NjU4IDcuOTA2OTcxMywxNy42NzkyOTEgTDUuMjA1NzcxMzcsMTguMjMyMDUwOCBMMy4yMDU3NzEzNywxNC43Njc5NDkyIEw1LjAzNTA2NDI5LDEyLjcwNTAzMzkgWiIvPiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIi8+IDwvc3ZnPg==);--note-icon-table-blue: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1sYWJlbGxlZGJ5PSJ0YWJsZUhvcml6b250YWxJY29uVGl0bGUiIHN0cm9rZT0iIzAwMzM2NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWxsPSJub25lIiBjb2xvcj0iIzAwMzM2NiI+IDx0aXRsZSBpZD0idGFibGVIb3Jpem9udGFsSWNvblRpdGxlIj5EYXRhIHRhYmxlPC90aXRsZT4gPHBhdGggZD0iTTIyIDRWMTlIMkwyIDRMMjIgNFoiLz4gPGxpbmUgeDE9IjIyIiB5MT0iOSIgeDI9IjIiIHkyPSI5Ii8+IDxsaW5lIHgxPSIyMiIgeTE9IjE0IiB4Mj0iMiIgeTI9IjE0Ii8+IDxwYXRoIGQ9Ik0xMiAxOUwxMiA0Ii8+IDwvc3ZnPg==);--note-icon-board-gray: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImRhc2hib2FyZEljb25UaXRsZSIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjMzMzMzMzIj4gPHRpdGxlIGlkPSJkYXNoYm9hcmRJY29uVGl0bGUiPkRhc2hib2FyZDwvdGl0bGU+IDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMiIgeT0iMiIvPiA8cGF0aCBkPSJNMTEgN0wxNyA3TTExIDEyTDE3IDEyTTExIDE3TDE3IDE3Ii8+IDxsaW5lIHgxPSI3IiB5MT0iNyIgeDI9IjciIHkyPSI3Ii8+IDxsaW5lIHgxPSI3IiB5MT0iMTIiIHgyPSI3IiB5Mj0iMTIiLz4gPGxpbmUgeDE9IjciIHkxPSIxNyIgeDI9IjciIHkyPSIxNyIvPiA8L3N2Zz4=);--note-icon-search-blue: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9InNlYXJjaEljb25UaXRsZSIgc3Ryb2tlPSJyZ2JhKDI5LDE2MSwyNDIsMS4wMCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9InJnYmEoMjksMTYxLDI0MiwxLjAwKSI+IDx0aXRsZSBpZD0ic2VhcmNoSWNvblRpdGxlIj5TZWFyY2g8L3RpdGxlPiA8cGF0aCBkPSJNMTQuNDEyMTEyMiwxNC40MTIxMTIyIEwyMCwyMCIvPiA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI2Ii8+IDwvc3ZnPg==);--note-icon-close-gray: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNsb3NlSWNvblRpdGxlIiBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIiBjb2xvcj0iIzY2NiI+IDx0aXRsZSBpZD0iY2xvc2VJY29uVGl0bGUiPkNsb3NlPC90aXRsZT4gPHBhdGggZD0iTTYuMzQzMTQ1NzUgNi4zNDMxNDU3NUwxNy42NTY4NTQyIDE3LjY1Njg1NDJNNi4zNDMxNDU3NSAxNy42NTY4NTQyTDE3LjY1Njg1NDIgNi4zNDMxNDU3NSIvPiA8L3N2Zz4=);--note-icon-edit-yellow: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImVkaXRJY29uVGl0bGUiIHN0cm9rZT0iI0ZGRkZDQyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWxsPSJub25lIiBjb2xvcj0iI0ZGRkZDQyI+IDx0aXRsZSBpZD0iZWRpdEljb25UaXRsZSI+RWRpdDwvdGl0bGU+IDxwYXRoIGQ9Ik0xOC40MTQyMTM2IDQuNDE0MjEzNTZMMTkuNTg1Nzg2NCA1LjU4NTc4NjQ0QzIwLjM2NjgzNSA2LjM2NjgzNTAyIDIwLjM2NjgzNSA3LjYzMzE2NDk4IDE5LjU4NTc4NjQgOC40MTQyMTM1Nkw4IDIwIDQgMjAgNCAxNiAxNS41ODU3ODY0IDQuNDE0MjEzNTZDMTYuMzY2ODM1IDMuNjMzMTY0OTggMTcuNjMzMTY1IDMuNjMzMTY0OTggMTguNDE0MjEzNiA0LjQxNDIxMzU2ek0xNCA2TDE4IDEwIi8+IDwvc3ZnPg==);--note-icon-edit-blue: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImVkaXRJY29uVGl0bGUiIHN0cm9rZT0iIzIzMjlENiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWxsPSJub25lIiBjb2xvcj0iIzIzMjlENiI+IDx0aXRsZSBpZD0iZWRpdEljb25UaXRsZSI+RWRpdDwvdGl0bGU+IDxwYXRoIGQ9Ik0xOC40MTQyMTM2IDQuNDE0MjEzNTZMMTkuNTg1Nzg2NCA1LjU4NTc4NjQ0QzIwLjM2NjgzNSA2LjM2NjgzNTAyIDIwLjM2NjgzNSA3LjYzMzE2NDk4IDE5LjU4NTc4NjQgOC40MTQyMTM1Nkw4IDIwIDQgMjAgNCAxNiAxNS41ODU3ODY0IDQuNDE0MjEzNTZDMTYuMzY2ODM1IDMuNjMzMTY0OTggMTcuNjMzMTY1IDMuNjMzMTY0OTggMTguNDE0MjEzNiA0LjQxNDIxMzU2ek0xNCA2TDE4IDEwIi8+IDwvc3ZnPg==);--note-icon-delete-yellow: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImJpbkljb25UaXRsZSIgc3Ryb2tlPSIjRkZGRkNDIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjRkZGRkNDIj4gPHRpdGxlIGlkPSJiaW5JY29uVGl0bGUiPkJpbjwvdGl0bGU+IDxwYXRoIGQ9Ik0xOSA2TDUgNk0xNCA1TDEwIDVNNiAxMEw2IDIwQzYgMjAuNjY2NjY2NyA2LjMzMzMzMzMzIDIxIDcgMjEgNy42NjY2NjY2NyAyMSAxMSAyMSAxNyAyMSAxNy42NjY2NjY3IDIxIDE4IDIwLjY2NjY2NjcgMTggMjAgMTggMTkuMzMzMzMzMyAxOCAxNiAxOCAxMCIvPiA8L3N2Zz4=);--note-icon-delete-blue: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImJpbkljb25UaXRsZSIgc3Ryb2tlPSIjMjMyOUQ2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjMjMyOUQ2Ij4gPHRpdGxlIGlkPSJiaW5JY29uVGl0bGUiPkJpbjwvdGl0bGU+IDxwYXRoIGQ9Ik0xOSA2TDUgNk0xNCA1TDEwIDVNNiAxMEw2IDIwQzYgMjAuNjY2NjY2NyA2LjMzMzMzMzMzIDIxIDcgMjEgNy42NjY2NjY2NyAyMSAxMSAyMSAxNyAyMSAxNy42NjY2NjY3IDIxIDE4IDIwLjY2NjY2NjcgMTggMjAgMTggMTkuMzMzMzMzMyAxOCAxNiAxOCAxMCIvPiA8L3N2Zz4=);--note-icon-ok-yellow: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNpcmNsZU9rSWNvblRpdGxlIiBzdHJva2U9IiNGRkZGQ0MiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9IiNGRkZGQ0MiPiA8dGl0bGUgaWQ9ImNpcmNsZU9rSWNvblRpdGxlIj5PSzwvdGl0bGU+IDxwb2x5bGluZSBwb2ludHM9IjcgMTMgMTAgMTYgMTcgOSIvPiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPiA8L3N2Zz4=);--note-icon-ok-blue: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNpcmNsZU9rSWNvblRpdGxlIiBzdHJva2U9IiMyMzI5RDYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9IiMyMzI5RDYiPiA8dGl0bGUgaWQ9ImNpcmNsZU9rSWNvblRpdGxlIj5PSzwvdGl0bGU+IDxwb2x5bGluZSBwb2ludHM9IjcgMTMgMTAgMTYgMTcgOSIvPiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPiA8L3N2Zz4=);--note-icon-chevron-right-white: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNoZXZyb25SaWdodEljb25UaXRsZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjZmZmIj4gPHRpdGxlIGlkPSJjaGV2cm9uUmlnaHRJY29uVGl0bGUiPkNoZXZyb24gUmlnaHQ8L3RpdGxlPiA8cG9seWxpbmUgcG9pbnRzPSIxMCA2IDE2IDEyIDEwIDE4IDEwIDE4Ii8+IDwvc3ZnPg==);--note-icon-chevron-right-black: url(data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImNoZXZyb25SaWdodEljb25UaXRsZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZpbGw9Im5vbmUiIGNvbG9yPSIjMDAwIj4gPHRpdGxlIGlkPSJjaGV2cm9uUmlnaHRJY29uVGl0bGUiPkNoZXZyb24gUmlnaHQ8L3RpdGxlPiA8cG9seWxpbmUgcG9pbnRzPSIxMCA2IDE2IDEyIDEwIDE4IDEwIDE4Ii8+IDwvc3ZnPg==)}.note-obj-vue-module{position:absolute;left:0;top:0}.note-obj-popver-frame-dialog{position:absolute;max-width:300px;min-width:200px;top:0;left:0;display:block;background-clip:padding-box;border:1px solid rgba(0,0,0,.1);border-radius:6px;box-shadow:-5px 5px 10px #0003;white-space:nowrap;text-overflow:ellipsis;padding:1px;z-index:9999}.note-obj-interface-dark .note-obj-popver-frame-dialog{background-color:#38526d;color:#fff}.note-obj-interface-bright .note-obj-popver-frame-dialog{background-color:#fff;color:#000}.note-obj-popover-frame-header{text-align:center;padding:5px 10px;font-weight:700;border-radius:5px 5px 0 0;margin:0}.note-obj-interface-dark .note-obj-popover-frame-header{background-color:#0003;border-bottom:1px solid rgba(0,0,0,.5)}.note-obj-interface-bright .note-obj-popover-frame-header{background-color:#efefef;border-bottom:1px solid #dbdbdb}.note-obj-popover-frame-content{padding:0 1px;max-height:405px;overflow:auto;text-align:left}.note-obj-popover-frame-item,.note-obj-popover-frame-item-deepen{height:25px;cursor:pointer;padding:2px 5px;font-size:14px;line-height:150%;margin:0;display:block;text-decoration:none}.note-obj-interface-dark .note-obj-popover-frame-item{background-color:#0003;color:#549be2}.note-obj-interface-bright .note-obj-popover-frame-item{background-color:#fafafa;color:#369}.note-obj-interface-dark .note-obj-popover-frame-item-deepen{background-color:#0000004d;color:#549be2}.note-obj-interface-bright .note-obj-popover-frame-item-deepen{background-color:#f3f3f3;color:#369}.note-obj-popover-frame-arrow{border-color:transparent;border-left-width:0px;border-right-color:#00000040;left:-20px;border-width:10px;position:absolute;display:block;width:0px;height:0px;border-style:solid;box-sizing:border-box;top:30px}.note-obj-popover-frame-arrow:after{content:"";left:1px;border-width:9px;border-color:transparent;border-left-width:0px;margin-top:-9px;display:block;width:0px;height:0px;border-style:solid;position:absolute;box-sizing:border-box}.note-obj-interface-dark .note-obj-popover-frame-arrow:after{border-right-color:#38526d}.note-obj-interface-bright .note-obj-popover-frame-arrow:after{border-right-color:#fff}.note-obj-search-expand-box{bottom:0;right:0;height:80px;width:100px;position:fixed;display:block;z-index:99998}.note-obj-search-expand-span{border-radius:99px;color:#fff;cursor:pointer;display:block;font-size:13px;height:38px;width:38px;line-height:100%;margin:5px 0;opacity:.8;text-align:center;z-index:99999;-webkit-user-select:none;user-select:none;background-repeat:no-repeat;background-size:24px auto;background-position:center}.note-obj-search-expand-span:hover{box-shadow:0 0 5px 1px green}.note-obj-search-expand-span{position:absolute;bottom:15px;right:-30px;border:1px solid #00a1d6;background-image:var(--note-icon-search-blue);transition:all .5s}.note-obj-search-expand-box:hover .note-obj-search-expand-span{right:25px;opacity:1}.note-obj-search-frame-presentation{display:flex;position:fixed;background-color:#00000080;top:0;bottom:0;left:0;right:0;z-index:100000;align-items:center;justify-content:center}.note-obj-search-frame-dialog{position:relative;bottom:25%}.note-obj-search-frame-input{width:350px;height:40px;border-radius:40px;padding:0 20px;position:relative;outline:none;box-sizing:content-box}.note-obj-interface-dark .note-obj-search-frame-input{background-color:#253341;color:#fff;border:2px solid #000}.note-obj-interface-bright .note-obj-search-frame-input{background-color:#f7f7f7;color:#000;border:2px solid #787878}.note-obj-search-frame-close-btn{position:absolute;right:2px;top:10px;z-index:100000;background-image:var(--note-icon-close-gray);background-repeat:no-repeat;background-size:24px auto;background-position:center;height:24px;width:24px;display:block;cursor:pointer}.note-obj-search-frame-index-trapezoid{display:block;position:absolute;z-index:100000;left:20px;top:-25px;height:0px;width:350px;background:transparent;border-top:0px solid transparent;border-left:25px solid transparent;border-right:25px solid transparent;padding:0;margin:0;text-align:center;box-sizing:border-box}.note-obj-interface-dark .note-obj-search-frame-index-trapezoid{border-bottom:25px solid rgb(37,51,65)}.note-obj-interface-bright .note-obj-search-frame-index-trapezoid{border-bottom:25px solid #f7f7f7}.note-obj-search-frame-index-value{height:25px;line-height:25px}.note-obj-interface-dark .note-obj-search-frame-index-value{color:#fff}.note-obj-interface-bright .note-obj-search-frame-index-value{color:#000}.note-obj-search-frame-tags-list{top:44px;left:20px;width:350px;max-height:250px;overflow-y:scroll;text-align:left;display:block;margin:0;padding:0;position:absolute;z-index:100000;border:1px solid rgba(29,161,242,.1);list-style:none}.note-obj-interface-dark .note-obj-search-frame-tags-list{background-color:#253341}.note-obj-interface-bright .note-obj-search-frame-tags-list{background-color:#f7f7f7}.note-obj-search-frame-tags-list li,.note-obj-search-frame-tags-list a,.note-obj-search-frame-tags-list a:visited{cursor:pointer;padding-left:5px;height:25px;line-height:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;text-decoration:none}.note-obj-search-frame-tags-item-text{display:inline-block;cursor:pointer;height:25px;line-height:25px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;-webkit-user-select:none;user-select:none}.note-obj-interface-dark .note-obj-search-frame-tags-item-text{color:#fff}.note-obj-interface-bright .note-obj-search-frame-tags-item-text{color:#000}.note-obj-search-frame-tags-list-item-highlight{background-color:#69c}.note-obj-add-frame-presentation{display:flex;position:fixed;background-color:#00000080;top:0;bottom:0;left:0;right:0;z-index:100001;align-items:center;justify-content:center}.note-obj-add-frame-dialog{position:relative;width:400px;border-radius:12px;display:flex;flex-direction:column;border:0px solid #000;box-shadow:0 1px 10px #000c}.note-obj-interface-dark .note-obj-add-frame-dialog{background-color:#15202b}.note-obj-interface-bright .note-obj-add-frame-dialog{background-color:#fff}.note-obj-add-frame-user-info{min-height:48px;text-align:center;color:#1da1f2;font-weight:700;background-color:#0000;border-top-left-radius:12px;border-top-right-radius:12px;white-space:normal;cursor:text;-webkit-user-select:text;user-select:text;line-height:24px;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis}.note-obj-interface-dark .note-obj-add-frame-user-info{border:1px solid rgba(0,0,0,.5)}.note-obj-interface-bright .note-obj-add-frame-user-info{border:1px solid #efefef}.note-obj-add-frame-user-id,.note-obj-add-frame-user-name{margin:5px;display:block}.note-obj-add-frame-input{min-height:32px;margin:5px;border:1px solid rgba(29,161,242,.1);padding-left:5px}.note-obj-interface-dark .note-obj-add-frame-input{background-color:#253341;color:#fff}.note-obj-interface-bright .note-obj-add-frame-input{background-color:#e8e8e8;color:#000}.note-obj-add-frame-dialog button{min-height:48px;cursor:pointer;background-color:#0000}.note-obj-interface-dark .note-obj-add-frame-dialog button{color:#fff;border:1px solid rgba(0,0,0,.5)}.note-obj-interface-bright .note-obj-add-frame-dialog button{color:#000;border:1px solid #efefef}.note-obj-add-frame-dialog button:hover{color:#1da1f2}.note-obj-add-frame-button-bottom{border-bottom-left-radius:12px;border-bottom-right-radius:12px}.note-obj-management-frame-presentation,.note-obj-group-frame-presentation,.note-obj-webdav-frame-presentation{display:flex;position:fixed;background-color:#00000080;top:0;bottom:0;left:0;right:0;align-items:center;justify-content:center}.note-obj-management-frame-presentation{z-index:100002}.note-obj-group-frame-presentation{z-index:100003}.note-obj-webdav-frame-presentation{z-index:100007}.note-obj-management-frame-dialog,.note-obj-group-frame-dialog,.note-obj-webdav-frame-dialog{position:relative;min-height:580px;max-height:600px;border-radius:12px;display:flex;flex-direction:column;box-shadow:0 1px 10px #000c}.note-obj-management-frame-dialog{width:800px}.note-obj-group-frame-dialog{width:750px}.note-obj-webdav-frame-dialog{min-height:480px;width:500px}.note-obj-interface-dark .note-obj-management-frame-dialog,.note-obj-interface-dark .note-obj-group-frame-dialog,.note-obj-interface-dark .note-obj-webdav-frame-dialog{background-color:#15202b;border:1px solid #000;color:#fff}.note-obj-interface-bright .note-obj-management-frame-dialog,.note-obj-interface-bright .note-obj-group-frame-dialog,.note-obj-interface-bright .note-obj-webdav-frame-dialog{background-color:#f5f5f5;border:1px solid #e8e8e8;color:#000}.note-obj-management-frame-header,.note-obj-group-frame-header,.note-obj-webdav-frame-header{margin:20px 15px}.note-obj-webdav-frame-title{text-align:center;font-size:1.2em;font-weight:700}.note-obj-management-frame-header input[type=text],.note-obj-group-frame-header input[type=text]{width:25%;padding-left:5px;margin:0 5px}.note-obj-management-frame-header select,.note-obj-group-frame-header select{cursor:pointer}.note-obj-management-frame-header select+label{margin-left:5px}.note-obj-management-frame-show-number,.note-obj-group-frame-show-number{margin:0 5px;float:right}.note-obj-management-frame-content,.note-obj-group-frame-content{margin:0 10px;min-height:420px}.note-obj-webdav-frame-content{margin:0 10px;min-height:300px}.note-obj-management-frame-content table,.note-obj-group-frame-content table{border:1px solid #ccc;text-align:center;table-layout:fixed;border-collapse:collapse}.note-obj-management-frame-content table{width:760px}.note-obj-group-frame-content table{width:710px}.note-obj-management-frame-content table tr td,.note-obj-management-frame-content table tr th,.note-obj-group-frame-content table tr td,.note-obj-group-frame-content table tr th{border:1px solid #ccc;height:25px;line-height:25px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0;margin:0;text-align:center}.note-obj-management-frame-content table tr th,.note-obj-group-frame-content table tr th{font-weight:700}.note-obj-management-frame-content table tr th:nth-of-type(1),.note-obj-management-frame-content table tr td:nth-of-type(1){width:5%}.note-obj-management-frame-content table tr th:nth-of-type(2),.note-obj-management-frame-content table tr td:nth-of-type(2){width:15%}.note-obj-management-frame-content table tr th:nth-of-type(3),.note-obj-management-frame-content table tr td:nth-of-type(3){width:20%}.note-obj-management-frame-content table tr th:nth-of-type(4),.note-obj-management-frame-content table tr td:nth-of-type(4){width:26}.note-obj-management-frame-content table tr th:nth-of-type(5),.note-obj-management-frame-content table tr td:nth-of-type(5){width:20%}.note-obj-management-frame-content table tr th:nth-of-type(6),.note-obj-management-frame-content table tr td:nth-of-type(6){width:7%}.note-obj-management-frame-content table tr th:nth-of-type(7),.note-obj-management-frame-content table tr td:nth-of-type(7){width:7%}.note-obj-group-frame-content table tr th:nth-of-type(1),.note-obj-group-frame-content table tr td:nth-of-type(1){width:5%}.note-obj-group-frame-content table tr th:nth-of-type(2),.note-obj-group-frame-content table tr td:nth-of-type(2){width:31%}.note-obj-group-frame-content table tr th:nth-of-type(3),.note-obj-group-frame-content table tr td:nth-of-type(3){width:20%}.note-obj-group-frame-content table tr th:nth-of-type(4),.note-obj-group-frame-content table tr td:nth-of-type(4){width:20%}.note-obj-group-frame-content table tr th:nth-of-type(5),.note-obj-group-frame-content table tr td:nth-of-type(5){width:10%}.note-obj-group-frame-content table tr th:nth-of-type(6),.note-obj-group-frame-content table tr td:nth-of-type(6){width:7%}.note-obj-group-frame-content table tr th:nth-of-type(7),.note-obj-group-frame-content table tr td:nth-of-type(7){width:7%}.note-obj-management-frame-content th input[type=checkbox],.note-obj-management-frame-content td input[type=checkbox],.note-obj-group-frame-content th input[type=checkbox],.note-obj-group-frame-content td input[type=checkbox],.note-obj-group-frame-content td input[type=color]{cursor:pointer}.note-obj-group-frame-content td input[type=color]{height:20px}.note-obj-group-frame-content td input[type=number]{width:80%;height:80%}.note-obj-webdav-frame-form-item{margin:12px 10px 0}.note-obj-webdav-frame-form-item input{margin-top:5px;width:450px}.note-obj-webdav-frame-form-item select{margin-left:15px;cursor:pointer}.note-obj-management-frame-item-a,.note-obj-management-frame-item-a:visited{color:#4e8ac5;text-decoration:none;cursor:pointer}.note-obj-management-frame-tbody,.note-obj-group-frame-tbody{max-height:391px;overflow:auto}.note-obj-management-frame-group-item{display:block;text-align:center;cursor:pointer;border-radius:0;text-overflow:ellipsis;overflow:hidden;padding:0 5px}.note-obj-management-frame-item-input-tag,.note-obj-group-frame-item-input-value{width:100%;height:100%;border:0px;text-align:center;margin:0;padding:0}.note-obj-interface-dark .note-obj-management-frame-item-input-tag,.note-obj-interface-dark .note-obj-group-frame-item-input-value{background-color:#15202b;color:#fff}.note-obj-interface-bright .note-obj-management-frame-item-input-tag,.note-obj-interface-bright .note-obj-group-frame-item-input-value{background-color:#f5f5f5;color:#000}.note-obj-management-frame-item-input-edit{caret-color:#393}.note-obj-interface-dark .note-obj-management-frame-item-input-edit{color:#ff3}.note-obj-interface-bright .note-obj-management-frame-item-input-edit{color:#e86c07}.note-obj-management-frame-item-btn,.note-obj-group-frame-item-btn{display:inline;height:24px;width:24px;background-repeat:no-repeat;background-size:20px auto;background-position:center;cursor:pointer;padding:0 20px}.note-obj-interface-dark .note-obj-management-frame-item-edit,.note-obj-interface-dark .note-obj-group-frame-item-edit{background-image:var(--note-icon-edit-yellow)}.note-obj-interface-bright .note-obj-management-frame-item-edit,.note-obj-interface-bright .note-obj-group-frame-item-edit{background-image:var(--note-icon-edit-blue)}.note-obj-interface-dark .note-obj-management-frame-item-delete,.note-obj-interface-dark .note-obj-group-frame-item-delete{background-image:var(--note-icon-delete-yellow)}.note-obj-interface-bright .note-obj-management-frame-item-delete,.note-obj-interface-bright .note-obj-group-frame-item-delete{background-image:var(--note-icon-delete-blue)}.note-obj-interface-dark .note-obj-management-frame-item-ok,.note-obj-interface-dark .note-obj-group-frame-item-ok{background-image:var(--note-icon-ok-yellow)!important}.note-obj-interface-bright .note-obj-management-frame-item-ok,.note-obj-interface-bright .note-obj-group-frame-item-ok{background-image:var(--note-icon-ok-blue)!important}.note-obj-management-frame-tool,.note-obj-group-frame-tool{display:inline-block;margin:15px 15px 0}.note-obj-management-frame-tool button,.note-obj-group-frame-tool button{display:inline-block;min-width:50px;max-width:140px;cursor:pointer;margin-right:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#fff;padding:0 5px;color:#000;border-color:#ddd}.note-obj-management-frame-tool button:not([disabled]):hover,.note-obj-group-frame-tool button:not([disabled]):hover{background-color:#bdbdbd}.note-obj-management-frame-tool button[disabled],.note-obj-group-frame-tool button[disabled]{cursor:not-allowed;box-shadow:none;opacity:.65}.note-obj-management-frame-footer,.note-obj-group-frame-footer,.note-obj-webdav-frame-footer{display:inline-block;margin:15px}.note-obj-management-frame-show-modify-text,.note-obj-group-frame-show-modify-text,.note-obj-management-frame-show-wait-text,.note-obj-group-frame-show-wait-text{margin-left:20px}.note-obj-management-frame-cancel-content,.note-obj-group-frame-cancel-content,.note-obj-webdav-frame-cancel-content{border-radius:5px;display:block;text-align:center;cursor:pointer;padding:5px 10px;float:right;-webkit-user-select:none;user-select:none;color:#fff}.note-obj-interface-dark .note-obj-management-frame-cancel-content,.note-obj-interface-dark .note-obj-group-frame-cancel-content,.note-obj-interface-dark .note-obj-webdav-frame-cancel-content{background-color:#333}.note-obj-interface-bright .note-obj-management-frame-cancel-content,.note-obj-interface-bright .note-obj-group-frame-cancel-content,.note-obj-interface-bright .note-obj-webdav-frame-cancel-content{background-color:#5b5b5b}.note-obj-interface-dark .note-obj-management-frame-cancel-content:hover,.note-obj-interface-dark .note-obj-group-frame-cancel-content:hover,.note-obj-interface-dark .note-obj-webdav-frame-cancel-content:hover{background-color:#444}.note-obj-interface-bright .note-obj-management-frame-cancel-content:hover,.note-obj-interface-bright .note-obj-group-frame-cancel-content:hover,.note-obj-interface-bright .note-obj-webdav-frame-cancel-content:hover{background-color:#3b3b3b}.note-obj-management-frame-save-content,.note-obj-group-frame-save-content,.note-obj-webdav-frame-save-content{border-radius:5px;display:block;margin-left:20px;text-align:center;cursor:pointer;background-color:#369;color:#fff;padding:5px 10px;float:right;-webkit-user-select:none;user-select:none}.note-obj-management-frame-save-content[disabled],.note-obj-group-frame-save-content[disabled],.note-obj-webdav-frame-save-content[disabled]{cursor:not-allowed;box-shadow:none;opacity:.65}.note-obj-management-frame-save-content:not([disabled]):hover,.note-obj-group-frame-save-content:not([disabled]):hover,.note-obj-webdav-frame-save-content:not([disabled]):hover{background-color:#47a}.note-obj-select-group-frame-presentation{display:flex;position:fixed;background-color:#000000b3;top:0;bottom:0;left:0;right:0;z-index:100004;align-items:center;justify-content:center}.note-obj-select-group-frame-dialog{position:relative;width:350px;border:3px solid #614343;border-radius:15px;display:flex;flex-direction:column}.note-obj-interface-dark .note-obj-select-group-frame-dialog{background-color:#191e23}.note-obj-interface-bright .note-obj-select-group-frame-dialog{background-color:#fff}.note-obj-select-group-frame-header{margin-top:10px;align-items:center;text-align:center}.note-obj-select-group-frame-header-text{font-weight:700}.note-obj-interface-dark .note-obj-select-group-frame-header-text{color:#fff}.note-obj-interface-bright .note-obj-select-group-frame-header-text{color:#000}.note-obj-select-group-frame-content{display:block;text-align:center;margin:25px 20px;white-space:pre-wrap;max-height:400px;overflow:auto}.note-obj-interface-dark .note-obj-select-group-frame-content{color:#fff}.note-obj-interface-bright .note-obj-select-group-frame-content{color:#000}.note-obj-select-group-frame-footer{color:#fff;display:inline-block;text-align:center;margin-bottom:20px}.note-obj-select-group-frame-footer span{cursor:pointer;margin:0 25px;border:1px solid #666;border-radius:5px;padding:5px 10px;background-color:#333;-webkit-user-select:none;user-select:none}.note-obj-select-group-frame-footer span:hover{box-shadow:0 0 10px #393}.note-obj-select-group-frame-group-item{border-radius:99px;cursor:pointer;margin:2px 0;text-overflow:ellipsis;overflow:hidden;white-space:nowarp;display:block;padding:2px 10px}.note-obj-new-group-frame-presentation{display:flex;position:fixed;background-color:#000c;top:0;bottom:0;left:0;right:0;z-index:100005;align-items:center;justify-content:center}.note-obj-new-group-frame-dialog{position:relative;width:400px;border-radius:12px;display:flex;flex-direction:column;border:3px solid #614343;box-shadow:0 1px 10px #000c}.note-obj-interface-dark .note-obj-new-group-frame-dialog{background-color:#15202b}.note-obj-interface-bright .note-obj-new-group-frame-dialog{background-color:#fff}.note-obj-new-group-frame-header{min-height:48px;text-align:center;color:#1da1f2;font-weight:700;background-color:#0000;border-top-left-radius:12px;border-top-right-radius:12px;white-space:normal;cursor:text;-webkit-user-select:text;user-select:text;line-height:24px;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis}.note-obj-interface-dark .note-obj-new-group-frame-header{border:1px solid rgba(0,0,0,.5)}.note-obj-interface-bright .note-obj-new-group-frame-header{border:1px solid #efefef}.note-obj-new-group-frame-title-text{margin:5px;display:block}.note-obj-new-group-frame-input{min-height:32px;margin:5px;border:1px solid rgba(29,161,242,.1);padding-left:5px}.note-obj-interface-dark .note-obj-new-group-frame-input{background-color:#253341;color:#fff}.note-obj-interface-bright .note-obj-new-group-frame-input{background-color:#e8e8e8;color:#000}.note-obj-new-group-frame-color-label,.note-obj-new-group-frame-dialog button{min-height:48px;background-color:#0000}.note-obj-interface-dark .note-obj-new-group-frame-color-label,.note-obj-interface-dark .note-obj-new-group-frame-dialog button{color:#fff;border:1px solid rgba(0,0,0,.5)}.note-obj-interface-bright .note-obj-new-group-frame-color-label,.note-obj-interface-bright .note-obj-new-group-frame-dialog button{color:#000;border:1px solid #efefef}.note-obj-new-group-frame-color-label{text-align:center;align-items:center;line-height:48px;display:block}.note-obj-new-group-frame-color-label input[type=color]{cursor:pointer;margin-left:10px}.note-obj-new-group-frame-color-label input[type=number]{margin-left:10px}.note-obj-new-group-frame-dialog button{cursor:pointer}.note-obj-new-group-frame-dialog button:hover{color:#1da1f2}.note-obj-new-group-frame-button-bottom{border-bottom-left-radius:12px;border-bottom-right-radius:12px}.note-obj-settings-frame-presentation{display:flex;position:fixed;background-color:#000c;top:0;bottom:0;left:0;right:0;z-index:100006;align-items:center;justify-content:center}.note-obj-settings-frame-card-enter-active,.note-obj-settings-frame-card-leave-active{transition:all .5s ease}.note-obj-settings-frame-card-enter-from,.note-obj-settings-frame-card-leave-to{transform:translate(-100%);opacity:0}.note-obj-settings-frame-card{display:flex;flex-direction:column;width:450px;max-width:100%;max-height:100%;margin:0;position:absolute;left:0;top:0;bottom:0;border:0px;border-radius:0;box-shadow:0 1px 4px #0003}.note-obj-interface-dark .note-obj-settings-frame-card{background-color:#15202b;color:#fff}.note-obj-interface-bright .note-obj-settings-frame-card{background-color:#fff;color:#000}.note-obj-settings-frame-header{padding:16px;display:block}.note-obj-interface-dark .note-obj-settings-frame-header{border-bottom:2px solid #000}.note-obj-interface-bright .note-obj-settings-frame-header{border-bottom:2px solid #ccc}.note-obj-settings-frame-headline{font-size:16px;font-weight:700;float:left;line-height:100%}.note-obj-settings-frame-close-btn{width:24px;height:24px;cursor:pointer;background-image:var(--note-icon-close-gray);background-size:24px auto;background-repeat:no-repeat;background-position:center;float:right}.note-obj-settings-frame-body{overflow:auto;display:block;padding:20px;flex-grow:1;flex-shrink:1}.note-obj-settings-frame-body input[type=checkbox],.note-obj-settings-frame-body .note-obj-settings-checkbox-label,.note-obj-settings-frame-body input[type=radio],.note-obj-settings-frame-body .note-obj-settings-radio-label{cursor:pointer}.note-obj-settings-frame-header-icon{width:16px;height:16px;background-size:16px auto;background-repeat:no-repeat;background-position:center;position:absolute;right:10px;top:10px;transition:transform .5s}.note-obj-interface-dark .note-obj-settings-frame-header-icon{background-image:var(--note-icon-chevron-right-white)}.note-obj-interface-bright .note-obj-settings-frame-header-icon{background-image:var(--note-icon-chevron-right-black)}.note-obj-settings-frame-content{border:1px solid #333;margin:10px}.note-obj-settings-frame-header-icon-romote{transform:rotate(90deg)}.note-obj-settings-frame-flod{border:1px solid #666}.note-obj-settings-frame-flod>header{cursor:pointer;min-height:40px;display:flex;box-shadow:0 1px 4px #0003}.note-obj-interface-dark .note-obj-settings-frame-flod>header{background-color:#363636;position:relative}.note-obj-interface-bright .note-obj-settings-frame-flod>header{background-color:#ddd;position:relative}.note-obj-settings-frame-flod>header>span{font-weight:500;padding:10px;margin:0;border:0;width:100%}.note-obj-settings-frame-center-content{justify-content:center}.note-obj-settings-frame-content-section{display:flex;flex-direction:row;align-items:center;margin:8px}.note-obj-settings-frame-content-section input[type=text]{margin:0 10px;width:100%;color:#000}.note-obj-settings-frame-content-section a,.note-obj-settings-frame-content-section a:visited{color:#4e8ac5;margin-left:10px;text-decoration:none}.note-obj-settings-frame-content-section p{margin:0 0 0 10px}.note-obj-settings-frame-content-section input[type=checkbox]{clip:rect(0,0,0,0);position:absolute}.note-obj-settings-frame-content-section input[type=checkbox]+label{padding-left:50px;position:relative}.note-obj-settings-frame-content-section input[type=checkbox]+label:before{content:"";position:absolute;left:0;margin-top:1px;border:1px solid #ddd;border-radius:100px;cursor:pointer;display:inline-block;width:2.5em;height:1em;transition:border .4s,box-shadow .4s;background-color:#fff;border-color:#e9e9e9;box-shadow:0 0 inset #e9e9e9;box-sizing:content-box}.note-obj-settings-frame-content-section input[type=checkbox]+label:after{content:"";cursor:pointer;position:absolute;top:2px;left:0;width:1em;height:1em;transition:background-color .4s,left .2s;border-radius:100px;background-color:#fff;box-shadow:0 1px 3px #0006}.note-obj-settings-frame-content-section input[type=checkbox]:checked+label:before{content:"";position:absolute;left:0;margin-top:1px;border:1px solid #ddd;border-radius:100px;cursor:pointer;display:inline-block;width:2.5em;height:1em;transition:border .4s,box-shadow .4s,background-color 1.2s;background-color:#3c81df;border-color:#3c81df;box-shadow:0 0 0 12px inset #3c81df;box-sizing:content-box}.note-obj-settings-frame-content-section input[type=checkbox]:checked+label:after{content:"";cursor:pointer;position:absolute;top:2px;left:1.5em;width:1em;height:1em;transition:background-color .4s,left .2s;border-radius:100px;background-color:#fff;box-shadow:0 1px 3px #0006}.note-obj-settings-frame-content-section input[type=radio]{clip:rect(0,0,0,0);position:absolute}.note-obj-settings-frame-content-section input[type=radio]+label{-webkit-user-select:none;user-select:none;white-space:nowrap;padding:3px 5px;color:#fff;background-color:#333}.note-obj-settings-frame-content-section input[type=radio]:checked+label{-webkit-user-select:none;user-select:none;white-space:nowrap;padding:3px 5px;color:#fff;background-color:#3c81df}.note-obj-settings-frame-content-section button{padding:1px 6px;margin:2px 10px;cursor:pointer;background-color:#fff;color:#000}.note-obj-settings-frame-content-section button[disabled]{cursor:not-allowed;background-color:#ccc}.note-obj-setttings-frame-before-input-text{white-space:nowrap}.note-obj-settings-frame-radio-config-text,.note-obj-settings-frame-before-select-text{margin-right:10px}.note-obj-settings-frame-footer{padding:16px;display:block;position:relative}.note-obj-settings-frame-component-package,.note-obj-settings-frame-component-package-input-text{display:flex;flex-flow:row}.note-obj-settings-frame-component-package{max-width:350px}.note-obj-settings-frame-component-package-input-text{max-width:250px}.note-obj-settings-frame-component-package select{cursor:pointer}.note-obj-interface-dark .note-obj-settings-frame-footer{border-top:2px solid #000}.note-obj-interface-bright .note-obj-settings-frame-footer{border-top:2px solid #ccc}.note-obj-settings-frame-footer button{float:left;padding:2px 5px;margin:0 5px;cursor:pointer;background-color:#fff;color:#000}.note-obj-settings-frame-footer button:hover{background-color:#ddd}.note-obj-settings-divider{display:flex;align-items:center;text-align:center;white-space:nowrap;clear:both;margin:15px 10px;padding:0;background:none;border-width:1px 0 0 0}.note-obj-settings-divider.note-obj-settings-divider-inner-text{border-width:0}.note-obj-settings-divider.note-obj-settings-divider-inner-text:before,.note-obj-settings-divider.note-obj-settings-divider-inner-text:after{position:relative;width:50%;border-block-start:1px solid transparent;border-block-start-color:inherit;border-block-end:0;transform:translateY(50%);content:""}.note-obj-settings-divider.note-obj-settings-divider-inner-text:before{margin-right:5px}.note-obj-settings-divider.note-obj-settings-divider-inner-text:after{margin-left:5px}.note-obj-interface-dark .note-obj-settings-divider{border-color:#ffffff80;color:#ffffffe6}.note-obj-innerface-bright .note-obj-settings-divider{border-color:#00000080;color:#000000e6}.note-obj-settings-divider-solid{border-style:solid}.note-obj-settings-divider-dashed{border-style:dashed}'), n && fe.addStyle(n), this.store.searchBtnClassName = r, this.store.searchBtnBoxClassName = i, this.store.scriptInfo.author = c, this.store.scriptInfo.version = b, this.store.scriptInfo.updated = h, p && (this.store.scriptInfo.url = p), l && this.store.scriptInfo.library.push(...l), u && this.store.scriptInfo.icons.push(...u), k && (this.store.defaultColor.primaryColor = k), f && (this.store.defaultColor.secondaryColor = f), typeof a == "function" && (this.store.itemClick = a), typeof s == "function" && (this.store.changeEvent = s), x && this.store.initOtherConfigInfo(x), d.mount("#" + g)
    }
    getOtherConfig() {
        return Object.assign({}, this.store.config.other)
    }
    judgeUsers(t) {
        return this.store.judgeUsers(t)
    }
    getUserTag(t, o) {
        return this.store.getUserTag(t, o)
    }
    createNoteBtn(t, o, n = [], r = "div") {
        const i = document.createElement(r);
        return i.className = It.btnClassName, n.length > 0 && i.classList.add(...n), i.title = this.store.i18n.query("editTitle"), i.addEventListener("click", a => {
            a.stopPropagation(), this.store.showAdd(t, o)
        }), i
    }
    handler(t, o, n, r = {}, i) {
        const {
            add: a,
            after: s,
            before: l,
            className: u = [],
            restore: c,
            customElement: ce = false
        } = r;
        let p = o;
        if (n && (p = this.fn.query(o, n, "warn")), p) {
            if (a) {
                // 仅在插入 note-obj-twitter-blue-tag 时移除旧的 blueTag
                if (!ce) {
                    const b = this.fn.query(p, "." + It.tagClassName, "none");
                    b && b.remove();
                }
                if (!c) {
                    let h;
                    if (ce) {
                        h = this.createAnalyticsBox(t, r, i);
                    } else {
                        h = this.createNoteTag(t, r, a, u, i);
                    }
                    h && (s ? s.after(h) : l ? l.before(h) : p.appendChild(h));
                }
            } else {
                c ? this.restoreElement(p, t, r) : this.updateElement(p, t, r, i);
            }
        }
    }
    arrive(t, o, n, r) {
        let i;
        i = typeof t == "string" ? this.fn.query(t) : t, i && i.arrive(o, n, r)
    }
    unbindArrive(t, o, n) {
        let r;
        r = typeof t == "string" ? this.fn.query(t) : t, r && r.unbindArrive(o, n)
    }
    leave(t, o, n, r) {
        let i;
        i = typeof t == "string" ? this.fn.query(t) : t, i && i.leave(o, n, r)
    }
    unbindLeave(t, o, n) {
        let r;
        r = typeof t == "string" ? this.fn.query(t) : t, r && r.unbindLeave(o, n)
    }
    restoreElement(t, o, n = {}) {
        const {
            maskPrimaryColor: r,
            maskHover: i,
            title: a,
            className: s = [],
            notModify: l
        } = n;
        l || (t.textContent = Qa(o, n)), r || this.store.config.addNote.showNoteGroupColor && t.style.setProperty("color", ""), i || (t.onmouseenter = null, t.onmouseleave = null), a && (t.title = ""), s.length > 0 && t.classList.remove(...s)
    }
    updateElement(t, o, n = {}, r) {
        const {
            maskPrimaryColor: i,
            title: a,
            offsetWidth: s = 0,
            offsetHeight: l = 0,
            maskHover: u,
            className: c = [],
            notModify: p,
            ...b
        } = n, h = this.store.getUserTag(o, b);
        h && (p ? a && (t.title = h) : (t.textContent = h, a && (t.title = o)), i || (this.store.config.addNote.showNoteGroupColor ? t.style.setProperty("color", this.store.getPrimaryColor(o), "important") : t.style.setProperty("color", "")), u || (t.onmouseenter = () => {
            const x = hi(t),
                k = bi(t);
            this.store.showPopover(o, x + s, k + l)
        }, t.onmouseleave = () => {
            this.store.hidePopover()
        }), c.length > 0 && t.classList.add(...c), this.store.updateUserName(o, r))
    }

    createAnalyticsBox(t, o = {}, i) {
       const analyticsData = this.store.getAnalyticsData(t);

       if(!analyticsData){
          console.log("user is not noted");
          return null;
       }

        // 创建 DocumentFragment 作为临时容器
        const fragment = document.createDocumentFragment();

        // 创建前置的 div 元素
        const prefixDiv = document.createElement('div');
        prefixDiv.className = 'css-175oi2r';
        fragment.appendChild(prefixDiv);

    
        const box = document.createElement('div');
        box.className = 'note-analytics-box';
        box.setAttribute('data-usernames', i || '');
        box.setAttribute('data-user-id', t);
    
        const nameChangesSpan = document.createElement('span');
        nameChangesSpan.className = 'analytics-item';
        nameChangesSpan.setAttribute('data-type', 'nameChanges');
        nameChangesSpan.style.cursor = 'pointer';
        nameChangesSpan.textContent = analyticsData.nameChanges;
    
        const pumpCountSpan = document.createElement('span');
        pumpCountSpan.className = 'analytics-item';
        pumpCountSpan.setAttribute('data-type', 'pumpCount');
        pumpCountSpan.style.cursor = 'pointer';
        pumpCountSpan.textContent = analyticsData.pumpCount;
    
        const deletedTweetsSpan = document.createElement('span');
        deletedTweetsSpan.className = 'analytics-item';
        deletedTweetsSpan.setAttribute('data-type', 'deletedTweets');
        deletedTweetsSpan.style.cursor = 'pointer';
        deletedTweetsSpan.textContent = analyticsData.deletedTweets;
    
        box.appendChild(nameChangesSpan);
        box.appendChild(pumpCountSpan);
        box.appendChild(deletedTweetsSpan);
        
        // 将 twitter-analytics-box 添加到 fragment 中
        fragment.appendChild(box);

        return fragment;
    }

    createNoteTag(t, o = {}, n = "span", r = [], i) {
        const {
            maskPrimaryColor: a,
            maskSecondaryColor: s,
            offsetWidth: l = 0,
            offsetHeight: u = 0,
            maskHover: c,
            ...p
        } = o, b = this.store.getUserTag(t, p);
        if (b) {
            const h = document.createElement(n);
            return h.className = It.tagClassName, this.store.config.addNote.showNoteGroupColor && (a || s ? a ? s || h.style.setProperty("color", this.store.getSecondaryColor(t), "important") : h.style.setProperty("color", this.store.getPrimaryColor(t), "important") : (h.style.setProperty("background-color", this.store.getPrimaryColor(t), "important"), h.style.setProperty("color", this.store.getSecondaryColor(t), "important"))), r.length > 0 && h.classList.add(...r), h.textContent = b, c || (h.onmouseenter = () => {
                const x = hi(h),
                    k = bi(h);
                this.store.showPopover(t, x + l, k + u)
            }, h.onmouseleave = () => {
                this.store.hidePopover()
            }), this.store.updateUserName(t, i), h
        }
        return null
    }
    static insertDom(t) {
        const o = document.createElement("div"),
            n = t + "_vue";
        return o.className = "note-obj-vue-module", o.innerHTML = `<div id="${n}" class="note-obj-vue-div"></div>`, document.body.appendChild(o), n
    }
};
ct(It, "tagClassName", "note-obj-user-tag"), ct(It, "btnClassName", "note-obj-add-note-btn");
let Yn = It;
window.Note_Obj = Yn;