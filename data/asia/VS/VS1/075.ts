import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウィルのxatu",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [178],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ペック",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				'ja-jp': "痛みアンプ",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンのそれぞれにダメージカウンターを置いてください。",
			},
		},
	],

	retreat: 1,

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
