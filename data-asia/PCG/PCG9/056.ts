import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Natu (Delta Species)",
         ja: "NATU（デルタ種）",
         fr: "Natu (espèces delta)",
         de: "Natu (Delta -Arten)",
         es: "Natu (especie delta)",
         it: "Natu (specie delta)",
         pt: "Natu (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [177],
      hp: 40,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
            en: "Flop",
            ja: "フロップ",
            fr: "Fiasco",
            de: "Flop",
            es: "Fracaso",
            it: "Flop",
            pt: "FLOP",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
