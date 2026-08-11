import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
		'es-es': "Zorua",
		'it-it': "Zorua",
		'pt-br': "Zorua",
		'de-de': "Zorua"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		570,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Ascension",
				'fr-fr': "Ascension"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon) Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
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
		'en-us': "It changes into the forms of others to surprise them. Apparently, it often transforms into a silent child.",
	},

	thirdParty: {
		cardmarket: 280397,
		tcgplayer: 90761
	}
}

export default card
