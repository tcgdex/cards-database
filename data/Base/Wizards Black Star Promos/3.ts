import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Mewtwo",
		fr: "Deuxmiaou",
		de: "Mewtu"
	},

	illustrator: "Ken Sugimori",
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
				fr: "Absorption d'énergie",
				de: "Energieaufnahme"
			},
			effect: {
				en: "Choose up to 2 Energy cards from your discard pile and attach them to Mewtwo.",
				fr: "Choisissez jusqu'à 2 cartes Énergie de votre pile de défausse et attachez-les à Deuxmiaou.",
				de: "Wähle bis zu 2 Energiekarten aus Deinem Ablagestapel, und füge sie an Mewtu."
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
				fr: "Brûlepsy",
				de: "Psyburn"
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
	retreat: 2,


	description: {
		en: "Years of genetic experiments resulted in the creation of this never-before-seen violent Pokémon.",
		fr: "Ce Pokémon violent, jamais vu auparavant, est le fruit de nombreuses années d'expériences génétiques.",
		de: "In langjährigen genetischen Experimenten wurde dieses einzigartige und gewalttätige Pokémon erschaffen."
	},

	variants: [
		{
			type: "normal",
			stamp: ["1st-movie-inverted"]
		},
		{
			type: "normal",
			stamp: ["1st-movie"],
			thirdParty: {
				tcgplayer: 87414
			},
		}
	]
}

export default card
