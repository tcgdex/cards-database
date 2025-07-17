import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Vulpix",
         ja: "Vulpix",
         fr: "Vulpix",
         de: "Vulpix",
         es: "Vulpix",
         it: "Vulpix",
         pt: "Vulpix",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [37],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tail Shake",
            ja: "テールシェイク",
            fr: "Secouer",
            de: "Schwanzschütteln",
            es: "Batido",
            it: "Scuoto di coda",
            pt: "Shake de cauda",
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
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Flare",
            ja: "フレア",
            fr: "Éclater",
            de: "Fackel",
            es: "Llamarada",
            it: "Bagliore",
            pt: "Flare",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
