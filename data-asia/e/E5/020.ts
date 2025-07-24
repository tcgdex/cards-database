import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Slugma",
         ja: "slugma",
         fr: "Glissade",
         de: "Slugma",
         es: "Slugma",
         it: "Slugma",
         pt: "Slugma",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [218],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Singe",
            ja: "シング",
            fr: "Roussir",
            de: "Versengen",
            es: "Chamuscar",
            it: "Singe",
            pt: "Singe",
          },
          effect: {
            en: "The Defending Pokemon is now Burned.",
            ja: "防御ポケモンは現在燃やされています。",
            fr: "Le Pokémon en défense est maintenant brûlé.",
            de: "Das verteidigende Pokemon ist jetzt verbrannt.",
            es: "El Pokémon defensor ahora está quemado.",
            it: "Il Pokemon in carica viene ora bruciato.",
            pt: "O Pokémon atual agora está queimado.",
          },
          damage: 10,
        },
      ],

      retreat: 2,

};
