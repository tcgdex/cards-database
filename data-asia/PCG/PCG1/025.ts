import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwag",
         ja: "poliwag",
         fr: "Poliwag",
         de: "Poliwag",
         es: "Poliwag",
         it: "Poliwag",
         pt: "Poliwag",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [60],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Spiral Attack",
            ja: "スパイラル攻撃",
            fr: "Attaque en spirale",
            de: "Spiralangriff",
            es: "Ataque espiral",
            it: "Attacco a spirale",
            pt: "Ataque espiral",
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
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tail Whap",
            ja: "尾のwhap",
            fr: "Bap",
            de: "Schwanzpeak",
            es: "Cola whap",
            it: "Coda whap",
            pt: "Tail Whap",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
