import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "マグマー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [126],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "テールスラップ",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "マグマパンチ",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
