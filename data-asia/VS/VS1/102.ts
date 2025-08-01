import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Lance's Kingdra",
         ja: "ランスのキングドラ",
         fr: "Kingdra de Lance",
         de: "Lances Kingdra",
         es: "Kingdra de Lance",
         it: "Kingdra di Lance",
         pt: "Kingdra de Lance",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [230],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Aqua Wave",
            ja: "アクアウェーブ",
            fr: "Vague aqua",
            de: "Aqua -Welle",
            es: "Ola Aqua",
            it: "Aqua Wave",
            pt: "Onda aqua",
          },
          effect: {
            en: "Flip 2 coins. This attack does 20 damage plus 20 more damage for each heads.",
            ja: "2つのコインをフリップします。この攻撃は20のダメージに加えて、各ヘッドに対して20のダメージをさらに発生させます。",
            fr: "Flip 2 pièces. Cette attaque fait 20 dégâts plus 20 dégâts supplémentaires pour chaque tête.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 20 Schäden plus 20 weitere Schäden für jeden Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 20 daños más 20 más de daño para cada cabezal.",
            it: "Flip 2 monete. Questo attacco infligge 20 danni più 20 danni in più per ogni teste.",
            pt: "Flip 2 moedas. Este ataque causa 20 danos mais 20 mais danos para cada cabeça.",
          },
        },
      ],

      retreat: 2,

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
