import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "オクリリー",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [224],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "スーパー吸引カップ",
                                                                      },
          effect: {
                        ja: "オクタイラがあなたのアクティブなポカモンである限り、あなたの相手のポカモンは退却することはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "立っている",
                                                                      },
          effect: {
                        ja: "オクリリーに取り付けられたエネルギーカードを廃棄します。次のターン中に、八典のパルスブラスト攻撃のベースダメージは120です。",
                                                                      },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
                        ja: "パルスブラスト",
                                                                      },
          damage: 30,
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
