const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const containerMembers = document.querySelector(".container")


for (let i = 0; i < teamMembers.length; i++ ){
    curTeamMembers = teamMembers[i]
    
    const{ name, role, email, img} = curTeamMembers;

    const teamCard = ` <div class="card-lv d-flex border">
            <div class="image-right">
                <img src="${img}" alt="">
            </div>
            <div class="descrition">
                <h4 class="nome">${name} </h4>
                <h5 class="lavoro">${role}</h5>
                <h6 class="email">${email} </h6>
            </div>
        </div>`;

        containerMembers.innerHTML += teamCard;
}

