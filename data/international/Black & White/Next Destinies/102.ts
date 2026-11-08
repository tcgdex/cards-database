import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Zoroark",
		'fr-fr': "Zoroark",
		'es-es': "Zoroark",
		'it-it': "Zoroark",
		'pt-br': "Zoroark",
		'de-de': "Zoroark"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		571,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Nasty Plot",
				'fr-fr': "Machination",
			},
			effect: {
				'en-us': "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Foul Play",
				'fr-fr': "Tricherie",
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks and use it as this attack.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur et utilisez-la en tant que cette attaque.",
			},

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
		'en-us': "This extremely rare Pokémon is a different color than usual. It is very hard to find.",
	},

	thirdParty: {
		cardmarket: 280327,
		tcgplayer: 90753
	}
}

export default card
