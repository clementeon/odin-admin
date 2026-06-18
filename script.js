let collapse = false;
const switchItem = document.querySelectorAll(".hideItem");

const buttonCollapse = document.querySelector("#temp");
const adjustButton = document.querySelector(".menu button");

buttonCollapse.addEventListener("click", () => {
	switchItem.forEach((element) => {
		if (!collapse) {
			element.style.display = "none";
		} else {
			element.style.display = "";
		}
	});
	if (!collapse) {
			adjustButton.style.justify-contet = "center";

	} else {
			adjustButton.style.justify-contet = "center";

	}
	collapse = !collapse;

	// if (!collapse) {
	// 	titleItem.style.display = "none";
	// } else {
	// 	titleItem.style.display = "";
	// }
	// collapse = !collapse;
});
