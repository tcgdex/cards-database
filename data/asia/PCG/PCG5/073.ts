import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アロン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [304],
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "自己充電",
			},
			effect: {
				'ja-jp': "手からアロンに金属エネルギーカードを取り付けます。",
			},
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				'ja-jp': "ヘッドバット",
			},
			damage: 20,
		},
	],

	retreat: 2,

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
