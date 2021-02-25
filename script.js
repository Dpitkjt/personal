function durham() {
    headline = document.getElementById("headline");
    headline.innerHTML = "1st Year Computer Science BSc @ Durham University"

    para1 = document.getElementById("p1");
    para1.innerHTML = "On track for a 1st Class degree. Spring Intern at Morgan Stanley and mThree."

    para2 = document.getElementById("p2");
    para2.innerHTML = "180 Degrees Consulting, Consulting Society, CompSoc, Mary's RAOKS, Butler Jazz, SMCFC, DU Fencing, DUES, POVD Department Rep"

    document.body.style.backgroundImage = 'url("assets/marys.png")';
}

function voluntech() {
    headline = document.getElementById("headline");
    headline.innerHTML = "Founder and Director of Voluntech";

    para1 = document.getElementById("p1");
    para1.innerHTML = "Voluntech connects charities and social enterprises to skilled student developers to help them solve tech problems; in return, students gain experience of working on real-life, real impact projects."

    para2 = document.getElementById("p2");
    para2.innerHTML = "Past clients: Change A Child's Life, <a href='http://hullo.org'>Hullo</a>"

    document.body.style.backgroundColor = "#8c20ba";
    document.body.style.backgroundImage = "none";
}

function droppr() {
    headline = document.getElementById("headline");
    headline.innerHTML = "Web Developer at <a href='http://dropprgame.com'>Droppr</a>";

    para1 = document.getElementById("p1");
    para1.innerHTML = "We hide prizes, you find them! Droppr is a student start-up allowing users to win prizes, including cash and vouchers sponsored by local businesses, by taking part in interactive scavenger hunts."

    para2 = document.getElementById("p2");
    para2.innerHTML = "Projects: Website, QR code promo, admin panel"

    document.body.style.backgroundColor = "#00C853";
    document.body.style.backgroundImage = "none";
}