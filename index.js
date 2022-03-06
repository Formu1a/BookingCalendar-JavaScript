const calendar = document.querySelector("#app-calendar");

const isWeekend = (day) => {
    return day % 7 === 0 || day % 7 === 6;
};

for (let day = 1; day <= 31; day++) {
    const date = new Date(Date.UTC(2022, 0, day));

    const options = { weekday: "short" };

    let name = "";

    if (day <= 7) {
        let dateName = new Intl.DateTimeFormat("en-US", options).format(date);
        name = `<div class="name">${dateName}</div>`;
    }

    const weekend = isWeekend(day);

    if (weekend) {
        calendar.insertAdjacentHTML(
            "beforeend",
            `<div class="day ${
                weekend ? "weekend" : ""
            }">${name}${day}<div class="price" value="30">30$</div></div>`
        );
    } else {
        calendar.insertAdjacentHTML(
            "beforeend",
            `<div class="day ${
                weekend ? "weekend" : ""
            }">${name}${day}<div class="price" value="10">10$</div></div>`
        );
    }
}

calendar.insertAdjacentHTML(
    "afterend",
    `<div class="banner">Время заезда в отель</div><select class="sel">
    <option value="10">Time 10:00</option>
    <option value="12">Time 12:00</option>
    <option value="14">Time 14:00</option></select>`
);

document.querySelectorAll("#app-calendar .day").forEach((day) =>
    day.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("selected");
    })
);
