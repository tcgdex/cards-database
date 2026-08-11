import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		23,
	],

	hp: 60,

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
				'en-us': "Wrap",
				'fr-fr': "Ligotage",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 10,

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
		'en-us': "By dislocating its jaw, it can swallow prey larger than itself. After a meal, it curls up and rests.",
	},

	thirdParty: {
		cardmarket: 394722,
		tcgplayer: 197669
	}
}

export default card
