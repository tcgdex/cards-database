import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
	},
	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		113,
	],
	hp: 130,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
				fr: "Damoclès",
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s’inflige 20 dégâts.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
