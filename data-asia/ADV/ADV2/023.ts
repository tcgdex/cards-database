import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Raichu ex",
         ja: "Raichu Ex",
         fr: "Raichu ex",
         de: "Raichu ex",
         es: "Raichu ex",
         it: "Raichu Ex",
         pt: "Raichu Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [26],
      hp: 100,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Dazzle Blast",
            ja: "眩しい爆発",
            fr: "Explosion d'éblouissement",
            de: "Blende Explosion",
            es: "Explosión deslumbrante",
            it: "Esplosione abbagliante",
            pt: "Dazzle Blast",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Mega Thunderbolt",
            ja: "メガサンダーボルト",
            fr: "Mega Thunderbolt",
            de: "Mega Thunderbolt",
            es: "Mega rayo",
            it: "Mega Thunderbolt",
            pt: "Mega Thunderbolt",
          },
          effect: {
            en: "Discard all Energy cards attached to Raichu ex.",
            ja: "Raichu Exに取り付けられたすべてのエネルギーカードを捨てます。",
            fr: "Jetez toutes les cartes d'énergie attachées à Raichu Ex.",
            de: "Verwerfen Sie alle Energiekarten, die an Raichu EX angeschlossen sind.",
            es: "Deseche todas las tarjetas de energía unidas a Raichu Ex.",
            it: "Scartare tutte le carte di energia collegate a Raichu Ex.",
            pt: "Descarte todos os cartões de energia anexados a Raichu Ex.",
          },
          damage: 120,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
