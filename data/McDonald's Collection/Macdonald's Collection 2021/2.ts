import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Chikorita",
		fr: "Germignon"
	},

	illustrator: "sowsow",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		152,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mini Drain",
				fr: "Mini-Assèchement"
			},
			effect: {
				en: "Heal 10 damage from this Pokémon.",
				fr: "Soignez 10 dégâts à ce Pokémon."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],

	retreat: 1,

	description: {
		en: "It uses the leaf on its head to determine the temperature and humidity. It loves to sunbathe."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
