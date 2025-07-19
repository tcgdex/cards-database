import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Pidgey (Delta Species)",
         ja: "ピッジー（デルタ種）",
         fr: "Pidgey (espèces delta)",
         de: "Pidgey (Delta -Arten)",
         es: "Pidgey (especie delta)",
         it: "Pidgey (Delta Species)",
         pt: "Pidgey (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [16],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Wing Attack",
            ja: "翼攻撃",
            fr: "Attaque d'aile",
            de: "Flügelangriff",
            es: "Ataque del ala",
            it: "Attacco dell'ala",
            pt: "Ataque de asa",
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
