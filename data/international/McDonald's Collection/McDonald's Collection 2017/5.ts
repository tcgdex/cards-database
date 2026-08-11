import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		25,
	],
	set: Set,
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
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
				'en-us': "Thudner Wave",
				'fr-fr': "Cage-Éclair",
			},
			effect: {
				'en-us': "Flip a coin, If heads your opponent's active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'fr-fr': "Boule Élek",
			},
			damage: "50",
		},
	],

	illustrator: "kirisAki",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301847,
				tcgplayer: 152685
			}
		}
	]
}

export default card

