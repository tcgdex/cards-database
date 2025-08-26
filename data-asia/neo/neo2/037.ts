import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "Poliwrath",
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
				ja: "コークスクリューパンチ",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "提出",
			},
			effect: {
				ja: "Poliwrathはそれ自体に20のダメージを与えます。",
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
