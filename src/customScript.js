var _CLASSNAME = "Enchanted";
var getClosest = function ( elem, selector ) {

	// Element.matches() polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.matchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.oMatchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			function(s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
					i = matches.length;
				while (--i >= 0 && matches.item(i) !== this) {}
				return i > -1;
			};
	}

	// Get closest match
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}

	return null;

};

document.addEventListener("DOMNodeInserted", function (event) {

    // var allThread = document.querySelectorAll('.DLc2vb div[data-soft-view-id]');
    
    // var todayThread = allThread[allThread.length - 1];

    // var allThread = document.querySelectorAll('.cZICLc');
    
    // var todayThread = allThread[allThread.length - 1];

    var allThread = document.querySelectorAll('.cZICLc');
    Array.from(allThread).forEach(function(todayThread) {
        Array.from(todayThread.querySelectorAll('.Hj5Fxb')).forEach(function(conversation) {

            if (!conversation.classList.contains(_CLASSNAME)) {
                conversation.classList.add(_CLASSNAME);

                //check is quotable ?
                var textNode = conversation.querySelector('.Zc1Emd');
                if (textNode.innerText != '') {

                    var actionPane = conversation.querySelector('.eWw5ab');

                    var node = document.createElement("div");
                    node.className = "U26fgb mUbCce fKz7Od orLAid PFn4wd";
                    node.innerHTML = '<span class="xjKiLb"><span style="top: -10px"><svg viewBox="0 0 24 24" class=" f8lxbf waxfdf ZnfIwf"><path d="M0 0h24v24H0V0z" id="path4" fill="none"/> <g transform="matrix(0.03814807,0,0,0.03519479,2.3326259,2.6273481)" id="g3865-3"> <g id="g3863-6"><path d="m 502.75,280.75 c 9,9 9,23 0,32 l -69,69 c -4,4 -10,7 -16,7 -6,0 -12,-3 -16,-7 l -69,-69 c -9,-9 -9,-23 0,-32 9,-9 22,-9 31,0 l 32,32 v -147 h -197 c -12,0 -22,-11 -22,-23 0,-12 10,-22 22,-22 h 219 c 12,0 22,10 22,22 v 170 l 32,-32 c 9,-9 22,-9 31,0 z" id="path3859-7"/> <path d="m 310.75,343.75 c 12,0 22,11 22,23 0,12 -10,22 -22,22 h -219 c -12,0 -22,-10 -22,-22 v -170 l -32,32 c -9,9 -22,9 -31,0 -9,-9 -9,-23 0,-32 l 69,-70 c 4,-4 10,-6 16,-6 6,0 12,2 16,6 l 69,70 c 9,9 9,23 0,32 -4,4 -10,6 -16,6 -6,0 -11,-2 -15,-6 l -32,-32 v 147 z" id="path3861-5"/></g> </g></svg></span></span>';
                    node.addEventListener("click", function() {

                        var person = getClosest(this, '.oGsu4');
                        var nameElement = person.querySelector('span.njhDLd');
                        var personName = nameElement.innerText;
                        if(personName != '') {
                            personName = "“" + personName + "” >>> \n";
                        }
                        
                        var replyText = "```" + personName + "" + textNode.innerText + "```\n\n";
                        var locateComment;

                        try {
                            
                            var viewId = getClosest(conversation, '.Bqp03e');
                            var checkType = "" + viewId.getAttribute('data-soft-view-id');

                            if (checkType.indexOf('/room/') != -1) {
                                locateComment = todayThread;
                            }
                            else {
                                locateComment = viewId;
                            }
                        }
                        catch (e) {
                            console.log(e);
                        }

                        Array.from(locateComment.querySelectorAll('.oAzRtb')).forEach(function(input) {
                            var textnode = document.createTextNode(replyText);
                            input.appendChild(textnode);
                            input.focus();
                        });
                    });
                }
                actionPane.appendChild(node);
            }
        });
    });
}, false);