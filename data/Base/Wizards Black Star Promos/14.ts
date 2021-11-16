import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Mewtwo",
		fr: "Mewtwo"
	},

	illustrator: "Benimaru Itoh",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Absorption",
				fr: "Absorption d'Énergie"
			},
			effect: {
				en: "Choose up to 2 Energy cards from your discard pile and attach them to Mewtwo.",
				fr: "Choisissez jusqu'à 2 cartes Énergie de votre pile de défausse et attachez-les à Mewtwo."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyburn",
				fr: "Brûlepsy"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ce Pokémon violent, jamais vu auparavant, est le fruit de nombreuses années d'expériences génétiques."
	}
}

export default card
