/****************************************************************
* Copyright (c) 2018.
*
* This unpublished material is proprietary to authors.
* The methods and techniques described herein are considered
* trade secrets and/or confidential. Reproduction or
* distribution, in whole or in part, is forbidden.
*
* All rights reserved.
*****************************************************************/

var ApixCloud = {CC:{}};

ApixCloud.CC.API = (function() {
    var wsc;
    var JCC = {};
    JCC.P1 = {};
    JCC.P3 = {};
    JCC.S = {};

    JCC.P1.d = function(d) {
	switch (d.v) {
	    // WEB-ONLINE activated. Full list of visitors.
	    case 10: {
		if (d.list) {
		    JCC.P1.s1(d.list);
		    // Get active dialogs with visitors
		    JCC.s('13080{{-}}3{{-}}2');
		} else {
		    // not Destroy JCC.P1.vl
		    if (!JCC.P1.vl) JCC.P1.vl = {};
		    //if (JCC.P1._e_vtbl) JCC.P1._e_vtbl.clear().draw();
		    //o = JCC.$('cnt-no-o-v'); if (o) { o.innerHTML = '<span class="txt-comm-s" style="padding-top:5px;display:inline-block;">(' + JCC.L[193] + ')</span>'; o.style.display = 'block'; }
		}
	    } break;

	    // Update messages
	    case 20: {
		JCC.P1.u1(d);
	    } break;
	}
    };
    // Full visitors list.
    JCC.P1.s1 = function(l) {
	var o;
    
	var d;
	var jtd;
	var jjf;

	if (l.length == 0) {
	} else {
	    for (var i = 0; i < l.length; i++) {
		var jt = l[i];
	        if (typeof jt === 'string') jt = JSON.parse(jt);

		JCC.P1.vl[jt.vid] = [jt];
	    
		// Set online status
	        JCC.P1.vl[jt.vid][0].vstatus = 1;

		// Decode current url and title
		JCC.P1.vl[jt.vid][0].curl = decodeURIComponent(JCC.P1.vl[jt.vid][0].curl);
		JCC.P1.vl[jt.vid][0].ctitle = decodeURIComponent(JCC.P1.vl[jt.vid][0].ctitle);
		if (JCC.P1.vl[jt.vid][0].vnote) JCC.P1.vl[jt.vid][0].vnote = decodeURIComponent(JCC.P1.vl[jt.vid][0].vnote);

		// Add jobs icons (TODO)
		jtd = '';
	        jjf = jt.jobs;
		JCC.P1.vl[jt.vid][3] = jjf;
	    }
	}
    };


    JCC.P3.d = function(d) {
	switch (d.v) {
	    case 10: {
		JCC.P3.s1(d.list);
		// If autologin, lets do it (d.is - initial state)
		if (d.is && JCC.C.uas.aa == 'true' && JCC.S.oas == false) cas();
	    } break;
	    case 20: {
		JCC.P3.u1(d);
	    } break;
	    case 70: {
		JCC.P3.omff(d);
	    } break;
	    case 80: {
		JCC.P3.qm(d);
	    } break;
	}
    };

    JCC.P3.omff = function(d) {
	switch (d.t) {
	    // Online
	    case 'nff': {	
	    } break;
	    // Offline
	    case 'all': {
    		// Offline Messages Data and Forms
    		JCC.P3.omd = d.m;
    	        JCC.P3.af = d.af;
    		JCC.P3.omc = d.omc;
	    } break;
	}
    }
    JCC.P3.qm = function(d) {
    //    console.log(d);
	switch (d.t) {
	    case 'q': {
		// New queue list received.
		// Update JS
		if (!JCC.P3.queues) {
		    JCC.P3.queues = d.q;
		}
	    } break;
	}
    };

    // Add admins
    JCC.P3.s1 = function(l) {
	for (var d = 0; d < l.length; d++) {
	    for (var a = 0; a < l[d].adms.length; a++) {
		JCC.P3.ol[l[d].adms[a].id] = l[d].adms[a];
		JCC.P3.ol[l[d].adms[a].id].gid = l[d].id;
	    }
	}
    }

    JCC.P1.u1 = function(d) {
	var o, n;

	// Updates
	if (d.t == 'upd') {
	    // Open Event (url, title, event tag)
	    if (typeof d.oje !== 'undefined' && typeof JCC.P1.vl[d.vid+'-'+d.domid] !== 'undefined' && typeof JCC.P1.vl[d.vid+'-'+d.domid][0] !== 'undefined') {
		JCC.P1.vl[d.vid+'-'+d.domid][0].oje = d.oje;
	    }
	    // Visitor set name (Introduce)
	    if (d.vn && d.vn.length > 0 && typeof JCC.P1.vl[d.vid+'-'+d.domid] !== 'undefined' && typeof JCC.P1.vl[d.vid+'-'+d.domid][0] !== 'undefined') {
		var v2 = d.vid+'-'+d.domid;
		JCC.P1.vl[v2][0].fn = decodeURIComponent(d.vn);
	    }
	    // Visitor Note
	    if (typeof d.vnote !== 'undefined' && typeof JCC.P1.vl[d.vid] !== 'undefined' && typeof JCC.P1.vl[d.vid][0] !== 'undefined') {
		JCC.P1.vl[d.vid][0].vnote = decodeURIComponent(d.vnote);
	    }
	    // Visitor Contact Name
	    if (typeof d.cname !== 'undefined' && typeof JCC.P1.vl[d.vid] !== 'undefined' && typeof JCC.P1.vl[d.vid][0] !== 'undefined') {
		JCC.P1.vl[d.vid][0].cn = d.cname;
	    }
	    // Update UA
	    if (d.ua && typeof JCC.P1.vl[d.vid] !== 'undefined' && typeof JCC.P1.vl[d.vid][0] !== 'undefined') {
		JCC.P1.vl[d.vid][0].os_name = d.ua[0];
	        JCC.P1.vl[d.vid][0].b_name = d.ua[1];
		JCC.P1.vl[d.vid][0].d_name = d.ua[2];
	    }
	    // Update IP
	    if (d.ip && typeof JCC.P1.vl[d.vid] !== 'undefined' && typeof JCC.P1.vl[d.vid][0] !== 'undefined') {
		JCC.P1.vl[d.vid][0].ip = d.ip;
	    }
	    // Banned flag
	    if (typeof d.fo !== 'undefined' && typeof JCC.P1.vl[d.vid+'-'+d.domid] !== 'undefined') {
		JCC.P1.vl[d.vid+'-'+d.domid][0].fo = d.fo;
	    }
	    // Update GEO
	    if (d.geo && typeof JCC.P1.vl[d.vid] !== 'undefined' && typeof JCC.P1.vl[d.vid][0] !== 'undefined') {
		JCC.P1.vl[d.vid][0].geo_country = d.geo[0];
		JCC.P1.vl[d.vid][0].geo_region = d.geo[1];
		JCC.P1.vl[d.vid][0].geo_city = d.geo[2];
		JCC.P1.vl[d.vid][0].geo_lang = d.geo[3];
		JCC.P1.vl[d.vid][0].geo_country_en = d.geo[4];
	    }
	    // Update current url
    	    if (d.curl && typeof JCC.P1.vl[d.vid+'-'+d.domid] !== 'undefined') {
		JCC.P1.vl[d.vid+'-'+d.domid][0].curl = decodeURIComponent(d.curl);
		JCC.P1.vl[d.vid+'-'+d.domid][0].ctitle = decodeURIComponent(d.ctitle);
	    }
	    if (d.calls || d.views || d.dialogs && typeof JCC.P1.vl[d.vid+'-'+d.domid] !== 'undefined' && typeof JCC.P1.vl[d.vid+'-'+d.domid][0] !== 'undefined') {
		if (d.calls) {
		    JCC.P1.vl[d.vid+'-'+d.domid][0].calls = d.calls;
		}
		if (d.views) {
		    JCC.P1.vl[d.vid+'-'+d.domid][0].views = d.views;
		}
		if (d.dialogs) {
		    JCC.P1.vl[d.vid+'-'+d.domid][0].dialogs = d.dialogs;
		}
	    }
	    // Update job state
	    if (d.jid && d.js) {
		if (typeof JCC.P1.vl[d.vid+'-'+d.domid] !== 'undefined') {
		    if (typeof JCC.P1.vl[d.vid+'-'+d.domid][3] === 'undefined') JCC.P1.vl[d.vid+'-'+d.domid][3] = {};
		    JCC.P1.vl[d.vid+'-'+d.domid][3]['job' + d.jid] = {vjid:d.vjid, js:d.js, jc:d.c};
		}
	    }
	    if (d.ot == 1 && d.comm_rid > 0 && d.comm_rid == JCC.S.sel_rid && typeof JCC.P3.rl[JCC.S.sel_rid] !== 'undefined') {
		JCC.P3.rl[JCC.S.sel_rid].a_comment = JCC.euc(o.value);
	    }
	}
	// New Visitor
	if (d.t == 'new') {
	    var jt = d.ov;
	    if (typeof JCC.P1.vl[jt.vid] === 'object' && JCC.P1.vl[jt.vid][0].vstatus == 1 ) {
		console.log('Dublicate record! ' + jt.vid);
	    } else {
		JCC.P1.vl[jt.vid] = [jt];
		// Set online status
	        JCC.P1.vl[jt.vid][0].vstatus = 1;
		JCC.P1.vl[jt.vid][0].curl = decodeURIComponent(JCC.P1.vl[jt.vid][0].curl);
		JCC.P1.vl[jt.vid][0].ctitle = decodeURIComponent(JCC.P1.vl[jt.vid][0].ctitle);

		// Decode
	        if (JCC.P1.vl[jt.vid][0].vnote) JCC.P1.vl[jt.vid][0].vnote = decodeURIComponent(JCC.P1.vl[jt.vid][0].vnote);

		// Add jobs icons
		var jjf = jt.jobs;
		JCC.P1.vl[jt.vid][3] = jjf;
	    }
	}
	// Delete Visitor
	if (d.t == 'del') {
	    JCC.P1.vl[d.vid][0].vstatus = 0;
	    JCC.P1.vl[d.vid][0].ed = d.ed;
	    delete JCC.P1.vl[d.vid][0].since;
	    delete JCC.P1.vl[d.vid][0].ctitle;
	    delete JCC.P1.vl[d.vid][0].curl;
	    delete JCC.P1.vl[d.vid][0].va;
	}
    };



    // Update
    JCC.P3.u1 = function(d) {
console.log(d);
	var o;
	// Update admin online status
	if (d.adm_id > 0) {
	    if (typeof d.was !== 'undefined' && d.was == 0) {
		if (d.adm_id == JCC.C.mid) {
		    // my status, change it in GUI
		    JCC.S.oas = false;
		} else {
		    JCC.P3.ol[d.adm_id].was = d.was;
		}
	    }
	    if (typeof d.was !== 'undefined' && d.was > 0) {
		if (d.adm_id == JCC.C.mid) {
		    // my status, change in GUI
		    JCC.S.oas = true;
		} else {
		    if (JCC.P3.ol[d.adm_id]) JCC.P3.ol[d.adm_id].was = d.was;
		}
	    }
	    if (typeof d.st !== 'undefined' && d.st == 0) {
		// Offline
		if (typeof JCC.P3.ol[d.adm_id] !== 'undefined') JCC.P3.ol[d.adm_id].st = d.st;
	    }
	    if (typeof d.st !== 'undefined' && d.st > 0) {
		// Online
		if (typeof JCC.P3.ol[d.adm_id] !== 'undefined') JCC.P3.ol[d.adm_id].st = d.st;
	    }
	}
	// Update User Options
	if (d.opt_t == 1 && (d.opt_f == false || d.opt_f == true)) {
	    if (typeof JCC.P3.ol[d.aid] !== 'undefined') JCC.P3.ol[d.aid].o_ma = d.opt_f;
	    if (d.aid == JCC.C.mid) JCC.C._o_manager = d.opt_f;
	    // Change permissions, user becomes manager or else, not manager now
	}
	if (d.opt_t == 2 && (d.opt_f == false || d.opt_f == true)) {
	    if (typeof JCC.P3.ol[d.aid] !== 'undefined') JCC.P3.ol[d.aid].o_aa = d.opt_f;
	    if (d.aid == JCC.C.mid) JCC.C._o_admin = d.opt_f;
	    // Change permissions, user becomes administrator or else, not administrator now
	}
	if (d.af) {
	    // Changes in Forms
	    JCC.P3.af = d.af;
	}
	if (d.qinfo) {
	    var lid = 0;
	    for (var i = 0; i < JCC.C.cl.length; i++) {
        	if (JCC.lang == JCC.C.cl[i].c) {
            	    lid = JCC.C.cl[i].id;
            	    break;
        	}
    	    }
	    if (lid == 0) lid = JCC.C.cl[0].id;

	    for (var i = 0; i < d.qinfo.length; i++) {
		// Update
		if (typeof JCC.P3.queues[d.qinfo[i].id] !== 'undefined') JCC.P3.queues[d.qinfo[i].id].qtype = d.qinfo[i].qtype;
		else {
		    // Add new
		    JCC.P3.queues[d.qinfo[i].id] = {};
		    JCC.P3.queues[d.qinfo[i].id].id = d.qinfo[i].id;
		    JCC.P3.queues[d.qinfo[i].id].qtype = d.qinfo[i].qtype;
		    JCC.P3.queues[d.qinfo[i].id].qconf = {};
		}

		var qn = '';
		for (var ii = 0; ii < d.qinfo[i].qn.length; ii++) {
		    if (lid == d.qinfo[i].qn[ii].lid) {
			qn = d.qinfo[i].qn[ii].qn;
		        break;
		    }
		}
		if (!qn) for (var ii = 0; ii < d.qinfo[i].qn.length; ii++) {
		    if (d.qinfo[i].qn[ii].qn) {
			qn = d.qinfo[i].qn[ii].qn;
			break;
		    }
		}
		if (qn && typeof JCC.P3.queues[d.qinfo[i].id] !== 'undefined') JCC.P3.queues[d.qinfo[i].id].qn = qn;
	    }
	}
    }



    // Const for App
    JCC.$p = 'https:';

    JCC.euc = function(x) {
	return encodeURIComponent(x).replace(/[!'()]/g, JCC.eucf); //'
    };
    JCC.eucf = function(x) {
	switch(x) {
	    case '[': return '%5B';
	    case '!': return '%21';
	    case '\'': return '%27';
	    case '(': return '%28';
	    case ')': return '%29';
	    case ']': return '%5D';
	    default: return x;
	}
    };

    // Send API request
    JCC.s = function(m, d) {
	if (JCC.so && JCC.so != null && JCC.so.readyState != 1) { console.log('Socket in state: '+ JCC.so.readyState + '; MSG "'+m+'". Returning.'); return; }
	if (m != '') {
	    var f = function(_m, _x) {
		return function () {
	    	    var mm = _m;
		    _x.so.send(mm);
		};
    	    };
	    var dd = 1; if (d) dd = d;
	    setTimeout(f(m, JCC), dd);
	}
    };

    // Session reuse. Ask user confirm signin continue.
    JCC.S.s1 = function() {
	// Prompt user confirmation
	//JCC.m(JCC.L[110], JCC.L[6], 6, 4, function() {
	    // User hit Confirm continue
    	    JCC.S.vR = 1;
	    // Retry authenticate with confirm flag
    	    JCC.S.a1();
	//});
    };

    JCC.S.a1 = function() {
	if (!JCC.so || JCC.so == null) {
console.log('---------connecting...');
	    JCC.c(JCC.$h, '/cc/dst');
	}
	if (JCC.S.vL && JCC.S.vP && JCC.st >= 10) {
	    // Send Credentials
	    JCC.S.s2();
	}
    };

    // Send Credentials
    JCC.S.s2 = function() {
	JCC.s(JCC.euc(JCC.S.vL.toLowerCase()) + '{{-}}' + JCC.euc(JCC.S.vP) + '{{-}}' + JCC.S.vR + '{{-}}' + JCC.lang+'{{-}}'+JSON.stringify(JCC.S.vParams));
    };


JCC.S.d = function(d) {
console.log(d);

    if (typeof d.v === 'undefined') { return; }

    switch (JCC.st) {
	// State 15 - Relogin was by request
	case 15: {
	    console.log('Reconnect: authenticate answer: ' + d.v);
	    switch (d.v) {
		case 0: {
		    if (d.c) JCC.C = d.c;
		    //JCC.puc();
		    //JCC.S.jmm();
		    if (typeof JCC.C !== 'undefined' && typeof JCC.C.aec !== 'undefined' && JCC.C.aec.ccsnt) JCC.snt = JCC.C.aec.ccsnt + '/';
		    if (JCC.C.domains) for (var i = 0; i < JCC.C.domains.length; i++) JCC.C.domains[i].domain = decodeURIComponent(JCC.C.domains[i].domain);
		} break;
		case 1: {
		    JCC.st = 20;
		    console.log("RELogin: success");
		    // Recovery WEB-ONLINE status
		    if (JCC.S.oas == true) {
		//	if (JCC.P1._e_vtbl) JCC.P1._e_vtbl.clear().draw();
			JCC.s('13010{{-}}3{{-}}1');
		    }
		    // Start keepalive timer if not started
		    if (!JCC.kat) {
                        JCC.kat = setInterval(JCC.skap, JCC.kait);
            	    }
		} break;
	    }
	} break;

	// State 10 - Tests OK
	case 10: {
	    console.log('Info: authenticate answer: ' + d.v);
	    switch (d.v) {
		case 0: {
		    if (d.c) JCC.C = d.c;
	    console.log('Config done ' + 1);
		    //JCC.puc();
		    if (typeof JCC.C !== 'undefined' && typeof JCC.C.aec !== 'undefined' && JCC.C.aec.ccsnt) JCC.snt = JCC.C.aec.ccsnt + '/';
		    //JCC.ap = new JCC.pam();
		    //if (!JCC.ap) JCC.ap = new JCC.pam();
		    if (JCC.C.domains) for (var i = 0; i < JCC.C.domains.length; i++) JCC.C.domains[i].domain = decodeURIComponent(JCC.C.domains[i].domain);
		} break;
		case 1: {
		    console.log("Login: success");
		    if (JCC.api_cb) JCC.api_cb(d);

		    // Connected and authenticated
		    JCC.st = 20;
		    
		    // Show App home screen

		    // Init per login
		    JCC.S.oas = false;
		    JCC.S.sel_aid = 0;
		    JCC.S.sel_vid = 0;
		    JCC.S.sel_rid = 0;
		    JCC.S.sel_sid = 0;
		    JCC.S.sel_sut = 0;

		    // Offlime Message button. -2 nothing, -1 monobutton, >=0 - personal
		    JCC.S.sel_omb = -2;

		    // Start keepalive timer if not started
		    if (!JCC.kat) {
			JCC.kat = setInterval(JCC.skap, JCC.kait);
		    }

		    // Get list of operators
		    JCC.s('13000{{-}}3');

		    // Get active interoperators dialogs
		    JCC.s('13080{{-}}3{{-}}1');

		    // Get queues
		    JCC.s('13300{{-}}3');
		    // Get offline messages
		    //JCC.P3.omsr();
		    var _date = new Date();
		    var _d = _date.getFullYear() + '-' + (_date.getMonth() + 1) + '-' + _date.getDate();
		    JCC.s('13200{{-}}3{{-}}'+_d+'to'+_d+'{{-}}{{-}}');


    // Get suggestion book messages
//    JCC.P3.sbsr();

    // Get call requests (Call From Site)
/*    if (JCC.C.acsl && JCC.C.acsl[5] && JCC.C.acsl[5].length > 0) JCC.s('13260{{-}}3');
    if (JCC.C.acsl && JCC.C.acsl[15] && JCC.C.acsl[15].length > 0) {
	JCC.S._e_s15pre = 1;
	if (!JCC.$('JCC.Mcss')) JCC.S.ics('JCC_M.css', 'JCC_Mcss');
	JCC.S.ijs('JCC_M_T.js', 'JCC_M_Tjs');
    }
*/











		} break;
		case 2: {
		    JCC.S.asis = 1;
		    console.log("Login: invalid login or password");
		    if (JCC.api_cb) JCC.api_cb(d);
		} break;
		case 3: {
		    JCC.S.asis = 1;
		    console.log("Login: need reuse confirmation");
		    // Check flag when onClose event to ask user
		    JCC.S.f1 = 1;
		    if (JCC.api_cb) JCC.api_cb(d);
		} break;
		case 4: {
		    JCC.S.asis = 1;
		    console.log("Login: internal error");
		    if (JCC.api_cb) JCC.api_cb(d);
		} break;
		case 5: {
		    JCC.S.asis = 1;
		    console.log("Login: account blocked");
		    if (JCC.api_cb) JCC.api_cb(d);
		} break;
		case 6: {
		    JCC.S.asis = 1;
		    console.log("Login: ASI auth failed");
		    if (JCC.api_cb) JCC.api_cb(d);
		} break;
	    }
	} break;

	// State 20 - Authorized and logged
	case 20: {
	    switch (d.v) {
		// 1XX - Any system events
		case 100: {
		    console.log('Login: close connection by reason: ' + d.r);
		    JCC.llc = d.r;
		    switch (d.r) {
			case 'close_by_node': {
			    console.log('One node go\'s down, lets reconnect to other by onclose');

			    JCC.S.rt1 = 0;
			    JCC.st = 15;
			} break;
			case 'close_by_admin':
			case 'close_by_reuse': {
			    console.log('Close session by reason ' + d.r);
			    if (JCC.so && JCC.so != null) {
				JCC.so.close();
				JCC.so = null;
			    }
			    if (JCC.api_cb) JCC.api_cb(d);
			    return;
			} break;
			case 'close_by_delete': {
			    console.log('Close session by reason ' + d.r);
			    if (JCC.so && JCC.so != null) {
				JCC.so.close();
				JCC.so = null;
			    }
			    if (JCC.api_cb) JCC.api_cb(d);
			    return;
			} break;
			case 'close_by_block': {
			    console.log('Close session by reason ' + d.r);
			    if (JCC.so && JCC.so != null) {
				JCC.so.close();
				JCC.so = null;
			    }
			    if (JCC.api_cb) JCC.api_cb(d);
			    return;
			} break;
			case 'close_by_logout': {
			    console.log('Close session by reason ' + d.r);
			    if (JCC.so && JCC.so != null) {
				JCC.so.close();
				JCC.so = null;
			    }
			    if (JCC.api_cb) JCC.api_cb(d);
			    return;
			} break;
		    }
		} break;
		case 110: {
		    JCC.S.sc1t();
		} break;
		// 9XX - Any errors
		case 900: {
		    JCC.log('Error from server: ' + d.e);
		} break;
	    }
	} break;
    }
};

    JCC.S.sc1t = function() {
	console.log('Reconnect: close, then open again');

	JCC.S.rt1 = 0;

        // Reconnect state, plugins! Don't panic!
	JCC.st = 15;

	if (JCC.so && JCC.so != null) {
	    JCC.so.close();
	    JCC.so = null;
	}
    };

    // Send Keepalive timeout if loggedin
    JCC.skap = function() {
	if (!JCC.so || JCC.so == null || JCC.st != 20) {
	    clearInterval(JCC.kat);
	    JCC.kat = 0;
	    return;
	}
    
	JCC.s('!');
    };

JCC.c = function(addr, app) {
    var host;
    var aa = '?ua='+JCC.euc(navigator.userAgent);

    if (JCC.$p == 'http:') {
        host = 'ws://' + addr + app + aa;
    } else {
        host = 'wss://' + addr + app + aa;
    }
    
    if (!JCC.so || JCC.so == null) {
	try {
    	    if ('WebSocket' in window) {
        	JCC.so = new WebSocket(host);
    	    } else if ('MozWebSocket' in window) {
        	JCC.so = new MozWebSocket(host);
    	    } else {
        	return -1;
    	    }

    	    JCC.so.onopen = function () {
        	if (JCC.st == 10) {
        	    // Need to send credentials
        	    JCC.S.s2();
        	}
        	if (JCC.st == 15) {
        	    // Need to send credentials
        	    JCC.S.s2();
        	}
    	    };
    	    JCC.so.onclose = function (event) {
    		var m = 'Info: connection closed.';
    		if (event.code)
    		    m += ' Code=[' + event.code + ']';
    		if (event.reason)
    		    m += ' Reason=[' + event.reason + ']';

        	console.log(m + ' JCC.state=' + JCC.st);

	        JCC.so = null;

		if (JCC.st == 10) {
		    // Automatic Sign-In
		}
	    
		// close wo reason! Try reconnect some times befor close application
	        if (JCC.st == 20) {
    		    JCC.S.vR = 1;
		    JCC.st = 15;
		    JCC.S.rt1 = 0;
		}

		// Special for reconnect
        	if (JCC.st == 15) {
		    if (JCC.S.rt1 == 3) {
			console.log('Unable to reconnect. Show shadow over screen and print "Reconnecting ..."');
		        return;
    		    }

		    if (JCC.llc == 'close_by_reuse' || JCC.llc == 'close_by_admin' || JCC.llc == 'close_by_delete' || JCC.llc == 'close_by_block' || JCC.llc == 'close_by_logout') {
console.log('onClose reconnect:'+JCC.llc);
			return;
		    }

		    JCC.S.rt1 = JCC.S.rt1 + 1;
		    var f = function() {
			console.log('Reconnect attemption #' + JCC.S.rt1 + ' vR=' + JCC.S.vR);
	    		JCC.c(JCC.$h, '/cc/dst');
	    	    };
	    	    setTimeout(f, 2000);

        	    return;
        	}

        	if (JCC.st > 10) { JCC.st = 10; }
        	if (JCC.S.f1) {
        	    JCC.S.s1();
        	    JCC.S.f1 = 0;
        	}
    	    };

    	    JCC.so.onerror = function (event) {
    		var m = 'Error: connection error.';
    		if (event.code)
    		    m += ' Code=[' + event.code + ']';
    		if (event.reason)
    		    m += ' Reason=[' + event.reason + ']';

        	console.log(m + ' JCC.state=' + JCC.st);

        	JCC.so = null;
    	    };

    	    JCC.so.onmessage = function (m) {
//        	console.log('RECV: ' + m.data + '. JCC.state=' + JCC.st);

		var j;
		try {
		    j = JSON.parse(m.data);
		} catch (e) {
		    console.log('Error: Can\'t parse data! data=' + m.data);
		    return;
		}

		switch (j.s) {
		    case 0: JCC.S.d(j); break;
		    case 1: if (typeof JCC.P1 !== 'undefined') {
			JCC.P1.d(j);
			if (JCC.api_cb) JCC.api_cb(j);
		    } break;
		    case 3: if (typeof JCC.P3 !== 'undefined') {
			JCC.P3.d(j);
			if (JCC.api_cb) JCC.api_cb(j);
		    } break;
		}
	    };
	} catch (exception) { console.log('Error: ' + exception); }
    }
    
    return 0;
};













    var initialize_api = function(host, lang, cb) {
	// WebSocket addres
	JCC.$h = host;
	JCC.lang = lang;
	JCC.api_cb = cb;
	JCC.S.vR = 1;	// Always confirmed. Mobile app have priority! Possible multimple login for mobiles devices

	// Default sound notification theme
	JCC.snt = '1/';

	// 50sec keepaive timeout
	JCC.kait = 50000;
	JCC.kat = 0;
    };

    var sign_in = function(login, password, params, lang) {
	JCC.S.vL = login;
	JCC.S.vP = password;
	JCC.S.vParams = params;
	JCC.lang = lang;

	// Last Logout Cause
	JCC.llc = null;

	JCC.P1.vl = {};
	JCC.P3.ol = {};
	JCC.P3.rl = {};
	JCC.P3.ec = {};

	// Active Queued Messages    
	JCC.P3.aqm = {};

	// App State
	JCC.st = 10; // Ready to login (test socket step ignored)

	JCC.S.a1();
//	send_data('13010{{-}}'+q+'{{-}}'+o+'{{-}}'+p_euc(msg)+l+p+e);
    };
    var sign_out = function() {
	JCC.s('10010{{-}}0');
    };
    var get_config = function() {
	return JCC.C;
    }
    var get_forms = function() {
	return JCC.P3.af;
    }

    // Obtain member name and avatar
    var osn = function(x1, x2, x3) {
	if (typeof x3 === 'undefined' || !x3 || x3.length <= 0) {
	    return [];
	}
	var on = '';
	var o;

	for (var i = 0; i < x3.length; i++) {
	    if (x3[i].m == x1 && x3[i].u == x2) {
		o = x3[i].a;
    		if (o.fn && o.fn != null && o.fn != '') {
		    on = decodeURIComponent(o.fn);
		}
		if (o.ln != null && o.ln != '') {
		    if (on != '') { on += ' ' + decodeURIComponent(o.ln); } else { on += decodeURIComponent(o.ln); }
		}

		return [on, o.afn];
	    }
	}
	return [];
    }

    // Operator / Visitor name
    // p = plain, no html
    var ovn = function(a, b, d, nn, nt, p) {
	var o = null;
	var on = '';

	if (a && a > 0) { o = JCC.P3.ol[a]; }
	if (b) {
	    if (typeof JCC.P1.vl[b] !== 'undefined') o = JCC.P1.vl[b][0];
	    else return 'Guest';
	}
	if (d) o = d.a;

	if (!o) return '--';

	if (o.fn && o.fn != null && o.fn != '') {
	    on = decodeURIComponent(o.fn);
	}
	if (o.ln != null && o.ln != '') {
	    if (on != '') { on += ' ' + decodeURIComponent(o.ln); } else { on += decodeURIComponent(o.ln); }
	}

	if (b && on == '') {
	    if (o.cn) {
		on = decodeURIComponent(o.cn);
	    } else {
		on = 'Guest';
	    }
	}

	if (b && !nt) { if (!p) on = on; else on = ' '+on; }

	if (b && !nn && o.vnote) { if (!p) on += ' ' + decodeURIComponent(o.vnote); else on += ' ' + decodeURIComponent(o.vnote); }
	else if (b && !o.vnote) { if (!p) on += ' '+(o.vid2>0&&!o.fn?o.vid2:''); else on += ''; }
	if (d && d.u == 2 && on == '') {
	    if (o.cn) {
		on = decodeURIComponent(o.cn);
	    } else {
		on = 'Guest';
	    }
	}

	return o != null ? on : null;
    };
    var cas = function() {
	if (JCC.S.oas == true) {
	    JCC.s('13010{{-}}3{{-}}0');
	} else {
	    JCC.s('13010{{-}}3{{-}}1');
	}

	return 0;
    };
    function tqm(a, b, c) {
        JCC.s('13310{{-}}3{{-}}'+a+'{{-}}'+b+'{{-}}'+c);
    };
    // Get User From (department, website, messenger, social)
    function guf(u, t, c) {
	if (!u || !t) return '';
	var sp = '';
	switch (t) {
	    case 1: {
		if (JCC.P3.ol[u] && JCC.P3.ol[u].pn) return JCC.P3.ol[u].pn;
	    } break;
	    case 2: {
		if (JCC.P1.vl[u] && JCC.P1.vl[u][0] && JCC.P1.vl[u][0].idd > 0) {
		    for (var i = 0; i < JCC.C.domains.length; i++) {
			if (JCC.P1.vl[u][0].idd == JCC.C.domains[i].id) return JCC.C.domains[i].domain;
		    }
		}
	    } break;
	    case 200: {
		sp = 'Viber - ';
	    } break;
	}
	if (c > 0) for (var i = 0; i < JCC.C.domains.length; i++) {
	    if (c == JCC.C.domains[i].id) return sp+JCC.C.domains[i].domain;
	}

	return '';
    }
    // Send delivery notification
    function sdn(r, m) {
	JCC.s('13040{{-}}3{{-}}' + r + '{{-}}' + m, 500);
    }
    // Send read notification
    function srn(r, m) {
	JCC.s('13030{{-}}3{{-}}' + r + '{{-}}' + m, 500);
    }
    // Get room messages
    function get_chat_room(r, a) {
	// Request body
	if (r) {
	    JCC.s('13100{{-}}3{{-}}' + r + '{{-}}ar{{-}}0{{-}}0');
	} else {
	    JCC.s('13100{{-}}3{{-}}0{{-}}ar{{-}}'+a+'{{-}}1');
	}
    }

    // Close dialog
    function close_chat_room(r) {
	JCC.s('13070{{-}}3{{-}}' + r);
    }

    function send_message(r, _mid, _ut) {
	// Ok, lets send msg
        var mid = 0;
	var ut = 0;
        var m = '';
	var o = document.getElementById('dialog-input');
	var ai = '';
	var rid = r;

	mid = _mid;
	ut = _ut;

	if (_ut == 2) {
	    ai = '{{-}}';
	}

	// If WEB-ONLINE turn off - can't send message
	if ((ut == 2 || ut == 200 || ut == 201) && JCC.S.oas != true) {
	    //JCC.P3.m({'t':'info', 'c':'webonline_turned_off'});
	    alert(ACC.MSG['info']['webonline_turned_off']);
	    return;
	}
	// Visitor offline - stop sending
	if (ut == 2 && (typeof JCC.P1.vl[mid] === 'undefined' || JCC.P1.vl[mid][0].vstatus != 1) && typeof JCC.P3.rl[JCC.S.sel_rid] === 'undefined') {
	    //JCC.P3.m({'t':'info', 'c':'visitor_left_site_1'});
	    alert(ACC.MSG['info']['visitor_left_site_1']);
	    return;
	}

	// 1 - If room openned - send with room id
	// If not - send wo room id and done. Wait incoming answer with new room id, then add new tab and so

	m = o.value;
	if (m == '') { return; }
    
    // Clear send typing hint timer
//    if (JCC.P3.tt != null) {
//	clearTimeout(JCC.P3.tt);
//	JCC.P3.tt = null;
//    }

	// If no room in list, open new
//	if (typeof JCC.P3.rl[rid] === 'undefined') { rid = 0; }

	// Send message
	JCC.s('13020{{-}}3{{-}}' + mid + '{{-}}' + ut + '{{-}}' + rid + '{{-}}' + JCC.euc(m)+ai);
    };


    function go_test() {
console.log(JCC.so);
    }


    return {
	Initialize: initialize_api,
	SignIn: sign_in,
	SignOut: sign_out,
	GetConfig: get_config,
	GetForms: get_forms,
	GetUserName: ovn,
	GetUserFrom: guf,
	GetMemberInfo: osn,
	GetChatRoomMessages: get_chat_room,
	ChangeAvailableStatus: cas,
	TakeChatFromQueue: tqm,
	SendDeliveryNotification: sdn,
	SendReadNotification: srn,
	SendMessage: send_message,
	CloseChatRoom: close_chat_room,
	test: go_test
    };
})();
