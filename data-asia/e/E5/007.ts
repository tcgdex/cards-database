import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoran F - 007/088",
         ja: "Nidoran F -007/088",
         fr: "Nidoran F - 007/088",
         de: "Nidoran F - 007/088",
         es: "Nidoran F - 007/088",
         it: "Nidoran F - 007/088",
         pt: "Nidoran F - 007/088",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [29],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Poison Sting",
            ja: "毒物",
            fr: "Piqûre de poison",
            de: "Giftstich",
            es: "Picadura de veneno",
            it: "Sting veleno",
            pt: "Picada de veneno",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
