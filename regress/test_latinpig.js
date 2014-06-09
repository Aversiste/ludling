#!/usr/local/bin/node

var ludling = require('../ludling');

/* Test words beginning with a consonant */
var test1 = function () {
	var srcStr, targetStr, genStr;

	srcStr = "happy duck song mentioned";
	targetStr = "appyhay uckday ongsay entionedmay";
	genStr = srcStr.toLatinPig();
	return targetStr === genStr;
}

/* Test words beginning with multiple consonants  */
var test2 = function () {
	var srcStr, targetStr, genStr;

	srcStr = "stick glove travel promoting";
	targetStr = "ickstay oveglay aveltray omotingpray";
	genStr = srcStr.toLatinPig();
	return targetStr === genStr;
}

/* Test words beginning with 'qu' */
var test3 = function () {
	var srcStr, targetStr, genStr;

	srcStr = "quest";
	targetStr = "estquay";
	genStr = srcStr.toLatinPig();
	return targetStr === genStr;
}

/* Test words beginning with a vowel - 'y' is not considered as such */
var test4 = function () {
	var srcStr, targetStr, genStr;

	srcStr = "apple eight omelette under yeast";
	targetStr = "appleway eightway omeletteway underway yeastay";
	genStr = srcStr.toLatinPig();
	return targetStr === genStr;
}

/* Test sentence with punctuation */
var test5 = function () {
	var srcStr, targetStr, genStr;

	srcStr = "Il n'y a pas d'amour heureux.";
	targetStr = "Ilway nay'yay away aspay day'amourway eureuxhay.";
	genStr = srcStr.toLatinPig();
	return targetStr === genStr;
}

/* Test a limerick */
var test6 = function () {
	var srcStr, targetStr, genStr;

	srcStr = "An architect fellow named Yoric\n"
	    + "Could, when feeling euphoric,\n"
	    + "        Display for selection\n"
	    + "        Three kinds of erection --\n"
	    + "Corinthian, ionic, and doric.";
	targetStr = "Anway architectway ellowfay amednay Yoricay"
	    + "Ouldcay, enwhay eelingfay euphoricway,"
	    + "        Isplayday orfay electionsay"
	    + "        Eethray indskay ofway erectionway --"
	    + "Orinthiancay, ionicway, andway oricday.";
	genStr = srcStr.toLatinPig();
	return targetStr === genStr;
}

/* And test a sentence with capitalized words */
var test7 = function () {
	var srcStr, targetStr, genStr;

	srcStr = "All a hacker needs is a tight PUSHJ, a loose pair of UUOs, "
	    + "and a warm place to shift.";
	targetStr = "Allway away ackerhay eedsnay isway away ighttay USHJPAY, "
	    + "away ooselay airpay ofway UUOsway, andway away armway aceplay "
	    + "otay iftshay.";
	genStr = srcStr.toLatinPig();
	return targetStr === genStr;
}

test1() || process.exit(1);
test2() || process.exit(2);
test3() || process.exit(3);
test4() || process.exit(4);
test5() || process.exit(5);
test6() || process.exit(6);
test7() || process.exit(6);

return 0;
