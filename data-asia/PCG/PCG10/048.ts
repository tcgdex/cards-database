import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Meditite",
         ja: "瞑想",
         fr: "Méditer",
         de: "Meditit",
         es: "Meditita",
         it: "Meditite",
         pt: "Meditite",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [307],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Psyshock",
            ja: "PsyShock",
            fr: "Psychock",
            de: "Psyshock",
            es: "Psíquico",
            it: "Psyshock",
            pt: "Psyshock",
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
          damage: 10,
        },
        {
          cost: ["Fighting"],
          name: {
            en: "Cross Chop",
            ja: "クロスチョップ",
            fr: "Hacher",
            de: "Cross Chop",
            es: "Picar",
            it: "Cross Chop",
            pt: "Cruz Chop",
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
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
