import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Zubat",
         ja: "Zubat",
         fr: "Zubat",
         de: "Zubat",
         es: "Zubat",
         it: "Zubat",
         pt: "Zubat",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [41],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Self-control",
            ja: "自制心",
            fr: "Maîtrise de soi",
            de: "Selbstbeherrschung",
            es: "Autocontrol",
            it: "Autocontrollo",
            pt: "Auto-controle",
          },
          effect: {
            en: "Zubat can't be Paralyzed.",
            ja: "Zubatは麻痺することはできません。",
            fr: "Zubat ne peut pas être paralysé.",
            de: "Zubat kann nicht gelähmt werden.",
            es: "Zubat no puede ser paralizado.",
            it: "Zubat non può essere paralizzato.",
            pt: "Zubat não pode ser paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
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
