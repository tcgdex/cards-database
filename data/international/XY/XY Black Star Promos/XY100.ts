import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Mewtwo",
		'fr-fr': "Mewtwo",
	},

	illustrator: "match",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psy Bolt",
				'fr-fr': "Choc Mental"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
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

	retreat: 2,

	description: {
		'en-us': "A Pokémon created by recombining Mew's genes. It's said to have the most savage heart among Pokémon.",
	},

	thirdParty: {
		cardmarket: 289557
	}
}

export default card
