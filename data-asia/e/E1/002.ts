import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Hoppip",
         ja: "ホッピップ",
         fr: "Hoppip",
         de: "Hoppip",
         es: "Hoppip",
         it: "Hoppip",
         pt: "Hoppip",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [187],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Sleep Powder",
            ja: "スリープパウダー",
            fr: "Poudre de sommeil",
            de: "Schlafpulver",
            es: "Polvo de sueño",
            it: "Polvere di sonno",
            pt: "Sono Powder",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
