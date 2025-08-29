import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "プライスのarticuno",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [144],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Water", "Water"],
			name: {
				ja: "氷の風",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
