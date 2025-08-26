import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "slugma",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [218],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "フレア",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "マグマリング",
			},
			effect: {
				ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
			},
			damage: 20,
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
