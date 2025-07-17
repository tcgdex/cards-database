import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Mantine",
         ja: "マンティン",
         fr: "Mante",
         de: "Mantine",
         es: "Mantil",
         it: "Mantino",
         pt: "Mantino",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [226],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Giant Wave",
            ja: "巨大な波",
            fr: "Vague géante",
            de: "Riesenwelle",
            es: "Ola gigante",
            it: "Onda gigante",
            pt: "Onda gigante",
          },
          effect: {
            en: "Mantine can't attack during your next turn.",
            ja: "マンティンは次のターン中に攻撃することはできません。",
            fr: "Mantine ne peut pas attaquer pendant votre prochain tour.",
            de: "Mantine kann in Ihrer nächsten Runde nicht angreifen.",
            es: "Mantine no puede atacar durante tu próximo turno.",
            it: "Mantine non può attaccare durante il tuo prossimo turno.",
            pt: "Mantine não pode atacar durante o seu próximo turno.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
