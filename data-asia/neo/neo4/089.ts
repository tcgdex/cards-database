import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Girafarig",
         ja: "Girafarig",
         fr: "Girafarig",
         de: "Girafarig",
         es: "Girafarig",
         it: "Girafarig",
         pt: "Girafarig",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [203],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tail Bite",
            ja: "テールバイト",
            fr: "Morsure",
            de: "Schwanzbiss",
            es: "Mordedura",
            it: "Morso di coda",
            pt: "Picada de cauda",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos; Se caudas, esse ataque causa 10 danos.",
          },
        },
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Psychic",
            ja: "サイキック",
            fr: "Psychique",
            de: "Psychisch",
            es: "Psíquico",
            it: "Psichico",
            pt: "Psíquico",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokemon.",
            ja: "ディフェンディングポケモンに取り付けられた各エネルギーカードに対して、10のダメージと10ダメージがさらに10ダメージを与えます。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque carte d'énergie attachée au Pokémon en défense.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jede an das verteidigende Pokémon angeschlossene Energiekarte.",
            es: "Hace 10 daños más 10 daños más por cada tarjeta de energía unida al Pokémon defensor.",
            it: "Fa 10 danni più 10 danni in più per ogni carta di energia collegata al Pokemon in difesa.",
            pt: "10 danos mais 10 mais danos para cada cartão de energia ligado ao Pokémon atual.",
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
