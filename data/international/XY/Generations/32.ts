import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 50,

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
				'en-us': "Spacing Out",
				'fr-fr': "Trou d'Mémoire",
			},
			effect: {
				'en-us': "Flip a coin. If heads, heal 10 damage from this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, soignez 10 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Scavenge",
				'fr-fr': "Farfouille",
			},
			effect: {
				'en-us': "Discard a Psychic Energy attached to this Pokémon. If you do, put an Item card from your discard pile into your hand.",
				'fr-fr': "Défaussez une Énergie Psychic attachée à ce Pokémon. Dans ce cas, prenez une carte Objet dans votre pile de défausse et ajoutez-la à votre main.",
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

	description: {
		'en-us': "It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail.",
	},

	thirdParty: {
		cardmarket: 288470,
		tcgplayer: 113690
	}
}

export default card
