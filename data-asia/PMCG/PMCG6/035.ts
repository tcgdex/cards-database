import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Moltres",
         ja: "ブレインのモルトレス",
         fr: "Moltres de Blaine",
         de: "Blaines Moltres",
         es: "Moltres de Blaine",
         it: "Blaine's Moltres",
         pt: "Moltres de Blaine",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [146],
      hp: 90,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Fire", "Fire", "Fire", "Fire"],
          name: {
            en: "Phoenix Flame",
            ja: "フェニックスの炎",
            fr: "Phoenix Flame",
            de: "Phoenix Flame",
            es: "Phoenix Flame",
            it: "Phoenix Flame",
            pt: "Phoenix Flame",
          },
          effect: {
            en: "Flip a coin. If tails, shuffle Blaine's Moltres and all cards attached to it into your deck (after doing damage).",
            ja: "コインをひっくり返します。尾の場合、シャッフルブレインのモルト、およびすべてのカードがデッキに取り付けられています（ダメージを与えた後）。",
            fr: "Retourner une pièce. Si Tails, mélangez les Moltres de Blaine et toutes les cartes qui y sont attachées dans votre deck (après avoir fait des dégâts).",
            de: "Eine Münze drehen. Wenn Schwänze, mischen Sie Blaines Moltres und alle Karten, die an Ihr Deck angeschlossen sind (nachdem Sie Schaden angerichtet haben).",
            es: "Voltea una moneda. SI Tails, baraja los Moltres de Blaine y todas las cartas unidas a su mazo (después de hacer daño).",
            it: "Capovolgi una moneta. Se le code, shuffle Blaine i moltres e tutte le carte attaccate nel tuo mazzo (dopo aver fatto danni).",
            pt: "Vire uma moeda. Se as caudas, embaralham Moltres de Blaine e todas as cartas presas a ele no seu baralho (depois de causar danos).",
          },
          damage: 90,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
