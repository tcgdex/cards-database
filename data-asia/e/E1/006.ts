import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Vulpix",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "テールシェイク",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "フレア",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
