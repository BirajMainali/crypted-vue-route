import { ref as Nr, watch as Br, onMounted as Or } from "vue";
import { useRouter as Jr, useRoute as Pr } from "vue-router";
var T = Uint8Array, q = Uint16Array, nr = Uint32Array, vr = new T([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), fr = new T([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), cr = new T([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), mr = function(r, n) {
  for (var e = new q(31), a = 0; a < 31; ++a)
    e[a] = n += 1 << r[a - 1];
  for (var v = new nr(e[30]), a = 1; a < 30; ++a)
    for (var f = e[a]; f < e[a + 1]; ++f)
      v[f] = f - e[a] << 5 | a;
  return [e, v];
}, Rr = mr(vr, 2), Ur = Rr[0], hr = Rr[1];
Ur[28] = 258, hr[258] = 28;
var qr = mr(fr, 0), Yr = qr[0], Tr = qr[1], wr = new q(32768);
for (var h = 0; h < 32768; ++h) {
  var _ = (h & 43690) >>> 1 | (h & 21845) << 1;
  _ = (_ & 52428) >>> 2 | (_ & 13107) << 2, _ = (_ & 61680) >>> 4 | (_ & 3855) << 4, wr[h] = ((_ & 65280) >>> 8 | (_ & 255) << 8) >>> 1;
}
var X = function(r, n, e) {
  for (var a = r.length, v = 0, f = new q(n); v < a; ++v)
    r[v] && ++f[r[v] - 1];
  var l = new q(n);
  for (v = 0; v < n; ++v)
    l[v] = l[v - 1] + f[v - 1] << 1;
  var c;
  if (e) {
    c = new q(1 << n);
    var i = 15 - n;
    for (v = 0; v < a; ++v)
      if (r[v])
        for (var o = v << 4 | r[v], t = n - r[v], g = l[r[v] - 1]++ << t, s = g | (1 << t) - 1; g <= s; ++g)
          c[wr[g] >>> i] = o;
  } else
    for (c = new q(a), v = 0; v < a; ++v)
      r[v] && (c[v] = wr[l[r[v] - 1]++] >>> 15 - r[v]);
  return c;
}, $ = new T(288);
for (var h = 0; h < 144; ++h)
  $[h] = 8;
for (var h = 144; h < 256; ++h)
  $[h] = 9;
for (var h = 256; h < 280; ++h)
  $[h] = 7;
for (var h = 280; h < 288; ++h)
  $[h] = 8;
var er = new T(32);
for (var h = 0; h < 32; ++h)
  er[h] = 5;
var Wr = /* @__PURE__ */ X($, 9, 0), Gr = /* @__PURE__ */ X($, 9, 1), Hr = /* @__PURE__ */ X(er, 5, 0), Ir = /* @__PURE__ */ X(er, 5, 1), ir = function(r) {
  for (var n = r[0], e = 1; e < r.length; ++e)
    r[e] > n && (n = r[e]);
  return n;
}, G = function(r, n, e) {
  var a = n / 8 | 0;
  return (r[a] | r[a + 1] << 8) >> (n & 7) & e;
}, lr = function(r, n) {
  var e = n / 8 | 0;
  return (r[e] | r[e + 1] << 8 | r[e + 2] << 16) >> (n & 7);
}, Cr = function(r) {
  return (r + 7) / 8 | 0;
}, tr = function(r, n, e) {
  (n == null || n < 0) && (n = 0), (e == null || e > r.length) && (e = r.length);
  var a = new (r.BYTES_PER_ELEMENT == 2 ? q : r.BYTES_PER_ELEMENT == 4 ? nr : T)(e - n);
  return a.set(r.subarray(n, e)), a;
}, Kr = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
], H = function(r, n, e) {
  var a = new Error(n || Kr[r]);
  if (a.code = r, Error.captureStackTrace && Error.captureStackTrace(a, H), !e)
    throw a;
  return a;
}, Qr = function(r, n, e) {
  var a = r.length;
  if (!a || e && e.f && !e.l)
    return n || new T(0);
  var v = !n || e, f = !e || e.i;
  e || (e = {}), n || (n = new T(a * 3));
  var l = function(ar) {
    var p = n.length;
    if (ar > p) {
      var j = new T(Math.max(p * 2, ar));
      j.set(n), n = j;
    }
  }, c = e.f || 0, i = e.p || 0, o = e.b || 0, t = e.l, g = e.d, s = e.m, w = e.n, z = a * 8;
  do {
    if (!t) {
      c = G(r, i, 1);
      var x = G(r, i + 1, 3);
      if (i += 3, x)
        if (x == 1)
          t = Gr, g = Ir, s = 9, w = 5;
        else if (x == 2) {
          var I = G(r, i, 31) + 257, Y = G(r, i + 10, 15) + 4, D = I + G(r, i + 5, 31) + 1;
          i += 14;
          for (var S = new T(D), C = new T(19), u = 0; u < Y; ++u)
            C[cr[u]] = G(r, i + u * 3, 7);
          i += Y * 3;
          for (var K = ir(C), m = (1 << K) - 1, L = X(C, K, 1), u = 0; u < D; ) {
            var A = L[G(r, i, m)];
            i += A & 15;
            var y = A >>> 4;
            if (y < 16)
              S[u++] = y;
            else {
              var N = 0, F = 0;
              for (y == 16 ? (F = 3 + G(r, i, 3), i += 2, N = S[u - 1]) : y == 17 ? (F = 3 + G(r, i, 7), i += 3) : y == 18 && (F = 11 + G(r, i, 127), i += 7); F--; )
                S[u++] = N;
            }
          }
          var R = S.subarray(0, I), M = S.subarray(I);
          s = ir(R), w = ir(M), t = X(R, s, 1), g = X(M, w, 1);
        } else
          H(1);
      else {
        var y = Cr(i) + 4, P = r[y - 4] | r[y - 3] << 8, b = y + P;
        if (b > a) {
          f && H(0);
          break;
        }
        v && l(o + P), n.set(r.subarray(y, b), o), e.b = o += P, e.p = i = b * 8, e.f = c;
        continue;
      }
      if (i > z) {
        f && H(0);
        break;
      }
    }
    v && l(o + 131072);
    for (var E = (1 << s) - 1, B = (1 << w) - 1, J = i; ; J = i) {
      var N = t[lr(r, i) & E], Q = N >>> 4;
      if (i += N & 15, i > z) {
        f && H(0);
        break;
      }
      if (N || H(2), Q < 256)
        n[o++] = Q;
      else if (Q == 256) {
        J = i, t = null;
        break;
      } else {
        var O = Q - 254;
        if (Q > 264) {
          var u = Q - 257, W = vr[u];
          O = G(r, i, (1 << W) - 1) + Ur[u], i += W;
        }
        var V = g[lr(r, i) & B], U = V >>> 4;
        V || H(3), i += V & 15;
        var M = Yr[U];
        if (U > 3) {
          var W = fr[U];
          M += lr(r, i) & (1 << W) - 1, i += W;
        }
        if (i > z) {
          f && H(0);
          break;
        }
        v && l(o + 131072);
        for (var k = o + O; o < k; o += 4)
          n[o] = n[o - M], n[o + 1] = n[o + 1 - M], n[o + 2] = n[o + 2 - M], n[o + 3] = n[o + 3 - M];
        o = k;
      }
    }
    e.l = t, e.p = J, e.b = o, e.f = c, t && (c = 1, e.m = s, e.d = g, e.n = w);
  } while (!c);
  return o == n.length ? n : tr(n, 0, o);
}, Z = function(r, n, e) {
  e <<= n & 7;
  var a = n / 8 | 0;
  r[a] |= e, r[a + 1] |= e >>> 8;
}, d = function(r, n, e) {
  e <<= n & 7;
  var a = n / 8 | 0;
  r[a] |= e, r[a + 1] |= e >>> 8, r[a + 2] |= e >>> 16;
}, ur = function(r, n) {
  for (var e = [], a = 0; a < r.length; ++a)
    r[a] && e.push({ s: a, f: r[a] });
  var v = e.length, f = e.slice();
  if (!v)
    return [Mr, 0];
  if (v == 1) {
    var l = new T(e[0].s + 1);
    return l[e[0].s] = 1, [l, 1];
  }
  e.sort(function(D, S) {
    return D.f - S.f;
  }), e.push({ s: -1, f: 25001 });
  var c = e[0], i = e[1], o = 0, t = 1, g = 2;
  for (e[0] = { s: -1, f: c.f + i.f, l: c, r: i }; t != v - 1; )
    c = e[e[o].f < e[g].f ? o++ : g++], i = e[o != t && e[o].f < e[g].f ? o++ : g++], e[t++] = { s: -1, f: c.f + i.f, l: c, r: i };
  for (var s = f[0].s, a = 1; a < v; ++a)
    f[a].s > s && (s = f[a].s);
  var w = new q(s + 1), z = gr(e[t - 1], w, 0);
  if (z > n) {
    var a = 0, x = 0, y = z - n, P = 1 << y;
    for (f.sort(function(S, C) {
      return w[C.s] - w[S.s] || S.f - C.f;
    }); a < v; ++a) {
      var b = f[a].s;
      if (w[b] > n)
        x += P - (1 << z - w[b]), w[b] = n;
      else
        break;
    }
    for (x >>>= y; x > 0; ) {
      var I = f[a].s;
      w[I] < n ? x -= 1 << n - w[I]++ - 1 : ++a;
    }
    for (; a >= 0 && x; --a) {
      var Y = f[a].s;
      w[Y] == n && (--w[Y], ++x);
    }
    z = n;
  }
  return [new T(w), z];
}, gr = function(r, n, e) {
  return r.s == -1 ? Math.max(gr(r.l, n, e + 1), gr(r.r, n, e + 1)) : n[r.s] = e;
}, Ar = function(r) {
  for (var n = r.length; n && !r[--n]; )
    ;
  for (var e = new q(++n), a = 0, v = r[0], f = 1, l = function(i) {
    e[a++] = i;
  }, c = 1; c <= n; ++c)
    if (r[c] == v && c != n)
      ++f;
    else {
      if (!v && f > 2) {
        for (; f > 138; f -= 138)
          l(32754);
        f > 2 && (l(f > 10 ? f - 11 << 5 | 28690 : f - 3 << 5 | 12305), f = 0);
      } else if (f > 3) {
        for (l(v), --f; f > 6; f -= 6)
          l(8304);
        f > 2 && (l(f - 3 << 5 | 8208), f = 0);
      }
      for (; f--; )
        l(v);
      f = 1, v = r[c];
    }
  return [e.subarray(0, a), n];
}, rr = function(r, n) {
  for (var e = 0, a = 0; a < n.length; ++a)
    e += r[a] * n[a];
  return e;
}, sr = function(r, n, e) {
  var a = e.length, v = Cr(n + 2);
  r[v] = a & 255, r[v + 1] = a >>> 8, r[v + 2] = r[v] ^ 255, r[v + 3] = r[v + 1] ^ 255;
  for (var f = 0; f < a; ++f)
    r[v + f + 4] = e[f];
  return (v + 4 + a) * 8;
}, Fr = function(r, n, e, a, v, f, l, c, i, o, t) {
  Z(n, t++, e), ++v[256];
  for (var g = ur(v, 15), s = g[0], w = g[1], z = ur(f, 15), x = z[0], y = z[1], P = Ar(s), b = P[0], I = P[1], Y = Ar(x), D = Y[0], S = Y[1], C = new q(19), u = 0; u < b.length; ++u)
    C[b[u] & 31]++;
  for (var u = 0; u < D.length; ++u)
    C[D[u] & 31]++;
  for (var K = ur(C, 7), m = K[0], L = K[1], A = 19; A > 4 && !m[cr[A - 1]]; --A)
    ;
  var N = o + 5 << 3, F = rr(v, $) + rr(f, er) + l, R = rr(v, s) + rr(f, x) + l + 14 + 3 * A + rr(C, m) + (2 * C[16] + 3 * C[17] + 7 * C[18]);
  if (N <= F && N <= R)
    return sr(n, t, r.subarray(i, i + o));
  var M, E, B, J;
  if (Z(n, t, 1 + (R < F)), t += 2, R < F) {
    M = X(s, w, 0), E = s, B = X(x, y, 0), J = x;
    var Q = X(m, L, 0);
    Z(n, t, I - 257), Z(n, t + 5, S - 1), Z(n, t + 10, A - 4), t += 14;
    for (var u = 0; u < A; ++u)
      Z(n, t + 3 * u, m[cr[u]]);
    t += 3 * A;
    for (var O = [b, D], W = 0; W < 2; ++W)
      for (var V = O[W], u = 0; u < V.length; ++u) {
        var U = V[u] & 31;
        Z(n, t, Q[U]), t += m[U], U > 15 && (Z(n, t, V[u] >>> 5 & 127), t += V[u] >>> 12);
      }
  } else
    M = Wr, E = $, B = Hr, J = er;
  for (var u = 0; u < c; ++u)
    if (a[u] > 255) {
      var U = a[u] >>> 18 & 31;
      d(n, t, M[U + 257]), t += E[U + 257], U > 7 && (Z(n, t, a[u] >>> 23 & 31), t += vr[U]);
      var k = a[u] & 31;
      d(n, t, B[k]), t += J[k], k > 3 && (d(n, t, a[u] >>> 5 & 8191), t += fr[k]);
    } else
      d(n, t, M[a[u]]), t += E[a[u]];
  return d(n, t, M[256]), t + E[256];
}, Vr = /* @__PURE__ */ new nr([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Mr = /* @__PURE__ */ new T(0), Xr = function(r, n, e, a, v, f) {
  var l = r.length, c = new T(a + l + 5 * (1 + Math.ceil(l / 7e3)) + v), i = c.subarray(a, c.length - v), o = 0;
  if (!n || l < 8)
    for (var t = 0; t <= l; t += 65535) {
      var g = t + 65535;
      g >= l && (i[o >> 3] = f), o = sr(i, o + 1, r.subarray(t, g));
    }
  else {
    for (var s = Vr[n - 1], w = s >>> 13, z = s & 8191, x = (1 << e) - 1, y = new q(32768), P = new q(x + 1), b = Math.ceil(e / 3), I = 2 * b, Y = function(or) {
      return (r[or] ^ r[or + 1] << b ^ r[or + 2] << I) & x;
    }, D = new nr(25e3), S = new q(288), C = new q(32), u = 0, K = 0, t = 0, m = 0, L = 0, A = 0; t < l; ++t) {
      var N = Y(t), F = t & 32767, R = P[N];
      if (y[F] = R, P[N] = F, L <= t) {
        var M = l - t;
        if ((u > 7e3 || m > 24576) && M > 423) {
          o = Fr(r, i, 0, D, S, C, K, m, A, t - A, o), m = u = K = 0, A = t;
          for (var E = 0; E < 286; ++E)
            S[E] = 0;
          for (var E = 0; E < 30; ++E)
            C[E] = 0;
        }
        var B = 2, J = 0, Q = z, O = F - R & 32767;
        if (M > 2 && N == Y(t - O))
          for (var W = Math.min(w, M) - 1, V = Math.min(32767, t), U = Math.min(258, M); O <= V && --Q && F != R; ) {
            if (r[t + B] == r[t + B - O]) {
              for (var k = 0; k < U && r[t + k] == r[t + k - O]; ++k)
                ;
              if (k > B) {
                if (B = k, J = O, k > W)
                  break;
                for (var ar = Math.min(O, k - 2), p = 0, E = 0; E < ar; ++E) {
                  var j = t - O + E + 32768 & 32767, Dr = y[j], Er = j - Dr + 32768 & 32767;
                  Er > p && (p = Er, R = j);
                }
              }
            }
            F = R, R = y[F], O += F - R + 32768 & 32767;
          }
        if (J) {
          D[m++] = 268435456 | hr[B] << 18 | Tr[J];
          var xr = hr[B] & 31, Sr = Tr[J] & 31;
          K += vr[xr] + fr[Sr], ++S[257 + xr], ++C[Sr], L = t + B, ++u;
        } else
          D[m++] = r[t], ++S[r[t]];
      }
    }
    o = Fr(r, i, f, D, S, C, K, m, A, t - A, o), !f && o & 7 && (o = sr(i, o + 1, Mr));
  }
  return tr(c, 0, a + Cr(o) + v);
}, Zr = function() {
  var r = 1, n = 0;
  return {
    p: function(e) {
      for (var a = r, v = n, f = e.length | 0, l = 0; l != f; ) {
        for (var c = Math.min(l + 2655, f); l < c; ++l)
          v += a += e[l];
        a = (a & 65535) + 15 * (a >> 16), v = (v & 65535) + 15 * (v >> 16);
      }
      r = a, n = v;
    },
    d: function() {
      return r %= 65521, n %= 65521, (r & 255) << 24 | r >>> 8 << 16 | (n & 255) << 8 | n >>> 8;
    }
  };
}, _r = function(r, n, e, a, v) {
  return Xr(r, n.level == null ? 6 : n.level, n.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(r.length))) * 1.5) : 12 + n.mem, e, a, !v);
}, $r = function(r, n, e) {
  for (; e; ++n)
    r[n] = e, e >>>= 8;
}, Lr = function(r, n) {
  var e = n.level, a = e == 0 ? 0 : e < 6 ? 1 : e == 9 ? 3 : 2;
  r[0] = 120, r[1] = a << 6 | (a ? 32 - 2 * a : 1);
}, jr = function(r) {
  ((r[0] & 15) != 8 || r[0] >>> 4 > 7 || (r[0] << 8 | r[1]) % 31) && H(6, "invalid zlib data"), r[1] & 32 && H(6, "invalid zlib data: preset dictionaries not supported");
};
function pr(r, n) {
  n || (n = {});
  var e = Zr();
  e.p(r);
  var a = _r(r, n, 2, 4);
  return Lr(a, n), $r(a, a.length - 4, e.d()), a;
}
function dr(r, n) {
  return Qr((jr(r), r.subarray(2, -4)), n);
}
var kr = typeof TextEncoder < "u" && /* @__PURE__ */ new TextEncoder(), yr = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), re = 0;
try {
  yr.decode(Mr, { stream: !0 }), re = 1;
} catch {
}
var ee = function(r) {
  for (var n = "", e = 0; ; ) {
    var a = r[e++], v = (a > 127) + (a > 223) + (a > 239);
    if (e + v > r.length)
      return [n, tr(r, e - 1)];
    v ? v == 3 ? (a = ((a & 15) << 18 | (r[e++] & 63) << 12 | (r[e++] & 63) << 6 | r[e++] & 63) - 65536, n += String.fromCharCode(55296 | a >> 10, 56320 | a & 1023)) : v & 1 ? n += String.fromCharCode((a & 31) << 6 | r[e++] & 63) : n += String.fromCharCode((a & 15) << 12 | (r[e++] & 63) << 6 | r[e++] & 63) : n += String.fromCharCode(a);
  }
};
function zr(r, n) {
  if (n) {
    for (var e = new T(r.length), a = 0; a < r.length; ++a)
      e[a] = r.charCodeAt(a);
    return e;
  }
  if (kr)
    return kr.encode(r);
  for (var v = r.length, f = new T(r.length + (r.length >> 1)), l = 0, c = function(t) {
    f[l++] = t;
  }, a = 0; a < v; ++a) {
    if (l + 5 > f.length) {
      var i = new T(l + 8 + (v - a << 1));
      i.set(f), f = i;
    }
    var o = r.charCodeAt(a);
    o < 128 || n ? c(o) : o < 2048 ? (c(192 | o >> 6), c(128 | o & 63)) : o > 55295 && o < 57344 ? (o = 65536 + (o & 1023 << 10) | r.charCodeAt(++a) & 1023, c(240 | o >> 18), c(128 | o >> 12 & 63), c(128 | o >> 6 & 63), c(128 | o & 63)) : (c(224 | o >> 12), c(128 | o >> 6 & 63), c(128 | o & 63));
  }
  return tr(f, 0, l);
}
function br(r, n) {
  if (n) {
    for (var e = "", a = 0; a < r.length; a += 16384)
      e += String.fromCharCode.apply(null, r.subarray(a, a + 16384));
    return e;
  } else {
    if (yr)
      return yr.decode(r);
    var v = ee(r), f = v[0], l = v[1];
    return l.length && H(8), f;
  }
}
const ae = () => ({ encrypt: (e) => {
  const a = zr(e), v = pr(a, { level: 9 }), f = br(v, !0);
  return btoa(f);
}, decrypt: (e) => {
  const a = atob(e);
  if (a.startsWith("x\xDA")) {
    const v = zr(a, !0), f = dr(v);
    return br(f);
  }
  return a;
} }), { encrypt: ne, decrypt: ve } = ae(), oe = (r = "state") => {
  const n = Jr(), e = Pr(), a = Nr({}), v = async (l) => {
    const c = ne(JSON.stringify(l));
    await n.push({
      name: e.name,
      params: e.params,
      query: {
        [r]: c
      }
    });
  }, f = () => {
    if (!e.query[r])
      return {};
    const l = ve(e.query[r]);
    return JSON.parse(l);
  };
  return Br(() => e == null ? void 0 : e.query, () => {
    a.value = f();
  }), Or(() => {
    a.value = f();
  }), { setRouteData: v, getRouteData: f, state: a, route: e, router: n };
};
export {
  oe as useCryptedRoute
};
