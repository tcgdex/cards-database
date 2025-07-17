import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Pikachu",
         ja: "ピカチュウ",
         fr: "Pikachu",
         de: "Pikachu",
         es: "Pikachu",
         it: "Pikachu",
         pt: "Pikachu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [25],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Max Voltage",
            ja: "最大電圧",
            fr: "Tension maximale",
            de: "Maximale Spannung",
            es: "Voltaje máximo",
            it: "Massima tensione",
            pt: "Tensão máxima",
          },
          effect: {
            en: "Discard all Lightning Energy cards attached to Pikachu. This attack does 20 damage plus 10 more damage for each Energy card discarded in this way.",
            ja: "ピカチュウに取り付けられたすべての稲妻エネルギーカードを捨てます。この攻撃は、この方法で破棄されたエネルギーカードごとに20のダメージに加えて10ダメージを与えます。",
            fr: "Jeter toutes les cartes d'énergie Lightning attachées à Pikachu. Cette attaque fait 20 dégâts plus 10 dégâts supplémentaires pour chaque carte d'énergie rejetée de cette manière.",
            de: "Verwerfen Sie alle Blitzelenergiekarten, die an Pikachu angebracht sind. Dieser Angriff verursacht 20 Schäden plus 10 weitere Schäden für jede auf diese Weise verworfene Energiekarte.",
            es: "Deseche todas las tarjetas de energía de Lightning unidas a Pikachu. Este ataque hace 20 daños más 10 daños más por cada carta de energía descartada de esta manera.",
            it: "Scartare tutte le carte di energia Lightning attaccate a Pikachu. Questo attacco infligge 20 danni più 10 danni in più per ciascuna carta di energia scartata in questo modo.",
            pt: "Descarte todos os cartões de energia de raios ligados ao Pikachu. Este ataque causa 20 de dano mais 10 mais danos para cada cartão de energia descartado dessa maneira.",
          },
        },
      ],

      retreat: 1,

};
