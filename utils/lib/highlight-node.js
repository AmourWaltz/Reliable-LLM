/*! highlight.js v9.15.6 | BSD3 License | git.io/hljslicense */
!(function(e) {
    var n = ('object' == typeof window && window) || ('object' == typeof self && self);
    'undefined' != typeof exports
        ? e(exports)
        : n &&
          ((n.hljs = e({})),
          'function' == typeof define &&
              define.amd &&
              define([], function() {
                  return n.hljs;
              }));
})(function(a) {
    var E = [],
        u = Object.keys,
        N = {},
        g = {},
        n = /^(no-?highlight|plain|text)$/i,
        R = /\blang(?:uage)?-([\w-]+)\b/i,
        t = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
        r = {
            case_insensitive: 'cI',
            lexemes: 'l',
            contains: 'c',
            keywords: 'k',
            subLanguage: 'sL',
            className: 'cN',
            begin: 'b',
            beginKeywords: 'bK',
            end: 'e',
            endsWithParent: 'eW',
            illegal: 'i',
            excludeBegin: 'eB',
            excludeEnd: 'eE',
            returnBegin: 'rB',
            returnEnd: 'rE',
            relevance: 'r',
            variants: 'v',
            IDENT_RE: 'IR',
            UNDERSCORE_IDENT_RE: 'UIR',
            NUMBER_RE: 'NR',
            C_NUMBER_RE: 'CNR',
            BINARY_NUMBER_RE: 'BNR',
            RE_STARTERS_RE: 'RSR',
            BACKSLASH_ESCAPE: 'BE',
            APOS_STRING_MODE: 'ASM',
            QUOTE_STRING_MODE: 'QSM',
            PHRASAL_WORDS_MODE: 'PWM',
            C_LINE_COMMENT_MODE: 'CLCM',
            C_BLOCK_COMMENT_MODE: 'CBCM',
            HASH_COMMENT_MODE: 'HCM',
            NUMBER_MODE: 'NM',
            C_NUMBER_MODE: 'CNM',
            BINARY_NUMBER_MODE: 'BNM',
            CSS_NUMBER_MODE: 'CSSNM',
            REGEXP_MODE: 'RM',
            TITLE_MODE: 'TM',
            UNDERSCORE_TITLE_MODE: 'UTM',
            COMMENT: 'C',
            beginRe: 'bR',
            endRe: 'eR',
            illegalRe: 'iR',
            lexemesRe: 'lR',
            terminators: 't',
            terminator_end: 'tE',
        },
        b = '</span>',
        h = { classPrefix: 'hljs-', tabReplace: null, useBR: !1, languages: void 0 };
    function _(e) {
        return e
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    function d(e) {
        return e.nodeName.toLowerCase();
    }
    function v(e, n) {
        var t = e && e.exec(n);
        return t && 0 === t.index;
    }
    function p(e) {
        return n.test(e);
    }
    function l(e) {
        var n,
            t = {},
            r = Array.prototype.slice.call(arguments, 1);
        for (n in e) t[n] = e[n];
        return (
            r.forEach(function(e) {
                for (n in e) t[n] = e[n];
            }),
            t
        );
    }
    function M(e) {
        var a = [];
        return (
            (function e(n, t) {
                for (var r = n.firstChild; r; r = r.nextSibling)
                    3 === r.nodeType
                        ? (t += r.nodeValue.length)
                        : 1 === r.nodeType &&
                          (a.push({ event: 'start', offset: t, node: r }),
                          (t = e(r, t)),
                          d(r).match(/br|hr|img|input/) ||
                              a.push({ event: 'stop', offset: t, node: r }));
                return t;
            })(e, 0),
            a
        );
    }
    function i(e) {
        if (r && !e.langApiRestored) {
            for (var n in ((e.langApiRestored = !0), r)) e[n] && (e[r[n]] = e[n]);
            (e.c || []).concat(e.v || []).forEach(i);
        }
    }
    function m(c) {
        function s(e) {
            return (e && e.source) || e;
        }
        function o(e, n) {
            return new RegExp(s(e), 'm' + (c.cI ? 'i' : '') + (n ? 'g' : ''));
        }
        !(function n(t, e) {
            if (!t.compiled) {
                if (((t.compiled = !0), (t.k = t.k || t.bK), t.k)) {
                    var r = {},
                        a = function(t, e) {
                            c.cI && (e = e.toLowerCase()),
                                e.split(' ').forEach(function(e) {
                                    var n = e.split('|');
                                    r[n[0]] = [t, n[1] ? Number(n[1]) : 1];
                                });
                        };
                    'string' == typeof t.k
                        ? a('keyword', t.k)
                        : u(t.k).forEach(function(e) {
                              a(e, t.k[e]);
                          }),
                        (t.k = r);
                }
                (t.lR = o(t.l || /\w+/, !0)),
                    e &&
                        (t.bK && (t.b = '\\b(' + t.bK.split(' ').join('|') + ')\\b'),
                        t.b || (t.b = /\B|\b/),
                        (t.bR = o(t.b)),
                        t.endSameAsBegin && (t.e = t.b),
                        t.e || t.eW || (t.e = /\B|\b/),
                        t.e && (t.eR = o(t.e)),
                        (t.tE = s(t.e) || ''),
                        t.eW && e.tE && (t.tE += (t.e ? '|' : '') + e.tE)),
                    t.i && (t.iR = o(t.i)),
                    null == t.r && (t.r = 1),
                    t.c || (t.c = []),
                    (t.c = Array.prototype.concat.apply(
                        [],
                        t.c.map(function(e) {
                            return (
                                (n = 'self' === e ? t : e).v &&
                                    !n.cached_variants &&
                                    (n.cached_variants = n.v.map(function(e) {
                                        return l(n, { v: null }, e);
                                    })),
                                n.cached_variants || (n.eW && [l(n)]) || [n]
                            );
                            var n;
                        })
                    )),
                    t.c.forEach(function(e) {
                        n(e, t);
                    }),
                    t.starts && n(t.starts, e);
                var i = t.c
                    .map(function(e) {
                        return e.bK ? '\\.?(?:' + e.b + ')\\.?' : e.b;
                    })
                    .concat([t.tE, t.i])
                    .map(s)
                    .filter(Boolean);
                t.t = i.length
                    ? o(
                          (function(e, n) {
                              for (
                                  var t = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
                                      r = 0,
                                      a = '',
                                      i = 0;
                                  i < e.length;
                                  i++
                              ) {
                                  var c = r,
                                      o = s(e[i]);
                                  for (0 < i && (a += n); 0 < o.length; ) {
                                      var u = t.exec(o);
                                      if (null == u) {
                                          a += o;
                                          break;
                                      }
                                      (a += o.substring(0, u.index)),
                                          (o = o.substring(u.index + u[0].length)),
                                          '\\' == u[0][0] && u[1]
                                              ? (a += '\\' + String(Number(u[1]) + c))
                                              : ((a += u[0]), '(' == u[0] && r++);
                                  }
                              }
                              return a;
                          })(i, '|'),
                          !0
                      )
                    : {
                          exec: function() {
                              return null;
                          },
                      };
            }
        })(c);
    }
    function C(e, n, o, t) {
        function u(e, n, t, r) {
            var a = '<span class="' + (r ? '' : h.classPrefix);
            return (a += e + '">') + n + (t ? '' : b);
        }
        function s() {
            (g +=
                null != E.sL
                    ? (function() {
                          var e = 'string' == typeof E.sL;
                          if (e && !N[E.sL]) return _(R);
                          var n = e ? C(E.sL, R, !0, i[E.sL]) : O(R, E.sL.length ? E.sL : void 0);
                          return (
                              0 < E.r && (d += n.r),
                              e && (i[E.sL] = n.top),
                              u(n.language, n.value, !1, !0)
                          );
                      })()
                    : (function() {
                          var e, n, t, r, a, i, c;
                          if (!E.k) return _(R);
                          for (r = '', n = 0, E.lR.lastIndex = 0, t = E.lR.exec(R); t; )
                              (r += _(R.substring(n, t.index))),
                                  (a = E),
                                  (i = t),
                                  (c = f.cI ? i[0].toLowerCase() : i[0]),
                                  (e = a.k.hasOwnProperty(c) && a.k[c])
                                      ? ((d += e[1]), (r += u(e[0], _(t[0]))))
                                      : (r += _(t[0])),
                                  (n = E.lR.lastIndex),
                                  (t = E.lR.exec(R));
                          return r + _(R.substr(n));
                      })()),
                (R = '');
        }
        function l(e) {
            (g += e.cN ? u(e.cN, '', !0) : ''), (E = Object.create(e, { parent: { value: E } }));
        }
        function r(e, n) {
            if (((R += e), null == n)) return s(), 0;
            var t = (function(e, n) {
                var t, r, a;
                for (t = 0, r = n.c.length; t < r; t++)
                    if (v(n.c[t].bR, e))
                        return (
                            n.c[t].endSameAsBegin &&
                                (n.c[t].eR = ((a = n.c[t].bR.exec(e)[0]),
                                new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm'))),
                            n.c[t]
                        );
            })(n, E);
            if (t)
                return (
                    t.skip ? (R += n) : (t.eB && (R += n), s(), t.rB || t.eB || (R = n)),
                    l(t),
                    t.rB ? 0 : n.length
                );
            var r,
                a,
                i = (function e(n, t) {
                    if (v(n.eR, t)) {
                        for (; n.endsParent && n.parent; ) n = n.parent;
                        return n;
                    }
                    if (n.eW) return e(n.parent, t);
                })(E, n);
            if (i) {
                var c = E;
                for (
                    c.skip ? (R += n) : (c.rE || c.eE || (R += n), s(), c.eE && (R = n));
                    E.cN && (g += b), E.skip || E.sL || (d += E.r), (E = E.parent) !== i.parent;

                );
                return (
                    i.starts && (i.endSameAsBegin && (i.starts.eR = i.eR), l(i.starts)),
                    c.rE ? 0 : n.length
                );
            }
            if (((r = n), (a = E), !o && v(a.iR, r)))
                throw new Error(
                    'Illegal lexeme "' + n + '" for mode "' + (E.cN || '<unnamed>') + '"'
                );
            return (R += n), n.length || 1;
        }
        var f = S(e);
        if (!f) throw new Error('Unknown language: "' + e + '"');
        m(f);
        var a,
            E = t || f,
            i = {},
            g = '';
        for (a = E; a !== f; a = a.parent) a.cN && (g = u(a.cN, '', !0) + g);
        var R = '',
            d = 0;
        try {
            for (var c, p, M = 0; (E.t.lastIndex = M), (c = E.t.exec(n)); )
                (p = r(n.substring(M, c.index), c[0])), (M = c.index + p);
            for (r(n.substr(M)), a = E; a.parent; a = a.parent) a.cN && (g += b);
            return { r: d, value: g, language: e, top: E };
        } catch (e) {
            if (e.message && -1 !== e.message.indexOf('Illegal')) return { r: 0, value: _(n) };
            throw e;
        }
    }
    function O(t, e) {
        e = e || h.languages || u(N);
        var r = { r: 0, value: _(t) },
            a = r;
        return (
            e
                .filter(S)
                .filter(s)
                .forEach(function(e) {
                    var n = C(e, t, !1);
                    (n.language = e), n.r > a.r && (a = n), n.r > r.r && ((a = r), (r = n));
                }),
            a.language && (r.second_best = a),
            r
        );
    }
    function B(e) {
        return h.tabReplace || h.useBR
            ? e.replace(t, function(e, n) {
                  return h.useBR && '\n' === e
                      ? '<br>'
                      : h.tabReplace
                      ? n.replace(/\t/g, h.tabReplace)
                      : '';
              })
            : e;
    }
    function c(e) {
        var n,
            t,
            r,
            a,
            i,
            c,
            o,
            u,
            s,
            l,
            f = (function(e) {
                var n,
                    t,
                    r,
                    a,
                    i = e.className + ' ';
                if (((i += e.parentNode ? e.parentNode.className : ''), (t = R.exec(i))))
                    return S(t[1]) ? t[1] : 'no-highlight';
                for (n = 0, r = (i = i.split(/\s+/)).length; n < r; n++)
                    if (p((a = i[n])) || S(a)) return a;
            })(e);
        p(f) ||
            (h.useBR
                ? ((n = document.createElementNS(
                      'http://www.w3.org/1999/xhtml',
                      'div'
                  )).innerHTML = e.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n'))
                : (n = e),
            (i = n.textContent),
            (r = f ? C(f, i, !0) : O(i)),
            (t = M(n)).length &&
                (((a = document.createElementNS('http://www.w3.org/1999/xhtml', 'div')).innerHTML =
                    r.value),
                (r.value = (function(e, n, t) {
                    var r = 0,
                        a = '',
                        i = [];
                    function c() {
                        return e.length && n.length
                            ? e[0].offset !== n[0].offset
                                ? e[0].offset < n[0].offset
                                    ? e
                                    : n
                                : 'start' === n[0].event
                                ? e
                                : n
                            : e.length
                            ? e
                            : n;
                    }
                    function o(e) {
                        a +=
                            '<' +
                            d(e) +
                            E.map
                                .call(e.attributes, function(e) {
                                    return (
                                        ' ' +
                                        e.nodeName +
                                        '="' +
                                        _(e.value).replace('"', '&quot;') +
                                        '"'
                                    );
                                })
                                .join('') +
                            '>';
                    }
                    function u(e) {
                        a += '</' + d(e) + '>';
                    }
                    function s(e) {
                        ('start' === e.event ? o : u)(e.node);
                    }
                    for (; e.length || n.length; ) {
                        var l = c();
                        if (((a += _(t.substring(r, l[0].offset))), (r = l[0].offset), l === e)) {
                            for (
                                i.reverse().forEach(u);
                                s(l.splice(0, 1)[0]),
                                    (l = c()) === e && l.length && l[0].offset === r;

                            );
                            i.reverse().forEach(o);
                        } else
                            'start' === l[0].event ? i.push(l[0].node) : i.pop(),
                                s(l.splice(0, 1)[0]);
                    }
                    return a + _(t.substr(r));
                })(t, M(a), i))),
            (r.value = B(r.value)),
            (e.innerHTML = r.value),
            (e.className = ((c = e.className),
            (o = f),
            (u = r.language),
            (s = o ? g[o] : u),
            (l = [c.trim()]),
            c.match(/\bhljs\b/) || l.push('hljs'),
            -1 === c.indexOf(s) && l.push(s),
            l.join(' ').trim())),
            (e.result = { language: r.language, re: r.r }),
            r.second_best &&
                (e.second_best = { language: r.second_best.language, re: r.second_best.r }));
    }
    function o() {
        if (!o.called) {
            o.called = !0;
            var e = document.querySelectorAll('pre code');
            E.forEach.call(e, c);
        }
    }
    function S(e) {
        return (e = (e || '').toLowerCase()), N[e] || N[g[e]];
    }
    function s(e) {
        var n = S(e);
        return n && !n.disableAutodetect;
    }
    return (
        (a.highlight = C),
        (a.highlightAuto = O),
        (a.fixMarkup = B),
        (a.highlightBlock = c),
        (a.configure = function(e) {
            h = l(h, e);
        }),
        (a.initHighlighting = o),
        (a.initHighlightingOnLoad = function() {
            addEventListener('DOMContentLoaded', o, !1), addEventListener('load', o, !1);
        }),
        (a.registerLanguage = function(n, e) {
            var t = (N[n] = e(a));
            i(t),
                t.aliases &&
                    t.aliases.forEach(function(e) {
                        g[e] = n;
                    });
        }),
        (a.listLanguages = function() {
            return u(N);
        }),
        (a.getLanguage = S),
        (a.autoDetection = s),
        (a.inherit = l),
        (a.IR = a.IDENT_RE = '[a-zA-Z]\\w*'),
        (a.UIR = a.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*'),
        (a.NR = a.NUMBER_RE = '\\b\\d+(\\.\\d+)?'),
        (a.CNR = a.C_NUMBER_RE =
            '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'),
        (a.BNR = a.BINARY_NUMBER_RE = '\\b(0b[01]+)'),
        (a.RSR = a.RE_STARTERS_RE =
            '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'),
        (a.BE = a.BACKSLASH_ESCAPE = { b: '\\\\[\\s\\S]', r: 0 }),
        (a.ASM = a.APOS_STRING_MODE = { cN: 'string', b: "'", e: "'", i: '\\n', c: [a.BE] }),
        (a.QSM = a.QUOTE_STRING_MODE = { cN: 'string', b: '"', e: '"', i: '\\n', c: [a.BE] }),
        (a.PWM = a.PHRASAL_WORDS_MODE = {
            b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
        }),
        (a.C = a.COMMENT = function(e, n, t) {
            var r = a.inherit({ cN: 'comment', b: e, e: n, c: [] }, t || {});
            return (
                r.c.push(a.PWM),
                r.c.push({ cN: 'doctag', b: '(?:TODO|FIXME|NOTE|BUG|XXX):', r: 0 }),
                r
            );
        }),
        (a.CLCM = a.C_LINE_COMMENT_MODE = a.C('//', '$')),
        (a.CBCM = a.C_BLOCK_COMMENT_MODE = a.C('/\\*', '\\*/')),
        (a.HCM = a.HASH_COMMENT_MODE = a.C('#', '$')),
        (a.NM = a.NUMBER_MODE = { cN: 'number', b: a.NR, r: 0 }),
        (a.CNM = a.C_NUMBER_MODE = { cN: 'number', b: a.CNR, r: 0 }),
        (a.BNM = a.BINARY_NUMBER_MODE = { cN: 'number', b: a.BNR, r: 0 }),
        (a.CSSNM = a.CSS_NUMBER_MODE = {
            cN: 'number',
            b:
                a.NR +
                '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
            r: 0,
        }),
        (a.RM = a.REGEXP_MODE = {
            cN: 'regexp',
            b: /\//,
            e: /\/[gimuy]*/,
            i: /\n/,
            c: [a.BE, { b: /\[/, e: /\]/, r: 0, c: [a.BE] }],
        }),
        (a.TM = a.TITLE_MODE = { cN: 'title', b: a.IR, r: 0 }),
        (a.UTM = a.UNDERSCORE_TITLE_MODE = { cN: 'title', b: a.UIR, r: 0 }),
        (a.METHOD_GUARD = { b: '\\.\\s*' + a.UIR, r: 0 }),
        a
    );
});

exports.registerLanguage('json', function(e) {
    var i = { literal: 'true false null' },
        n = [e.QSM, e.CNM],
        r = { e: ',', eW: !0, eE: !0, c: n, k: i },
        t = {
            b: '{',
            e: '}',
            c: [{ cN: 'attr', b: /"/, e: /"/, c: [e.BE], i: '\\n' }, e.inherit(r, { b: /:/ })],
            i: '\\S',
        },
        c = { b: '\\[', e: '\\]', c: [e.inherit(r)], i: '\\S' };
    return n.splice(n.length, 0, t, c), { c: n, k: i, i: '\\S' };
});
exports.registerLanguage('css', function(e) {
    var c = {
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
            { b: '{', e: '}', i: /\S/, c: [e.CBCM, c] },
        ],
    };
});
exports.registerLanguage('xml', function(s) {
    var e = {
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
            s.C('\x3c!--', '--\x3e', { r: 10 }),
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
                    s.inherit(s.ASM, { i: null, cN: null, c: null, skip: !0 }),
                    s.inherit(s.QSM, { i: null, cN: null, c: null, skip: !0 }),
                ],
            },
            {
                cN: 'tag',
                b: '<style(?=\\s|>|$)',
                e: '>',
                k: { name: 'style' },
                c: [e],
                starts: { e: '</style>', rE: !0, sL: ['css', 'xml'] },
            },
            {
                cN: 'tag',
                b: '<script(?=\\s|>|$)',
                e: '>',
                k: { name: 'script' },
                c: [e],
                starts: {
                    e: '</script>',
                    rE: !0,
                    sL: ['actionscript', 'javascript', 'handlebars', 'xml'],
                },
            },
            { cN: 'tag', b: '</?', e: '/?>', c: [{ cN: 'name', b: /[^\/><\s]+/, r: 0 }, e] },
        ],
    };
});
exports.registerLanguage('javascript', function(e) {
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
        c = { cN: 'string', b: '`', e: '`', c: [e.BE, n] };
    n.c = [e.ASM, e.QSM, c, a, e.RM];
    var s = n.c.concat([e.CBCM, e.CLCM]);
    return {
        aliases: ['js', 'jsx'],
        k: t,
        c: [
            { cN: 'meta', r: 10, b: /^\s*['"]use (strict|asm)['"]/ },
            { cN: 'meta', b: /^#!/, e: /$/ },
            e.ASM,
            e.QSM,
            c,
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
                                    { b: /\(/, e: /\)/, eB: !0, eE: !0, k: t, c: s },
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
                    { cN: 'params', b: /\(/, e: /\)/, eB: !0, eE: !0, c: s },
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
});
exports.registerLanguage('glsl', function(e) {
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
