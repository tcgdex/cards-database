import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Zubat",
         ja: "Zubat",
         fr: "Zubat",
         de: "Zubat",
         es: "Zubat",
         it: "Zubat",
         pt: "Zubat",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [41],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 10,
        },
        {
          cost: ["Grass"],
          name: {
            en: "Poison Spray",
            ja: "毒スプレー",
            fr: "Pulvérisation",
            de: "Giftspray",
            es: "Spray",
            it: "Spray veleno",
            pt: "Spray de veneno",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
