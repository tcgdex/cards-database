import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Jasmine's Ampharos",
         ja: "ジャスミンのアンファロス",
         fr: "Ampharos de Jasmine",
         de: "Jasmines Ampharos",
         es: "Ámpharos de Jasmine",
         it: "Ampharos di Jasmine",
         pt: "Ampharos de Jasmine",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [181],
      hp: 70,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Thunder Punch",
            ja: "サンダーパンチ",
            fr: "Punch du tonnerre",
            de: "Donnerpunsch",
            es: "Trueno",
            it: "PUNCHIO CHE",
            pt: "Soco do trovão",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, Jasmine's Ampharos does 20 damage to itself.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。尾の場合、ジャスミンのアンファロスはそれ自体に20のダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires. Si Tails, les ampharos de Jasmine se font 20 dégâts.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 20 weitere Schäden. Wenn Schwänze, verursacht Jasmines Ampharos 20 Schäden an sich.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 20 más de daño. Si Tails, el Ampharos de Jasmine hace 20 daños a sí mismo.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 20 danni in più. Se le code, gli Ampharos di Jasmine fanno 20 danni a se stesso.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 20 mais danos. Se as caudas, os Ampharos de Jasmine causam 20 danos a si mesmos.",
          },
        },
      ],

      retreat: 2,

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
