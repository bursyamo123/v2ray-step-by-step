(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{217:function(t,s,a){t.exports=a.p+"assets/img/block_of_reverse-doko.6abc2d13.png"},298:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"reverse-proxy-i"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reverse-proxy-i","aria-hidden":"true"}},[t._v("#")]),t._v(" Reverse Proxy I")]),t._v(" "),n("p",[t._v("The reverse proxy is a relatively high-mentioned feature request. Since the v2.x release, many people have asked developers if they can join this feature until v4.0 is finally available. The reverse proxy is mainly used for intranet penetration. It uses VPS to access intranet servers that do not have public IP. The specific example is that there is a NAS in the house. Because when your home broadband does not have a public IP, you can't directly access your NAS outside. But you can access the home NAS with a reverse proxy. If you don't have relative requirements, there is no need to read the following section.")]),t._v(" "),n("p",[t._v("When we talking about the reverse proxy, it must be indicated that FRP is widely used today. But in this tutorial, we will not discuss which one is better. However, the configuration of V2Ray is more difficult to understand. You will need to have a better understanding of V2Ray to configure the reverse proxy.")]),t._v(" "),n("h2",{attrs:{id:"mechanism"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mechanism","aria-hidden":"true"}},[t._v("#")]),t._v(" Mechanism")]),t._v(" "),n("p",[t._v("For your easier understanding, assuming there are three types of devices in this section, A, B and C. Type of devices A does not have a public IP to access the internet, and it is running as a NAS or personal cloud. Type of devices B is a server which has a public IP address, like your VPS. Type of devices C is the device you want to use it access the NAS or personal cloud on device A. (Assuming you have a private cloud disk on device A, like NextCloud, and it listens to 80 port). Each of these three types of devices can be one or more. Let us first discuss one device for one type of case. To be able to establish a reverse proxy connection, both A and B must run V2Ray, and C may not run V2Ray. After setting up the configuration file and running V2Ray, the order of traffic delay in which the connections are established in the reverse proxy is:")]),t._v(" "),n("ol",[n("li",[t._v("A will initiate a request to B to establish a connection;")]),t._v(" "),n("li",[t._v("The user C initiates a request to B to access the private cloud disk on A;")]),t._v(" "),n("li",[t._v("B accepts the request of C, and forwards the traffic to A (that is, B reversely connects A);")])]),t._v(" "),n("p",[t._v("The effect of the above process is equivalent to initiate a request from C to A, for accessing A's private network disk. A initiates a request to B, A needs an outbound, and B needs an inbound. (Because A's outbound is inbound to B, there are three protocols with inbound and outbound: VMess, Shadowsocks, and Socks. In this section we take VMess as an example). C initiates a request to B, B also needs an inbound, C does not run V2Ray (B's inbound to accept traffic that is not from V2Ray, can only be dokodemo-door). Because A is the final server of accessing (private network disk), A also needs an outbound, namely freedom. In other words, A requires two outbounds (VMess and freedom), and B requires two inbounds (VMess and dokodemo-door). Then in order for A to actively connect to B, A needs to configure a reverse proxy. Similarly, in order to allow B to connect back to A, B also needs to configure a reverse proxy. Finally, we need to configure the route.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(217),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"configuration-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration Example")]),t._v(" "),n("p",[t._v("The specific configuration is given below, please understand the description in the previous principle section.")]),t._v(" "),n("h3",{attrs:{id:"configuration-of-node-a"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-node-a","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration of Node A")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reverse"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is the reverse proxy setting for A and must have the object of the following bridge")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bridges"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bridge"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The reverse proxy tag of A, used in routing")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private.cloud.com"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The domain name of the reverse proxy communication between A and B can be self-assigned. It may not be bought from the domain registry service provider, but it must be consistent with the reverse configured domain name in B below.")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//The outbound of A connecting to B")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tunnel"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The tag of outbound of A connecting to B, will be used in the following routing setting")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vnext"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serveraddr.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Address of B can be an IP or a domian")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16823")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b831381d-6324-4d53-ad4f-8cda48b30811"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Another outbound connect of the private cloud disk")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"freedom"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"out"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routing"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure the routing rules for A connecting to B")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bridge"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"full:private.cloud.com"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tunnel"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The routing rules for reverse connection of private cloud disk")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bridge"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"out"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"configuration-of-node-b"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-node-b","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration of Node B")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reverse"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is the reverse proxy setting for B and must have the following portals object")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"portals"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"portal"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private.cloud.com"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// must be the same as the domain name set by A above")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Accept C's inbound")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"external"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tag, used in routing")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Open port 80 for receiving external HTTP access ")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dokodemo-door"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n          "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Suppose the port that the NAS is listening on is 80.")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Another inbound that accepts a request initiated by A")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tunnel"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tag, used in routing")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16823")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b831381d-6324-4d53-ad4f-8cda48b30811"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routing"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Routing rules, sent to A after receiving a C request")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"external"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"portal"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Routing rules that let B recognize that this is a proactively initiated reverse proxy connection")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tunnel"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"full:private.cloud.com"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"portal"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"access"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#access","aria-hidden":"true"}},[t._v("#")]),t._v(" Access")]),t._v(" "),n("p",[t._v("After configuring the V2Ray configuration of A and B, run V2Ray of A and B successively, and also set up the private network disk of A to run. Then C accesses a different network than A (for example, to the neighbour's home network), and uses the browser to access the IP or domain name of B. At this time, the intranet can access the private cloud disk.")]),t._v(" "),n("h4",{attrs:{id:"updates"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#updates","aria-hidden":"true"}},[t._v("#")]),t._v(" Updates")]),t._v(" "),n("ul",[n("li",[t._v("2018-10-31 Initial release")]),t._v(" "),n("li",[t._v("2019-01-13 V4.0+ Adaptation")])])])},[],!1,null,null,null);s.default=e.exports}}]);