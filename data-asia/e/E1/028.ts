import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Clefairy",
         ja: "クリーフ",
         fr: "Clefairy",
         de: "Clefairy",
         es: "Clefairy",
         it: "Clefairy",
         pt: "Clefairy",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [35],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Shining Fingers",
            ja: "輝く指",
            fr: "Doigts brillants",
            de: "Leuchtende Finger",
            es: "Dedos brillantes",
            it: "Dita splendenti",
            pt: "Dedos brilhantes",
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
          cost: ["Colorless"],
          name: {
            en: "Slap",
            ja: "平手打ち",
            fr: "Gifler",
            de: "Schlagen",
            es: "Bofetada",
            it: "Schiaffo",
            pt: "Tapa",
          },
          damage: 10,
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
