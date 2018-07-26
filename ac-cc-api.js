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

		    // Get queued dialogs
		    if (typeof d.nac !== 'undefined' && d.nac.length > 0) {
			for (var i = 0; i < d.nac.length; i++) {
			    // Not Allocated Conversations
			    // Check previous defined
			    if (typeof JCC.P3.aqm[d.nac[i].dqid] !== 'undefined') {
				if (JCC.P3.aqm[d.nac[i].dqid].mct > 0) { clearInterval(JCC.P3.aqm[x.nac[i].dqid].mct); }
			    }
			    JCC.P3.aqm[d.nac[i].dqid] = d.nac[i];
			}
		    }
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
	    case 30: {
		JCC.P3.d1(d);
	    } break;
	    case 40: {
		JCC.P3.n1(d);
	    } break;
	    case 50: {
		JCC.P3.r2(d);
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
		// Update JS, DOM
		if (!JCC.P3.queues) {
		    JCC.P3.queues = d.q;
		} else {
		    // TODO
		    // Just update JS, keep dynamic data
		    // Delete if key not in d.q
		    // Add if new key
		    // Keep .dyn object and replace key, then add .dyn back
		}
		// Display Queues. DM. Do it in GUI
		//JCC.P3.qd();
	    } break;
	    case 'n': {
		// New Incoming Conversation
		// Check previous defined
		if (typeof JCC.P3.aqm[d.dqid] !== 'undefined') {
		    if (JCC.P3.aqm[d.dqid].mct > 0) { clearInterval(JCC.P3.aqm[d.dqid].mct); }
		}
		JCC.P3.aqm[d.dqid] = d.nr;
		JCC.P3.qmc(d.dqid); // Exclude GUI
	    } break;
	    case 't': {
		// Conversation taken - delete it
		if (JCC.P3.aqm[d.dqid]) {
		    clearInterval(JCC.P3.aqm[d.dqid].mct);
		    if (typeof JCC.P3.aqm[d.dqid]._n !== 'undefined') {
			JCC.P3.aqm[d.dqid]._n.close();
		    }
		}

		delete JCC.P3.aqm[d.dqid];
	    } break;
	}
    };

JCC.P3.qmc = function(d) {
    switch (JCC.P3.aqm[d].sut) {
	case 1: {
	    if (typeof JCC.P3.ol[JCC.P3.aqm[d].sid] !== 'undefined') {
	    } else if (JCC.P3.aqm[d].smi && JCC.P3.aqm[d].smi.a) {
		JCC.P3.ol[JCC.P3.aqm[d].sid] = {ap:JCC.P3.aqm[d].smi.a.afn, fn:JCC.P3.aqm[d].smi.a.fn, gid:0, helper:0, id:JCC.P3.aqm[d].sid, ln:JCC.P3.aqm[d].smi.a.ln, pn:JCC.P3.aqm[d].smi.p};
	    } else {
	    }
	} break;
	case 2: {
	    if (typeof JCC.P1.vl[JCC.P3.aqm[d].sid+'-'+JCC.P3.aqm[d].domid] === 'object') {
	    } else {
		if (typeof JCC.P3.aqm[d].sinfo !== 'undefined') {
		    JCC.P1.vl[JCC.P3.aqm[d].sid+'-'+JCC.P3.aqm[d].domid] = [];
		    JCC.P1.vl[JCC.P3.aqm[d].sid+'-'+JCC.P3.aqm[d].domid][0] = {ap:JCC.P3.aqm[d].sinfo.a.afn, fn:JCC.P3.aqm[d].sinfo.a.fn, idd:JCC.P3.aqm[d].domid, lid:JCC.P3.aqm[d].lid, ln:JCC.P3.aqm[d].sinfo.a.ln, vid:JCC.P3.aqm[d].sid+'-'+JCC.P3.aqm[d].domid, vid2:JCC.P3.aqm[d].sid};
		} else {
		}
	    }
	} break;
	case 200: {
	} break;
    }
};

// Notifies
JCC.P3.n1 = function(d) {
    var o;

    if (typeof d.r !== 'undefined' && typeof JCC.P3.rl[d.r] !== 'undefined') JCC.P3.rl[d.r].i_lat = Date.now();

    switch(d.n) {
	// Message transfer notify
	case 10: {
	    // Clear in GUI
	    //JCC.$('jcc-dialog-input').value = '';
	} break;
	// Member join conversation
	case 15: {
	    // TODO
	} break;
	// Message read notify
	case 20: {
	    if (typeof JCC.P3.rl[d.r] === 'undefined') return;
	    // update message
	    if (!JCC.P3.rl[d.r] || !JCC.P3.rl[d.r].msgs) return;

	    var s = 0;
	    for (s = 0; s < JCC.P3.rl[d.r].msgs.length; s++) {
		if (JCC.P3.rl[d.r].msgs[s].id == d.msgid) {
		    JCC.P3.rl[d.r].msgs[s].rt = d.rt;
		    break;
		}
	    }
	} break;
	// Message delivered notify
	case 30: {
	    if (typeof JCC.P3.rl[d.r] === 'undefined') return;
	    // update message
	    if (!JCC.P3.rl[d.r] || !JCC.P3.rl[d.r].msgs) return;

	    var s = 0;
	    for (s = 0; s < JCC.P3.rl[d.r].msgs.length; s++) {
		if (JCC.P3.rl[d.r].msgs[s].id == d.msgid) {
		    JCC.P3.rl[d.r].msgs[s].dt = d.dt;
		    break;
		}
	    }
	} break;
	// Typing notify.
	case 40: {
	    if (typeof JCC.P3.rl[d.r] === 'undefined') return;
	    // Update in th. Delete then msg received only
	    if (typeof JCC.P3.rl[d.r].th === 'undefined') JCC.P3.rl[d.r].th = {};
	    if (d.domid) {
	        JCC.P3.rl[d.r].th[d.ut+'-'+d.mid+'-'+d.domid] = d.t;
	    } else {
		JCC.P3.rl[d.r].th[d.ut+'-'+d.mid] = d.t;
	    }
	} break;
	// Conference invite notify
	case 50: {
	    // GUI
	} break;
	// Admin close room
	case 60: {
	    // Admin leaved room or visitor leave site, so close TAB
	    // 0. Delete visitor from P1.vl if his is left the site
	    // 1. Delete from rl
	    // 2. Delete TAB and area if open, close input
	    // 3. Select nothing. ???May need select previus selected???

	    if (typeof JCC.P3.rl[d.r] === 'undefined') return;
	    var vid;
	    if (typeof JCC.P3.rl[d.r] !== 'undefined') {
		if (JCC.P3.rl[d.r].rut == 2) vid = JCC.P3.rl[d.r].rid + '-' + JCC.P3.rl[d.r].domid;
	        if (JCC.P3.rl[d.r].sut == 2) vid = JCC.P3.rl[d.r].sid + '-' + JCC.P3.rl[d.r].domid;
		if (vid && typeof JCC.P1.vl[vid] !== 'undefined') if (JCC.P1.vl[vid][0].vstatus == 0) delete JCC.P1.vl[vid];

		if (JCC.P3.rl[d.r]) { delete JCC.P3.rl[d.r]; }
	    }
	} break;
	// Uploading: progress
	case 70: {
	    // GUI
	} break;
	// Uploading: abort / error
	case 75: {
	    // Remove IS message from array if avail
	    if (typeof JCC.P3.rl[d.r] !== 'undefined')
	    for (var _i = 0; _i < JCC.P3.rl[d.r].msgs.length; _i++) {
		if (JCC.P3.rl[d.r].msgs[_i].ut == 10 && JCC.P3.rl[d.r].msgs[_i].mid == 200 && JCC.P3.rl[d.r].msgs[_i].body.indexOf(':'+d.h+':') > 0) {
		    JCC.P3.rl[d.r].msgs.splice(_i, 1);
		}
	    }
	} break;
	// Visitor block/unblock
	case 80: {
	    var vli = d.vid+'-'+d.idd;
	    if (d.c == 1 && typeof JCC.P1.vl[vli] !== 'undefined') {
		JCC.P1.vl[vli][0].fo = d.fo;
		JCC.P1.vl[vli][0].fodo = d.fodo;
	    }
	    if (d.c == 2 && typeof JCC.P1.vl[vli] !== 'undefined') {
		delete JCC.P1.vl[vli][0].fo;
		delete JCC.P1.vl[vli][0].fodo;
	    }
	} break;
	// Form to visitor was sent
	case 90: {
	    // Replace Send button with text
	    // GUI
	} break;
	// Tags: add new
	case 100: {
	    if (!JCC.C.tags) JCC.C.tags = [];
	    JCC.C.tags.push(decodeURIComponent(d.t));
	} break;
	// Tags: update tag in list
	case 101: {
	    if (!JCC.C.tags && d.t != '') {
		JCC.C.tags = [];
		JCC.C.tags.push(decodeURIComponent(d.t));
	    } else {
		for (var i = 0; i < JCC.C.tags.length; i++) {
		    if (decodeURIComponent(d.o) == JCC.C.tags[i]) {
			if (d.t == '') {
			    JCC.C.tags.splice(i, 1);
			} else {
			    JCC.C.tags[i] = decodeURIComponent(d.t);
			}
			break;
		    }
		}
	    }
	} break;
	// Tags: change Tags event
	case 103: {
	    switch (d.ot) {
		case 1: {
		    if (typeof JCC.P3.rl[d.r] === 'undefined') return;
		    JCC.P3.rl[d.r].tags = d.t;
		} break;
	    }
	} break;
	// Category: change category event
	case 106: {
	    switch (d.ot) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5: {
		    if (d.ot == 1) {
		        if (typeof JCC.P3.rl[d.oid] === 'undefined') return;
			JCC.P3.rl[d.oid].idcat = d.c;
		    }
		} break;
	    }
	} break;
    }
};



    // Add admins
    JCC.P3.s1 = function(l) {
	JCC.P3.dl = [];
	for (var d = 0; d < l.length; d++) {
	    for (var a = 0; a < l[d].adms.length; a++) {
		JCC.P3.ol[l[d].adms[a].id] = l[d].adms[a];
		JCC.P3.ol[l[d].adms[a].id].gid = l[d].id;
	    }
	    JCC.P3.dl.push({gid: l[d].id, name: l[d].name});
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



    // Chat events
    JCC.P3.d1 = function(d) {
	var o;
        var p;
	var t;
	var c;
	var ct = 1;

    console.log('RCV dialog update.');
    console.log(d);
    // 1 Is it new or exists dialog?

	// New conversation
	if (!JCC.P3.rl[d.r] && d.msg.ut == 10 && d.msg.mid == 100) {
	    if (typeof d.msg.ovl !== 'undefined' && d.msg.ovl.length > 0) {
        	for (var vi = 0; vi < d.msg.ovl.length; vi++) {
            	    if (typeof JCC.P1.vl[d.msg.ovl[vi].vid] === 'undefined') {
                	JCC.P1.vl[d.msg.ovl[vi].vid] = [d.msg.ovl[vi]];
            	    }
        	}
	    }
	    // New chat from admin
	    if (d.msg.sut == 1 && d.msg.sid != JCC.C.mid) {
		// Get sender info
		var sn = '';
		switch (d.msg.sut) {
		    case 1: {
			if (typeof JCC.P3.ol[d.msg.sid] === 'object') {
			    sn = ovn(d.msg.sid, null, null, null, null, 1);
		        } else { sn = '?'; }
		    } break;
		}
	    }
	    // New chat from visitor
	    if (d.msg.sut == 2 && d.msg.dc != 1) {
		// Get sender info
		var sn = '';
		switch (d.msg.sut) {
		    case 2: {
			if (typeof JCC.P1.vl[d.msg.sid+'-'+d.msg.domid] === 'object') {
			    sn = ovn(null, d.msg.sid+'-'+d.msg.domid, null, null, null, 1);
		        } else { sn = ACC.L[7]; }
		    } break;
		}
	    }

	    console.log('add new room');
	    JCC.P3.rl[d.r] = {};
	    // state: 1 - dialog, 2 - conference
	    JCC.P3.rl[d.r].s = d.msg.s;
	    // Current members
	    JCC.P3.rl[d.r].m = d.msg.m;
	    // All members which touch dialog
	    JCC.P3.rl[d.r].mmbrs = d.msg.mmbrs;

	    // Messages container
	    JCC.P3.rl[d.r].msgs = [];

	    // Room sender/recipient. Update on transfer.
	    JCC.P3.rl[d.r].rid = d.msg.rid;
	    JCC.P3.rl[d.r].rut = d.msg.rut;
	    JCC.P3.rl[d.r].sid = d.msg.sid;
	    JCC.P3.rl[d.r].sut = d.msg.sut;

	    JCC.P3.rl[d.r].id = d.r;
	    JCC.P3.rl[d.r].domid = d.msg.domid;
	    JCC.P3.rl[d.r].lid = d.msg.lid;

	    // Typing hints and stop typing hint
	    JCC.P3.rl[d.r].th = {};
	    // Typing icon hide timer
	    JCC.P3.rl[d.r].tht = null;
	    // Unread Messages
	    JCC.P3.rl[d.r].um = {};

	    c = 'btn';
	    ct = 0;
	} else {
	    // Not new
	    // and Not my and Not system
	    if (d.msg && d.msg.ut != 10 && !(d.msg.ut == 1 && d.msg.mid == JCC.C.mid)) {
		if (typeof JCC.P3.rl[d.r] !== 'undefined') {
		    if (JCC.P3.rl[d.r].um.ut == d.msg.ut && JCC.P3.rl[d.r].um.mid == d.msg.mid) {
			JCC.P3.rl[d.r].um.mc++;
			// Event to GUI callback
		    } else if (typeof JCC.P3.rl[d.r].um.ut === 'undefined') {
			JCC.P3.rl[d.r].um = {mc:1, ut:d.msg.ut, mid:d.msg.mid};
			// Event to GUI callback
		    }
		}
	    }
	}

	// Last activity
        if (JCC.P3.rl[d.r]) JCC.P3.rl[d.r].i_lat = Date.now();

	// Transfer
        if (JCC.P3.rl[d.r] && d.msg.ut == 10 && d.msg.mid == 130) {
	    // Check member
	    if (typeof JCC.P3.ol[d.msg.tm.m] === 'undefined') {
        	JCC.P3.ol[d.msg.tm.m] = {ap:d.msg.tm.a.afn, fn:d.msg.tm.a.fn, gid:0, helper:0, id:d.msg.tm.m, ln:d.msg.tm.a.ln, pn:d.msg.tm.p};
	    }

	    // Update sender/recipient for room
	    if (d.msg.rid && d.msg.sid) {
		JCC.P3.rl[d.r].rid = d.msg.rid;
	        JCC.P3.rl[d.r].rut = d.msg.rut;
	        JCC.P3.rl[d.r].sid = d.msg.sid;
		JCC.P3.rl[d.r].sut = d.msg.sut;
	    }
	}
    
	// Skip early 130 transfer msg
	if (!JCC.P3.rl[d.r] && d.msg.ut == 10 && d.msg.mid == 130) {
	    return;
	}

	if (JCC.P3.rl[d.r] && d.msg.ut == 10 && d.msg.mid == 142) {
	    // Check member
	    if (typeof JCC.P3.ol[d.msg.cm.m] === 'undefined') {
        	JCC.P3.ol[d.msg.cm.m] = {ap:d.msg.cm.a.afn, fn:d.msg.cm.a.fn, gid:0, helper:0, id:d.msg.cm.m, ln:d.msg.cm.a.ln, pn:d.msg.cm.p};
	    }

	    JCC.P3.rl[d.r].s = d.msg.s;
	}

	if (typeof d.msg !== 'undefined' && JCC.P3.rl[d.r]) {
	    if (JCC.P3.rl[d.r].msgs) JCC.P3.rl[d.r].msgs.push(d.msg);

	    // delete typing hint
	    if (d.msg.ut == 2) {
		if (JCC.P3.rl[d.r].th && (JCC.P3.rl[d.r].th[d.msg.ut+'-'+d.msg.mid+'-'+JCC.P3.rl[d.r].domid] || JCC.P3.rl[d.r].th[d.msg.ut+'-'+d.msg.mid+'-'+JCC.P3.rl[d.r].domid] == '')) {
		    delete JCC.P3.rl[d.r].th[d.msg.ut+'-'+d.msg.mid+'-'+JCC.P3.rl[d.r].domid];
		    console.log('HINT deleted for ' + d.r + ' room, '+d.msg.ut+'-'+d.msg.mid+'-'+JCC.P3.rl[d.r].domid);
		}
	    } else {
		if (JCC.P3.rl[d.r].th && (JCC.P3.rl[d.r].th[d.msg.ut+'-'+d.msg.mid] || JCC.P3.rl[d.r].th[d.msg.ut+'-'+d.msg.mid] == '')) {
		    delete JCC.P3.rl[d.r].th[d.msg.ut+'-'+d.msg.mid];
		    console.log('HINT deleted for ' + d.r + ' room, '+d.msg.ut+'-'+d.msg.mid);
		}
	    }
	}
	return;
    };

    //
    JCC.P3.r2 = function(d) {
	var o;
	var t = '';
	var f = '';
	var i;

	// If it history or not closed room, insert it into special element with limited back notices (read, delivery), only for e=dialog-s2
	if (d.e && d.e.length > 0) {
	    if (d.e == 'tabs') {
		if (typeof d.ovl !== 'undefined' && d.ovl.length > 0) {
		    for (var vi = 0; vi < d.ovl.length; vi++) {
			if (typeof JCC.P1.vl[d.ovl[vi].vid] === 'undefined') {
			    JCC.P1.vl[d.ovl[vi].vid] = [d.ovl[vi]];
			}
		    }
		}
		for (i = 0; i < d.h.length; i++) {
		    var n = 0;
		    var tbs = 'btn';

		    if (d.h[i].mmbrs && d.h[i].mmbrs.length > 0) {
			for (var ii = 0; ii < d.h[i].mmbrs.length; ii++) {
			    if (d.h[i].mmbrs[ii].u == 1 && !JCC.P3.ol[d.h[i].mmbrs[ii].m]) {
				JCC.P3.ol[d.h[i].mmbrs[ii].m] = {ap:d.h[i].mmbrs[ii].a.afn, fn:d.h[i].mmbrs[ii].a.fn, gid:0, helper:0, id:d.h[i].mmbrs[ii].m, ln:d.h[i].mmbrs[ii].a.ln, pn:d.h[i].mmbrs[ii].p};
			    }
			    if (d.h[i].mmbrs[ii].u == 2 && !JCC.P1.vl[d.h[i].mmbrs[ii].m+'-'+d.h[i].domid]) {
				JCC.P1.vl[d.h[i].mmbrs[ii].m+'-'+d.h[i].domid] = [];
			        JCC.P1.vl[d.h[i].mmbrs[ii].m+'-'+d.h[i].domid][0] = {ap:d.h[i].mmbrs[ii].a.afn, fn:d.h[i].mmbrs[ii].a.fn, idd:d.h[i].domid, lid:d.h[i].lid, ln:d.h[i].mmbrs[ii].a.ln, vid:d.h[i].mmbrs[ii].m+'-'+d.h[i].domid, vid2:d.h[i].mmbrs[ii].m};
			    }
			}
		    }

		    // New
		    if (d.h[i].n == 1) {
			n = 1;
			// send back delivery notify
			JCC.s('13040{{-}}3{{-}}' + d.h[i].id + '{{-}}0', 500);
		    }
		    // Transfer
		    if (d.h[i].n == 2) {
			n = 2;
		    }
		    // Conference
		    if (d.h[i].n == 3) {
			n = 3;
		    }
		
		    if (!JCC.P3.rl[d.h[i].id]) JCC.P3.rl[d.h[i].id] = {};

		    // Update sender/recipient for room
		    JCC.P3.rl[d.h[i].id].rid = d.h[i].rid;
		    JCC.P3.rl[d.h[i].id].rut = d.h[i].rut;
	    	    JCC.P3.rl[d.h[i].id].sid = d.h[i].sid;
		    JCC.P3.rl[d.h[i].id].sut = d.h[i].sut;
		    JCC.P3.rl[d.h[i].id].um = d.h[i].um;
		    if (d.h[i].qid) JCC.P3.rl[d.h[i].id].qid = d.h[i].qid;
		    if (d.h[i].domid >= 0) JCC.P3.rl[d.h[i].id].domid = d.h[i].domid;
		    if (d.h[i].s >= 0) JCC.P3.rl[d.h[i].id].s = d.h[i].s;
		    if (d.h[i].st >= 0) JCC.P3.rl[d.h[i].id].st = d.h[i].st;
		    if (d.h[i].et >= 0) JCC.P3.rl[d.h[i].id].et = d.h[i].et;

		    if (d.h[i].mmbrs) JCC.P3.rl[d.h[i].id].mmbrs = d.h[i].mmbrs;
		    if (d.h[i].vhi) JCC.P3.rl[d.h[i].id].vhi = d.h[i].vhi;

		    JCC.P3.rl[d.h[i].id].i_lat = Date.now();

		    // Typing hints and stop timer
		    JCC.P3.rl[d.h[i].id].th = {};
		    JCC.P3.rl[d.h[i].id].stht = {};
		    // Typing icon hide timer
		    JCC.P3.rl[d.h[i].id].tht = null;
		}
		return;
	    }
	    if (d.e == 'ar') {
		// exclude empty loops
		if (d.r.id > 0) {
		    var ut, id;
		    if (d.r.sut == 1 && d.r.sid == JCC.C.mid) {
			ut = d.r.rut;
//		    id = d.r.rid;
			if (ut == 1) id = d.r.rid;
			if (ut == 2) id = d.r.rid + '-' + d.r.domid;
			if (ut == 200) id = d.r.rid;
		    } else {
			ut = d.r.sut;
//		    id = d.r.sid;
		        if (ut == 1) id = d.r.sid;
			if (ut == 2) id = d.r.sid + '-' + d.r.domid;
			if (ut == 200) id = d.r.sid;
		    }
		    if (!JCC.P3.rl[d.r.id]) JCC.P3.rl[d.r.id] = {};

		    if (d.r.mmbrs && d.r.mmbrs.length > 0) {
			for (var i = 0; i < d.r.mmbrs.length; i++) {
			    if (d.r.mmbrs[i].u == 1 && !JCC.P3.ol[d.r.mmbrs[i].m]) {
				JCC.P3.ol[d.r.mmbrs[i].m] = {ap:d.r.mmbrs[i].a.afn, fn:d.r.mmbrs[i].a.fn, gid:0, helper:0, id:d.r.mmbrs[i].m, ln:d.r.mmbrs[i].a.ln, pn:d.r.mmbrs[i].p};
			    }
			}
		    }

		    var th = JCC.P3.rl[d.r.id].th;
		    var stht = JCC.P3.rl[d.r.id].stht;
		    var tht = JCC.P3.rl[d.r.id].tht;
		    JCC.P3.rl[d.r.id] = d.r;
		    JCC.P3.rl[d.r.id].th = th;
		    JCC.P3.rl[d.r.id].stht = stht;
		    JCC.P3.rl[d.r.id].tht = tht;
		    if (!JCC.P3.rl[d.r.id].m && d.r.msgs[0].ut == 10 && d.r.msgs[0].mid == 150) {
			// Convert member obj to array
			JCC.P3.rl[d.r.id].m = [];
			JCC.P3.rl[d.r.id].m.push({'mid':d.r.msgs[0].m.m, 'ut': d.r.msgs[0].m.u});
		    }
		    if (!JCC.P3.rl[d.r.id].m) {
			if (typeof d.r.msgs[0].m !== 'undefined') {
			    JCC.P3.rl[d.r.id].m = d.r.msgs[0].m;
			} else {
			    JCC.P3.rl[d.r.id].m = [];
			}
		    }

		    JCC.P3.rl[d.r.id].rid = d.r.rid;
		    JCC.P3.rl[d.r.id].rut = d.r.rut;
		    JCC.P3.rl[d.r.id].sid = d.r.sid;
		    JCC.P3.rl[d.r.id].sut = d.r.sut;

		    if (d.r.vhi) JCC.P3.rl[d.r.id].vhi = d.r.vhi;

		    JCC.P3.rl[d.r.id].domid = d.r.domid;
		    JCC.P3.rl[d.r.id].i_lat = Date.now();
		}
		return;
	    }
	    if (d.r) {
		if (d.r.et) {
		    JCC.P3.ec[d.r.id] = d.r;
		} else {
		    // active room!
		    JCC.P3.rl[d.r.id] = d.r;
		}
	    }
	}
	if (d.uf) {
	    switch (d.uf) {
		case 10: {
		    if (d.i === 'suf') {
			CC.P3.sufr(d.h);
		    } else {
			if (JCC.P3._e_ifs) JCC.P3._e_ifs.onR(d.h);
	    	    }
	        } break;
		case 20: { /*DENY*/ } break;
	    }
        }
	if (d.va) {
	    //if (typeof JCC.P1.val === 'undefined') JCC.P1.val = {};
	    //JCC.P1.val[d.va.id] = d.va;
	    //JCC.P3.d4(d.va.id, d.je);
	}
    };

    JCC.P3.umc = function(r) {
	// Unread Messages Count
	var umc = 0;
	if (typeof JCC.P3.rl[r] !== 'undefined' && JCC.P3.rl[r].msgs && JCC.P3.rl[r].msgs.length > 0) {
	    for (var i = JCC.P3.rl[r].msgs.length; i > 0; i--) {
		if (JCC.P3.rl[r].msgs[i].ut == 10) continue;
		console.log(JCC.P3.rl[r].msgs[i]);
		// If message not mine and rt is 0 - +1 unread
		// If (umc > 0 and message mine) or rt > 0 - stop count
		if (!(JCC.P3.rl[r].msgs[i].ut == 1 && JCC.P3.rl[r].msgs[i].mid == JCC.C.mid) && !JCC.P3.rl[r].msgs[i].rt) {
		    umc++;
		    continue;
		}
		if (!(JCC.P3.rl[r].msgs[i].ut == 1 && JCC.P3.rl[r].msgs[i].mid == JCC.C.mid) && JCC.P3.rl[r].msgs[i].rt > 0) {
		    return umc;
		}
		if (JCC.P3.rl[r].msgs[i].ut == 1 && JCC.P3.rl[r].msgs[i].mid == JCC.C.mid) {
		    return umc;
		}

	    }
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
		if (!qn) qn = ACC.L[383];

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
	JCC.P3.dl = [];
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
    var gdti = function(d, m) {
	var ut;
	var id;
	var ap;
	var ts;
	var prsi;
	var tt;
	// UT. 1 - Admin; 2 - Visitor; 200 - Viber
	// Conversation
	if (m.s == 1) {
	    if (m.sut == 1 && m.sid == JCC.C.mid) {
		// Its me, show recipient avatar
		ut = m.rut;
		if (ut == 1) id = m.rid;
		if (ut == 2) id = m.rid+'-'+m.domid;
		if (ut == 200 || ut == 201) id = m.rid;

		if (m.rut == 1) {
		    // Show admin avatar
		    if (typeof JCC.P3.ol[m.rid] !== 'undefined') {
			ap = '//'+JCC.$h+'/avatar' + JCC.P3.ol[m.rid].ap;
			ts = guf(m.rid, 1);
			if (JCC.P3.ol[id].st >= 1) prsi = 'jcc-prs-on';
			else prsi = 'jcc-prs-off';
		    }
		    tt = ovn(m.rid);
		}
		if (m.rut == 2) {
		    // Show visitor avatar
		    if (typeof JCC.P1.vl[id] !== 'undefined') {
			ap = '//'+JCC.$h+'/avatar' + JCC.P1.vl[id][0].ap;
		    } else {
			// Chat from social or messenger or from "offline" page (may on mobile)
		    }
		    if (JCC.P3.rl[d] && !JCC.P3.rl[d].et) prsi = 'jcc-prs-on';
		    else prsi = 'jcc-prs-off';
		    tt = ovn(null, id);
		    ts = guf(id, 2);
		}
		if (m.rut == 200 || m.rut == 201) {
		    var si = osn(m.rid, m.rut, m.mmbrs);
		    if (si.length > 0) {
			tt = si[0];
			ap = si[1];
		    }
		    prsi = 'jcc-prs-off';
	    	    if (JCC.P3.rl[d]) ts = guf(0, 0, d);
		}
    	    } else {
		// New incoming dialog from world
		// Show admin avatar
		ut = m.sut;
		if (ut == 1) id = m.sid;
		if (ut == 2) id = m.sid+'-'+m.domid;
		if (ut == 200 || ut == 201) id = m.sid;

		if (m.sut == 1) {
		    if (typeof JCC.P3.ol[m.sid] !== 'undefined') {
			ap = '//'+JCC.$h+'/avatar' + JCC.P3.ol[m.sid].ap;
			ts = guf(m.sid, 1);
			if (JCC.P3.ol[id].st >= 1) prsi = 'jcc-prs-on';
			else prsi = 'jcc-prs-off';
		    }
		    tt = ovn(m.sid);
		}
		if (m.sut == 2) {
		    // Show visitor avatar
		    if (typeof JCC.P1.vl[m.sid+'-'+m.domid] !== 'undefined') {
			if (typeof JCC.P1.vl[id] !== 'undefined') {
			    ap = '//'+JCC.$h+'/avatar' + JCC.P1.vl[id][0].ap;
			}
		    } else {
			// Chat from social or messenger or from "offline" page (may on mobile)
		    }
		    if (JCC.P3.rl[d] && !JCC.P3.rl[d].et) prsi = 'jcc-prs-on';
		    else prsi = 'jcc-prs-off';
		    tt = ovn(null, id);
		    ts = guf(id, 2);
    		}
		if (m.sut == 200 || m.sut == 201) {
		    var si = osn(m.sid, m.sut, m.mmbrs);
		    if (si.length > 0) {
			tt = si[0];
			ap = si[1];
		    }
		    prsi = 'jcc-prs-off';
		    if (JCC.P3.rl[d]) ts = guf(m.sid, m.sut, JCC.P3.rl[d].domid);
		}
	    }
	    if (ap == '') ap = '//'+JCC.$h+'/avatar/question.svg';
	}
	// Conference
	if (m.s == 2) {
	    ut = m.sut;
	    prsi = 'jcc-prs-conf';
	    if (ut == 1) id = m.sid;
	    if (ut == 2) id = m.sid+'-'+m.domid;
	    if (ut == 200 || ut == 201) id = m.sid;
	    if (m.sut == 1) { ap = '//'+JCC.$h+'/avatar' + JCC.P3.ol[m.sid].ap; }

	    if (m.sut == 1 && m.sid == JCC.C.mid) {
		ut = m.rut;
	        if (ut == 1) id = m.rid;
		if (ut == 2) id = m.rid+'-'+m.domid;
	        if (ut == 200 || ut == 201) id = m.rid;

		if (m.rut == 1) { ap = '//'+JCC.$h+'/avatar' + JCC.P3.ol[id].ap; }
	        if (m.rut == 2) { ap = '//'+JCC.$h+'/avatar' + JCC.P1.vl[id][0].ap; }
	    } else if (m.rut == 1 && m.rid == JCC.C.mid) {
		ut = m.sut;
		if (ut == 1) id = m.sid;
		if (ut == 2) id = m.sid+'-'+m.domid;
		if (ut == 200 || ut == 201) id = m.sid;
		if (m.sut == 1) { ap = '//'+JCC.$h+'/avatar' + JCC.P3.ol[id].ap; }
		if (m.sut == 2) { ap = '//'+JCC.$h+'/avatar' + JCC.P1.vl[id][0].ap; }
	    } else {
		// Im not sender and not recipient
		// If visitor present - his avatar display
		// If admin-admin - lets initiator avatar display (sender)
		if (m.sut == 1 && m.rut == 1) {
		    if (m.sid == JCC.C.mid) {
			id = m.rid;
			ap = '//'+JCC.$h+'/avatar' + JCC.P3.ol[m.rid].ap;
		    } else if (m.rid == JCC.C.mid) {
			id = m.sid;
			ap = '//'+JCC.$h+'/avatar' + JCC.P3.ol[m.sid].ap;
		    } else {
			id = m.sid;
			ap = '//'+JCC.$h+'/avatar' + JCC.P3.ol[m.sid].ap;
		    }
		} else {
		    if (m.sut == 2 && m.rut == 1) {
			ut = m.sut;
			id = m.sid+'-'+m.domid;
		    }
		    if (m.sut == 1 && m.rut == 2) {
			ut = m.rut;
		        id = m.rid+'-'+m.domid;
		    }
		    if (id && typeof JCC.P1.vl[id] === 'object') {
			ap = '//'+JCC.$h+'/avatar' + JCC.P1.vl[id][0].ap;
		    } else {
			// Messenger subscriber
			if (m.sut == 200 || m.sut == 201) {
			    ut = m.sut;
			    id = m.sid;
		        } else if (m.rut == 200 || m.rut == 201) {
		    	    ut = m.rut;
			    id = m.rid;
		        } else {
		    	    console.log('Error: new dialog tab with visitor or messenger subscriber received, but visitor not in list. VID:'+m.sid+'-'+m.domid);
			    return -1;
			}
		    }		
		}
	    }
	    if (ut == 200 || ut == 201) {
		if (typeof JCC.P3.rl[d] !== 'undefined') {
		    var ro = JCC.P3.rl[d];
		    if (typeof ro.mmbrs !== 'undefined' && ro.mmbrs.length > 0) for (var __i = 0; __i < ro.mmbrs.length; __i++) {
            		if ((ro.mmbrs[__i].u == 200 || ro.mmbrs[__i].u == 201) && ro.mmbrs[__i].m == id && ro.mmbrs[__i].a) {
                    	    ap = '//'+JCC.$h+'/avatar/a/vt/avt-0-0.svg';
                    	    if (ro.mmbrs[__i].a.afn) ap = ro.mmbrs[__i].a.afn;
                    	    break;
            		}
            	    }
		}
	    }

	    tt = ACC.L[68];
	    var m0 = 0, m1 = 0, m2 = 0;
	    if (typeof JCC.P3.rl[d].m !== 'undefined') m1 = JCC.P3.rl[d].m.length;
	    if (typeof JCC.P3.rl[d].mmbrs !== 'undefined') m2 = JCC.P3.rl[d].mmbrs.length;
	    m0 = m1;
	    if (m2 > m1) m0 = m2;
	    ts = m0 + ' '+ACC.L[533+ACC.glp(m0)];
	}
	return {'ap':ap, 'ts':ts, 'prsi':prsi, 'tt':tt, 'ut':ut, 'id':id};
    }
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
	if (typeof JCC.P3.rl[r] !== 'undefined' && typeof JCC.P3.rl[r].msgs !== 'undefined') {
	    for (var i = 0; i < JCC.P3.rl[r].msgs.length; i++) {
		if (JCC.P3.rl[r].msgs[i].id == m) {
		    JCC.P3.rl[r].msgs[i].delivered = 1;
		    break;
		}
	    }
	}

	JCC.s('13040{{-}}3{{-}}' + r + '{{-}}' + m, 500);
    }
    // Send read notification
    function srn(r, m) {
	if (typeof JCC.P3.rl[r] !== 'undefined' && typeof JCC.P3.rl[r].msgs !== 'undefined') {
	    for (var i = 0; i < JCC.P3.rl[r].msgs.length; i++) {
		if (JCC.P3.rl[r].msgs[i].id == m) {
		    JCC.P3.rl[r].msgs[i].read = 1;
		    break;
		}
	    }
	    // Clear unread messages
	    JCC.P3.rl[r].um = {};
	}

	JCC.s('13030{{-}}3{{-}}' + r + '{{-}}' + m, 500);
    }
    // Get room messages
    function get_chat_room_msgs(r, a) {
	// Request body. Chat messges returner at event P 3/50
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

    function get_users() { return JCC.P3.ol; }
    function get_departments() { return JCC.P3.dl; }
    function get_virtual_queues() { return JCC.P3.queues; }
    function get_visitors() { return JCC.P1.vl; }
    function get_chat_rooms() { return JCC.P3.rl; }
    function get_queued_chats() { return JCC.P3.aqm; }

    function set_chat_room_owners(r, m) {
	if (!JCC.P3.rl[r]) return;
        JCC.P3.rl[r].rid = m.rid;
	JCC.P3.rl[r].rut = m.rut;
	JCC.P3.rl[r].sid = m.sid;
	JCC.P3.rl[r].sut = m.sut;
	if (m.m) JCC.P3.rl[r].m = m.m;
    }

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
	GetUsers: get_users,
	GetDialogTitleInfo: gdti,
	GetVirtualQueues: get_virtual_queues,
	GetVisitors: get_visitors,
	GetDepartments: get_departments,
	GetMemberInfo: osn,
	GetChatRooms: get_chat_rooms,
	GetChatRoomMessages: get_chat_room_msgs,
	GetQueuedChats: get_queued_chats,
	ChangeAvailableStatus: cas,
	TakeChatFromQueue: tqm,
	SendDeliveryNotification: sdn,
	SendReadNotification: srn,
	SendMessage: send_message,
	SetChatRoomOwners: set_chat_room_owners,
	CloseChatRoom: close_chat_room,
	test: JCC.P3.umc
    };
})();
