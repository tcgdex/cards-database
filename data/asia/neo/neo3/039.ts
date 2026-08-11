import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "砂利",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [75],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "地震",
			},
			effect: {
				'ja-jp': "あなた自身のベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 40,
		},
		{
			cost: ["Fighting", "Fighting", "Fighting"],
			name: {
				'ja-jp': "岩の転倒",
			},
			effect: {
				'ja-jp': "抵抗を適用しないでください。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
