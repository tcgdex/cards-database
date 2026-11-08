import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'de-de': "Panzaeron"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [227],

	hp: 80,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Steel Coat",
				'fr-fr': "Manteau d'acier",
				'de-de': "Stahlmantel"
			},
			effect: {
				'en-us': "Search your deck for a Metal Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie  dans votre deck et attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach einer -Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Razor Wing",
				'fr-fr': "Aile tranchante",
				'de-de': "Rasierflügel"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "After nesting in bramble bushes, the wings of its chicks grow hard from scratches by thorns.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89243,
				cardmarket: 279674
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89243,
				cardmarket: 279674
			},
		},
	],

}

export default card
