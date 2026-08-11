import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホロンのマグナイト",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [81],
	hp: 40,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Metal"],
			name: {
				'ja-jp': "線形攻撃",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
