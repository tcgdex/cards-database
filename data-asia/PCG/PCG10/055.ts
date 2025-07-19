import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Nuzleaf",
         ja: "ヌズリーフ",
         fr: "Nuzleaf",
         de: "Nuzleaf",
         es: "Nuzleaf",
         it: "Nuzleaf",
         pt: "Nuzleaf",
      },


      category: "Pokemon",
      dexId: [274],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Fake Out",
            ja: "偽物",
            fr: "Truquer",
            de: "Fälschung aus",
            es: "Fingir",
            it: "Falsificare",
            pt: "Fake Out",
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
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Gentle Slap",
            ja: "穏やかな平手打ち",
            fr: "Gifle douce",
            de: "Sanfter Schlag",
            es: "Suave bofetada",
            it: "Slap delicato",
            pt: "Tapa suave",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
