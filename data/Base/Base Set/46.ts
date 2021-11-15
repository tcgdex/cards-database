import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Charmander",
		fr: "Salamèche"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
				fr: "Flammèche"
			},
			effect: {
				en: "Discard 1 Energy card attached to Charmander in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Salamèche pour pouvoir utiliser cette attaque."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Il préfère les endroits chauds. En cas de pluie, de la vapeur se forme autour de sa queue."
	}
}

export default card
