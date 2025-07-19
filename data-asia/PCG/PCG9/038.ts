import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Shellder (Delta Species)",
         ja: "シェルダー（デルタ種）",
         fr: "Shellder (espèce delta)",
         de: "Schalen (Delta -Arten)",
         es: "Shellder (especie delta)",
         it: "Shellder (Delta Species)",
         pt: "Shellder (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [90],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Shell Grab",
            ja: "シェルグラブ",
            fr: "Saisir de coquille",
            de: "Muschelgreifer",
            es: "Captura de concha",
            it: "Guscio",
            pt: "Grab",
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
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
