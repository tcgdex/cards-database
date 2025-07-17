import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Weedle",
         ja: "コガの雑草",
         fr: "Weedle de Koga",
         de: "Kogas Unkraut",
         es: "Weedle de Koga",
         it: "Koga's Weedle",
         pt: "Weedle de Koga",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [13],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sting",
            ja: "刺し傷",
            fr: "Piquer",
            de: "Stechen",
            es: "Picadura",
            it: "Puntura",
            pt: "Picada",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless"],
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
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned; if tails, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは現在毒されています。尾の場合、防御するポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné; Si Tails, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet; Wenn Schwänze, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado; Si cola, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato; Se le code, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual está agora envenenado; Se as caudas, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
