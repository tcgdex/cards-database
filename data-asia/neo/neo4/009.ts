import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Heracross",
         ja: "ヘラクロス",
         fr: "Hélicoïdal",
         de: "Heracross",
         es: "Heracross",
         it: "Eracross",
         pt: "Heracross",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [214],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Charging Horn",
            ja: "充電ホーン",
            fr: "Chronométrage de charge",
            de: "Horn aufladeten",
            es: "Bocina",
            it: "Carorto di ricarica",
            pt: "Chifre de carregamento",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, this attack does 30 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて30ダメージを与えます。尾の場合、この攻撃は30のダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 30 dégâts supplémentaires. Si Tails, cette attaque fait 30 dégâts.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 30 weitere Schäden. Wenn Schwänze, verursacht dieser Angriff 30 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 30 más de daño. Si Tails, este ataque hace 30 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 30 danni in più. Se coda, questo attacco infligge 30 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 30 mais danos. Se as caudas, esse ataque causam 30 danos.",
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
