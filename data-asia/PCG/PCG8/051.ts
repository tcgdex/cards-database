import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Jigglypuff",
         ja: "jigglypuff",
         fr: "Jigglypuff",
         de: "Wacklypuff",
         es: "Jigglypuff",
         it: "Jigglypuff",
         pt: "Jigglypuff",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [39],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Hypnoblast",
            ja: "催眠芽球",
            fr: "Hypnoblaste",
            de: "Hypnoblast",
            es: "Hipnoblasto",
            it: "Ipnoblasto",
            pt: "Hipnoblasto",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
