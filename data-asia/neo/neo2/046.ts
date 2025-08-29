import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "セントレット",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [161],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スカウト",
			},
			effect: {
				ja: "相手の手を見てください。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 20,
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
