enum Sidestep {
  SSL = "SSL",
  SSR = "SSR",
  DONT = "DONT"
}

interface TekkenCharacter {
  name: string;
  img: string;
  sidestep: Sidestep
}

interface Tekken {
  characters: TekkenCharacter[];
}

function getUrl(name: string) {
  return new URL(`../assets/characters/${name.toLowerCase()}.png`, import.meta.url).href
}

function createCharacter(name: string, sidestep: Sidestep, picName?: string | undefined) {
  if(!picName) {
    picName = name.toLowerCase().replace(" ", "");
  }
  return {
    name: name,
    img: getUrl(picName),
    sidestep: sidestep
  }
}

const data: Tekken = {
  characters: [
    createCharacter("Alisa", Sidestep.SSL),
    createCharacter("Asuka", Sidestep.SSR),
    createCharacter("Azucena", Sidestep.SSR, "azu"),
    createCharacter("Bryan", Sidestep.SSR),
    createCharacter("Claudio", Sidestep.SSL),
    createCharacter("Devil Jin", Sidestep.SSL, "deviljin"),
    createCharacter("Dragunov", Sidestep.SSR, "drag"),
    createCharacter("Eddy", Sidestep.SSR),
    createCharacter("Feng", Sidestep.SSL),
    createCharacter("Hwoarang", Sidestep.SSL),
    createCharacter("Jack", Sidestep.SSL),
    createCharacter("Jin", Sidestep.SSR),
    createCharacter("Jun", Sidestep.SSR),
    createCharacter("Kazuya", Sidestep.SSL),
    createCharacter("King", Sidestep.SSR),
    createCharacter("Kuma", Sidestep.SSR),
    createCharacter("Lars", Sidestep.SSR),
    createCharacter("Law", Sidestep.SSR),
    createCharacter("Lee", Sidestep.SSL),
    createCharacter("Leo", Sidestep.SSR),
    createCharacter("Leroy", Sidestep.SSL),
    createCharacter("Lidia", Sidestep.SSL),
    createCharacter("Lili", Sidestep.SSL),
    createCharacter("Nina", Sidestep.SSR),
    createCharacter("Paul", Sidestep.SSR),
    createCharacter("Panda", Sidestep.SSR),
    createCharacter("Raven", Sidestep.SSL),
    createCharacter("Reina", Sidestep.SSL),
    createCharacter("Shaheen", Sidestep.SSR),
    createCharacter("Steve", Sidestep.SSL),
    createCharacter("Victor", Sidestep.SSR),
    createCharacter("Xiaoyu", Sidestep.SSL),
    createCharacter("Yoshimitsu", Sidestep.SSL, "yoshi"),
    createCharacter("Zafina", Sidestep.SSL),
  ]
};

export {
  Sidestep,
  data
};

export type {
  Tekken,
  TekkenCharacter
};
