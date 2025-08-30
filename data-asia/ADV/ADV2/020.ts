import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ルディコロ",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [272],
      hp: 90,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "雨皿",
                                                                      },
          effect: {
                        ja: "ターンの間にいつでも、Ludicoloから1つのダメージカウンターを取り外します。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
                        ja: "ハイドロパンチ",
                                                                      },
          effect: {
                        ja: "Ludicoloに付着した各水エネルギーに対して50のダメージと10のダメージがさらに10件のダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
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

export default card
