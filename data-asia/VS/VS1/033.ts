import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Chuck's Primeape",
         ja: "チャックの入門",
         fr: "Primeape de Chuck",
         de: "Chucks Primape",
         es: "Chuck's Primeape",
         it: "Chuck's Primeape",
         pt: "Chuck's Primeape",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [57],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Rage Kick",
            ja: "レイジキック",
            fr: "Coup de rage",
            de: "Wutkick",
            es: "Patada de rabia",
            it: "Calcio di rabbia",
            pt: "Kick Rage",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage for each damage counter on Chuck's Primeape.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20のダメージに加えて、チャックのプライムエーパーの各ダメージカウンターでさらに10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque compteur de dégâts sur Primeape de Chuck.",
            de: "Eine Münze drehen. Wenn dieser Angriff 20 Schäden plus 10 weitere Schäden für jeden Schadensschalter auf Chucks Primape verursachen.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño por cada mostrador de daño en la primaape de Chuck.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 20 danni più 10 danni in più per ciascun contatore di danni sulla prima di Chuck.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 mais danos para cada balcão de danos no primaape de Chuck.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
