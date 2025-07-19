import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Seel (Delta Species)",
         ja: "SEEL（デルタ種）",
         fr: "Seel (espèce delta)",
         de: "Seel (Delta -Arten)",
         es: "Seel (especie delta)",
         it: "Seel (specie delta)",
         pt: "Seel (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [86],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Pound",
            ja: "ポンド",
            fr: "Livre",
            de: "Pfund",
            es: "Libra",
            it: "Libbra",
            pt: "Libra",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Aurora Beam",
            ja: "オーロラビーム",
            fr: "Faisceau auroré",
            de: "Aurora Strahl",
            es: "Haz de aurora",
            it: "Raggio di aurora",
            pt: "Feixe de aurora",
          },
          damage: 20,
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
