import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Houndour",
         ja: "猟犬",
         fr: "Chouchou",
         de: "Houndour",
         es: "Acosar",
         it: "Houndour",
         pt: "Houndour",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [228],
      hp: 50,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Smog",
            ja: "スモッグ",
            fr: "Smog",
            de: "SMOG",
            es: "Niebla tóxica",
            it: "Smog",
            pt: "Fumaça",
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
