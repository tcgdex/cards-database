import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "暗がり（デルタ種）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [44],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "よだれ",
			},
			damage: 20,
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "酸",
			},
			effect: {
				'ja-jp': "防御するポケモンは、相手の次のターン中に退却することはできません。",
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
