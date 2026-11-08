import { Card } from "models/database/card"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Poliwrath",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [62],
	hp: 90,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "コークスクリューパンチ",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "提出",
			},
			effect: {
				'ja-jp': "Poliwrathはそれ自体に20のダメージを与えます。",
			},
			damage: 70,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
