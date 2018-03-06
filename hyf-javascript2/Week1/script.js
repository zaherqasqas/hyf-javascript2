
const books = {
    "charlotte_web": { title: "Charlottes Web", language: "English", author: "E.B.White" },
    "mieko_and_the_fifth_treasure": { title: "Mieko and the Fifth Treasure", language: "English", author: "Eleanor Coerr" },
    "the_outsiders": { title: "The Outsiders", language: "English", author: "S.E.Hinton" },
    "the_house_on_mango_street": { title: "The House On Mango Street", language: "English", author: "Sandra Cisneros" },
    "thirteen_reasons_why": { title: "Thirteen Reasons Why", language: "English", author: "Jay Asher" },
    "peter_pan": { title: "Peter Pan", language: "English", author: "J.M.Barrie" },
    "the_old_man_and_the_sea": { title: "The Old Man and the Sea", language: "English", author: "Ernest Hemmingway" },
    "the_giver": { title: "The Giver", language: "English", author: "Lois Lowry" },
    "number_the_stars": { title: "Number the Stars", language: "English", author: "Lois Lowry" },
    "a_wrinkle_in_time": { title: "A Wrinkle In Time", language: "English", author: "Madeline L’engle" }
};

function infoBooks() {
    var ul = document.createElement("ul");
    document.body.appendChild(ul);
    for (var book in books) {
        var info = (books[book]);
        console.log(info);
        var li = document.createElement("li");
        var p = document.createElement("p");
        var div = document.createElement("div");
        var h1 = document.createElement("h1");
        var img = document.createElement("img");

        img.setAttribute("src", "http://via.placeholder.com/100X100");
        img.setAttribute("id", book);
        img.setAttribute("alt", info.title + " photo")

        // img.setAttribute('id', book);
        // p.textContent(info);
        li.innerText = info.title;
        p.innerText = info.language;
        div.innerText = info.author;

        h1.appendChild(img);
        li.appendChild(h1);
        ul.appendChild(li);
        li.appendChild(p);
        p.appendChild(div);
    }
}
infoBooks();