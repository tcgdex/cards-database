import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "ルナトン",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [337],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "ソルシェード",
                                                                      },
          effect: {
                        ja: "Solrockがプレイしている限り、各プレイヤーのFirePokã©Mon（Pokã©Mon-Exを除く）はPokã©Powersを使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "月の指導",
                                                                      },
          effect: {
                        ja: "デッキを検索して、トレーナーカード（サポーターカードを除く）を検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Psychic"],
          name: {
                        ja: "PsyShock",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
                                                                      },
          damage: 10,
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
