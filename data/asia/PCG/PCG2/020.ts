import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "航海",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [119],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "トリプル違反",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンの3つを選択してください。この攻撃は、それらのポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "レンド",
			},
			effect: {
				'ja-jp': "防御するポケモンがすでにダメージカウンターを持っている場合、この攻撃は30のダメージと20のダメージを与えます。",
			},
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
