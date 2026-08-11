import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Bayleef（デルタ種）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [153],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "毒パウダー",
			},
			effect: {
				'ja-jp': "防御ポケモンは現在中毒になっています。",
			},
			damage: 20,
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
