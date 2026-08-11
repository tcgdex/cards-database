import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Simipour",
		'fr-fr': "Flotoutan",
		'es-es': "Simipour",
		'it-it': "Simipour",
		'pt-br': "Simipour",
		'de-de': "Sodachita"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		516,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Panpour",
		'fr-fr': "Flotajou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collecte",
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'fr-fr': "Piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Stadium Wave",
				'fr-fr': "Innondation du Stade",
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 30 more damage and the Defending Pokémon is now Asleep.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires et le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The tuft on its head holds water. When the level runs low, it replenishes the tuft by siphoning up water with its tail.",
	},

	thirdParty: {
		cardmarket: 280254,
		tcgplayer: 89219
	}
}

export default card
