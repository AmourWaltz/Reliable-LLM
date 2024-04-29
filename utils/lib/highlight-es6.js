/*! highlight.js v9.14.2 | BSD3 License | git.io/hljslicense */
export const hljs = {};
!(function(e) {
    function r(e) {
        return e
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    function t(e) {
        return e.nodeName.toLowerCase();
    }
    function a(e, r) {
        var t = e && e.exec(r);
        return t && 0 === t.index;
    }
    function n(e) {
        return C.test(e);
    }
    function o(e) {
        var r,
            t = {},
            a = Array.prototype.slice.call(arguments, 1);
        for (r in e) t[r] = e[r];
        return (
            a.forEach(function(e) {
                for (r in e) t[r] = e[r];
            }),
            t
        );
    }
    function i(e) {
        var r = [];
        return (
            (function e(a, n) {
                for (var o = a.firstChild; o; o = o.nextSibling)
                    3 === o.nodeType
                        ? (n += o.nodeValue.length)
                        : 1 === o.nodeType &&
                          (r.push({ event: 'start', offset: n, node: o }),
                          (n = e(o, n)),
                          t(o).match(/br|hr|img|input/) ||
                              r.push({ event: 'stop', offset: n, node: o }));
                return n;
            })(e, 0),
            r
        );
    }
    function l(e, a, n) {
        function o() {
            return e.length && a.length
                ? e[0].offset !== a[0].offset
                    ? e[0].offset < a[0].offset
                        ? e
                        : a
                    : 'start' === a[0].event
                    ? e
                    : a
                : e.length
                ? e
                : a;
        }
        function i(e) {
            u +=
                '<' +
                t(e) +
                _.map
                    .call(e.attributes, function(e) {
                        return ' ' + e.nodeName + '="' + r(e.value).replace('"', '&quot;') + '"';
                    })
                    .join('') +
                '>';
        }
        function l(e) {
            u += '</' + t(e) + '>';
        }
        function s(e) {
            ('start' === e.event ? i : l)(e.node);
        }
        for (var c = 0, u = '', g = []; e.length || a.length; ) {
            var m = o();
            if (((u += r(n.substring(c, m[0].offset))), (c = m[0].offset), m === e)) {
                g.reverse().forEach(l);
                do {
                    s(m.splice(0, 1)[0]), (m = o());
                } while (m === e && m.length && m[0].offset === c);
                g.reverse().forEach(i);
            } else 'start' === m[0].event ? g.push(m[0].node) : g.pop(), s(m.splice(0, 1)[0]);
        }
        return u + r(n.substr(c));
    }
    function s(e) {
        return (
            e.v &&
                !e.cached_variants &&
                (e.cached_variants = e.v.map(function(r) {
                    return o(e, { v: null }, r);
                })),
            e.cached_variants || (e.eW && [o(e)]) || [e]
        );
    }
    function c(e) {
        function r(e) {
            return (e && e.source) || e;
        }
        function t(t, a) {
            return new RegExp(r(t), 'm' + (e.cI ? 'i' : '') + (a ? 'g' : ''));
        }
        !(function a(n, o) {
            if (!n.compiled) {
                if (((n.compiled = !0), (n.k = n.k || n.bK), n.k)) {
                    var i = {},
                        l = function(r, t) {
                            e.cI && (t = t.toLowerCase()),
                                t.split(' ').forEach(function(e) {
                                    var t = e.split('|');
                                    i[t[0]] = [r, t[1] ? Number(t[1]) : 1];
                                });
                        };
                    'string' == typeof n.k
                        ? l('keyword', n.k)
                        : b(n.k).forEach(function(e) {
                              l(e, n.k[e]);
                          }),
                        (n.k = i);
                }
                (n.lR = t(n.l || /\w+/, !0)),
                    o &&
                        (n.bK && (n.b = '\\b(' + n.bK.split(' ').join('|') + ')\\b'),
                        n.b || (n.b = /\B|\b/),
                        (n.bR = t(n.b)),
                        n.endSameAsBegin && (n.e = n.b),
                        n.e || n.eW || (n.e = /\B|\b/),
                        n.e && (n.eR = t(n.e)),
                        (n.tE = r(n.e) || ''),
                        n.eW && o.tE && (n.tE += (n.e ? '|' : '') + o.tE)),
                    n.i && (n.iR = t(n.i)),
                    null == n.r && (n.r = 1),
                    n.c || (n.c = []),
                    (n.c = Array.prototype.concat.apply(
                        [],
                        n.c.map(function(e) {
                            return s('self' === e ? n : e);
                        })
                    )),
                    n.c.forEach(function(e) {
                        a(e, n);
                    }),
                    n.starts && a(n.starts, o);
                var c = n.c
                    .map(function(e) {
                        return e.bK ? '\\.?(' + e.b + ')\\.?' : e.b;
                    })
                    .concat([n.tE, n.i])
                    .map(r)
                    .filter(Boolean);
                n.t = c.length
                    ? t(c.join('|'), !0)
                    : {
                          exec: function() {
                              return null;
                          },
                      };
            }
        })(e);
    }
    function u(e, t, n, o) {
        function i(e) {
            return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
        }
        function l(e, r) {
            var t, n;
            for (t = 0, n = r.c.length; n > t; t++)
                if (a(r.c[t].bR, e))
                    return r.c[t].endSameAsBegin && (r.c[t].eR = i(r.c[t].bR.exec(e)[0])), r.c[t];
        }
        function s(e, r) {
            if (a(e.eR, r)) {
                for (; e.endsParent && e.parent; ) e = e.parent;
                return e;
            }
            return e.eW ? s(e.parent, r) : void 0;
        }
        function m(e, r) {
            return !n && a(r.iR, e);
        }
        function p(e, r) {
            var t = h.cI ? r[0].toLowerCase() : r[0];
            return e.k.hasOwnProperty(t) && e.k[t];
        }
        function f(e, r, t, a) {
            var n = '<span class="' + (a ? '' : D.classPrefix);
            return (n += e + '">') + r + (t ? '' : A);
        }
        function d() {
            (w +=
                null != v.sL
                    ? (function() {
                          var e = 'string' == typeof v.sL;
                          if (e && !M[v.sL]) return r(S);
                          var t = e ? u(v.sL, S, !0, y[v.sL]) : g(S, v.sL.length ? v.sL : void 0);
                          return (
                              v.r > 0 && (N += t.r),
                              e && (y[v.sL] = t.top),
                              f(t.language, t.value, !1, !0)
                          );
                      })()
                    : (function() {
                          var e, t, a, n;
                          if (!v.k) return r(S);
                          for (n = '', t = 0, v.lR.lastIndex = 0, a = v.lR.exec(S); a; )
                              (n += r(S.substring(t, a.index))),
                                  (e = p(v, a))
                                      ? ((N += e[1]), (n += f(e[0], r(a[0]))))
                                      : (n += r(a[0])),
                                  (t = v.lR.lastIndex),
                                  (a = v.lR.exec(S));
                          return n + r(S.substr(t));
                      })()),
                (S = '');
        }
        function _(e) {
            (w += e.cN ? f(e.cN, '', !0) : ''), (v = Object.create(e, { parent: { value: v } }));
        }
        function b(e, r) {
            if (((S += e), null == r)) return d(), 0;
            var t = l(r, v);
            if (t)
                return (
                    t.skip ? (S += r) : (t.eB && (S += r), d(), t.rB || t.eB || (S = r)),
                    _(t),
                    t.rB ? 0 : r.length
                );
            var a = s(v, r);
            if (a) {
                var n = v;
                n.skip ? (S += r) : (n.rE || n.eE || (S += r), d(), n.eE && (S = r));
                do {
                    v.cN && (w += A), v.skip || v.sL || (N += v.r), (v = v.parent);
                } while (v !== a.parent);
                return (
                    a.starts && (a.endSameAsBegin && (a.starts.eR = a.eR), _(a.starts)),
                    n.rE ? 0 : r.length
                );
            }
            if (m(r, v))
                throw new Error(
                    'Illegal lexeme "' + r + '" for mode "' + (v.cN || '<unnamed>') + '"'
                );
            return (S += r), r.length || 1;
        }
        var h = x(e);
        if (!h) throw new Error('Unknown language: "' + e + '"');
        c(h);
        var C,
            v = o || h,
            y = {},
            w = '';
        for (C = v; C !== h; C = C.parent) C.cN && (w = f(C.cN, '', !0) + w);
        var S = '',
            N = 0;
        try {
            for (var E, I, T = 0; (v.t.lastIndex = T), (E = v.t.exec(t)); )
                (I = b(t.substring(T, E.index), E[0])), (T = E.index + I);
            for (b(t.substr(T)), C = v; C.parent; C = C.parent) C.cN && (w += A);
            return { r: N, value: w, language: e, top: v };
        } catch (e) {
            if (e.message && -1 !== e.message.indexOf('Illegal')) return { r: 0, value: r(t) };
            throw e;
        }
    }
    function g(e, t) {
        t = t || D.languages || b(M);
        var a = { r: 0, value: r(e) },
            n = a;
        return (
            t
                .filter(x)
                .filter(d)
                .forEach(function(r) {
                    var t = u(r, e, !1);
                    (t.language = r), t.r > n.r && (n = t), t.r > a.r && ((n = a), (a = t));
                }),
            n.language && (a.second_best = n),
            a
        );
    }
    function m(e) {
        return D.tabReplace || D.useBR
            ? e.replace(y, function(e, r) {
                  return D.useBR && '\n' === e
                      ? '<br>'
                      : D.tabReplace
                      ? r.replace(/\t/g, D.tabReplace)
                      : '';
              })
            : e;
    }
    function p(e) {
        var r,
            t,
            a,
            o,
            s,
            c = (function(e) {
                var r,
                    t,
                    a,
                    o,
                    i = e.className + ' ';
                if (((i += e.parentNode ? e.parentNode.className : ''), (t = v.exec(i))))
                    return x(t[1]) ? t[1] : 'no-highlight';
                for (r = 0, a = (i = i.split(/\s+/)).length; a > r; r++)
                    if (n((o = i[r])) || x(o)) return o;
            })(e);
        n(c) ||
            (D.useBR
                ? ((r = document.createElementNS(
                      'http://www.w3.org/1999/xhtml',
                      'div'
                  )).innerHTML = e.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n'))
                : (r = e),
            (s = r.textContent),
            (a = c ? u(c, s, !0) : g(s)),
            (t = i(r)).length &&
                (((o = document.createElementNS('http://www.w3.org/1999/xhtml', 'div')).innerHTML =
                    a.value),
                (a.value = l(t, i(o), s))),
            (a.value = m(a.value)),
            (e.innerHTML = a.value),
            (e.className = (function(e, r, t) {
                var a = r ? h[r] : t,
                    n = [e.trim()];
                return (
                    e.match(/\bhljs\b/) || n.push('hljs'),
                    -1 === e.indexOf(a) && n.push(a),
                    n.join(' ').trim()
                );
            })(e.className, c, a.language)),
            (e.result = { language: a.language, re: a.r }),
            a.second_best &&
                (e.second_best = { language: a.second_best.language, re: a.second_best.r }));
    }
    function f() {
        if (!f.called) {
            f.called = !0;
            var e = document.querySelectorAll('pre code');
            _.forEach.call(e, p);
        }
    }
    function x(e) {
        return (e = (e || '').toLowerCase()), M[e] || M[h[e]];
    }
    function d(e) {
        var r = x(e);
        return r && !r.disableAutodetect;
    }
    var _ = [],
        b = Object.keys,
        M = {},
        h = {},
        C = /^(no-?highlight|plain|text)$/i,
        v = /\blang(?:uage)?-([\w-]+)\b/i,
        y = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
        A = '</span>',
        D = { classPrefix: 'hljs-', tabReplace: null, useBR: !1, languages: void 0 };
    (e.highlight = u),
        (e.highlightAuto = g),
        (e.fixMarkup = m),
        (e.highlightBlock = p),
        (e.configure = function(e) {
            D = o(D, e);
        }),
        (e.initHighlighting = f),
        (e.initHighlightingOnLoad = function() {
            addEventListener('DOMContentLoaded', f, !1), addEventListener('load', f, !1);
        }),
        (e.registerLanguage = function(r, t) {
            var a = (M[r] = t(e));
            a.aliases &&
                a.aliases.forEach(function(e) {
                    h[e] = r;
                });
        }),
        (e.listLanguages = function() {
            return b(M);
        }),
        (e.getLanguage = x),
        (e.autoDetection = d),
        (e.inherit = o),
        (e.IR = '[a-zA-Z]\\w*'),
        (e.UIR = '[a-zA-Z_]\\w*'),
        (e.NR = '\\b\\d+(\\.\\d+)?'),
        (e.CNR = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'),
        (e.BNR = '\\b(0b[01]+)'),
        (e.RSR =
            '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'),
        (e.BE = { b: '\\\\[\\s\\S]', r: 0 }),
        (e.ASM = { cN: 'string', b: "'", e: "'", i: '\\n', c: [e.BE] }),
        (e.QSM = { cN: 'string', b: '"', e: '"', i: '\\n', c: [e.BE] }),
        (e.PWM = {
            b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
        }),
        (e.C = function(r, t, a) {
            var n = e.inherit({ cN: 'comment', b: r, e: t, c: [] }, a || {});
            return (
                n.c.push(e.PWM),
                n.c.push({ cN: 'doctag', b: '(?:TODO|FIXME|NOTE|BUG|XXX):', r: 0 }),
                n
            );
        }),
        (e.CLCM = e.C('//', '$')),
        (e.CBCM = e.C('/\\*', '\\*/')),
        (e.HCM = e.C('#', '$')),
        (e.NM = { cN: 'number', b: e.NR, r: 0 }),
        (e.CNM = { cN: 'number', b: e.CNR, r: 0 }),
        (e.BNM = { cN: 'number', b: e.BNR, r: 0 }),
        (e.CSSNM = {
            cN: 'number',
            b:
                e.NR +
                '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
            r: 0,
        }),
        (e.RM = {
            cN: 'regexp',
            b: /\//,
            e: /\/[gimuy]*/,
            i: /\n/,
            c: [e.BE, { b: /\[/, e: /\]/, r: 0, c: [e.BE] }],
        }),
        (e.TM = { cN: 'title', b: e.IR, r: 0 }),
        (e.UTM = { cN: 'title', b: e.UIR, r: 0 }),
        (e.METHOD_GUARD = { b: '\\.\\s*' + e.UIR, r: 0 });
})(hljs),
    hljs.registerLanguage('json', function(e) {
        var r = { literal: 'true false null' },
            t = [e.QSM, e.CNM],
            a = { e: ',', eW: !0, eE: !0, c: t, k: r },
            n = {
                b: '{',
                e: '}',
                c: [{ cN: 'attr', b: /"/, e: /"/, c: [e.BE], i: '\\n' }, e.inherit(a, { b: /:/ })],
                i: '\\S',
            },
            o = { b: '\\[', e: '\\]', c: [e.inherit(a)], i: '\\S' };
        return t.splice(t.length, 0, n, o), { c: t, k: r, i: '\\S' };
    }),
    hljs.registerLanguage('css', function(e) {
        var r = {
            b: /[A-Z\_\.\-]+\s*:/,
            rB: !0,
            e: ';',
            eW: !0,
            c: [
                {
                    cN: 'attribute',
                    b: /\S/,
                    e: ':',
                    eE: !0,
                    starts: {
                        eW: !0,
                        eE: !0,
                        c: [
                            {
                                b: /[\w-]+\(/,
                                rB: !0,
                                c: [
                                    { cN: 'built_in', b: /[\w-]+/ },
                                    { b: /\(/, e: /\)/, c: [e.ASM, e.QSM] },
                                ],
                            },
                            e.CSSNM,
                            e.QSM,
                            e.ASM,
                            e.CBCM,
                            { cN: 'number', b: '#[0-9A-Fa-f]+' },
                            { cN: 'meta', b: '!important' },
                        ],
                    },
                },
            ],
        };
        return {
            cI: !0,
            i: /[=\/|'\$]/,
            c: [
                e.CBCM,
                { cN: 'selector-id', b: /#[A-Za-z0-9_-]+/ },
                { cN: 'selector-class', b: /\.[A-Za-z0-9_-]+/ },
                { cN: 'selector-attr', b: /\[/, e: /\]/, i: '$' },
                { cN: 'selector-pseudo', b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ },
                { b: '@(font-face|page)', l: '[a-z-]+', k: 'font-face page' },
                {
                    b: '@',
                    e: '[{;]',
                    i: /:/,
                    c: [
                        { cN: 'keyword', b: /\w+/ },
                        { b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM] },
                    ],
                },
                { cN: 'selector-tag', b: '[a-zA-Z-][a-zA-Z0-9_-]*', r: 0 },
                { b: '{', e: '}', i: /\S/, c: [e.CBCM, r] },
            ],
        };
    }),
    hljs.registerLanguage('xml', function(e) {
        var r = {
            eW: !0,
            i: /</,
            r: 0,
            c: [
                { cN: 'attr', b: '[A-Za-z0-9\\._:-]+', r: 0 },
                {
                    b: /=\s*/,
                    r: 0,
                    c: [
                        {
                            cN: 'string',
                            endsParent: !0,
                            v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s"'=<>`]+/ }],
                        },
                    ],
                },
            ],
        };
        return {
            aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
            cI: !0,
            c: [
                { cN: 'meta', b: '<!DOCTYPE', e: '>', r: 10, c: [{ b: '\\[', e: '\\]' }] },
                e.C('\x3c!--', '--\x3e', { r: 10 }),
                { b: '<\\!\\[CDATA\\[', e: '\\]\\]>', r: 10 },
                { cN: 'meta', b: /<\?xml/, e: /\?>/, r: 10 },
                {
                    b: /<\?(php)?/,
                    e: /\?>/,
                    sL: 'php',
                    c: [
                        { b: '/\\*', e: '\\*/', skip: !0 },
                        { b: 'b"', e: '"', skip: !0 },
                        { b: "b'", e: "'", skip: !0 },
                        e.inherit(e.ASM, { i: null, cN: null, c: null, skip: !0 }),
                        e.inherit(e.QSM, { i: null, cN: null, c: null, skip: !0 }),
                    ],
                },
                {
                    cN: 'tag',
                    b: '<style(?=\\s|>|$)',
                    e: '>',
                    k: { name: 'style' },
                    c: [r],
                    starts: { e: '</style>', rE: !0, sL: ['css', 'xml'] },
                },
                {
                    cN: 'tag',
                    b: '<script(?=\\s|>|$)',
                    e: '>',
                    k: { name: 'script' },
                    c: [r],
                    starts: {
                        e: '</script>',
                        rE: !0,
                        sL: ['actionscript', 'javascript', 'handlebars', 'xml'],
                    },
                },
                { cN: 'tag', b: '</?', e: '/?>', c: [{ cN: 'name', b: /[^\/><\s]+/, r: 0 }, r] },
            ],
        };
    }),
    hljs.registerLanguage('javascript', function(e) {
        var r = '[A-Za-z$_][0-9A-Za-z$_]*',
            t = {
                keyword:
                    'in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as',
                literal: 'true false null undefined NaN Infinity',
                built_in:
                    'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise',
            },
            a = {
                cN: 'number',
                v: [{ b: '\\b(0[bB][01]+)' }, { b: '\\b(0[oO][0-7]+)' }, { b: e.CNR }],
                r: 0,
            },
            n = { cN: 'subst', b: '\\$\\{', e: '\\}', k: t, c: [] },
            o = { cN: 'string', b: '`', e: '`', c: [e.BE, n] };
        n.c = [e.ASM, e.QSM, o, a, e.RM];
        var i = n.c.concat([e.CBCM, e.CLCM]);
        return {
            aliases: ['js', 'jsx'],
            k: t,
            c: [
                { cN: 'meta', r: 10, b: /^\s*['"]use (strict|asm)['"]/ },
                { cN: 'meta', b: /^#!/, e: /$/ },
                e.ASM,
                e.QSM,
                o,
                e.CLCM,
                e.CBCM,
                a,
                {
                    b: /[{,]\s*/,
                    r: 0,
                    c: [{ b: r + '\\s*:', rB: !0, r: 0, c: [{ cN: 'attr', b: r, r: 0 }] }],
                },
                {
                    b: '(' + e.RSR + '|\\b(case|return|throw)\\b)\\s*',
                    k: 'return throw case',
                    c: [
                        e.CLCM,
                        e.CBCM,
                        e.RM,
                        {
                            cN: 'function',
                            b: '(\\(.*?\\)|' + r + ')\\s*=>',
                            rB: !0,
                            e: '\\s*=>',
                            c: [
                                {
                                    cN: 'params',
                                    v: [
                                        { b: r },
                                        { b: /\(\s*\)/ },
                                        { b: /\(/, e: /\)/, eB: !0, eE: !0, k: t, c: i },
                                    ],
                                },
                            ],
                        },
                        {
                            b: /</,
                            e: /(\/\w+|\w+\/)>/,
                            sL: 'xml',
                            c: [
                                { b: /<\w+\s*\/>/, skip: !0 },
                                {
                                    b: /<\w+/,
                                    e: /(\/\w+|\w+\/)>/,
                                    skip: !0,
                                    c: [{ b: /<\w+\s*\/>/, skip: !0 }, 'self'],
                                },
                            ],
                        },
                    ],
                    r: 0,
                },
                {
                    cN: 'function',
                    bK: 'function',
                    e: /\{/,
                    eE: !0,
                    c: [
                        e.inherit(e.TM, { b: r }),
                        { cN: 'params', b: /\(/, e: /\)/, eB: !0, eE: !0, c: i },
                    ],
                    i: /\[|%/,
                },
                { b: /\$[(.]/ },
                e.METHOD_GUARD,
                {
                    cN: 'class',
                    bK: 'class',
                    e: /[{;=]/,
                    eE: !0,
                    i: /[:"\[\]]/,
                    c: [{ bK: 'extends' }, e.UTM],
                },
                { bK: 'constructor get set', e: /\{/, eE: !0 },
            ],
            i: /#(?!!)/,
        };
    }),
    hljs.registerLanguage('glsl', function(e) {
        return {
            k: {
                keyword:
                    'break continue discard do else for if return while switch case default attribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly',
                type:
                    'atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBufferiimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void',
                built_in:
                    'gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow',
                literal: 'true false',
            },
            i: '"',
            c: [e.CLCM, e.CBCM, e.CNM, { cN: 'meta', b: '#', e: '$' }],
        };
    });
