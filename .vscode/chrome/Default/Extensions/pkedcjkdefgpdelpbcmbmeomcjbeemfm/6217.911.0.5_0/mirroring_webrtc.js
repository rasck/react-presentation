'use strict';var x6={TAB:0,sg:1,pj:2},y6=function(a){ib("MediaRouter.WebRtc.Start.Success",a,x6)};var C6=function(a,b){gg.call(this,b);this.s=a;this.a=new kb;this.h=Qr(b.id);this.g=new kb;this.v=!1;this.l=null;this.u=!1;this.m=this.f=null;z6(this);A6(this);B6(this,new mg("GET_TURN_CREDENTIALS"))};qa(C6,gg);C6.prototype.start=function(a){var b=this;return this.a.a.then(function(c){if(c.b)return Promise.reject(new vf("Mirroring already started"));if(b.l)return Promise.reject(new vf("Session permanently stopped"));b.f=new Ya("MediaRouter.WebRtc.Session.Launch");c.a.addStream(a);c.start();return b.g.a})};
C6.prototype.stop=function(){var a=this;this.g.reject(new vf("Session stop requested."));this.m&&(this.m.a(),this.m=null);if(this.l)return this.l;this.u=this.v=!1;this.f=null;return this.l=this.a.a.then(function(a){a.stop()}).then(function(){return a.h.wa()}).catch(function(b){a.h.wa();throw b;})};
var z6=function(a){a.h.onMessage=function(b){if(!b.type)throw Error("Message has no type.");switch(b.type){case "TURN_CREDENTIALS":a.a.resolve(new sg(a.b.id,b.data.credentials));break;case "ANSWER":a.a.a.then(function(a){Ag(a,b.data)});break;case "KNOCK_ANSWER":a.u=!0;a.a.a.then(function(a){Ag(a,b.data)});break;case "STOP":a.g.reject(new vf("Stop signal received"));a.stop();break;default:throw new vf("Unknown message type: "+b.type);}}},A6=function(a){a.a.a.then(function(b){wg(b,function(b){B6(a,
new mg("OFFER",new pg(b,a.s,qg)))});xg(b,function(b){B6(a,og(b))});tg(b,function(){a.v=!0;B6(a,new mg("SESSION_START_SUCCESS"));!a.u&&a.f&&a.f.a();a.f=null;a.m=new db("MediaRouter.WebRtc.Session.Length");a.g.resolve(a)});vg(b,function(){B6(a,new mg("SESSION_END"))});ug(b,function(b){a.v||a.g.reject(b);B6(a,new mg("SESSION_FAILURE"))})})},B6=function(a,b){a.h.sendMessage(b,D6)},D6={channelType:"cloud"};var E6=function(){Xf.call(this,"webrtc")};qa(E6,Xf);h=E6.prototype;h.te=function(a,b){return new C6(a,b)};h.Ue=function(){y6(0)};h.Re=function(){y6(1)};h.Wf=function(){y6(2)};h.Se=function(){hb("MediaRouter.WebRtc.Session.End")};h.Te=function(a){ib("MediaRouter.WebRtc.Start.Failure",a,uf)};h.Td=function(){hb("MediaRouter.WebRtc.Stream.End")};var F6=new E6;Wf("mr.mirror.webrtc.WebRtcService",F6);
