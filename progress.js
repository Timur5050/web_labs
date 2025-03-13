 const days = [
    {type: "gym", time: 1, order: 1},
    {type: "gym", time: 2, order: 2},
    {type: "gym", time: 3, order: 3},
    {type: "gym", time: 4, order: 4},
    {type: "skip", time: 5, order: 5},
    {type: "gym", time: 6, order: 6},
    {type: "gym", time: 1, order: 7},
    {type: "cardio", time: 2, order: 8},
    {type: "gym", time: 3, order: 9},
    {type: "cardio", time: 4, order: 10},
    {type: "gym", time: 5, order: 11},
    {type: "cardio", time: 6, order: 12},
    {type: "gym", time: 1, order: 13},
    {type: "skip", time: 2, order: 14},
    {type: "cardio", time: 3, order: 15},
    {type: "gym", time: 4, order: 16},
    {type: "skip", time: 5, order: 17},
    {type: "gym", time: 6, order: 18},
    {type: "skip", time: 1, order: 19},
    {type: "gym", time: 2, order: 20},
    {type: "gym", time: 3, order: 21},
    {type: "gym", time: 4, order: 22},
    {type: "gym", time: 5, order: 23},
    {type: "gym", time: 6, order: 24},
    {type: "skip", time: 1, order: 25},
    {type: "gym", time: 2, order: 26},
    {type: "gym", time: 3, order: 27},
    {type: "gym", time: 4, order: 28},
    {type: "gym", time: 5, order: 29},
    {type: "gym", time: 5, order: 30},
    {type: "gym", time: 5, order: 31},
    {type: "gym", time: 5, order: 32},
];

renderWholeInfo(days)

function handleUpdate(e) {
    const stats = document.querySelector('.stats');
    const type = document.getElementById('type-select').value;
    const day = document.getElementById("day-select").value;
    const time = document.getElementById("time-select").value;
    days[day - 1].type = type
    days[day - 1].time = time
    console.log(days[day - 1])
    renderWholeInfo(days)
    stats.setAttribute('class', "stats blink");
    setTimeout(() => {
        stats.removeAttribute('class');
        stats.setAttribute('class', 'stats');
    }, 250)

}

function validateInput(input) {
    let value = parseInt(input.value, 10);
    if (value < 1) {
        input.value = 1;
    } else if (value > 31) {
        input.value = 31;
    }
}

function validateInputTime(input) {
    let value = parseInt(input.value, 10);
    if (value < 1) {
        input.value = 1;
    } else if (value > 6) {
        input.value = 6;
    }
}

function getGymsCount(days) {
    return days.filter(item =>
        item.type === "gym"
    ).length
}

function getCardiosCount(days) {
    return days.filter(item =>
        item.type === "cardio"
    ).length
}

function renderArray(days) {


    const table = document.querySelector('.stats');
    table.innerHTML = '';
    let dayCounter = 1;

    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            if (dayCounter <= 31) {
                const cellData = days[dayCounter - 1]
                const dayType = cellData.type;
                const time = cellData.time;
                const order = cellData.order

                cell.addEventListener("mouseover", () => {
                    if (dayType === "skip")
                        cell.textContent = null
                    else
                        cell.textContent = time;
                });
                cell.addEventListener("mouseout", () => {
                    cell.textContent = order;
                })
                cell.textContent = order;
                cell.classList.add(`${dayType}-day`);
                dayCounter++;
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

function renderGymsCount(gymsCount) {
    const element = document.getElementById("total_gym");
    element.textContent = '';
    element.textContent = "Всього тренувань у залі: " + gymsCount;
}

function renderCardioCount(cardioCount) {
    const element = document.getElementById("total_cardio");
    element.textContent = '';
    element.textContent = "Всього кардіо: " + cardioCount;
}

function renderWholeInfo(days) {
    renderArray(days)
    renderGymsCount(getGymsCount(days))
    renderCardioCount(getCardiosCount(days))
}
document.addEventListener("DOMContentLoaded", function () {
    const statsTable = document.querySelector(".stats");

    statsTable.addEventListener("click", function (event) {
        if (event.target.tagName === "TD") {
            const cell = event.target;
            const trainingType = getTrainingType(cell);
            const duration = getTrainingDuration(cell);

            alert(`Тренування: ${trainingType}\nТривалість: ${duration} год.`);
        }
    });

    function getTrainingType(cell) {
        if (cell.classList.contains("gym-day")) return "Тренування в залі";
        if (cell.classList.contains("cardio-day")) return "Кардіо";
        if (cell.classList.contains("skip-day")) return "Пропуск";
        return "Невідомо";
    }

    function getTrainingDuration(cell) {
        return cell.textContent.trim() || "Не вказано";
    }
});

