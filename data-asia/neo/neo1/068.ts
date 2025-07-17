import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Granbull",
         ja: "グランブル",
         fr: "Grain",
         de: "Granbull",
         es: "Abuela",
         it: "Granbull",
         pt: "Granbull",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [210],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Raging Charge",
            ja: "荒れ狂う料金",
            fr: "Charge déchaînée",
            de: "Raging Ladung",
            es: "Carga furiosa",
            it: "Accusa infuriata",
            pt: "Carga de fúria",
          },
          effect: {
            en: "This attack does 10 damage plus 10 damage for each damage counter on Granbull. Then, Granbull does 20 damage to itself.",
            ja: "この攻撃は、Granbullの各ダメージカウンターに対して10ダメージと10ダメージを与えます。その後、Granbullはそれ自体に20のダメージを与えます。",
            fr: "Cette attaque fait 10 dégâts plus 10 dégâts pour chaque compteur de dégâts sur Granbull. Ensuite, Granbull se fait 20 dégâts.",
            de: "Dieser Angriff verursacht 10 Schäden plus 10 Schäden für jeden Schadenschalter auf Granbull. Dann verursacht Granbull 20 Schäden an sich.",
            es: "Este ataque hace 10 daños más 10 daños por cada contador de daño en Granbull. Entonces, Granbull hace 20 daños a sí mismo.",
            it: "Questo attacco infligge 10 danni più 10 danni per ciascun contatore di danni su Granbull. Quindi, Granbull fa 20 danni a se stesso.",
            pt: "Este ataque causa 10 danos mais 10 danos para cada contador de danos no Granbull. Então, Granbull causa 20 danos a si mesmo.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
