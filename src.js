var bip39 = require('bip39');
var crypto = require('crypto');

var mnemonic = bip39.generateMnemonic();

window.onload = function() {
	document.querySelector('#mnemonic').innerHTML = mnemonic;
	
	document.querySelector('#close').onclick = function() {
		window.close();
	}
};