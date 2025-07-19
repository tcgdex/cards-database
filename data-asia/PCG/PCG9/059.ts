import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Nidorina (Delta Species)",
         ja: "ニドリーナ（デルタ種）",
         fr: "Nidorina (espèces delta)",
         de: "Nidorina (Delta -Arten)",
         es: "Nidorina (especie delta)",
         it: "Nidorina (Delta Species)",
         pt: "Nidorina (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [30],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

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
        {
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
            en: "Rear Kick",
            ja: "リアキック",
            fr: "Coup de pied arrière",
            de: "Heck -Kick",
            es: "Patada trasera",
            it: "Calcio posteriore",
            pt: "Chute traseiro",
          },
          damage: 40,
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
