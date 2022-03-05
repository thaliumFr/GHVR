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

// - Parallax Test -
// let ScrollElementList = [];
// document.onload = ScrollElementList =
// 	document.querySelectorAll('[parallax="true"]');
// window.addEventListener("scroll", function () {
// 	Parallax();
// });

// function Parallax() {
// 	console.log(window.pageYOffset);
// 	ScrollElementList.forEach((el) => {
// 		let speed = el.dataset.speed ? el.dataset.speed : -2;
// 		var yPos = window.pageYOffset / speed;
// 		yPos = -yPos;

// 		var coords = "0% " + yPos + "px";

// 		el.style.backgroundPosition = coords;
// 	});
// }
