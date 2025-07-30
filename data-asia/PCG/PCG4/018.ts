import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "猟犬",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [229],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "寂しい",
                                                                      },
          effect: {
                        ja: "相手よりもPokã©Monが少ない限り、対戦相手は手からトレーナーカード（サポーターカードを除く）をプレイできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "タイトな顎",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
                        ja: "火炎放射器",
                                                                      },
          effect: {
                        ja: "猟犬に取り付けられた火エネルギーを捨てます。",
                                                                      },
          damage: 70,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
