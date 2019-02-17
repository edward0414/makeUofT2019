import { WebBrowser } from "expo";

export const activites = [
  {
    label: "Walking",
    handClick: () => {
      console.log("item pressed!");
    },
    subtext: "walking abc...."
  },
  {
    label: "Arm Curls",
    handClick: () => {
      console.log("item pressed!");
    },
    subtext: "arm curlinggggg"
  },
  {
    label: "Pull Ups",
    handClick: () => {
      console.log("item pressed!");
    },
    subtext: "pulling up..."
  },
  {
    label: "Bench Press",
    handClick: () => {
      WebBrowser.openBrowserAsync("https://slack.expo.io");
    },
    subtext: "Bench press"
  },
  {
    label: "Plank",
    handClick: () => {
      console.log("item pressed!");
    },
    subtext: "plankingggg"
  },
  {
    label: "Log Press",
    handClick: () => {
      console.log("item pressed!");
    },
    subtext: "log pressing"
  }
];

// export const images = require("../assets/images/expo-icon.png");
