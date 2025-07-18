import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Golbat",
         ja: "ゴルバット",
         fr: "Golbat",
         de: "Golbat",
         es: "Golosina",
         it: "Golbat",
         pt: "Golbat",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [42],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

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
            en: "Golbat can't be Paralyzed.",
            ja: "ゴルバットは麻痺することはできません。",
            fr: "Golbat ne peut pas être paralysé.",
            de: "Golbat kann nicht gelähmt werden.",
            es: "Golbat no puede ser paralizado.",
            it: "Golbat non può essere paralizzato.",
            pt: "Golbat não pode ser paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Spiral Drain",
            ja: "スパイラルドレイン",
            fr: "Spiritin en spirale",
            de: "Spiralabfluss",
            es: "Desagüe",
            it: "Scarico a spirale",
            pt: "Dreno em espiral",
          },
          effect: {
            en: "Remove 1 damage counter from Golbat.",
            ja: "Golbatから1つのダメージカウンターを取り外します。",
            fr: "Retirez 1 compteur de dégâts de Golbat.",
            de: "Entfernen Sie 1 Schadenschalter aus dem Golbat.",
            es: "Retire 1 contador de daño de Golbat.",
            it: "Rimuovere 1 contatore di danni da Golbat.",
            pt: "Remova 1 contador de danos do Golbat.",
          },
          damage: 20,
        },
      ],


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
