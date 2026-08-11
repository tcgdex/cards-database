import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Curiosity",
				'fr-fr': "Curiosité",
			},
			effect: {
				'en-us': "Your opponent reveals their hand.",
				'fr-fr': "Votre adversaire dévoile sa main.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spin Tackle",
				'fr-fr': "Charge Tournoyante",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 10 dégâts.",
			},
			damage: 30,

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
		'en-us': "The question of why only Eevee has such unstable genes has still not been solved.",
	},

	thirdParty: {
		cardmarket: 394587,
		tcgplayer: 197693
	}
}

export default card
