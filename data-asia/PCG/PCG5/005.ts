import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "Muk",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [89],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "悪臭",
                                                                      },
          effect: {
                        ja: "MUKがあなたのアクティブなポカモンである限り、各プレイヤーのPokã©MonはPokã©Powersを使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
                        ja: "毒リング",
                                                                      },
          effect: {
                        ja: "防御ポケモンは現在中毒になっています。防御するポケモンは、相手の次のターン中に退却することはできません。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
                        ja: "スラッジトス",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 2,

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
