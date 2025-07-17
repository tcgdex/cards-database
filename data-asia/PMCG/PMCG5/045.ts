import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Mankey",
         ja: "ブロックのマンキー",
         fr: "Brock's Mankey",
         de: "Brocks Mockey",
         es: "Mankey de Brock",
         it: "Brock's Mankey",
         pt: "Mankey de Brock",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [56],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Fidget",
            ja: "フィジェット",
            fr: "Truquer",
            de: "Zappeln",
            es: "Agitarse",
            it: "Agitarsi",
            pt: "Inquietação",
          },
          effect: {
            en: "Shuffle your deck.",
            ja: "デッキをシャッフルします。",
            fr: "Mélanger votre deck.",
            de: "Mischen Sie Ihr Deck.",
            es: "Baraja tu mazo.",
            it: "Shuffle il tuo mazzo.",
            pt: "Embaralhar seu baralho.",
          },
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
            en: "Does 40 damage minus 10 damage for each damage counter on Brock's Mankey.",
            ja: "BrockのMankeyの各ダメージカウンターに対して40ダメージから10ダメージを差し引いて10ダメージを除きます。",
            fr: "Fait 40 dégâts moins 10 dégâts pour chaque compteur de dégâts sur le mankey de Brock.",
            de: "Schaden Sie 40 Schaden für jeden Schadensschalter auf Brocks Manger.",
            es: "Hace 40 daños menos 10 daños por cada mostrador de daño en Mankey de Brock.",
            it: "Fa 40 danni meno 10 danni per ogni danno sul mankey di Brock.",
            pt: "40 danos menos 10 danos para cada balcão de danos no Mankey de Brock.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
