window.addEventListener("load", () => {
	let color = window.location.search;

	if (color.length === 7 && /[0-9A-F]{6}$/i.test(color.substring(1, 7))) {
		color = color.substring(1, 7);
		const body = document.body;
		const nameTag = document.getElementById("color-name");
		const codeTag = document.getElementById("color-code");

		const toDec = hex => {
			return parseInt(hex, 16);
		};

		body.style.backgroundColor = `#${color}`;
		nameTag.innerText = ntc.name(`#${color}`)[1];
		codeTag.innerText = `#${color}`;

		let r = toDec(color.substring(0, 2));
		let g = toDec(color.substring(2, 4));
		let b = toDec(color.substring(4, 6));
		if (r * 0.299 + g * 0.587 + b * 0.114 > 186) {
			nameTag.style.color = "#000000";
			codeTag.style.color = "#000000";
		} else {
			nameTag.style.color = "#ffffff";
			codeTag.style.color = "#ffffff";
		}
	} else {
		document.getElementById("alert").style.visibility = "visible";
	}
});
