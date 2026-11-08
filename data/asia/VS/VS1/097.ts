import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ランスのカリザード",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [6],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				'ja-jp': "火炎放射器",
			},
			effect: {
				'ja-jp': "この攻撃を使用するために、ランスのカリザードに取り付けられた1つのファイアエネルギーカードを捨てます。",
			},
			damage: 40,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
