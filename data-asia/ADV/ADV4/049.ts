import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Machop",
         ja: "マチョップ",
         fr: "Machop",
         de: "Machop",
         es: "Machop",
         it: "Machop",
         pt: "Machop",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [66],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Knuckle Punch",
            ja: "ナックルパンチ",
            fr: "Coup de poing",
            de: "Knöchelschlag",
            es: "Puñetazo",
            it: "Punch Knuckle",
            pt: "Punchamento da junta",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless"],
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
            en: "Does 30 damage minus 10 damage for each damage counter on Machop.",
            ja: "Machopのダメージカウンターごとに30ダメージを引いた10ダメージを引いた。",
            fr: "Fait 30 dégâts moins 10 dégâts pour chaque compteur de dégâts sur Machop.",
            de: "Schaden Sie 30 Schaden für jeden Schadenschalter auf Machop.",
            es: "Hace 30 daños menos 10 daños por cada contador de daños en Machop.",
            it: "Fa 30 danni meno 10 danni per ciascun contatore di danni su Machop.",
            pt: "30 danos menos 10 danos para cada contador de danos em Machop.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
