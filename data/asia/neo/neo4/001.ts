import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヴェノナト",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [48],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "gnaw",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "毒パウダー",
			},
			effect: {
				'ja-jp': "防御ポケモンは現在中毒になっています。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
