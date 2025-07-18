import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Clair's Gyarados",
         ja: "クレアのギャラドス",
         fr: "Gyarados de Clair",
         de: "Clairs Gyarados",
         es: "Gyarados de Clair",
         it: "Gyarados di Clair",
         pt: "Gyarados de Clair",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [130],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Paralyzing Gaze",
            ja: "麻痺する視線",
            fr: "Regard paralysant",
            de: "Lähmendem Blick",
            es: "Mirada paralizante",
            it: "Sguardo paralizzante",
            pt: "Olhar paralisante",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Thrash",
            ja: "スラッシュ",
            fr: "Débattre",
            de: "Thrash",
            es: "Movimiento de piernas",
            it: "Thrash",
            pt: "Thrash",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, Clair's Gyarados does 10 damage to itself.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与えます。テールの場合、クレアのギャラドスはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 10 dégâts supplémentaires. Si Tails, les gyarados de Clair se font 10 dégâts.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 10 weitere Schäden. Wenn Schwänze, verursacht Clairs Gyarados 10 Schaden für sich.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 10 más de daño. Si Tails, Gyarados de Clair hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 10 altri danni. Se le code, Gyarados di Clair fa 10 danni a se stesso.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 10 mais danos. Se as caudas, os gyarados de Clair causam 10 danos a si mesmos.",
          },
        },
      ],

      retreat: 3,

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
