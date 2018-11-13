import faker from "faker";
import random from "lodash/random";

import wallpaper1 from "../assets/wallpapers/1.png";
import wallpaper2 from "../assets/wallpapers/2.png";
import wallpaper3 from "../assets/wallpapers/3.png";

const wallpapers = [wallpaper1, wallpaper2, wallpaper3];

export default function generate(count = 1) {
  return Array.from(Array(count)).map((_, index) => ({
    key: index, // must be unique id|uuid etc
    title: faker.name.title(),
    activities: random(1, 999),
    from: random(1, 9999),
    wallpaper: wallpapers[random(0, wallpapers.length - 1)]
  }));
}
