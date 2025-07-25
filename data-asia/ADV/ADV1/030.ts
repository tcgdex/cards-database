import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Hitmonchan ex",
         ja: "Hitmonchan ex",
         fr: "Hitmonchan ex",
         de: "Hitmonchan ex",
         es: "Hitmonchan ex",
         it: "Hitmonchan Ex",
         pt: "Hitmnchan Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [107],
      hp: 90,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Steady Punch",
            ja: "安定したパンチ",
            fr: "Poinçon régulier",
            de: "Stetiger Schlag",
            es: "Golpe constante",
            it: "Punch costante",
            pt: "Soco constante",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 daños más.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 10 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Sky Uppercut",
            ja: "スカイアッパーカット",
            fr: "Uppercut ciel",
            de: "Sky Uppercut",
            es: "Uppercut del cielo",
            it: "Sky Uppercut",
            pt: "Sky Uppercut",
          },
          effect: {
            en: "This attack's damage is not affected by Resistance.",
            ja: "この攻撃の損傷は、抵抗の影響を受けません。",
            fr: "Les dégâts de cette attaque ne sont pas affectés par la résistance.",
            de: "Der Schaden dieses Angriffs wird nicht durch Widerstand beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la resistencia.",
            it: "Il danno di questo attacco non è influenzato dalla resistenza.",
            pt: "O dano deste ataque não é afetado pela resistência.",
          },
          damage: 50,
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
