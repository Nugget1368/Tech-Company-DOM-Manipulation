

//Bygg dropdown
const buildDropdown = () => {
    let dropdown = document.querySelector("select#profession");
    let options = ["Välj Yrkesroll", "Frontend Developer", "Backend Developer", "UX-Designer"];
    options.forEach(option => {
        let opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        dropdown.append(opt);
    });
};

//Build Filtering
const buildFilter = () => {
    const filterSection = document.querySelector(".filter-section");
    const options = document.querySelectorAll("select#profession option");
    options.forEach(option => {
        const value = option.value === "Välj Yrkesroll" ? "Alla" : option.value;
        const pill = document.createElement("div");
        pill.classList.add("pill");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = value;
        checkbox.id = value;
        const label = document.createElement("label");
        label.textContent = value;
        label.htmlFor = value;
        pill.append(checkbox);
        pill.append(label);
        filterSection.append(pill);
    });
}


const buildSort = () => {
    let select = document.querySelector("select#sort");
    let options = ["Förnamn (stigande)", "Förnamn (fallande)", "Ålder (stigande)", "Ålder (fallande)"];
    options.forEach(option => {
        let opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        select.append(opt);
    });
};

buildDropdown();
buildFilter();
buildSort();