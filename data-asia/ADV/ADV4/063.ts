import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Loudred",
         ja: "大声で",
         fr: "Loudred",
         de: "Laut",
         es: "Ruidoso",
         it: "Loudred",
         pt: "Alto",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [294],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Cracking Voice",
            ja: "ひび割れの声",
            fr: "Voix craqueante",
            de: "Knackende Stimme",
            es: "Voz agrietada",
            it: "Cracking Voice",
            pt: "Voz rachada",
          },
          effect: {
            en: "Flip a coin. If heads, each Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンはそれぞれ混乱しています。",
            fr: "Retourner une pièce. Si les têtes, chaque Pokémon défendant est maintenant confus.",
            de: "Eine Münze drehen. Bei Köpfen ist jedes verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, cada Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, ogni Pokemon in difesa è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, cada Pokemon defensor agora está confuso.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Light Punch",
            ja: "軽いパンチ",
            fr: "Coup de poing",
            de: "Leichter Schlag",
            es: "Ligero",
            it: "Punch leggero",
            pt: "Punchado leve",
          },
          damage: 40,
        },
      ],

      retreat: 2,

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
