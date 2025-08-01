import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "Typhlosion Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [157],
      hp: 160,
      types: ["Fire"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
                        ja: "火のリング",
                                                                      },
          effect: {
                        ja: "ディフェンディングポケモンは現在燃えており、相手の次のターンの終わりまで退却することはできません。",
                                                                      },
          damage: 40,
        },
        {
          cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"],
          name: {
                        ja: "スプリットブラスト",
                                                                      },
          effect: {
                        ja: "Typhlosion Exに取り付けられた1つのエネルギーカードを廃棄します。対戦相手が1つ以上の防御ポケモンを持っている場合、代わりにそれぞれに50のダメージを与えることができます。",
                                                                      },
          damage: 100,
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
