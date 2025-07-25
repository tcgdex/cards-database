import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Kangaskhan",
         ja: "カンガスハン",
         fr: "Kangaskhan",
         de: "Kangaskhan",
         es: "Kangaskhan",
         it: "Kangaskhan",
         pt: "Kangaskhan",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [115],
      hp: 80,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Fetch",
            ja: "フェッチ",
            fr: "Aller chercher",
            de: "Bringen",
            es: "Buscar",
            it: "Andare a prendere",
            pt: "Buscar",
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
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "One-Two Punch",
            ja: "ワンツーパンチ",
            fr: "Un coup de poing",
            de: "Ein zwei Punsch",
            es: "Uno y dos golpes",
            it: "Punch One-Two",
            pt: "Um soco de dois",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 20 mais danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
