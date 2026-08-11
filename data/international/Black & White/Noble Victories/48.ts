import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		568,
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
				'en-us': "Garbage Collection",
				'fr-fr': "Fouille Poubelle",
			},
			effect: {
				'en-us': "Put a card from your discard pile on top of your deck.",
				'fr-fr': "Mettez n'importe quelle carte de votre pile de défausse sur le dessus de votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Bomb",
				'fr-fr': "Bomb-Beurk",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The combination of garbage bags and industrial waste caused the chemical reaction that created this Pokémon.",
	},

	thirdParty: {
		cardmarket: 280171,
		tcgplayer: 90065
	}
}

export default card
