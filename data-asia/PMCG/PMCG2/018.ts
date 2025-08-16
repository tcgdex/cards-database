import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Pinsir",
         ja: "ピンシル",
         fr: "Pinsir",
         de: "Pinsir",
         es: "Pusir",
         it: "Pinir",
         pt: "Pinsir",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [127],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Irongrip",
            ja: "Irongrip",
            fr: "Irongrip",
            de: "IRONGRIP",
            es: "Irongrip",
            it: "Irongrip",
            pt: "Irongrip",
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
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Colorless", "Colorless"],
          name: {
            en: "Guillotine",
            ja: "ギロチン",
            fr: "Guillotine",
            de: "Guillotine",
            es: "Guillotina",
            it: "Ghigliottina",
            pt: "Guilhotina",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
