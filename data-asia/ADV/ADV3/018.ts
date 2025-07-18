import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Corphish",
         ja: "コーフィッシュ",
         fr: "Corphish",
         de: "Korph",
         es: "De carnero",
         it: "Corphish",
         pt: "Corphish",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [341],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Beat",
            ja: "ビート",
            fr: "Battre",
            de: "Schlagen",
            es: "Derrotar",
            it: "Colpo",
            pt: "Bater",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Toxic Grip",
            ja: "有毒グリップ",
            fr: "Poignée toxique",
            de: "Giftiger Griff",
            es: "Agarre tóxico",
            it: "Presa tossica",
            pt: "Aderência tóxica",
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
