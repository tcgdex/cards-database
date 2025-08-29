import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "swinub",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [220],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "降ろす",
			},
			effect: {
				ja: "Swinubはそれ自体に10ダメージを与えます。",
			},
			damage: 30,
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
