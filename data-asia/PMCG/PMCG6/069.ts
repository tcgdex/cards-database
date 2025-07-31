import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Kangaskhan",
         ja: "ブレインのカンガスハン",
         fr: "Kangaskhan de Blaine",
         de: "Blaines Kangaskhan",
         es: "Blaine's Kangaskhan",
         it: "Blaine's Kangaskhan",
         pt: "Kangaskhan de Blaine",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [115],
      hp: 80,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Child's Punch",
            ja: "子供のパンチ",
            fr: "Punch de l'enfant",
            de: "Kinderstempel",
            es: "Golpe de niños",
            it: "PUNCO DEL BAMBINO",
            pt: "Soco da criança",
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
          damage: 10,
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
            en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30のダメージに加えて10ダメージを与えます。尾の場合、この攻撃は30のダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 10 dégâts supplémentaires; Si Tails, cette attaque fait 30 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 30 Schäden plus 10 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 30 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 10 más de daño; Si Tails, este ataque hace 30 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 10 danni in più; Se coda, questo attacco infligge 30 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 10 mais danos; Se as caudas, esse ataque causam 30 danos.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
