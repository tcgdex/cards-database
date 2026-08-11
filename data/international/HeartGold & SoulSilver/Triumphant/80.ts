import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool",
		'de-de': "Tentacha"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [72],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Gentle Wrap",
				'fr-fr': "Enveloppe douce",
				'de-de': "Sanfte Umarmung"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 10,

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
		'en-us': "It drifts aimlessly in waves. Very difficult to see in water, it may not be noticed until it stings."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89869,
				cardmarket: 279610
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279610,
				tcgplayer: 89869
			}
		},
	],

}

export default card
