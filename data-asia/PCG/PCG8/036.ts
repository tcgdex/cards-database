import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "Grumpig",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [326],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "厚い脂肪",
                                                                      },
          effect: {
                        ja: "FirePokã©MonとWaterPokã©Monからの攻撃によるGrumpigに与えられた損害は、30減少します（脱力感と抵抗を適用した後）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
                        ja: "円形のステップ",
                                                                      },
          effect: {
                        ja: "Grumpigを除く、Pokemonの数（あなたと対戦相手の両方）の数を10回ダメージします。",
                                                                      },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
