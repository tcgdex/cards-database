import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Machoke",
         ja: "マチョーク",
         fr: "Machoke",
         de: "Machoke",
         es: "Machoke",
         it: "Machoke",
         pt: "Machoke",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [67],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Karate Chop",
            ja: "空手チョップ",
            fr: "Karaté Chop",
            de: "Karate Chop",
            es: "Karate Chop",
            it: "Carate Chop",
            pt: "Costeleta de karatê",
          },
          effect: {
            en: "Does 50 damage minus 10 damage for each damage counter on Machoke.",
            ja: "マチョークの各ダメージカウンターに対して50ダメージを引いた10のダメージを引いた。",
            fr: "Fait 50 dégâts moins 10 dégâts pour chaque compteur de dégâts sur Machoke.",
            de: "Schaden Sie 50 Schaden für jeden Schadensschalter bei Machoke.",
            es: "Hace 50 daños menos 10 daños por cada contador de daños en Machoke.",
            it: "Fa 50 danni meno 10 danni per ciascun contatore di danni su Machoke.",
            pt: "50 danos menos 10 danos para cada contador de danos em Machoke.",
          },
          damage: None,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Submission",
            ja: "提出",
            fr: "Soumission",
            de: "Vorlage",
            es: "Envío",
            it: "Sottomissione",
            pt: "Submissão",
          },
          effect: {
            en: "Machoke does 20 damage to itself.",
            ja: "マチョークはそれ自体に20のダメージを与えます。",
            fr: "Machoke fait 20 dégâts à lui-même.",
            de: "Machoke schädigt sich 20.",
            es: "Machoke hace 20 daños a sí mismo.",
            it: "Machoke fa 20 danni a se stesso.",
            pt: "Machoke causa 20 danos a si mesmo.",
          },
          damage: 60,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
