import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	dexId: [25],

	name: {
		'fr-fr': "Pikachu",
		'en-us': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Kouki Saitou",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'fr-fr': "Énergisant",
				'en-us': "Energize",
			},
			effect: {
				'fr-fr': "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
				'en-us': "Attach a Lightning Energy card from your discard pile to this Pokémon."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'fr-fr': "Tonnerre",
				'en-us': "Thunderbolt",
			},
			effect: {
				'en-us': "Discard all Energy attached to this Pokémon.",
				'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This is an extremely rare Pikachu card. You're very lucky to have found it!",
	},

	thirdParty: {
		cardmarket: 279853,
		tcgplayer: 88101
	}
}

export default card
