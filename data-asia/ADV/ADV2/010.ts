import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ゆっくりと",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [346],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "スーパー吸引カップ",
                                                                      },
          effect: {
                        ja: "ゆっくりとあなたのアクティブなポカモンである限り、あなたの相手のポカモンは退却することはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "毒を誘います",
                                                                      },
          effect: {
                        ja: "この効果を使用する前に、防御ポケモンを相手のベンチ付きポケモンの1つで切り替えることができます。防御ポケモンは現在中毒になっています。",
                                                                      },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
                        ja: "スパイラルドレイン",
                                                                      },
          effect: {
                        ja: "2つのダメージカウンターをゆっくりと削除します（1つしかない場合は1を削除します）。",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

export default card
