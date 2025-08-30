import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "Wailord ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [321],
      hp: 200,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "超深潜り",
                                                                      },
          effect: {
                        ja: "ベンチ付きポケモンがない場合、この攻撃は何もしません。 Wailord Exから3つのダメージカウンターを削除します。  ベンチ付きポケモンの1つでWailord Exを切り替えます。",
                                                                      },
        },
        {
          cost: ["Water", "Water", "Water", "Colorless"],
          name: {
                        ja: "波の減少",
                                                                      },
          effect: {
                        ja: "Wailord Exのダメージカウンターごとに100ダメージを引いた10のダメージを引いた。",
                                                                      },
        },
      ],

      retreat: 5,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

export default card
