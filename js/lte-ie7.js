/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-twitter' : '&#xe001;',
			'icon-plus' : '&#xe008;',
			'icon-play' : '&#xe009;',
			'icon-pinterest' : '&#xe00a;',
			'icon-loupe' : '&#xe00e;',
			'icon-link' : '&#xe00f;',
			'icon-heart' : '&#xe010;',
			'icon-googleplus' : '&#xe012;',
			'icon-gift-vouchers' : '&#xe013;',
			'icon-facebook' : '&#xe014;',
			'icon-email' : '&#xe015;',
			'icon-circle-phone' : '&#xe01a;',
			'icon-circle-googleplus' : '&#xe01c;',
			'icon-circle-facebook' : '&#xe01d;',
			'icon-circle-email' : '&#xe01e;',
			'icon-circle-down' : '&#xe01f;',
			'icon-circle-at' : '&#xe020;',
			'icon-camera' : '&#xe022;',
			'icon-arr-right' : '&#xe027;',
			'icon-arr-left' : '&#xe028;',
			'icon-circle-twitter' : '&#xe02b;',
			'icon-circle-play' : '&#xe02c;',
			'icon-star' : '&#xe02d;',
			'icon-arr-down-simple' : '&#xe02e;',
			'icon-arr-left-simple' : '&#xe02f;',
			'icon-arr-right-simple' : '&#xe030;',
			'icon-arr-up-simple' : '&#xe031;',
			'icon-untitled' : '&#xe032;',
			'icon-arr-down' : '&#xe034;',
			'icon-arr-up' : '&#xe035;',
			'icon-horizontal-lines' : '&#xe037;',
			'icon-circle-cursor' : '&#xe03d;',
			'icon-circle-play-alt' : '&#xe018;',
			'icon-circle-link' : '&#xe01b;',
			'icon-alert' : '&#xe03f;',
			'icon-share' : '&#xe007;',
			'icon-cross' : '&#xe017;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};