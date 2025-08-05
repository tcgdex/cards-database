import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Spinarak - 006/092",
         ja: "Spinarak -006/092",
         fr: "Spinarak - 006/092",
         de: "Spinarak - 006/092",
         es: "SPILARAK - 006/092",
         it: "SpinArak - 006/092",
         pt: "Spinarak - 006/092",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [167],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Sharp Stinger",
            ja: "シャープなスティンガー",
            fr: "Serpent pointu",
            de: "Scharfer Stachel",
            es: "Aguijón",
            it: "Pungiglione acuto",
            pt: "Stinger afiado",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned. If tails, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。尾の場合、防御するポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné. Si Tails, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet. Wenn Schwänze, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado. Si cola, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato. Se le code, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado. Se as caudas, o pokemon defensor agora está paralisado.",
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
