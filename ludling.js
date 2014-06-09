/*
 * Copyright (c) 2013,2014 Tristan Le Guern <tleguern AT bouledef DOT eu>
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

String.prototype.toLatinPig = function () {
	"use strict";
	var a, i, r, s, t, v, vs;

	a = this.split(/ /g);
	v = ['a', 'e', 'i', 'o', 'u', 'y'];
	vs = ["way", "yay", "hay"];

	for (i = 0; i < a.length; ++i) {
		s = a[i].toLowerCase();

		if (v.indexOf(s[0]) >= 0) {
			t = s + vs[Math.floor(Math.random() * vs.length)];
		} else {
			t = s.substring(1) + s.charAt(0) + "ay";
		}
		a[i] = t;
	}
	r = a.join(' ');
	return r.charAt(0).toUpperCase() + r.slice(1);
}

String.prototype.toUbbiDubbi = function () {
	"use strict";
	var a, i, j, r, s, t, v;
	a = this.split(/ /g);
	v = ['a', 'e', 'i', 'o', 'u', 'y'];

	for (i = 0; i < a.length; ++i) {
		s = a[i].toLowerCase();
		t = "";

		for (j = 0; j < s.length; ++j) {
			if (v.indexOf(s[j]) >= 0) {
				t += "ub" + s[j];
			} else {
				t += s[j];
			}
		}
		a[i] = t;
	}
	r = a.join(' ');
	return r.charAt(0).toUpperCase() + r.slice(1);
}

String.prototype.toGibberish = function () {
	"use strict";
	var a, i, j, r, rvi, s, t, v, vi;
	a = this.split(/ /g);
	v = ['a', 'e', 'i', 'o', 'u', 'y'];
	vi = ["idig", "uddag", "uvug", "uthug"];
	rvi = vi[Math.floor(Math.random() * vi.length)];

	for (i = 0; i < a.length; ++i) {
		s = a[i].toLowerCase();

		for (j = 0; j < s.length; ++j) {
			if (v.indexOf(s[j]) >= 0) {
				t += rvi + s[j];
			} else {
				t += s[j];
			}
		}
		a[i] = t;
	}
	r = a.join(' ');
	return r.charAt(0).toUpperCase() + r.slice(1);
}

String.prototype.toTutnese = function () {
	"use strict";
	var a, c, i, j, r, s, t, v;
	a = this.split(/ /g);
	v = ['a', 'e', 'i', 'o', 'u', 'y'];
	c = {
		'b': 'bub' , 'k': 'kuck' , 's': 'sus' ,
		'c': 'coch', 'l': 'lul'  , 't': 'tut' ,
		'd': 'dud' , 'm': 'mum'  , 'v': 'vuv' ,
		'f': 'fuf' , 'n': 'now'  , 'w': 'wack',
		'g': 'gug' , 'p': 'pup'  , 'x': 'xux' ,
		'h': 'hash', 'q': 'quack', 'y': 'yub' ,
		'j': 'jay' , 'r': 'rur'  , 'z': 'zub' ,
		'.': 'per' , '?': 'que'  , ',': 'com' ,
		'!': 'ex'  , ';': 'sem'  , ':': 'col' ,
	};

	for (i = 0; i < a.length; ++i) {
		s = a[i].toLowerCase();
		t = "";

		for (j = 0; j < s.length; ++j) {
			if (s[j] === s[j+1]) {
				t += 'squa';
				if (v.indexOf(s[j+1]) >= 0) {
					t += 't'
				}
			} else if (s[j] in c) {
				t += c[s[j]];
			} else {
				t += s[j];
			}
		}
		a[i] = t;
	}
	r = a.join(' ');
	return r.charAt(0).toUpperCase() + r.slice(1);
}

