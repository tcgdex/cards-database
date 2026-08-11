import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Meowth（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [52],
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				'ja-jp': "スラッシュ",
			},
			damage: 10,
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				'ja-jp': "給料日",
			},
			effect: {
				'ja-jp': "カードを描きます。",
			},
			damage: 10,
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
