import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Clair's Kingdra",
         ja: "クレアのキングドラ",
         fr: "Kingdra de Clair",
         de: "Clairs Kingdra",
         es: "Kingdra de Clair",
         it: "Clair's Kingdra",
         pt: "Kingdra de Clair",
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
            en: "Ram",
            ja: "ラム",
            fr: "Bélier",
            de: "RAM",
            es: "RAM",
            it: "RAM",
            pt: "Bater",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Torrent",
            ja: "急流",
            fr: "Torrent",
            de: "Torrent",
            es: "Torrente",
            it: "Torrent",
            pt: "Torrente",
          },
          effect: {
            en: "Flip 2 coins. This attack does 30 damage plus 10 more damage for each heads.",
            ja: "2つのコインをフリップします。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 30 dégâts plus 10 dégâts supplémentaires pour chaque tête.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schäden plus 10 weitere Schäden für jeden Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 30 daños más 10 daños más para cada cabezal.",
            it: "Flip 2 monete. Questo attacco infligge 30 danni più 10 danni in più per ogni teste.",
            pt: "Flip 2 moedas. Este ataque causa 30 danos mais 10 mais danos para cada cabeça.",
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
