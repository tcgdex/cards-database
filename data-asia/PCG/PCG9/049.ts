import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Mareep (Delta Species)",
         ja: "Mareep（デルタ種）",
         fr: "MAREEP (espèce delta)",
         de: "Mareep (Delta -Arten)",
         es: "Mareep (especie delta)",
         it: "Mareep (Delta Species)",
         pt: "Marep (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [179],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tail Whap",
            ja: "尾のwhap",
            fr: "Bap",
            de: "Schwanzpeak",
            es: "Cola whap",
            it: "Coda whap",
            pt: "Tail Whap",
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
