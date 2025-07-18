import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Jasmine's Raichu",
         ja: "ジャスミンのライチュ",
         fr: "Raichu de Jasmine",
         de: "Jasmine's Raichu",
         es: "Raichu de Jasmine",
         it: "Raichu di Jasmine",
         pt: "Jasmine's Raichu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [26],
      hp: 60,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tail Slap",
            ja: "テールスラップ",
            fr: "Gifle",
            de: "Schwanzschlag",
            es: "Bofetada",
            it: "Slap di coda",
            pt: "Tail Slap",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Lightning"],
          name: {
            en: "Thunderbolt",
            ja: "落雷",
            fr: "Coup de tonnerre",
            de: "Blitz",
            es: "Rayo",
            it: "Fulmine",
            pt: "Raio",
          },
          effect: {
            en: "Discard all Energy cards attached to Jasmine's Raichu in order to use this attack.",
            ja: "この攻撃を使用するために、ジャスミンのライチュに取り付けられたすべてのエネルギーカードを捨ててください。",
            fr: "Jetez toutes les cartes d'énergie attachées à Raichu de Jasmine afin d'utiliser cette attaque.",
            de: "Verwerfen Sie alle Energiekarten, die an Jasmine's Raichu verbunden sind, um diesen Angriff zu verwenden.",
            es: "Deseche todas las cartas de energía unidas a Raichu de Jasmine para usar este ataque.",
            it: "Scartare tutte le carte di energia collegate al Raichu di Jasmine per usare questo attacco.",
            pt: "Descarte todos os cartões de energia ligados ao Raichu de Jasmine para usar esse ataque.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
