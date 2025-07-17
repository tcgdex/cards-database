import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Psyduck",
         ja: "Psyduck",
         fr: "Psyde",
         de: "Psyduck",
         es: "Psíquico",
         it: "Psyduck",
         pt: "Psyduck",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [54],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Flipper Splash",
            ja: "フリッパースプラッシュ",
            fr: "Éclaboussures de flipper",
            de: "Flipper -Spritzer",
            es: "Chapoteo",
            it: "Flipper Splash",
            pt: "Flipper Splash",
          },
          damage: 10,
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Migraine",
            ja: "片頭痛",
            fr: "Migraine",
            de: "Migräne",
            es: "Migraña",
            it: "Emicrania",
            pt: "Enxaqueca",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused. If tails, Psyduck is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。尾の場合、Psyduckは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus. Si Tails, Psyduck est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt. Wenn Schwänze, ist Psyduck jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido. Si Tails, Psyduck ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso. Se le code, Psyduck è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso. Se caudas, Psyduck agora está confuso.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
