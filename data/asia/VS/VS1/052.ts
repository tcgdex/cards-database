import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クレアのキングドラ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [230],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ラム",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				'ja-jp': "急流",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
			},
		},
	],

	retreat: 2,

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
