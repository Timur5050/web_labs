

const cards_data = [
    {
        video_src: "https://www.youtube.com/embed/B12MXF0bSFo",
        title: "Full Body Workout",
        description: "Комплексне тренування всього тіла для тих, хто хоче зміцнити м'язи та покращити витривалість.",

    },
    {
        video_src: "https://www.youtube.com/embed/3IQVNjWH60A",
        title: " Body Strength",
        description: "Зосередьтесь на розвитку сили верхньої частини тіла, включаючи груди, спину та руки.",
    },
    {
        video_src: "https://www.youtube.com/embed/H6mRkx1x77k",
        title: "Leg Day Routine",
        description: "Навантаження на ноги: присідання, випади та інші вправи для потужних ніг.",
    },
    {
        video_src: "https://www.youtube.com/embed/XgI_p8bKg78",
        title: "Core & Abs",
        description: "Вправи для міцного преса та стабілізації корпусу, що покращать баланс і витривалість.",
    }
]
let cards_wrapper = document.querySelector(".cards-wrapper");
for (let i = 0; i < cards_data.length; i++) {
    const {video_src, title, description} = cards_data[i]
    const iframe_element = getIframeElement(video_src)
    const title_element = getTitleElement(title)
    const description_element = getDescriptionElement(description)
    const card_element = getCardElement(video_src)
    const elements_to_insert = [iframe_element, title_element, description_element]

    appendElementsArrayToCardElement(card_element, elements_to_insert)
    cards_wrapper.appendChild(card_element)

}

function getIframeElement(video_src) {
    const iframe_element = document.createElement("iframe");
    iframe_element.setAttribute("src", video_src);
    iframe_element.setAttribute("frameborder", 0);
    iframe_element.setAttribute("allowfullscreen", "")
    return iframe_element
}

function getTitleElement(title) {
    const title_element = document.createElement("h3");
    title_element.textContent = title;
    return title_element
}

function getDescriptionElement(description) {
    const description_element = document.createElement("p");
    description_element.setAttribute("class", "default-text");
    description_element.textContent = description;
    return description_element
}

function getCardElement() {
    const card_element = document.createElement("div");
    card_element.setAttribute("class", "card");
    return card_element
}

function appendElementsArrayToCardElement(cardElement, elements) {
    elements.forEach((element) => {
        cardElement.appendChild(element);
    })
}

// 0. document.createElement("h1")
// 1. search: document.getElementById(); document.querySelector();document.querySelectorAll()(array)
// 2. events cards_wrapper.addEventListener("click", function () {
//     //some code
// })
// 3. cards_wrapper.appendChild(some_element); cards_wrapper.innerHTML = "<p>dawd</p>";
// card_element.textContent = "teasdt";
// 4. e.target = some_element_object
