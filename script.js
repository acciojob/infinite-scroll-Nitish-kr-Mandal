//your code here!
const list = document.getElementById("infi-list");

let count = 0;

function addItems(num) {
	for (let i = 0; i < num; i++) {
		count++;
		let li = document.createElement("li");
		li.textContent = "item " + count;
		list.appendChild(li);
	}
}

	addItems(10);

	list.addEventListener("scroll", () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addItems(2);
    }
});
