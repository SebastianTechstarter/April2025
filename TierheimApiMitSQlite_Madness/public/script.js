const buttonShowAnimals = document.getElementById("button_show_animals")
const showAnimals = document.getElementById("show_animals")


buttonShowAnimals.addEventListener("click", async () => {
    const res = await fetch("http://127.0.0.1:3000/tiere")
    displayData(await res.json())

    function displayData(data) {
        console.log(data)
        showAnimals.innerHTML = "";
        data.forEach(tier => {
            console.log(tier)
            const li = document.createElement("li");
            li.textContent = tier.name;
            showAnimals.appendChild(li);
        });
    }
});

// POST
const form = document.getElementById("tierForm");
const message = document.getElementById("nachricht");

form.addEventListener("submit", async(event) => {
    // Neuladen der Seite verhindern
    event.preventDefault();

    // Input ziehen
    const formData = new FormData(form); 

    // Eingaben in ein Objekt umwandeln
    const newAnimal = {
        tierart: formData.get("tierart"),
        name: formData.get("name"),
        krankheit: formData.get("krankheit"),
        age: parseInt(formData.get("age")),
        gewicht: parseFloat(formData.get("gewicht"))
    };
    try {
        const res= await fetch("http://localhost:3000/tiere", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
        });

        if (res.ok) {
            message.textContent = "Das Tier wurde hinzugefügt";
        } else {
            message.textContent = "Fehler beim Hinzufügen";
        }
    } catch(err) {
        console.error("Fehler:", err);
        message.textContent = "Verbindungsfehler";
    }
});