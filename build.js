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

//Bygg Filtrering
const buildFilter = () => {
    let filterSection = document.querySelector(".filter-section");
    let options = document.querySelectorAll("select#profession option");
    options.forEach(option => {
        if(option.value === "Välj Yrkesroll"){
            option.value = "Alla";
        }
        let value = option.value;
        let div = document.createElement("div");
        div.classList.add("pill");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.value = value;
        let label = document.createElement("label");
        label.textContent = value;
        div.append(input);
        div.append(label);
        filterSection.append(div);
    });
}

buildDropdown();
buildFilter();