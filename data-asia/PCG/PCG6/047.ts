import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Ralts",
         ja: "ラルト",
         fr: "Rals",
         de: "Ralts",
         es: "Ralts",
         it: "Ralti",
         pt: "Ralts",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [280],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Collect",
            ja: "集める",
            fr: "Collecter",
            de: "Sammeln",
            es: "Recolectar",
            it: "Raccogliere",
            pt: "Coletar",
          },
          effect: {
            en: "Draw a card.",
            ja: "カードを描きます。",
            fr: "Dessinez une carte.",
            de: "Zeichnen Sie eine Karte.",
            es: "Dibuja una carta.",
            it: "Disegna una carta.",
            pt: "Desenhe uma carta.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Quick Blow",
            ja: "素早い打撃",
            fr: "Coup rapide",
            de: "Schneller Schlag",
            es: "Golpe rápido",
            it: "BUOGNO QUAST",
            pt: "Golpe rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
