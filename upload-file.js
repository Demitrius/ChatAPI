// Komponent zagruzki files
JCC.uf = function() {
    function Cls(p, u) {
	if (typeof p === 'string') this.p = JCC.$(p); else this.p = p;
	if (!this.p && !u) return false;
	if (this.p) this.p.innerHTML = '';

	this.u = u;
	this.f = JCC.$$('form');
	this.i = JCC.$$('input');
	this.i.setAttribute('type','file');
	this.i.setAttribute('name','file');
	this.i.setAttribute('multiple','');
	this.f.setAttribute('enctype', 'multipart/form-data');
	this.i.style.display = 'none';
	this.state = 0;
	this.rid = JCC.S.sel_rid;

	// Vibrali faily i gotovi zagruzit v "formu"
	JCC.addEvent(this.i, 'change', function(o) { return function(e) { o.onFileChange(this,e||event);}; }(this));

	if (!u) this.f.appendChild(this.i);
	if (this.p) this.p.appendChild(this.f);
    };
    Cls.prototype = {
	a : function() { this.i.click(); },
	c : function() { if (this.x) { this.abs = 1; this.x.abort(); } },
	onFileChange : function(f, e, s) {
	    var fl = ''; // File(s) list
	    this.ts = 0; // Total size
	    var hf = false; // have file(s)
	    this.state = 1; // Nachali zagruzku, lubaya poputka zagruzit eshe do zavershenia doljna bit' ostanovlena
	    if (s == 'suf') this.i = f;
	    if (f.files && f.files.length > 0) { // Spisok faylov dlya proverki i zagruzki
		if (f.files.length > 10) {
			// Max 10 files allow one time upload
			console.log(ACC.L[57] +' - '+ ACC.L[371]);
			JCC.P3._e_ifs = null;
			return;
		}
		// Check files with same name. In this version we do not accept multiple files with same name, this files will be replaced.
		// So, check it and prevent on client side.
		var _cf = '';
		for (var i = 0; i < f.files.length; i++) {
		    this.ts += f.files[i].size; // Summiruem file size
		    fl += f.files[i].name + '{{#}}' +f.files[i].size+ '{{-}}'; // Sobiraem po ocheredi imena faylov, zatem otdadim v API
		    if (_cf.indexOf(f.files[i].name) > 0) {
			// Odinakovoe imya faila. Uje bul podgrujen.
			console.log(JCC.L[57] +' - '+ JCC.L[370].replace('%n%', f.files[i].name));
			JCC.P3._e_ifs = null;
			return;
		    } else _cf = _cf + '---'+f.files[i].name+'---';
		    hf = true;
		}
	    }
	    if (hf == false) { JCC.P3._e_ifs = null; return; } // no one file to upload
	    if (this.ts <= 0) { console.log(JCC.L[57] +' - '+ JCC.L[372]); JCC.P3._e_ifs = null; return; } // Zero size, stop upload
	    if (this.ts > 1024*1024*20) { console.log(JCC.L[57] +' - '+ JCC.L[360].replace('%n%', f.files[i].name)); JCC.P3._e_ifs = null; return; } // Bolshe 20MB, stop upload

	    // Send to API current rid, ts (total size), fl (file list)
	    //JCC.s('13170{{-}}3{{-}}'+this.rid+'{{-}}'+this.ts+'{{-}}'+JCC.euc(fl));
	    ApixCloud.CC.API.UploadFilePermissions(rid, ts, fl);
	},
	onP : function(e, h, r) {
	    var lp = ((e.loaded / e.total) * 100).toFixed(0); // Load percent (integer min 0 max 100)
	    ApixCloud.CC.API.UploadFileProgress(r, h, lp);
	},
	onR : function(h) {
	    if (this.i.files) {
		if (this.i.files.length <= 0) return;
		if (!this.x) {
		    this.x = new XMLHttpRequest();
		    // Upload progress. Add event and call API from onP handler
		    JCC.addEvent(this.x.upload, 'progress', function(o) { var hh = h; return function(e) { o.onP(e||event, hh, o.rid); }; }(this));
		    // Upload logic.
		    this.x.onreadystatechange = function(x, _o) {
			var xx=x; var o = _o; return function() {
			    if (xx.readyState == 4) {
				if (xx.status != 200) {
				    /* Call api if error happen (not abort from user) */
				    if (o.abs != 1) ApixCloud.CC.API.UploadFileFailed(o.rid, h, xx.status);
				}
				switch(x.responseText) {
				    case 'UC': { } break;
				    case 'TOO_LARGE': { ApixCloud.CC.API.UploadFileFailed(o.rid, h, 413); } break;
				    case 'FAIL': { ApixCloud.CC.API.UploadFileFailed(o.rid, h, 0); } break;
				}
			    }
			};
		    }(this.x, this);
		    // Endpoint for upload
		    this.x.open('POST', '//'+cloud_addr+'/ws/?a=2&m=4&v='+ApixCloud.CC.API.GetConfig().ac+'&h='+h+'&r='+this.rid);
		}
		var d = new FormData(this.f);
		if (this.u) for (var i = 0; i < this.i.files.length; i++) {
		    if (this.u) {
			d.append('file', new File([this.i.files[i]], this.i.files[i].name));
		    } else d.append('file', this.i.files[i]);
		}
		this.x.send(d);
	    }
	}
    };
    return Cls;
}();
