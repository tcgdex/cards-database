import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Snubbull",
         ja: "Snubbull",
         fr: "Snubbull",
         de: "Snubbull",
         es: "Desorden",
         it: "Snubbull",
         pt: "Snubbull",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [209],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Raging Headbutt",
            ja: "荒れ狂うヘッドバット",
            fr: "Coup de tête déchaîné",
            de: "Raging Headbutt",
            es: "Cabezal furioso",
            it: "Raging Headbutt",
            pt: "Raging Headbutt",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 damage times the number of damage counters on Snubbull. If tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。ヘッドの場合、この攻撃は10ダメージを加えて10ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 10 dégâts plus 10 dégâts, le nombre de compteurs de dégâts sur Snubbull. Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Bei Köpfen führt dieser Angriff 10 Schäden plus 10 Schadenszeiten der Anzahl der Schadenszähler auf Snubbull. Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 veces el número de contadores de daño en Snubbull. Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni più 10 danni volte il numero di contatori di danno su Snubbull. Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 danos vezes o número de contadores de danos no Snubbull. Se caudas, esse ataque causa 10 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
