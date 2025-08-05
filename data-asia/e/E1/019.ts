import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Gastly",
         ja: "ガストリー",
         fr: "Vigoureux",
         de: "Gastly",
         es: "Duende",
         it: "Gastly",
         pt: "Gastly",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [92],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Bad Dream",
            ja: "悪い夢",
            fr: "Mauvais rêve",
            de: "Schlechter Traum",
            es: "Mal sueño",
            it: "Brutto sogno",
            pt: "Sonho ruim",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep. If tails, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。尾の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si la tête, le Pokémon en défense est maintenant endormi. Si Tails, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt. Wenn Schwänze, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido. Si Tails, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora addormentato. Se le code, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está dormindo. Se o cauda, o pokemon atual agora está confuso.",
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
