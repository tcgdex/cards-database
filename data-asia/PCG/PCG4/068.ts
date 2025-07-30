import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "Poliwrath",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [62],
      hp: 120,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "スパイラルスワール",
                                                                      },
          effect: {
                        ja: "Poliwrathがあなたのアクティブなポカモンであり、相手の攻撃によるダメージによってノックアウトされた場合、攻撃するポケモンは今混乱しています。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "ビートダウン",
                                                                      },
          effect: {
                        ja: "防御ポケモンが暗闇のポケモンであるか、その名前が暗い場合、この攻撃は40ダメージと30のダメージを与えます。",
                                                                      },
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
                        ja: "ハイパースプラッシュ",
                                                                      },
          effect: {
                        ja: "防御ポケモンがステージ2の進化したポケモンである場合、この攻撃は60ダメージに加えて30ダメージを与えます。",
                                                                      },
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
