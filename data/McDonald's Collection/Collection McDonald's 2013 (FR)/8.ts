import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013 (FR)"

const card: Card = {
	name: {
		fr: "Pyroli",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [136],
	hp: 90,
	types: ["Fire"],

	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				fr: "Flammèche",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				fr: "Déflagration",
			},
			effect: {
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 80,
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],

	retreat: 2,
}

export default card

