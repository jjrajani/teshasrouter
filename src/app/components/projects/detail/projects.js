const culturaLink = require("../../../assets/culturalink.png");
const ADP = require("../../../assets/ADP.png");
const mailChimp = require("../../../assets/mail-chimp.png");
const PSP = require("../../../assets/PSP.png");
const myGarden = require("../../../assets/my-garden-ss.png");
const cageSmash = require("../../../assets/cage-smash-ss.png");

const PROJECTS = {
  "ADP": {
    img: ADP,
    title: "ADP Monitoring Service",
    client: "ADP, Atlanta",
    blurb: "I performed as the sole frontend developer on this project and also built out a majority of the REST API. RabbitMQ and socket.io were used with React, Express, and Mongo to provide ADP product developers with a dashboard updated with the most current status of their active services.",
    details: ["Frontend Development", "Web Design", "Socket Connections", "API Design"],
    technology: ["React", "SASS", "Express", "MongoDB", "Socket.io", "RabbitMQ", "Webpack"],
    scale: "Large-Scale Application",
    features: [
      {
        title: "Waterfall Chart",
        img: "",
      },
      {
        title: "plotly.js",
        img: "",
      }
    ]
  },
  "culturaLink": {
    img: culturaLink,
    title: "CulturaLink",
    client: "CulturaLink, Atlanta",
    blurb: "ClutraLink was my first professional project. I performed as the sole frontend developer. The app is a complete business solution providing CulturaLink not only with Video, Voice, and Document Translation Services but also Billing Reports, Revenue Charts and CSV Reports, Client and Interpreter Management, Permissions, and Individual Portals for Client, Admin, and Interpreter access.",
    details: ["Frontend Development", "Web Design"],
    technology: ["React", "TypeScript", "Express", "Sequelize", "Jest", "HighCharts", "socket.io", "Videyo", "Webpack"],
    scale: "Large-Scale Application",
    learnings: [
      {
        title: "highCharts",
        img: "",
      },
      {
        title: "Custom filtering component",
        img: "",
      }
    ]
  },
  "mailChimp": {
    img: mailChimp,
    title: "Mail Chimp Anual Report",
    client: "MailChimp, Atlanta",
    blurb: "Given only a two week time frame, a partner delevoper and I delivered this award winning* year-end newsletter to mailChimp in the nick of time. Lazy loading with scroll dependant animations, GIF images.",
    astrisk: "*Award winning for a design that I did not create.  However, this award demonstrates my (and my partner's) ability to communicate with designers and deliver their creations.",
    details: ["Frontend Development", "Web Design"],
    technology: ["Ruby on Rails", "JavaScript", "SASS"],
    scale: "Small Design Centered Application",
    link: "https://mailchimp.com/2016/",
  },
  "PSP": {
    img: PSP,
    title: "PSP Printing",
    client: "PSP, Atlanta",
    blurb: "A step by step desing proofing system. PSP provides promotional signage to large companies such as Barnes and Nobel or Kroger. They wanted a way to streamline the process of requesting, modifying, and aprroving image proofs. Includes an alert system for instant feedback between the client and PSP allowing faster and more accurate production and delivery.  Companies can define their signage space and sizes per store to easily maintain their store signage capacity and create new orders more efficiently.",
    details: ["Frontend Development", "Web Design"],
    technology: ["Agnular2", ".NET Core", "SASS", "Gulp"],
    scale: "Large-Scale Application",
  },
  "myGarden": {
    img: myGarden,
    title: "myGarden",
    client: "Personal",
    blurb: "myGarden is a tool I built to help in the early stages of planning a small home garden. As a child my mother always had a garden but I was always too busy running around playing to pay much attention to her technique.  As an adult I decided I wanted to have a small garden too but found it quite overwhellming when looking through online garden resources.  I decided to create a solution.  I removed the verbosity of the usual gardening almanac opting to fill my library with only the basics one needs to get started.  Then I added a click and drag space planner to help determine what one can plant in their available space. This way, one can get gardening easier, faster, and educated.",
    details: ["Frontend Development", "Web Design", "Backend API Architecture"],
    technology: ["Angular", "Adonis", "Postgress", "Gulp"],
    scale: "Personal",
    link: "http://my-garden.surge.sh/#/",
  },
  "cageSmash": {
    img: cageSmash,
    title: "cageSmash",
    client: "Personal",
    blurb: "A variation of Whack-a-Mole using Nicholas Cage's face!  I built this game while at The Iron Yard where placeCage.com was my instructors go to image placeholder. My first time working with DOM Manipuation, this rudamentary application is one of my favorite creations.",
    details: ["Frontend Development", "Game Development"],
    technology: ["Vanilla JavaScript", "HTML/CSS"],
    scale: "Personal",
    link: "http://cage-smash.surge.sh/",
  }
}


export default PROJECTS;
