import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マーシュトンプ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [259],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "雨が降る",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "泥のスプラッシュ",
			},
			effect: {
				'ja-jp': "対戦相手のベンチポケモンの1つに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
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
