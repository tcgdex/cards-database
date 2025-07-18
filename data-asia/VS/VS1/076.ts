import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Will's Espeon",
         ja: "ウィルのエスペオン",
         fr: "Espeon de Will",
         de: "Wills Espeon",
         es: "Espón de Will",
         it: "Will's Expeon",
         pt: "Will's Espeon",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [196],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tail Slap",
            ja: "テールスラップ",
            fr: "Gifle",
            de: "Schwanzschlag",
            es: "Bofetada",
            it: "Slap di coda",
            pt: "Tail Slap",
          },
          damage: 10,
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Psybeam",
            ja: "PSYBEAM",
            fr: "Psybeam",
            de: "Psybeam",
            es: "Psíquico",
            it: "Psybeam",
            pt: "Psybeam",
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
          damage: 30,
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
