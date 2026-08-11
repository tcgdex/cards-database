import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2015'

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
	hp: 60,
	types: [
		"Lightning",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Whip",
				'fr-fr': "Mimi-Queue",
			},
			effect: {
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				'en-us': "Flip a coin, If heads, the Defending Pokémon can't attack during your opponent's next turn."
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electro Ball",
				'fr-fr': "Boule Élek",
			},
			damage: "30",
		},
	],

	illustrator: "Naoki Saito",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 293322,
				tcgplayer: 110424
			}
		}
	]
}

export default card

