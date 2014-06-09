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

function isAlpha(ch) {
	"use strict";
	var code = ch.charCodeAt(0);

	if ((code >= 65 && code <= 90) || (code >= 97 && code <= 123)) {
		return true;
	}
	return false;
}

String.prototype.toLatinPig = function () {
	"use strict";
	var buf, ch, i, pigout, word, vowels;

	buf = word = '';
	vowels = ['a','e','i','o','u','y','A','E','I','O','U','Y'];
	pigout = function (word) {
		var j;

		if (vowels.indexOf(word[0]) >= 0) {
			return word + "way";
		}

		for (j = 0; j < word.length && vowels.indexOf(word[0]) == -1;
		    j = j + 1) {
			if (word.charAt(0).toLowerCase() === 'q'
			    && word.charAt(1).toLowerCase() === 'u') {
				word = word.substring(1) + word.charAt(0);
				j = j + 1;
			}
			word = word.substring(1) + word.charAt(0);
		}
		return word + "ay";
	}

	for (i = 0; i <= this.length; i = i + 1) {
		ch = this.charAt(i);
		if (isAlpha(ch)) {
			buf = buf + ch;
			continue;
		}
		if (buf.length > 0) {
			word = word + pigout(buf);
			buf = '';
		}
		word = word + ch;
	}
	return word;
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

