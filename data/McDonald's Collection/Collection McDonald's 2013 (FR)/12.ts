import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013 (FR)"

const card: Card = {
	name: {
		fr: "Genesect",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [649],
	hp: 110,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				fr: "Tranche",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				fr: "Techno Buster",
			},
			effect: {
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 80,
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],

	retreat: 1,
}

export default card

