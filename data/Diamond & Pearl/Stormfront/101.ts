import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Charmander",
		fr: "Salamèche"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 50,

	types: [
		"Fire",
	],

	evolveFrom: {
		fr: "Salamèche",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
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
				fr: "Flammèche",
			},
			effect: {
				en: "Discard a fire Energy attached to Charmander.",
				fr: "Défaussez une Énergie Fire attachée à Salamèche.",
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

	retreat: 1,

	description: {
		fr: "Depuis sa naissance, une petite flamme brûle au bout de sa queue. Si cette flamme s'éteint, la vie de ce Pokémon s'éteindra elle aussi."
	}
}

export default card
