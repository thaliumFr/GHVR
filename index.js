function ToggleNavbar() {
	document.getElementsByClassName("hamburger")[0].classList.toggle("selected");
	document.getElementsByClassName("link-tab")[0].classList.toggle("selected");
}

function acceptCookies() {
	document.cookie = `AllowCookie=${true}`;
}

function areCookiesAllowed() {
	const cookies = document.cookie.split("; ");
	let AllowCookie = false;
	for (const cookie in cookies) {
		if (cookie.startsWith("AllowCookie")) AllowCookie = cookie.includes("true");
	}

	return AllowCookie;
}
