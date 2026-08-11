import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		285,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Worry Seed",
				'fr-fr': "Soucigraine",
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "I wonder if I would look a little cuter with a beautiful flower?",
	},

	thirdParty: {
		cardmarket: 288511
	}
}

export default card
