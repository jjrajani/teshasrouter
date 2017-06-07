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
    blurb: "I worked with SOLTECH to design and implement ADPs app monitoring service.  This app monitors ADPs live service extensions and provides instant feedback of the current status.  Users can create processes, like logging in to thier app, that this app then automates and sets on repeat.  This allows developers to keep an eye on precise processes and be alerted should anything go down.",
    details: ["Frontend Development", "Web Design", "Socket Connections", "API Routes"],
    technology: ["ReactJS", "SASS", "Express", "MongoDB", "Socket.io", "RabbitMQ", "Webpack"],
  },
  "culturaLink": {
    img: culturaLink,
    title: "CulturaLink",
    client: "CulturaLink, Atlanta",
    blurb: "CulturaLink hired my employer SOLTECH to rebuild their online application. Responsible for the frontend I rebuilt this app from the ground up. Culturalink provides video chat, phone call, on site, and document translation services to large Health Systems.  Complete with scheduling, billing, reports, and contacts this app is replacing the day to day paper work with seamless functionality and an intuitive UI.",
    details: ["Frontend Development", "Web Design"],
    technology: ["ReactJS", "TypeScript", "Express", "Sequelize", "Jest", "HighCharts", "socket.io", "Videyo", "Webpack"],
  },
  "mailChimp": {
    img: mailChimp,
    title: "Mail Chimp Anual Report",
    client: "MailChimp, Atlanta",
    blurb: "",
    details: ["Frontend Development", "Web Design"],
    technology: ["Ruby on Rails", "Angular", "Vanilla JavaScript", "SASS"],
  },
  "PSP": {
    img: PSP,
    title: "PSP Printing",
    client: "PSP, Atlanta",
    blurb: "A step by step proofing system.  PSP provides promotional signage to large companies such as Barnes and Nobel or Kroger. They wanted a way to streamline the process of requesting, modifying, and aprroving image proofs. Includes an alert system for instant feedback between the client and PSP allowing faster and more accurate production and delivery.  Companies can define their signage space and sizes per store to easily maintain their store signage.",
    details: ["Frontend Development", "Web Design"],
    technology: ["Agnular2", ".NET Core", "SASS", "Gulp"],
  },
  "myGarden": {
    img: myGarden,
    title: "myGarden",
    client: "Personal",
    blurb: "myGarden is a tool I built to help in the early stages of planning a small home garden. As a child my mother always had a garden but I was always too busy running around playing to pay much attention to her technique.  As an adult I decided I wanted to have a small garden too but found it quite overwhellming when looking through online garden resources.  I decided to create a solution.  I removed the verbosity of the usual gardening almanac opting to fill my library with only the basics one needs to get started.  Then I added a click and drag space planner to help determine what one can plant in their available space. This way, one can get gardening easier, faster, and educated.",
    details: ["Frontend Development", "Web Design", "Backend API Architecture"],
    technology: ["Angular", "Adonis", "Postgress", "Gulp"],
  },
  "cageSmash": {
    img: cageSmash,
    title: "cageSmash",
    client: "Personal",
    blurb: "A variation of Whack-a-Mole using Nicholas Cage's face!  I built this game while at The Iron Yard where placeCage.com was my instructors go to image placeholder. My first time working with DOM Manipuation, this rudamentary application is one of my favorite creations.",
    details: ["Frontend Development", "Game Development"],
    technology: ["Vanilla JavaScript", "CSS"],
  }
}


export default PROJECTS;
