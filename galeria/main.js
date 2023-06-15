const container = document.querySelector(".container");
const container1 = document.querySelector(".container1"); 

const imagenes = [
    "img/12.jpg", "img/11.jpg", "img/10.png", "img/3.jpg", "img/2.png", "img/1.png", "img/4.jpg",
    "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg"
];

for (let i = 0; i < imagenes.length; i++) {
    const ed1 = document.createElement("div");
    ed1.classList.add("ed1");

    const img = document.createElement("img");
    img.src = imagenes[i];
    img.alt = `Imagen ${i + 1}`;

    ed1.appendChild(img);
    container.appendChild(ed1);

    img.addEventListener("click", function() {
        while (container1.firstChild) {
            container1.firstChild.remove();
        }
        const clonimg = img.cloneNode(true);
        container1.appendChild(clonimg);
    });
}