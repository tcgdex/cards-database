import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マークロウ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [198],
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				'ja-jp': "邪悪な目",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンを1つ選択します。そのポケモンにダメージカウンターを置きます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ブラインドサイド",
			},
			effect: {
				'ja-jp': "ダメージカウンターがある対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。衰弱と抵抗を適用しないでください。",
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
