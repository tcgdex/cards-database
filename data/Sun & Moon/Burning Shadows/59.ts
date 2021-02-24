import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Espurr",
		fr: "Psystigri",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		677,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Perplexing Eyes",
				fr: "Regard Déroutant",
			},
			effect: {
				en: "The Defending Pokémon's Weakness is now Psychic until the end of your next turn. (The amount of Weakness doesn't change.)",
				fr: "La Faiblesse du Pokémon Défenseur est maintenant de type Psychic jusqu’à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
