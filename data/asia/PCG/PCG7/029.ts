import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "exeggcute（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [102],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ロールアウトする",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "ペブルスロー",
			},
			effect: {
				'ja-jp': "対戦相手のベンチポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
