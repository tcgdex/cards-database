import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スウラー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [277],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "空中クラッシュ",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）コインをひっくり返します。頭の場合、対戦相手はそのポケモンに添付されている場合、1つのエネルギーカードを破棄します。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ノーシブ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、スウェローはそれ自体に10ダメージを与えます。",
			},
			damage: 40,
		},
	],


	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
