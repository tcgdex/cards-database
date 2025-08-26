import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "ディグレット",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [50],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "泥の平手打ち",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "砂ピット",
			},
			effect: {
				ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
			},
			damage: 20,
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
