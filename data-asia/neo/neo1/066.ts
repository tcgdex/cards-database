import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Togepi",
         ja: "togepi",
         fr: "Togepi",
         de: "Togepi",
         es: "Tegepi",
         it: "Togepi",
         pt: "TOGEPI",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [175],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Poison Barb",
            ja: "毒バーブ",
            fr: "Barre de poison",
            de: "Gifte Barb",
            es: "Barbilla de envenenamiento",
            it: "Veleno Barb",
            pt: "Poison Barb",
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
      ],
};
