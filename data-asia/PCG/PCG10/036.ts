import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Baltoy",
         ja: "バルトイ",
         fr: "Baltoy",
         de: "Baltoy",
         es: "Baltojo",
         it: "Baltoy",
         pt: "Baltoy",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [343],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
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
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Spinning Attack",
            ja: "スピニング攻撃",
            fr: "Attaque tournante",
            de: "Spinnenangriff",
            es: "Ataque giratorio",
            it: "Attacco rotante",
            pt: "Ataque giratório",
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
