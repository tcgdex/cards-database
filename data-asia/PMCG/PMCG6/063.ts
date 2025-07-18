import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Meowth (C)",
         ja: "ジョバンニの首尾（c）",
         fr: "Giovanni's Meowth (C)",
         de: "Giovannis Meowth (c)",
         es: "Meowth de Giovanni (c)",
         it: "Giovanni's Meowth (C)",
         pt: "Giovanni's Meowth (C)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [52],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Cat Fleas",
            ja: "猫のノミ",
            fr: "Fles de chat",
            de: "Katzenflöhe",
            es: "Pulgas de gato",
            it: "Bulle di gatto",
            pt: "Pulgas de gato",
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
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Cat Kick",
            ja: "猫キック",
            fr: "Coup de pied de chat",
            de: "Katzenkick",
            es: "Patada de gato",
            it: "Calcio di gatto",
            pt: "Chute de gato",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
