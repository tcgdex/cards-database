import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Steelix",
         ja: "Steelix",
         fr: "Steelix",
         de: "Steelix",
         es: "Steelix",
         it: "Stelix",
         pt: "Steelix",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [208],
      hp: 110,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
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
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
            en: "Tail Crush",
            ja: "テールクラッシュ",
            fr: "Écrasement",
            de: "Schwanzquetscher",
            es: "Cola de cola",
            it: "Cotta di coda",
            pt: "Esmagamento da cauda",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage; if tails, this attack does 30 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は30のダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 30 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 30 Schäden plus 20 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 30 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 20 más de daño; Si Tails, este ataque hace 30 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 20 danni in più; Se coda, questo attacco infligge 30 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 20 mais danos; Se as caudas, esse ataque causam 30 danos.",
          },
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "holo",
        },
      ],
};
