try {
	if (document && document.body) {
		if (document.body.childNodes.length == 1 && document.body.childNodes[0].tagName == "IMG") {
			var image_element = document.body.childNodes[0];
			
			// 背景の黒画像を消す。
			document.documentElement.style.background = "none";
			document.body.style.background = "none";
			image_element.style.background = "none";
			
			// センター表示を打ち消す。
			image_element.style.right = "unset";
			image_element.style.bottom = "unset";
		}
	}
} catch(error) {
	null;
}
