import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Nidoran F",
         ja: "ジョバンニのニドランf",
         fr: "Nidoran F de Giovanni",
         de: "Giovannis Nidoran f",
         es: "Nidoran F de Giovanni",
         it: "Giovanni's Nidoran f",
         pt: "Nidoran de Giovanni f",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [29],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Horn Thrust",
            ja: "ホーンスラスト",
            fr: "Coup de corne",
            de: "Hornschub",
            es: "Empuje de la bocina",
            it: "Spinta del corno",
            pt: "Impulso da buzina",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Double-edge",
            ja: "ダブルエッジ",
            fr: "À double bord",
            de: "Doppelkante",
            es: "De doble borde",
            it: "Doppio bordo",
            pt: "Dupla borda",
          },
          effect: {
            en: "Giovanni's Nidoran F does 20 damage to itself.",
            ja: "ジョバンニのニドランFは、それ自体に20のダメージを与えます。",
            fr: "Le Nidoran F de Giovanni se fait 20 dégâts.",
            de: "Giovannis Nidoran F verursacht 20 Schäden an sich.",
            es: "Nidoran F de Giovanni hace 20 daños a sí mismo.",
            it: "Il Nidoran F di Giovanni fa 20 danni a se stesso.",
            pt: "O Nidoran F de Giovanni causa 20 danos a si mesmo.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
