import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "jigglypuff",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [39],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "昼寝",
			},
			effect: {
				ja: "Jigglypuffから1つのダメージカウンターを取り外します。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "子守lulaby",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 10,
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
			stamps: ["1st Edition"],
		},
	],
};

export default card
